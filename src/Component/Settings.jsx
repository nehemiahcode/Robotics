import React, { useEffect, useRef, useState } from 'react';
import Audio from "../assets/audio.mp3";

function Settings() {
  const [icon, setIcon] = useState(false);
  const audioRef = useRef(null);

  const handleAudioPlaying = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIcon(!icon);
  };

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={Audio} className='hidden' />
      <div
        onClick={handleAudioPlaying}
        aria-label="Settings"
        className="bg-sky-600 text-black text-3xl flex justify-center items-center fixed bottom-[30px] right-[20px] z-[99] rounded-full h-[50px] w-[50px]"
      >
        <ion-icon name={icon ? 'pause-outline' : 'play-outline'} aria-hidden="true"></ion-icon>
      </div>
    </div>
  );
}

export default Settings;
