let downloadElement = document.getElementById('download');
 
chrome.storage.local.get(["panoptoLink"], (data) => {
    if (data.panoptoLink !== undefined) {
        chrome.storage.local.remove(["panoptoLink"]);
        downloadElement.innerHTML = `
        <button type="button" id="button">
            Download
        </button>`
        let button = document.getElementById('button');
        button.addEventListener('click', ()=> {
            chrome.downloads.download({url: data.panoptoLink});
        })
    }
});


