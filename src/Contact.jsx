import React, { useState } from 'react';
import './App.css';

const Contact = () => {
  const [data,setData] = useState({
    fname:'',
    contact:'',
    email:'',
    message:'',
  
  });
  
  const InputEvent = (event) => {
    const {name,value} = event.target;
    setData((preVal) => {
       return {
         ...preVal,
         [name] : value,
       }
    })
  }
   const formSubmit = (e) =>{
     e.preventDefault();
     alert(`My name is ${data.fname}, My contact number is ${data.contact}, My email id is ${data.email} and i want to say ${data.message}.` );
    }
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label
                className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={data.fname}
                onChange={InputEvent}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input
                type="number"
                className="form-control"
                name="contact"
                value={data.contact}
                onChange={InputEvent}
                placeholder="Enter Your Contact Number" />
            </div>
            <div className="mb-3">
              <label  className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                value={data.message}
                onChange={InputEvent}
                placeholder="Write Something...."
                rows="3"></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-outline-primary mb-3">Submit Form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
