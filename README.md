# NgAddressBook

## Overview

The project uses the latest version of Angular and Firebase Cloud DB to store data remotely.
The styling of the application is a mix of hand written css and Angular Material. Some functionalities (like the 'add new' modal) rely on logic that is already part of the Material components.

When the app is served, the address book will already contain 3 entries. It's possible to filter the entries searching part of a name, surname or phone number. It's also possible to order the entries alphabetically by first name and last name. Moreover, it's possible to delete entries and download the address book as a CSV file.

When the user clicks on the 'Add new' button, a modal containing a form will open. It's possible to submit the form in order to create a new entry on the Firebase Cloud DB. First name and Last name are required fields, while it's not necessary to insert a phone number. Due to time costraints for this demo, I haven't added any additional form validation.

I have made use of RXJS and of the Angular Firebase library to improve the app's reactivity. I didn't consider it necessary to implement a store, due to the size of the app. However, I am not sure this was the best choice. I would probably add it if I had more time.

I have implemented some basic unit tests for the `address-book.component.spec.ts`. I wanted to write more but had a difficult time mocking the Firestore service.

Also, the app can be opened in Electron by using the script `npm run start:electron`. It can also be opened in a browser using the script `npm start`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Also, the app can be opened in Electron by using the script `npm run start:electron`. It can also be opened in a browser using the script `npm start`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
