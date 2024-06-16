import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import Comments from "../Comments";

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  
  const comments = <script src="https://utteranc.es/client.js"
                           repo="klaas-be/DigitalGarden"
                           issue-term="pathname"
                           label="Comment"
                           theme="github-dark"
                           crossOrigin="anonymous"
                           async>
  </script>
  
  const commentsComponent = <Comments></Comments>
  
  
  return <article class={classString}> {content} {comments}<p>
  </p></article>
}

export default (() => Content) satisfies QuartzComponentConstructor
