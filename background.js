chrome.runtime.onInstalled.addListener(() => {
  // Handle installation or updates
});

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get(['websiteUrl'], (data) => {
    const { websiteUrl } = data;
    // Use the stored website URL for actions
  });
});
