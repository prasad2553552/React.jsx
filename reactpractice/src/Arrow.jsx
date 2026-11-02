function ArrowFunction(){
    const greet = () => {
        return(
            "Hello Ramprasad"
        )
    }
    const add = (a,b) => a + b;
    const multiply = (a,b) => a * b;
    return (
        <div>
            <h1>Arrow Function</h1>
            <p>{greet()}</p>
            <p>Addition: {add(10,20)}</p>
            <p>Multiplication: {multiply(10,20)}</p>
        </div>
    )
}
export default ArrowFunction;