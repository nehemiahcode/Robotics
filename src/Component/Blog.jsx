import React from "react";
import Image1 from "../assets/machines.jpg";
import Image2 from "../assets/Machine2.png";
import Image3 from "../assets/Shake.jpg";
import { Fade, Zoom } from "react-awesome-reveal";

function Blog() {
  const Blog = [
    {
      images: Image1,
      btnText: " UNIVERSAL",
      heading: "3 Cobot Success Stories in Electronics Manufacturing",
    },
    {
      images: Image2,
      btnText: "Featured",
      heading: "Boost Your Cobot Safety Know-How with These Digital Resources",
    },
    {
      images: Image3,
      btnText: "Automotive Technology",
      heading: "Self-Driving Vehicle Success is Tied to Machine Vision",
    },
  ];
  return (
    <section className=" w-full h-auto py-2 " >
     <h1 id="blog" className=" pt-20" ></h1>
     <div className=" bg-black">
     <Fade>
        <h1 className=" text-white font-Monessa text-3xl lg:text-6xl px-5 lg:px-16 text-center ">Blog</h1>
        </Fade>
      </div>
    
      <section className=" bg-black w-full h-auto lg:px-16 grid gap-5   py-10  md:px-10 sm:px-6 px-3">
        {Blog.map((blogs, index) => (
         <Zoom  key={index} cascade>
             <div
         
            className=" bg-slate-950 w-[95%] sm:w-[70%] lg:w-[80%] mx-auto 
         group  rounded-xl shadow-xl lg:h-[350px] flex flex-col  lg:flex-row h-auto"
          >
            <div className="  lg:w-[50%] ">
              <img
                src={blogs.images}
                alt=""
                className="  lg:rounded-l-xl rounded-t-xl w-[100%] h-[270px] lg:h-[100%]   md:object-cover"
              />
            </div>
            <div className=" flex flex-col  px-5 lg:w-[50%] text-white">
              <button className=" my-5 text-sm w-[200px] rounded-full px-6 py-2 bg-sky-500">
                {blogs.btnText}
              </button>
                <h1 className=" py-2 font-semibold hover:text-sky-500 text-xl font-Verdana">
                {blogs.heading}
                </h1>
              <p>Michael Picco • July 3, 2021 • No Comments</p>
              <p className=" py-5 leading-normal font-Monessa text-md">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis …
              </p>
            </div>
          </div>
         </Zoom>
        ))}
      </section>
    </section>
  );
}

export default Blog;
