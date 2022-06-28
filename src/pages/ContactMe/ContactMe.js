import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

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
      className="section section h-[100vh] relative flex justify-center items-center"
    >
      <h2 className="absolute top-5 left-4 md:text-3xl text-[20px]">
        <span className="text-primary">CONTACT</span> ME
      </h2>

      <form
        ref={form}
        className="md:min-w-[460px] min-w-[330px]"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div className="form-control">
          <input
            required
            {...register("country")}
            type="text"
            placeholder="*Your country"
            className="input input-bordered mb-2"
            name="user_country"
          />
        </div>
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
        <div className="mt-1">
          <button className="btn btn-primary block ">Send Massage</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
