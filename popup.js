document.getElementById('open-settings').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});

document.getElementById('extract-text').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        func: extractTextFromLastArticle
      }, () => {
        chrome.storage.local.get('extractedText', (data) => {
          const resultElement = document.getElementById('result');
          resultElement.textContent = data.extractedText || 'No text found.';
        });
      });
    } else {
      console.error('No active tab found.');
    }
  });
});

document.getElementById('publish-wordpress').addEventListener('click', () => {
  chrome.storage.local.get(['apiUrl', 'username', 'password', 'extractedText'], (data) => {
    const { apiUrl, username, password, extractedText } = data;
    alert(apiUrl + username+ password + extractedText);
    if (!apiUrl || !username || !password || !extractedText) {
      alert('Please ensure all settings and text are available.');
      return;
    }

    const authHeader = 'Basic ' + btoa(username + ':' + password);

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify({
        title: 'Extracted Text Post',
        content: extractedText,
        status: 'publish'
      })
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          throw new Error(`HTTP error! Status: ${response.status}, ${JSON.stringify(error)}`);
        });
      }
      return response.json();
    })
    .then(data => {
      console.log('Post published:', data);
      alert('Text published to WordPress successfully.');
    })
    .catch(error => {
      console.error('Error publishing post:', error);
      alert('Error publishing to WordPress: ' + error.message);
    });
  });
});

function extractTextFromLastArticle() {
  const articles = document.querySelectorAll('article');
  if (articles.length > 0) {
    const lastArticle = articles[articles.length - 1];
    const markdownDiv = lastArticle.querySelector('div.markdown');
    if (markdownDiv) {
      const text = markdownDiv.textContent.trim();
      chrome.storage.local.set({ extractedText: text });
    } else {
      chrome.storage.local.set({ extractedText: 'No <div> with class "markdown" found.' });
    }
  } else {
    chrome.storage.local.set({ extractedText: 'No <article> elements found.' });
  }
}

chrome.storage.local.get('extractedText', (data) => {
  const resultElement = document.getElementById('result');
  resultElement.textContent = data.extractedText || 'No text found.';
});
