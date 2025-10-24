import AudioPlayerBar from '@kevtucker/react-audio-player-bar';

function BottomAudioPlayer() {
  return (
    <AudioPlayerBar 
      audioSrc="/audios/illbe.mp3"
      placement="bottom"
      // other props as supported
    />
  );
}

export default BottomAudioPlayer;
