import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import Comments from "../Comments";

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
      <article class="popover-hint">
          <h1>404</h1>
          <p>{i18n(cfg.locale).pages.error.notFound}</p>
          <p> It looks like I haven't written this page yet. If you are interested in this topic, please let me know by
              leaving a comment!</p>
          <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
          <script src="https://utteranc.es/client.js"
                  repo="klaas-be/DigitalGarden"
                  issue-term="pathname"
                  label="Comment"
                  theme="github-dark"
                  crossOrigin="anonymous"
                  async>
          </script>
      </article>

  )
}

//<Comments></Comments>
export default (() => NotFound) satisfies QuartzComponentConstructor
