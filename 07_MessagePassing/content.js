(function() {
    'use strict';

    let links = document.getElementsByTagName('a');
    chrome.runtime.sendMessage({count: links.length}, () => {
        console.log('message sent!');
    });
})();