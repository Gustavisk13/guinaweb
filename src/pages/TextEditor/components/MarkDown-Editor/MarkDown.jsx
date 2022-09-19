import { useState } from "react";
import ReactMarkdown from "react-markdown";
import './styles.css'

const MarkDown = () => {
    const [markDown, setMarkdown] = useState();

return (
    <>
        <div className="container-markdown">
            <textarea value={markDown} onChange={(e) => setMarkdown(e.target.value)} className="textarea"></textarea>
            <div className="output">
                <ReactMarkdown>
                    {markDown}
                </ReactMarkdown>
            </div>
        </div>
    </>
  )
}

export default MarkDown;