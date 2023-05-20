# Overview

The original name for this application was The Significant Other Usage Meter and its purpose was to allow one significant other to create todo lists and notify the other significant person that the task was done. This would allow both "others" to prove the value of the other significant asset. In essence this application seeks to quickly and affectivly mediate misunderstandings created by miscomunication. It also seeks to decrease the amount of reminders to get tasks completed. When the asset completes the task the other significant will recieve a notification of completed task thus decreaseing the amount of "nagging" reminders. I decided to change the name to the Human Resource Asset Manager to possible broaden its appeal and application. The purpose remains the same as before, a tool to decrease nagging.

# Use phone for Development - I only used an Android Phone - Samsung Galaxy S23 Ultra

- [Set up a device for development](https://developer.android.com/studio/run/device)
- npx react-native run-android

# Use Android Virtual Device

- [Get Galaxy S23 Ultra Skin](https://developer.samsung.com/galaxy-emulator-skin/galaxy-s.html)
- [Load Skin into Android Studio](https://developer.samsung.com/galaxy-emulator-skin/guide.html)
-

# Purpose

The purpose of this project was to discover the best way for a person with a Web Development background, to apply their knowledge to the Mobile App market. I spent a lot of time researching the following technologies in order to launch into this project. I narrowed my selection down to the following options:

- [React Native](https://reactnative.dev/)
- [NativeScript-Vue](https://nativescript-vue.org/)

Both of these technologies are crossplatform and are compiled into either Android or IOS native code.
I actually have a lot more experince with Vue.js than I do with React so I wanted to continue my learning experience with the React ecosystem and thus decided to build on the experience I have gained from building the Simple Project Management Web App, which used Python, Django for the backend and React for the front end.

## Mobile Development Options

- Native Development
  - Android
    - [Android Studio](https://developer.android.com/studio)
    - Languages:
      - [Java](https://www.java.com/en/)
  - Apple iOS
    - [Xcode IDE (Only runs on iOS)](https://developer.apple.com/xcode/)
    - Languages
      - [Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html)
      - [Swift](https://www.apple.com/swift/)
- Cross Platform Developmet
  - Native Code Compilers
    - [Flutter](https://flutter.dev/)
    - [Kotlin](https://kotlinlang.org/)
    - [React Native](https://reactnative.dev/)
    - [Native Script](https://nativescript.org/)
  - Web View Component
    - [Capacitor](https://capacitorjs.com/)
    - [Cordova (Apache)](https://cordova.apache.org/)
  - Web Browser (combined with responsive design)
    - There are many other technologies that you can research and try out.

## Video Walk Through

[Hr Asset Manager Demo Video](http://youtube.link.goes.here)

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

- Issue: Compiled .apk file couldn't be loaded on to Android Virtual Device (AVD)

  - Fix: Open Android Studio => On welcome screen click More Actions => Select Virtual Device Manager => Click the elipse in the Actions section of the device you want to perform the cold boot on. => Select Cold Boot Now.

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
