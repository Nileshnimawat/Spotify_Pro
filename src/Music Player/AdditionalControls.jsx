import React, { useState, useEffect } from "react";
import {
  Heart,
  VolumeX,
  MessageSquare,
  Volume2,
  ListMusic
} from "lucide-react";

const AdditionalControls = ({ audioRef, currentSong, setLikedSongs,likedSongs }) => {
  const [isMuted, setIsMuted] = useState(false);
 
  const isLiked = likedSongs.some((song) => song.id === currentSong.id);

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleHeartClicked = () => {
    if (!isLiked) {
      const updatedSongs = [
        
        { ...currentSong, likedDate: new Date().toLocaleDateString() }, ...likedSongs
      ];
      setLikedSongs(updatedSongs); 
      localStorage.setItem("likedSongs", JSON.stringify(updatedSongs));
    } else {
      const updatedSongs = likedSongs.filter(
        (song) => song.id !== currentSong.id
      );
      setLikedSongs(updatedSongs); 
      localStorage.setItem("likedSongs", JSON.stringify(updatedSongs));
    }
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      <Heart
        onClick={handleHeartClicked}
        className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
          isLiked ? "text-red-500 fill-red-500" : ""
        }`}
      />
      <MessageSquare className="w-6 h-6 cursor-pointer" />
      <ListMusic className="w-6 h-6 cursor-pointer" />
      <button
        onClick={toggleMute}
        className={`p-2 rounded-full ${isMuted ? "bg-red-500" : ""}`}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default AdditionalControls;
