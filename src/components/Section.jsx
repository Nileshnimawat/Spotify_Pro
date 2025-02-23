import React from 'react';
import Album from './album';
import './scrollbar.css'; // Import custom scrollbar styles

const Section = ({ 
  data ,
  setCurrentSong
}) => {


  return (
    <>
      <section className="flex-1 bg-color text-white p-6 overflow-y-auto rounded-xl mx-2 mt-2 h-[80%] max-h-screen custom-scrollbar relative">
        <h1 className="text-3xl transition hover:underline ">Popular artists</h1>
        <div className="mt-2 overflow-y-auto max-h-[80vh] pr-2 custom-scrollbar ">
          <Album data={data} setCurrentSong={setCurrentSong} />
        </div>
      </section>
    </>
  );
};

export default Section;

