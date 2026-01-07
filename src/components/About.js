import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container my-5">
      {/* Breadcrumb */}
      <nav className="mb-3">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
        <span className="text-muted"> / About</span>
      </nav>

      <h2>About Our Internship Program</h2>
      <p className="text-muted">
        This page demonstrates how Bootstrap components can be used to build
        structured and responsive layouts.
      </p>

      {/* Info Cards */}
      <div className="row my-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h5>Frontend Focus</h5>
            <p className="mb-0">
              Interns learn HTML, Bootstrap, responsiveness and UI components.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <h5>Hands-on Learning</h5>
            <p className="mb-0">
              Practical approach with real UI layouts and components.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <h5 className="mt-5">Frequently Asked Questions</h5>
      <div className="accordion mt-2" id="faq">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#q1"
            >
              Do we write custom CSS?
            </button>
          </h2>

          <div id="q1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              No. We use only Bootstrap utility classes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
