ChatGPT Publish to WordPress Chrome Extension
=============================================

Overview
--------

The ChatGPT Publish to WordPress Chrome Extension allows users to extract the latest message from ChatGPT sessions and publish it as a draft to a WordPress site. Users can configure their API URL and credentials through the extension's settings page.

Features
--------

*   Extract the latest message from a ChatGPT chat session.
*   Publish the extracted message as a draft to a WordPress site via API.
*   Dynamic permissions setup to allow interaction with user-defined websites.

Installation
------------

1.  **Clone the Repository**
    
    `git clone https://github.com/FethellahS/chatgpt-publish-to-wordpress.git`
    
2.  **Load the Extension**
    
    *   Open Chrome and navigate to `chrome://extensions/`.
    *   Enable "Developer mode" using the toggle in the top right corner.
    *   Click on "Load unpacked" and select the directory where you cloned the repository.

Configuration
-------------

1.  **Open Settings Page**
    
    *   Click on the extension icon in the Chrome toolbar.
    *   Click on the "Settings" button in the popup.
2.  **Enter Configuration Details**
    
    *   **API URL**: Enter the URL of your WordPress site’s API.
    *   **Username**: Enter your WordPress username.
    *   **Application Password**: Enter your WordPress application password.
    *   **ChatGPT URL**: Enter the URL of the ChatGPT page you want to extract messages from.
3.  **Save Settings**
    
    *   Click on the "Save Settings" button. This will save your settings and request the necessary host permissions for the specified ChatGPT URL.

Usage
-----

1.  **Extract Latest Message**
    
    *   Click on the extension icon in the Chrome toolbar.
    *   Click on the "Extract Latest Message" button to extract the most recent message from the ChatGPT session.
2.  **Publish as Draft**
    
    *   After extracting the latest message, click on the "Publish as Draft" button to create a draft post on your WordPress site with the extracted content.

Permissions
-----------

The extension requests the following permissions:

*   **ActiveTab**: To interact with the currently active tab.
*   **Storage**: To save and retrieve user settings.
*   **Scripting**: To execute scripts on web pages.
*   **Host Permissions**: To allow interaction with specified ChatGPT URLs.

Troubleshooting
---------------

*   **API Errors**: Ensure that your API URL, username, and application password are correct.
*   **Permissions Issues**: Check that the permissions for the specified ChatGPT URL are granted.

Contributing
------------

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Please follow the standard guidelines for contributing and include tests where applicable.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

Contact
-------

For questions or support, please contact FethellahS.
