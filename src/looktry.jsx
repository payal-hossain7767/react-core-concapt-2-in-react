import { use } from "react"

export default function LoadDataIn({url}){
    const dataOnTimeLoad =use(url)
    return(
        <div>
            <h1>wellcome player :{dataOnTimeLoad.length}</h1>
        </div>
    )
}