export default function LoadData(){
    const loadfatchData=async()=>{
     const url=`https://jsonplaceholder.typicode.com/users`
     const res=await fetch(url)
     const data= await res.json()
     console.log(data)
    }
    return(
        <div className="btn">
            <div>
                <h1>Users: </h1>
            </div>
            <button onClick={loadfatchData}>oooooooo</button>
        </div>
    )
}