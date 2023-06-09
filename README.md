# Just Another Text Editor

## Description

This application is a text editor built with Webpack and Workbox. It is a progressive web application that can be installed on your device and used offline. It is intended to save snippets of code that you can access later. It does this using the indexed db browser API.

<!-- screenshot -->

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Version](#version)
- [Credits](#credits)
- [License](#license)

## Installation

To install this application, clone the repository and run `npm install` in the root directory to install the dependencies. Then run `npm run build` in the client directory to build the application. Finally, run `npm run start:dev` in the root directory to start the app.

## Usage

This app is intended to be used in the browser, or installed on the user's machine to be used offline if needed. The user can add snippets of code to the editor, which will automatically save any added code using the indexed db API.

## Version

1.0.0 - 05/10/2023

Currently runs with minimal errors, but Inject Manifest is still called multiple times, this is a known issue with Workbox. The app is fully functional, but the install prompt is not working as intended. Due to an unknown error, the app constantly refreshes when opened in Chrome. This does not happen in Firefox.

## Credits

[Harrison Lamm](https://github.com/Lamm9)

## License

Please refer to the license in the repository.