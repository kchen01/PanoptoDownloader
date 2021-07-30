//myStorage = window.sessionStorage;


window.onload = function () {
    let videoElement = document.getElementById('primaryVideo');

    videoElement.addEventListener('loadeddata', () => {
        if (videoElement.readyState > 0) {
            let videoLink = document.getElementById('primaryVideo').src;
            if (typeof videoLink === 'string') {
                chrome.storage.local.set({ 'panoptoLink': videoLink }, () => {
                    chrome.storage.local.get(["panoptoLink"], (result) => {
                        console.log(result);
                    });
                });
            }
        }
    });
};
