'use strict';

chrome.browserAction.onClicked.addListener(() => {
    chrome.storage.sync.get({
        color: 'red'
    }, item => {
        chrome.tabs.executeScript({
            code: 'document.body.style.backgroundColor = "' + item.color + '"'
        });
    });
});