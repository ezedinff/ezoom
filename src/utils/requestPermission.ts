export const requestPermission = async (videoEnabled: boolean, audioEnabled: boolean) => {
    if(!navigator.mediaDevices) return alert("Your browser dones't seem to support");
    return navigator.mediaDevices.getUserMedia({video: videoEnabled, audio: audioEnabled});
}
