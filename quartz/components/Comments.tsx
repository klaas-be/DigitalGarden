import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
interface Options {
    
}

const defaultOptions: Options = {
}

export default ((userOpts?: Options) => {
    const opts = { ...defaultOptions, ...userOpts }
    function Comments(props: QuartzComponentProps) {
        return <script src="https://utteranc.es/client.js"
                       repo="klaas-be/DigitalGarden"
                       issue-term="pathname"
                       label="Comment"
                       theme="github-dark"
                       crossOrigin="anonymous"
                       async>
        </script>
    }
    return Comments
}) satisfies QuartzComponentConstructor