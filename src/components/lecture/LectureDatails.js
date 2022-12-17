import React from "react";
import ReactPlayer from "react-player";

const LectureDatails = () => {
  return (
    <div>
      <ReactPlayer
        url={
          "https://www.ted.com/talks/gautam_shah_can_the_metaverse_bring_us_closer_to_wildlife"
        }
        controls
      />
    </div>
  );
};

export default LectureDatails;
