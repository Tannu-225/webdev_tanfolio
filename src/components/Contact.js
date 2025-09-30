import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // 🔹 Service ID
        "your_template_id",    // 🔹 Template ID
        form.current,
        "your_public_key"      // 🔹 Public Key
      )
      .then(
        () => {
          setSent(true);
          setError(false);
          e.target.reset(); // clear form
        },
        () => {
          setError(true);
          setSent(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5 position-relative">
      {/* Background Waves */}
      <div className="wave-bg"></div>
      <div className="wave-bg wave-bg2"></div>

      <div className="container position-relative">
        <h2 className="text-center display-4 fw-bold text-uppercase text-white mb-5 animate__animated animate__fadeInDown">
          Get In Touch
        </h2>

        <div className="row g-4">
          {/* Left Info */}
          <div className="col-lg-5 col-md-12">
            <div className="bg-light rounded-4 shadow-lg p-4 animate__animated animate__fadeInLeft h-100">
              <h4 className="fw-bold text-purple mb-3">Let's Connect</h4>
              <p className="text-muted">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to chat about
                web development, feel free to reach out!
              </p>

              <div className="d-flex align-items-center p-3 mb-3 bg-light rounded-3">
                <i className="fas fa-envelope text-purple fs-5 me-3"></i>
                <span className="fw-bold">dynamox420@gmail.com</span>
              </div>

              <div className="d-flex align-items-center p-3 mb-3 bg-light rounded-3">
                <i className="fas fa-map-marker-alt text-purple fs-5 me-3"></i>
                <span className="fw-bold">Delhi, India</span>
              </div>

              <h6 className="fw-bold text-dark mt-4">Follow Me</h6>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="btn btn-light shadow-sm rounded-circle">
                  <i className="fab fa-github text-purple"></i>
                </a>
                <a href="#" className="btn btn-light shadow-sm rounded-circle">
                  <i className="fab fa-linkedin text-purple"></i>
                </a>
                <a href="#" className="btn btn-light shadow-sm rounded-circle">
                <i className="fas fa-envelope text-purple"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-7 col-md-12">
            <div className="bg-white rounded-4 shadow-lg p-4 animate__animated animate__fadeInRight">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control rounded-pill"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email *</label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control rounded-pill"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Message *</label>
                  <textarea
                    name="message"
                    className="form-control rounded-4"
                    rows="4"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-purple w-100 rounded-pill fw-bold py-2"
                >
                  <i className="fas fa-paper-plane me-2"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
       {sent && <p className="text-success mt-3">✅ Message sent successfully!</p>}
      {error && <p className="text-danger mt-3">❌ Failed to send. Try again.</p>}
    </section>
  );
}

export default Contact;
