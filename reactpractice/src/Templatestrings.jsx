function Templatestring(){
    const name = "Ramprasad";
    const course = "React JS";
    const message = `Hello ${name}, welcome to ${course}`;
    return(
        <div>
            <h1>Template Strings</h1>
            <p>{message}</p>
        </div>
    )
}
export default Templatestring;