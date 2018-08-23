function Student(props){
    return (
      <div>
       <h1>{props.student.name}</h1>
       <h1>{props.student.type}</h1>
       <h2>{props.student.phone}</h2>
       <h1>{props.student.address}</h1>
       <img src={props.student.picture} />
       <div>{props.date}</div>
     </div>
    )
}
 