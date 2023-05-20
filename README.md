# Overview

The original name for this application was The Significant Other Usage Meter and its purpose was to allow one significant other to create todo lists and notify the other significant person that the task was done. This would allow both "others" to prove the value of the other significant asset. In essence this application seeks to quickly and affectivly mediate misunderstandings created by miscomunication. It also seeks to decrease the amount of reminders to get tasks completed. When the asset completes the task the other significant will recieve a notification of completed task thus decreaseing the amount of "nagging" reminders. I decided to change the name to the Human Resource Asset Manager to possible broaden its appeal and application. The purpose remains the same as before, a tool to decrease nagging.

# Use phone for Development - I only used an Android Phone - Samsu

- [Set up a device for development](https://developer.android.com/studio/run/device)
- npx react-native run-android

# Use Android Virtual Device

- [Get Galaxy S23 Ultra Skin](https://developer.samsung.com/galaxy-emulator-skin/galaxy-s.html)
- [Load Skin into Android Studio](https://developer.samsung.com/galaxy-emulator-skin/guide.html)
-

{Describe your purpose for creating this app.}

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment (2023)

---

- Visual Studio Code (VSCode)
- Android Studio
- Notepad ++

# Technologies (2023)

- TypeScript
- JavaScript
- React Native
- Sqlite 3
- Windows 11
- GitHub

# Troubleshooting

- Issue: Typescript did not recognize node module added after project set up
  - Error: "Could not find a declaration file for module 'react-native-sqlite-storage' ../ node_modules/react-native-sqlite-storage' implicitly has an 'any' type. Try npm i --save-dev @types/react-native-sqlite-storage"
  - Cause: I added react-native-sqlite-storage after initial setup - the module wasn't registered by TypeScript
  - Fix: cd hr_asset_manager then npm i --save-dev @types/react-native-sqlite-storage

# Useful Websites

- [React Native](https://reactnative.dev/)
- [Type Script](https://www.typescriptlang.org/)
- [Android Studio](https://developer.android.com/studio)
- [Sqlite](https://sqlite.org/index.html)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Integrate with Google Tasks and Calendar
- Item 2
- Item 3
