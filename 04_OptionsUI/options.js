'use strict';

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get({
        color: 'red'
    }, item => {
        document.getElementById('colors').value = item.color;
    });
});

document.getElementById('save').addEventListener('click', () => {
    let color = document.getElementById('colors').value;
    chrome.storage.sync.set({
        color: color
    }, () => {
            console.log('saved:' + color);
    });
});
// const colors = document.getElementById('colors');

// colors.addEventListener('change', () => {
//     chrome.tabs.executeScript({
//         code: 'document.body.style.backgroundColor = "' + colors.value + '"'
//     });
// });