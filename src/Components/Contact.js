import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-delay="0.1s">
            <div className="contact-item">
              <div className="pb-5">
                <h4 className="text-primary">Contact Us</h4>
                <h1 className="display-4 mb-4">Get In Touch With Us</h1>
                <p className="mb-0">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax &amp; PHP in a few minutes.
                  Just copy and paste the files, add a little code and you're
                  done.{" "}
                  <a
                    className="text-primary fw-bold"
                    href="https://htmlcodex.com/contact-form">
                    Download Now
                  </a>
                  .
                </p>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-4">
                  <i className="fa fa-home text-white" />
                </div>
                <div className="ms-4">
                  <h4>Addresses</h4>
                  <p className="mb-0">123 ranking Street, New York, USA</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-2">
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-4">
                  <h4>Mobile</h4>
                  <p className="mb-0">+2348147122184</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-2">
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-4">
                  <h4>Email</h4>
                  <p className="mb-0">legendosaconsultants@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-delay="0.3s">
            <form>
              <div className="row g-3">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="project"
                      placeholder="Project"
                    />
                    <label htmlFor="project">Your Project</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "160px" }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-12 wow fadeInUp"
            data-wow-delay="0.1s">
            <div className="rounded h-100">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63038.67469777932!2d7.5270206978705865!3d9.071310743755662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0854ca8ae575%3A0x4a782c25038d13b8!2sNyanya%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1715330617837!5m2!1sen!2sng"
                width={1300}
                height={450}
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe> */}
              <div className="d-flex align-items-center justify-content-center bg-primary rounded-bottom p-4">
                <div className="d-flex">
                  <a
                    className="btn btn-dark btn-lg-square rounded-circle me-2"
                    href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-dark btn-lg-square rounded-circle mx-2"
                    href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-dark btn-lg-square rounded-circle mx-2"
                    href>
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-dark btn-lg-square rounded-circle mx-2"
                    href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
