import React, { useState } from "react";

const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
const[formdata,setFormData] = useState({
    name:"",
    email: ""
})
const validateForm = ()=>{
    if(!formdata.name || formdata.name.length <= 0){
        return false;
    }
}
const handleChange =(e)=>{
const{name,value} = e.target;
setFormData((prevData) => ({
  ...prevData,
  [name]: value,
}));
}
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (validateForm() === false) {
      alert("Invalid Inputs!!");
      return;
    }
    console.log(formdata);
  };
  return (
    <>
      <div>Form</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
