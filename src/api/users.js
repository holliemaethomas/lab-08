'use strict';

class User {
  constructor(_id, firstName, lastName, email, role) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;  
  }
  function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}
  // above code sourced, see readME for more info. 
role(user, editor, admin) {
  this.role = user;
  this.role = editor;
  this.role = admin; 
  };
};






module.exports = { user };