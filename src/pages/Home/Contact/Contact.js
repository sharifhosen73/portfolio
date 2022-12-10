import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-14 bg-slate-400 py-14">
      <h1 className="text-3xl text-center text-black font-semibold mb-10">
        CONTACT ME
      </h1>

      <div className="hero py-6 ">
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
          <form
            action="https://formspree.io/f/xaykrawb"
            method="POST"
            className="card-body "
          >
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
