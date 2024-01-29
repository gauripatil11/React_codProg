import Props from "../components/Props"
import Hello from "../components/props_destructuring"
import Default_props from "../components/Default_props"
import Children_props from "../components/Children_props"
import Render_list from "../components/Render_list"

function App() {
//  const arr = ['a','b']
//  const obj = {a:1,b:2}

const users = [
  {id:1 , fname:'a' , lname:'b'},
  {id:2 , fname:'c' , lname:'d'},
  {id:3 , fname:'e' , lname:'f'},
  {id:4 , fname:'g' , lname:'h'}
]

  return (
    <>
      {/* <Props fname = 'john' lname = 'doe'/>
      <Hello  fName = 'harshit' lName = 'vashisth' age = {21} arr = {arr} obj = {obj}/> */}

      {/* <Default_props fname = 'nikhil' lname = 'mohite'/> */}

      {/* <Children_props>
        <h1>Children_props</h1>
        <h2>Hello</h2>
      </Children_props> */}
      
      {users.map((user,index) => {
        return(
          // <Render_list fname = {user.fname}
          //              lname = {user.lname}/>
          <Render_list {...user} />
        )
      })}
      
    </>
  )
}

export default App
