import React from 'react'
import './bg.css'
import './Ternaryop.css'
import styles from './greeting.module.css'

function Ternaryop() {
    // 1>> 
    // const isDarkMode = true;

    // 2>>
    // const isSansSerif = true;

    // 3>>

  return (
    // 1>> classname
    // <h1 className= {isDarkMode?'bg':null}>Ternary Operator</h1>

    // 2>> styles
    // <h1 style={{
    //     fontFamily : isSansSerif? 'sans-serif' : "",
    //     fontSize : '4rem',
    //     textAlign : 'center'
    // }}>Sans - Serif</h1>

    //3
    // <h1 className={`bg text`}>Two Classes</h1>

    //4 
    // <h1 className='bg'>css module</h1>
    <h1 className={styles.bg}>css module</h1>
  )
}

export default Ternaryop