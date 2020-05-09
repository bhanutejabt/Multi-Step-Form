import React from "react";


const Contact = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Contact </h3>
      <table > 
      <tr>
          <td>Phone</td>
          <td><input type="tel"  name="phone" value={phone} onChange={setForm} /></td> 
      </tr>
      
      <tr>
          <td>E-mail</td>
          <td><input type="email"  name="email" value={email} onChange={setForm} /></td> 
      </tr>
      
      
      <tr>
         <td><button class="prevbtn" onClick={previous}>Previous</button></td>
         <td><button onClick={next}>Next</button></td>
      </tr>
      
      </table>
      
    </div>
  );
};

export default Contact;