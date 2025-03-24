import { Suspense } from 'react'
import './App.css'
import Betmans from './batmnes'
import BtnClickHandel from './btn'
import Counter from './counter'
import LoadData from './fatch'
import DataInLoad from './user'
import LoadDataIn from './looktry'

// const urlFatchUser = fetch('https://jsonplaceholder.typicode.com/albums')
// .then(res => res.json())

const url=fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=> res.json())



function App() {


  return (
    <>

      <h1>Vite + React</h1>
      <Suspense fallback={<h1>i am coming.....</h1>}>
        <LoadDataIn url={url} ></LoadDataIn>
      </Suspense>
      {/* <Suspense fallback={<h2>loading...</h2>}>
        <DataInLoad urlFatchUser={urlFatchUser} ></DataInLoad>
      </Suspense> */}
      <BtnClickHandel></BtnClickHandel>
      <Counter></Counter>
      <Betmans></Betmans>
      <LoadData></LoadData>
    </>
  )
}

export default App
