'use client';

import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <ReactAudioPlayer
        src="/audios/illbe.mp3"
        autoPlay
        controls
        className="w-full"
      />
    </div>
  );
};

export default AudioPlayer;