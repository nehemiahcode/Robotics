import React from "react";
import Robot from "../assets/Robot.png";

function Contact() {
  const Inputs = [
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "Email" },
  ];
  return (
    <section className=" lg:bg-black  grid grid-cols-1 md:grid-cols-2 w-full h-full lg:px-16 md:px-5 sm:px-5 pt-16" id="get/us">
      <div className=" w-full flex items-center  px-2 py-5  h-auto">
        <img src={Robot} alt="" className=" mx-auto  w-[450px]" />
      </div>
      <form className=" w-[100%] h-[auto] flex flex-col lg:items-start   ">
   
        <h1 className=" text-white text-3xl font-Roboto font-semibold px-8 py-3">
        Newsletter.
        </h1>
        <p  className=" text-white font-medium px-8 py-4">
        Sign up for our newsletter to get updated
         information, news, or insight about robotics and the industries.
        </p>
        {Inputs.map((myinput, index) => (
          <input
          required
            key={index}
            type={myinput.type}
            placeholder={myinput.placeholder}
            className="  bg-transparent  border-b-2 py-3 px-2 my-2 placeholder:font-medium focus:bg-sky-500  mx-auto outline-none  placeholder:text-white w-[90%]"
          />
        ))}
        <button className=" mx-6 px-2 py-2 lg:ml-8 w-[200px] h-[50px] bg-sky-500 hover:bg-slate-600 rounded-xl my-4 text-white font-semibold font-Verdana">Submit</button>
  
      </form>
    </section>
  );
}

export default Contact;
