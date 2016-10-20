# Github User listing

### Steps for installation
- `npm install` , `bower install`
- `grunt serve` to run the application in development module
- `grunt test` to run the unit and e2e tests
- `grunt build` to generate the dist files


# Requirements: Create Angular app with the following features:
- It has 3 main pages Home, Users, About.
- The 3 pages has:
  - A fixed header in common with:
    - [x] Title: "Github users" and Github logo.
    - [x] 3 links for the pages (Home  |  Users  |  About)
    - [x] The current page link has active style
    - [ ] Change the page title with current selected page name.o

- Home and about has any static content.

- The users page has 2 views:
  - A list of Github users:
    - [x] Each user has an avatar, ID, and username.
    - [x] Users are loaded by the request ( https://api.github.com/users ).
    - [x] There is a "Load More" button at the bottom, which fetches another page of users.
    - [x] The list item is clickable to load user details in the side view of the user part
      and change the url form '/users' to '/users/{user-id}'

  - User part:
    - [x] Displays the first user in the list data by default after the list is loaded.
    - [ ] User data is loaded by the request ( https://api.github.com/users/{user-id} ), try it: https://api.github.com/users/1.
    - [x] This part displays the User data: user id, user avatar image, name, email, and created at.

- pages' URLs:
  - [x] home: '/'
  - [x] about: '/about'
  - [x] users: '/users'
  - [x] user details: '/users/{user-id}'
  - [x] Redirect from '/home' to '/'.
  - [x] Redirect from '/about/' to '/about'.
  - [ ] Redirect from '/users/{not_a_number}' to '/users/{valid-user-id}'
  - [x] Redirect from any invalid url to the home page '/'

- [x] Use angular-ui-router.
- [x] Use Sass.
- [x] Use Foundation => 6.0.0 with flex-box grid.
- [x] Create unit tests that validates all your code (mock GitHub requests).
- [ ] Consider the project to be SCALEABLE.

### Preferred:
- Style your pages as much as you can with the only necessary css.
- Try to use BEM, OOCSS, SMACSS while writing you css code.
- Try to go with these guides as much as possible:
  - http://cssguidelin.es/.
  - https://github.com/airbnb/javascript/tree/master/es5
  - https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
