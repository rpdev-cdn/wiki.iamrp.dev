---
title: "Weather Module: Implementation & Open-Meteo Integration"
description: "How the weather module queries Open-Meteo API, parses forecast JSON, and generates FeedCard payloads."
---

# Weather Module: Implementation & Open-Meteo Integration

The Weather module (`plugin_weather`) provides location-aware weather forecasts without API keys, advertising tracking, or data brokering.

---

## 1. Open-Meteo REST Client

```kotlin
// File: modules/weather/src/main/java/iamrp/dev/feed/modules/weather/WeatherProvider.kt

class WeatherProvider(private val httpClient: OkHttpClient) {

    suspend fun getForecast(latitude: Double, longitude: Double): WeatherPayload = 
        withContext(Dispatchers.IO) {
            val url = "https://api.open-meteo.com/v1/forecast?" +
                "latitude=$latitude&longitude=$longitude" +
                "&current_weather=true&hourly=temperature_2m,precipitation_probability"

            val request = Request.Builder().url(url).build()
            val response = httpClient.newCall(request).execute()
            val json = JSONObject(response.body?.string() ?: "{}")
            
            val current = json.getJSONObject("current_weather")
            val temp = current.getDouble("temperature")
            val weatherCode = current.getInt("weathercode")
            
            WeatherPayload(
                temperature = "${temp.roundToInt()}°C",
                condition = mapWmoCodeToCondition(weatherCode),
                wmoCode = weatherCode
            )
        }
}
```

---

## 2. Card Payload Serialization

The provider generates a compliant `card-v1` JSON structure delivered to the Feed:

```json
{
  "$schema": "https://cdn.iamrp.dev/feed/schemas/card-v1.schema.json",
  "cardId": "weather_daily",
  "moduleId": "plugin_weather",
  "title": "Weather",
  "timestamp": 1788639200,
  "layout": "weather_summary",
  "data": {
    "temperature": "22°C",
    "condition": "Partly Cloudy",
    "high": "25°C",
    "low": "17°C",
    "precipitationChance": "10%"
  }
}
```
