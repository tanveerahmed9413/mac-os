import React from "react";
import MacWindows from "./MacWindows";

const Spotify = () => {
  return (
    <div>
      <MacWindows width={600} height={500}>
        <div className="h-full w-full">
          <iframe
            className="w-full h-full"
            src="https://open.spotify.com/embed/album/4Qhs9M8b7MafoxTPhfG6Hq"
          />
        </div>
      </MacWindows>
    </div>
  );
};

export default Spotify;
