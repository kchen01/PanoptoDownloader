let downloadElement = document.getElementById('download');
let re = new RegExp(/(.mp4|.avi|.mpg|.wmv|.mov|.qt|.3gp|.wma|.mp3|.m4v)/i);
chrome.storage.local.get(["panoptoLink"], (data) => {
            chrome.storage.local.remove(["panoptoLink"]);
    if (data.panoptoLink !== undefined) {
        chrome.storage.local.remove(["panoptoLink"]);
        chrome.storage.local.get(["panoptoTitle"], (title) => {
            chrome.storage.local.remove(["panoptoTitle"]);
            downloadElement.innerHTML = `
            <button type="button" id="button">
                Download
            </button>`
            let button = document.getElementById('button');
            button.addEventListener('click', ()=> {
                let videoExtension = data.panoptoLink.match(re)[0];
                chrome.downloads.download({url: data.panoptoLink, filename: `${title.panoptoTitle}${videoExtension}`});
            });
        });
    }
});
