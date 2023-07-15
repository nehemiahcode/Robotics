import React from "react";

function Footer() {
  return (
    <footer className=" w-full h-auto px-5 py-7 md:px-4 lg:px-10 grid  grid-cols-1 md:grid-cols-2 bg-black">
      <div className=" flex flex-col gap-2  py-2 ">
        <div className=" flex ">
          <h1 className=" font-Monessa text-white font-medium text-4xl">
            droid
          </h1>
          <span className=" text-cyan-500 font-bold animate-spin text-2xl lg:text-4xl">
            <ion-icon name="disc-sharp"></ion-icon>
          </span>
        </div>
        <p className=" text-white text-md pr-6 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <span className=" text-white flex gap-2 text-lg border-b-2 pb-3">
        <ion-icon name="logo-facebook" ></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        </span>
      </div>

      <div className=" flex flex-col ">
           <div className=" flex flex-col lg:flex-row  lg:justify-end gap-6 text-white">
           <h1 className=" text-2xl font-semibold lg:hidden">Links</h1>
           <h1 className=" font-normal text-white hover:underline cursor-pointer">Home</h1>
           <h1 className=" font-normal text-white hover:underline cursor-pointer">Services</h1>
           <h1 className=" font-normal text-white hover:underline cursor-pointer">Team</h1>
           </div>

      </div>
    </footer>
  );
}

export default Footer;
