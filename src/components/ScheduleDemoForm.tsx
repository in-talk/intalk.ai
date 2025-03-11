import React, { ChangeEvent, FormEventHandler, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Zoom } from "react-toastify";
import { useClose } from "@headlessui/react";

function ScheduleDemoForm() {

    const close = useClose()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredMethod: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      from_phone: formData.phone,
      preferredMethod: formData.preferredMethod,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            message: "",
            phone: "",
            preferredMethod: "",
          });
          setLoading(false);
          toast.success("Message sent successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        },
        (error) => {
          setLoading(false);
          
          toast.error("Error sending email", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }
      );
      close()
  };

  return (
    <div className=" py-5 rounded-2xl">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full h-12 text-gray-200 placeholder-gray-400  shadow-sm bg-transparent text-lg font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 "
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full h-12 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-lg font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 "
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          className="w-full h-12 text-gray-200 placeholder-gray-400 shadow-sm bg-transparent text-lg font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 "
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
        />
        <div className="mb-4">
          <h4 className="text-gray-200 text-lg font-nacelle leading-7 mb-4">
            Preferred method of communication
          </h4>
          <div className="flex">
            <div className="flex items-center mr-11">
              <input
                id="radio-group-1"
                type="radio"
                name="preferredMethod"
                value="email"
                checked={formData.preferredMethod === "email"}
                onChange={handleChange}
                className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
              />
              <label
                htmlFor="radio-group-1"
                className="flex items-center cursor-pointer text-gray-200 text-base font-nacelle leading-6"
              >
                <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                Email
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="radio-group-2"
                type="radio"
                name="preferredMethod"
                value="phone"
                checked={formData.preferredMethod === "phone"}
                onChange={handleChange}
                className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
              />
              <label
                htmlFor="radio-group-2"
                className="flex items-center cursor-pointer text-gray-200 text-base font-nacelle leading-6"
              >
                <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                Phone
              </label>
            </div>
          </div>
        </div>
        <input
          type="text"
          className="w-full h-12 text-gray-200 placeholder-gray-400 bg-transparent text-lg shadow-sm font-nacelle leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 "
          placeholder="Message"
          onChange={handleChange}
          name="message"
        />
        <button
          type="submit"
          className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-800 hover:bg-indigo-500 bg-indigo-700 shadow-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ScheduleDemoForm;
