import React from "react";

const Create = () => {
  return (
    <div className="container my-2">
      <h2 className="text-center"> Enter the Data</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
