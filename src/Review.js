import React from "react";

const Review = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email
  } = formData;
  const { go } = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>

      <table>
        <tr>
          <th>Name</th>
          <th><button onClick={() => go("names")}>Edit</button></th>
        </tr>

        <tr>
          <td>First name: </td>
          <td>{`${firstName}`}</td>
        </tr>

        <tr>
          <td>Last Name: </td>
          <td>{`${lastName}`}</td>
        </tr>
        
        <tr>
          <td>Nick Name:</td>
          <td>{`${nickName}`}</td>
        </tr>


        <tr>
          <th> Address</th>
          <th><button onClick={() => go("address")}>Edit</button></th>
        </tr>

        <tr>
          <td>Address:</td>
          <td>{`${address}`}</td>
        </tr>

        <tr>
          <td>City:</td>
          <td>{`${city}`}</td>
        </tr>

        <tr>
          <td>State:</td>
          <td>{`${state}`}</td>
        </tr>

        <tr>
          <td>ZIP:</td>
          <td>{`${zip}`}</td>
        </tr>


        <tr>
          <th> Contact</th>
          <th><button onClick={() => go("contact")}>Edit</button></th>
        </tr>

        
        <tr>
          <td>Phone:</td>
          <td>{`${phone}`}</td>
        </tr>

        <tr>
          <td>E-mail:</td>
          <td>{`${email}`}</td>
        </tr>


        <tr><button onClick={() => go("submit")}>Submit</button></tr>
        
      </table>
      
    </div>
  );
};

export default Review;
