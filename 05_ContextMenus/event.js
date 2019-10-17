'use strict';

chrome.runtime.onInstalled.addListener(() => {
    let parent = chrome.contextMenus.create({
        id: 'parent',
        title: 'Choose Background Color'
    });
    chrome.contextMenus.create({
        id: 'red',
        parentId: parent,
        title: 'Red'
    });
    chrome.contextMenus.create({
        id: 'blue',
        parentId: parent,
        title: 'Blue'
    });
    chrome.contextMenus.create({
        id: 'green',
        parentId: parent,
        title: 'Green'
    });
})