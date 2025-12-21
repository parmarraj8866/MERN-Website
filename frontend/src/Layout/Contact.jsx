import React from "react";
import { useForm } from "react-hook-form";
import Api from "../Api/Api";

export default function ContactFormUI() {
  const { register, handleSubmit, reset } = useForm();

  async function addContact(data) {
    const res = await Api.post("/api/contactclient", data);
    reset();
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className=" shadow-sm border p-4 rounded">
            <div>
              <h3 className=" text-center mb-4">Contact Us</h3>

              <form onSubmit={handleSubmit(addContact)}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    {...register("contactname")}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@email.com"
                    {...register("contactemail")}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 9876543210"
                    {...register("contactnumber")}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Type your query about our products, orders, or offers..."
                    {...register("contactmessage")}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
