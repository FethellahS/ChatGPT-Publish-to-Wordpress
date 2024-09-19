document.getElementById('save-settings').addEventListener('click', () => {
  const apiUrl = document.getElementById('api-url').value;
  const username = document.getElementById('username').value;
  const applicationPassword = document.getElementById('password').value;
  const websiteUrl = document.getElementById('website-url').value;

  // Save settings
  chrome.storage.local.set({ apiUrl, username, applicationPassword, websiteUrl }, () => {
    // Request host permissions
    const permissions = {
      origins: [`${websiteUrl}/*`]
    };

    chrome.permissions.request(permissions, (granted) => {
      if (granted) {
        console.log('Permission granted.');
        alert('Settings saved and permissions granted!');
      } else {
        console.log('Permission denied.');
        alert('Settings saved, but permissions were not granted.');
      }
    });
  });
});
