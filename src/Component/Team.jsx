import React, { useState } from "react";
import Team1 from "../assets/Team1.jpg";
import Team2 from "../assets/Team2.jpg";
import { Fade } from "react-awesome-reveal";

function Team() {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const Teams = [
    { image: Team1, name: "Martha L Fonseca", },
    { image: Team2, name: " David S Martin ",},
  ];

  const Icons = [
    { iconText: "logo-twitter" },
    { iconText: "logo-facebook" },
    { iconText: "logo-instagram" },
  ];

  const handleTeamHover = (index) => {
    setHoveredTeam(index);
  };

  const handleTeamLeave = () => {
    setHoveredTeam(null);
  };

  return (
    <section className="w-full h-auto bg-black grid grid-cols-1 py-10 md:grid-cols-1 lg:grid-cols-2 px-5 md:px-5 sm:px-10 lg:px-16">
     <Fade direction="down">
     <div>
        <h1 className="text-sky-600 text-xl py-3 font-medium">The Team</h1>
        <h1 className="font-Monessa text-2xl lg:text-5xl py-5 font-normal text-white">
          We are intelligence in action.
        </h1>
        <p className="text-white font-normal leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <button className="my-8 bg-cyan-500 px-4 py-4 w-[180px] hover:bg-cyan-300 duration-200 transition-all rounded-md text-black font-medium">
          More Team
        </button>
      </div>
     </Fade>
      <div className="grid md:grid-cols-2 place-content-center grid-cols-1 gap-3">
        {Teams.map((team, index) => (
         <Fade  key={index}>
           <div
     
            className="relative"
            onMouseEnter={() => handleTeamHover(index)}
            onMouseLeave={handleTeamLeave}
          >
            <img src={team.image} alt="The team" className="rounded-xl sm:mx-auto" />
            {hoveredTeam === index && (
              <div className={` duration-300 ${hoveredTeam === index ? " h-[180px]" : 'h-0'} absolute w-full bottom-0  py-8 bg-[rgba(0,0,0,0.6)]`}>
                <h1 className="text-white font-medium py-2 text-center">
                  {team.name}
                </h1>
                <div className="flex gap-3 justify-center items-center">
                  {Icons.map((icon, iconIndex) => (
                    <span
                      key={iconIndex}
                      aria-label="Icon"
                      className={`ring-2  cursor-pointer ring-black text-white inline-flex p-2 rounded-full`}
                    >
                      <ion-icon name={icon.iconText}></ion-icon>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
         </Fade>
        ))}
      </div>
    </section>
  );
}

export default Team;
