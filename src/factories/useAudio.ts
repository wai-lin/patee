import { Howl } from 'howler';
/**
 * function to access and play web audio
 * @param audioPath string, audio file path for playing
 * @returns audio, play
 */
export default function useAudio(audioPath: string) {
  const audio = new Howl({ src: [audioPath], preload: true, html5: true });

  function play() {
    if (!audio) return;
    audio.play();
  }

  function stop() {
    if (!audio) return;
    audio.stop();
  }

  return {
    audio,
    play,
    stop,
  };
}
