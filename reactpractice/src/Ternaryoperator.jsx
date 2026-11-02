function Ternaryoperator(){
    const age = 20;
    return(
        <div>
            <h1>Ternary Operator</h1>
            <p>{age >= 18 ? "you are eligible to vote": "You are not eligible"}</p>
        </div>
    )
}
export default Ternaryoperator;