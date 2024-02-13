import React from "react";

const Read = () => {
  return (
    <div className="container my-2">
      <h2 className="text-center">All Data</h2>
      <div className="row">
        <div className="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Email</h6>
              <p class="text-muted">Age</p>
              <a href="#" class="card-link">
                Delete
              </a>
              <a href="#" class="card-link">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
