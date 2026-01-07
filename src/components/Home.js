import React from "react";

function Home() {
  return (
    <>
      {/* ===== Carousel START ===== */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://placehold.co/1400x750"
              className="d-block w-100"
              alt="BIT campus environment"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Best College to Learn</h5>
              <p>BIT provides a peaceful environment for learning</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://placehold.co/1400x750"
              className="d-block w-100"
              alt="Placement achievements"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>100% Placement Records</h5>
              <p>Students placed in top MNC companies</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://placehold.co/1400x750"
              className="d-block w-100"
              alt="Sports achievements"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sports Excellence</h5>
              <p>Gold and Silver medals in national events</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* ===== Carousel END ===== */}

      {/* Alert */}
      <div className="alert alert-info text-center rounded-0">
        BIT Students got 1st place in{" "}
        <span className="badge bg-success">Smart India Hackathon</span>
      </div>

      {/* Cards Section */}
      <div className="container my-5">
        <h3 className="text-center">What Interns Will Learn</h3>
        <p className="text-center text-muted">
          Core Frontend Concepts Using Bootstrap & React
        </p>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x200"
                className="card-img-top"
                alt="Bootstrap grid system"
              />
              <div className="card-body">
                <h5 className="card-title">Responsive Grid</h5>
                <p className="card-text">
                  Learn how layouts adapt across devices.
                </p>
                <button className="btn btn-primary btn-sm">Explore</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x200"
                className="card-img-top"
                alt="Bootstrap components"
              />
              <div className="card-body">
                <h5 className="card-title">Bootstrap Components</h5>
                <p className="card-text">
                  Cards, navbar, alerts, buttons & more.
                </p>
                <button className="btn btn-primary btn-sm">Explore</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x200"
                className="card-img-top"
                alt="Forms and utilities"
              />
              <div className="card-body">
                <h5 className="card-title">Forms & Utilities</h5>
                <p className="card-text">
                  Spacing, alignment and helper classes.
                </p>
                <button className="btn btn-primary btn-sm">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
