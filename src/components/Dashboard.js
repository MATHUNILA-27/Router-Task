function Dashboard() {
  return (
    <div className="container my-5">
      <h2 className="mb-3">Learning Modules</h2>
      <p className="text-muted">
        Explore the frontend topics covered in our internship program.
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">HTML Basics</h5>
              <p className="card-text">
                Learn structure, elements, forms, tables and semantic HTML.
              </p>
              <span className="badge bg-success">Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-primary mt-4">
        Start learning by exploring each module step by step 🚀
      </div>
    </div>
  );
}

export default Dashboard;
