export const requestPermission = (
  videoEnabled: boolean,
  audioEnabled: boolean,
): Promise<MediaStream> => {
  if (!navigator.mediaDevices) {
    alert("Your browser doesn't seem to support");
  }
  return navigator.mediaDevices.getUserMedia({
    video: videoEnabled,
    audio: audioEnabled,
  });
};
