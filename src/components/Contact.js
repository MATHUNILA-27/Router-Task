function Contact() {
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">Contact Us</h2>

        {/* Contact Form */}
        <form className="mb-5">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* Google Map */}
        <div className="ratio ratio-21x9">
          <iframe
            src="https://www.google.com/maps?q=Coimbatore%20Tamil%20Nadu&output=embed"
            title="map"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
