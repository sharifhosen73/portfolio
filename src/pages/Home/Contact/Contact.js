import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-2 bg-slate-200 py-14 px-5">
      <h1 className="text-5xl text-center text-primary font-bold mb-10">
        CONTACT ME
      </h1>

      <div className="hero py-6 flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2  lg:mx-10 mt-5 mx-auto">
          <div className="card w-96 bg-fuchsia-600 mb-4 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-white">Email</h2>
              <p className="text-xl text-white">mdsharifhosen73@gmail.com</p>
              <a
                className="text-xl"
                href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Message
              </a>
            </div>
          </div>

          <div className="card w-96 bg-pink-700 mb-4 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-white">Messenger</h2>
              <p className="text-xl text-white">MD Sharif Hosen</p>
              <a
                className="text-xl"
                href="https://www.facebook.com/messages/t/100009112445498"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>

        <div className="card flex-shrink-0 lg:w-1/2 w-5/6 lg:mr-5 shadow-2xl bg-base-100">
          <form
            action="https://formspree.io/f/xaykrawb"
            method="POST"
            className="card-body"
          >
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="number"
                placeholder="Number"
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <div className="form-control">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
