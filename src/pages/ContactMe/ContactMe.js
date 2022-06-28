import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

const ContactMe = () => {
  // FORM hook
  const { register, handleSubmit, watch, reset } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_f3gw4tf",
        "template_f1va9ec",
        form.current,
        "aOsgNi_lQLh-aYwXa"
      )
      .then(
        (result) => {
          toast.success("I have received your message, will contact you soon.");
          reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="section  section h-[100vh] relative flex justify-center items-center"
    >
      <h2 className="absolute top-5 left-4 md:text-3xl text-[20px]">
        <span className="text-primary">CONTACT</span> ME
      </h2>
      <div className="contactInfoContainer projectsContainer overflow-y-auto w-[100%] md:h-max h-[80vh] mx-auto">
        <div className="contactInfo">
          <div className="contactMeInfo">
            <h1 className="contactMeHeader">Dhaka, Bangladesh</h1>
            <p className="addressInfo">Middle Badda, Dhaka-1212</p>
            <p className="subContactInfo">
              <a href="tel:+8801833778129">+88 01833778129</a>
            </p>
            <p className="subContactInfo">
              <a href="https://github.com/shahadat2772">
                GitHub/Shahadathossain
              </a>
            </p>
            <p className="subContactInfo">
              <a href="https://www.linkedin.com/in/md-shahadat-hossain-62b60b241">
                LinkedIn/Shahadathossain
              </a>
            </p>
            <p className="subContactInfo">
              <a href="mailto:mdshahadathossain4774@gmail.com">
                mdshahadathossain4774@gmail.com
              </a>
            </p>
            {/* mailto:web.fazlerabbi@gmail.com */}
          </div>
          <form
            ref={form}
            className="contactMeFrom min-w-[330px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="formHeader">Send me a quick message</p>
            {/* Name INPUT */}
            <div className="form-control">
              <input
                required
                {...register("name")}
                type="text"
                placeholder="*Your Name"
                className="input input-bordered mb-2"
                name="user_name"
              />
            </div>
            {/* EMAIL INPUT */}
            <div className="form-control">
              <input
                required
                {...register("email")}
                type="text"
                placeholder="*Your Email"
                className="input input-bordered mb-2"
                name="user_email"
              />
            </div>
            {/* Country INPUT */}
            {/* <div className="form-control">
            <input
              required
              {...register("country")}
              type="text"
              placeholder="*Your country"
              className="input input-bordered mb-2"
              name="user_country"
            />
          </div> */}
            {/* MESSAGE text */}
            <div className="form-control">
              <textarea
                required
                {...register("message")}
                type="text"
                placeholder="*Tell me how can i help you, i will contact you soon"
                className="input input-bordered h-[90px] mb-2"
                name="message"
              />
            </div>
            <div className="mt-6">
              <button className="btn btn-primary block">Send Massage</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
