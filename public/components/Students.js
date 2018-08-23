function Students(props){
    let date = "1/1/2018";
    let students = props.students;//Same as *let students = props.students;*
    let studentComponents = [];


    for(let i =0 ; i < students.length; i++) {
        studentComponents.push(<Student student={students[i]} date = {date} />);
    }

    return (
        <div>
            {studentComponents}
        </div>
    )
}