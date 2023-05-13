import React from 'react';
import Container from 'react-bootstrap/Container';
function Form() {
  return (
    <form>
      <Container>
        <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input type="Name" className="form-control" id="exampleInputId" aria-describedby="emailHelp" placeholder="Enter Field Name" />
      </div>
       <div className="form-group">
        <label htmlFor="exampleInputName">Designation</label>
        <input type="Designation" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Your Designation" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputLocation">Location</label>
        <input type="locality" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Location" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputSalary">Salary</label>
        <input type="salary" className="form-control" id="exampleInputSalary" placeholder="Enter Your Salary" />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </Container>
    </form>
  );
}

export default Form;