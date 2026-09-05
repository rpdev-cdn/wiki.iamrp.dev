import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const EcosystemNav: QuartzComponent = () => {
  return (
    <nav class="sovereign-ecosystem-bar">
      <div class="ecosystem-inner">
        <div class="ecosystem-brand">
          <a href="https://iamrp.dev" class="eco-brand-link">
            <span class="brand-pulse">●</span>
            <span class="brand-name">RPDEV</span>
            <span class="brand-sep">/</span>
            <span class="brand-sub">ECOSYSTEM</span>
          </a>
        </div>
        <div class="ecosystem-links">
          <a href="https://iamrp.dev" class="eco-link" data-site="iamrp.dev">Portfolio</a>
          <a href="https://launcher.iamrp.dev" class="eco-link" data-site="launcher.iamrp.dev">Launcher</a>
          <a href="https://feed.launcher.iamrp.dev" class="eco-link" data-site="feed.launcher.iamrp.dev">Feed</a>
          <a href="https://repo.launcher.iamrp.dev" class="eco-link" data-site="repo.launcher.iamrp.dev">Repository</a>
          <a href="https://wiki.iamrp.dev" class="eco-link" data-site="wiki.iamrp.dev">Wiki</a>
          <a href="https://cdn.iamrp.dev" class="eco-link" data-site="cdn.iamrp.dev">CDN</a>
          <a href="https://github.com/RPDevs-Builds" class="eco-link eco-gh" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>
    </nav>
  )
}

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <>
      <EcosystemNav />
      <div id="quartz-body">{children}</div>
    </>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
