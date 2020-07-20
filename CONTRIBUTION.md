# extension-activity-logger

### Introductions

Web-extensions functions invisibly from users and hence extension activity is a complete mystery for most of the users of the browser. If in some way we could log, see and analyze the Web Extensions activities, it will be more reliable for the user from the security point of view. It will also bring transparency to the way the browser and web extension works. It will also help in investigating bugs in the browser, web-extensions and web-extension APIs internals. In this project, we will make a web-extension for the Firefox browser that can track the activities of other browser extensions.

## Skills Required:
1. Basic front-end  Web Development (command over HTML, CSS, JS)
2. Good Command over JavaScript DOM and ES6
3. Knowledge of basic working of Web extensions and their APIs
4. Knowing how to make a basic web extension

## Project Details:
In Firefox(>=70) an activityLog API  is provided which can listen to the activities of other web-extensions. The goal of this project is to leverage the activityLog API and build a web-extension that can track other extensions and meet the following goals:
1. An extension that will open a page that shows the active extensions in a browser.
2. Logging the extension activity and showing the effect on the browser, such as altered browser settings or network requests, and the messages exchanged between the different parts of the extension.
3. Saving and loading activity logs from file.

## Helpful Links for the applicant:
* API JSON schema: [activity_log.json](https://searchfox.org/mozilla-central/source/toolkit/components/extensions/schemas/activity_log.json)
* API test cases: [test_ext_activityLog.html](https://searchfox.org/mozilla-central/source/toolkit/components/extensions/test/mochitest/test_ext_activityLog.html)
* API implementation module: [ext-activityLog.js](https://searchfox.org/mozilla-central/source/toolkit/components/extensions/parent/ext-activityLog.js)



