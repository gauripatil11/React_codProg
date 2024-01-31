import React from "react";

function User({id, name, email, website}) {
  return (
    <div style={{
        padding:'1rem',
        margin:'1rem',
        backgroundColor:'lightblue',
        textAlign:"center"
    }}>
      <h4>id : {id}</h4>
      <h4>name : {name}</h4>
      <h4>email : {email}</h4>
      <h4>website : {website}</h4>
    </div>
  );
}

export default User;
