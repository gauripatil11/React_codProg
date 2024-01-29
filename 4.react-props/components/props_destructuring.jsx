
function Hello({fName,lName,age,arr,obj}) {
  return (
    <h1>{fName} {lName} {age} {arr[1]} {obj.b}</h1>
  )
}

export default Hello