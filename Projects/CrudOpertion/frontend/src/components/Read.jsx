import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  //use state using for the store
  const [data, setData] = useState();
  const [error, setError] = useState();
  //fetch the data
  async function getData() {
    const response = await fetch("http://localhost:4000/api/user");
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  }
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/api/user/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      setError("Deleted successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  };
  //use effects working on every render they fetch the data directly and updating dom and timers.
  useEffect(() => {
    getData();
  }, []);
  //using[] they call only first time render
  console.log(data);

  return (
    <div className="container my-2">
      {error && <div class="alert alert-danger">{error}</div>}
      <h2 className="text-center">All Data</h2>
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.email}
                </h6>
                <p className="text-muted">{ele.age}</p>
                <a
                  href="#"
                  className="card-link"
                  onClick={() => handleDelete(ele._id)}
                >
                  Delete
                </a>
                <Link to={`/${ele._id}`} className="card-link">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
