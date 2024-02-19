
import InputForm from './InputForm'
import ExtraComponent from './ExtraComponent'

function BasicApp() {
    console.log('basic');
   
  return (
    <>
    <h1>Basic App</h1>
    <InputForm><ExtraComponent/></InputForm>
    
    </>
  )
}

export default BasicApp