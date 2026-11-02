function Spreadoperator(){
    const firstNumber = [10, 20, 30];
    const secondNumber = [40,50];
    const allNumber = [...firstNumber, ...secondNumber]
    return(
        <div>
            <h1>Spread Operator</h1>
            <p>First Array:{firstNumber.join(", ")}</p>
            <p>Second Array:{secondNumber.join(", ")}</p>
            <p>Combined Array: {allNumber.join(", ")}</p>
        </div>
    );
}
export default Spreadoperator;