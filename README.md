# Tappx test project

Frontend created with React

# Project description

The entry point is index.js on the src directory.

This imports the App component from App.js, which in time imports all screens (in this case there is only Main screen).

The folder strcuture is simple. On src, besides App and index files, we see several directories:

- screens:
  - All screens have their dedicated Screen.styled.js file and index.js file, to handle imports.
  - this components contain a full view of the app. In this example, there is only Main screen, so I added all the components there (also header and footer, that in a bigger project would go in a higher order component to prevent multiple renders)
- components
  - All components have their dedicated Component.styled.js file and index.js file, to handle imports.
  - Highly reusable components. usually return a wrapper for children and allow high customization (MainButton, Modal, inputComponents)
  - Simple components: they are only used once so they are not written to be highly customizable (footer, header). In this project, the header has some complex style to handle responsivity of the page
  - complex components: in this case they are Table and BundleModal. They hande most of the logic and interaction with the app context.
- context
  - context is used in this project for state management.
  - Since this is a small project, only one context is needed. More could be added if authentication, or other content is needed.
  - BundleActions.js: contains all functions that are used to manage the frontend-backend conenction. They are exported and go to BundleContext.js
  - BundleContext.js: handles state management depending on the actions performed by the components.
    - This Context has a special function used to dispatch all the actions beforehand so there is no need to dispatch them at component level.
- assets:
  - Images, icons and similar things would go here
- utils:
  - Some things that are used across the app are here
  - regex for email and bundle name validation
  - Theme of the app (colors, font sizes, etc...)
  - Widthreshold is a constant used for the media queries

# Deployed site

The site is deployed on Netlify.
[Click here to visit](https://tappx-test-alex.netlify.app/)

**Warning** no backend is served here.

For it to have a database connection, the backend needs to be running on port 8000. See [backend local usage](https://github.com/a96lex/tappx-test-backend)

# To test in local

- clone the repository
- run `yarn`
- run `yarn start`

**Warning** no backend is served here.

For it to have a database connection, the backend needs to be running on port 8000. See [backend local usage](https://github.com/a96lex/tappx-test-backend)
