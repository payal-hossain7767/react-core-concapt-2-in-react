import { use } from "react"

export default function DataInLoad({urlFatchUser}){
    const massageconten = use(urlFatchUser)
    // console.log(urlFatchUser)
    return(
        <div>
            <h1>user:{massageconten.length}</h1>
    
        </div>
    )
}