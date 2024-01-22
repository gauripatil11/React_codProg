import Greeting from "../components/Greeting"
import Hello from "../components/hello"
function App() {

  return (
    <>
      {/* component first letter shound be in capital form  */}
      <Hello/>  
      <Greeting/>
    </>
  )
}

export default App
// export{App} <--- another way to export component

// if you are using [export default app], while importing you can change the name 
// if you are using [export {app}], while importing you can't change the name
