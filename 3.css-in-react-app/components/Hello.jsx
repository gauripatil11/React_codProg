// 1 >>
// importing css file
import './Hello.css'

// 2>>
// creating object and then pass it into style attribute

// const cssStyles = {
//     color : 'black',
//     fontSize : '4rem',
//     textAlign : 'center'
// }

function Hello() {
  return (
    // 1>>  
    // <h1 className='bg'>Hello World!</h1>

    // 2>>
    // <h1 style={cssStyles}>Hello World!</h1>

    // 3>> 
    <h1 style={{
        color : 'lightblue',
        fontSize : '4rem',
        textAlign : 'center'
    }}>Hello World!</h1>

    //{ first curly braces to enter in JS worlds { second one is for styling(object)  }  }


  )
}

export default Hello