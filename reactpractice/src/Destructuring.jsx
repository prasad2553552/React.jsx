function Destructuring(){
    const student = {
        name:"Ramprasad",
        course:"Python",
        age:27
    };
    const {name, course, age} = student;
    return(
        <div>
            <h1>Destructuring</h1>
            <p>Name: {name}</p>
            <p>Course:{course}</p>
            <p>Age:{age}</p>
        </div>
    );
};
export default Destructuring