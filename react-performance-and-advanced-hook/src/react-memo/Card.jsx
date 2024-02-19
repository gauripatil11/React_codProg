import{memo}from 'react'

function Card({state1}) {
    console.log('card');
  return (
    <div style={{
        height:'100px',
        width:'200px',
        margin:'1rem',
        padding:'1rem',
        backgroundColor : state1 ? 'green':'red'
    }}
    >Card</div>
  )
}

export default memo(Card)