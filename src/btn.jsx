export default function BtnClickHandel() {
   
    function HandleClick() {
        alert('i m click')
    }
    const handleMeclick2 = () => {
        alert('click')
    }
    const HandleClick4 = (num, num2) => {
        const newNumber = num + num2;
        const newNumber2 = num * num2;
        alert(newNumber)
        alert(newNumber2)
    }
    return (
        <div>
            {/* <button onClick={HandleClick}>click me</button>
            <button onClick={handleMeclick2}>click me2</button>
            <button onClick={() => HandleClick4(4, 6)}>click me4</button> */}
        </div>
    )
}