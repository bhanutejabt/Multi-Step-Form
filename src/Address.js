import React from "react";

const Address = ({ setForm, formData, navigation }) => {
  const { address, city, state, zip } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Address</h3>

      <table> 
      <tr>
          <td>Address</td>
          <td><input type="text"  name="address" value={address} onChange={setForm} /></td> 
      </tr>
      
      <tr>
          <td>City</td>
          <td><input type="text"  name="city" value={city} onChange={setForm} /></td> 
      </tr>
      
      <tr>
          <td>State</td>
          <td>
          <input type="text"  name="state" value={state} onChange={setForm} />  
          </td> 
      </tr>

      <tr>
          <td>Zip</td>
          <td><input type="text"  name="zip" value={zip} onChange={setForm} /></td> 
      </tr>
      
      <tr>
         <td><button class="prevbtn" onClick={previous}>Previous</button></td>
         <td><button onClick={next}>Next</button></td>
      </tr>      
      
      </table>
    
    </div>
  );
};

export default Address;
