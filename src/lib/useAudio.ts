/**
 * function to access and play web audio
 * @param audioPath string, audio file path for playing
 * @returns audio, play
 */
export default function useAudio(audioPath: string) {
  const audio = new Audio(audioPath);

  function play() {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  return {
    audio,
    play,
  };
}
