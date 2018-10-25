This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Table of Contents

- [Neighborhood Project](#neighborhood-project)
- [Folder Structure](#folder-structure)
- [How to use the app](#how-to-use-the-app)
- [Offline-First Considerations](#offline-first-considerations)
- [Credits](#credits)

## Neighborhood Project

This project consist on build a single page map application using React and the Google Maps API. Foursquare API is integrated and the app is accesible and usable offline.

## Folder Structure

The structure of the project is:

```
neighborhood_map/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    API/
      index.js
    component/
      ListItem/
        index.js
        ListItem.js
      Map/
        index.js
        Map.js
      SideBar/
        SideBar.js
      VenueList/
        index.js
        VenueList.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    serviceWorkers.js
    .gitignore
```


## How to use the app

  1. Clone or download the repo
  2. cd to the repo
  3. Run `npm install`
  4. Run `npm start`
  5. Visit the site in your browser at `http://localhost:3000/`


## Offline-First Considerations

The service worker is only enabled in the production environment,
e.g. the output of `npm run build`. It's recommended that you do not enable an
offline-first service worker in a development environment, as it can lead to
frustration when previously cached assets are used and do not include the latest
changes you've made locally.

## Credits

  1. Walkthrough by Forrest Walker: `https://www.youtube.com/watch?v=Q0vzqlnWWZw&index=3&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s`
  2. React Google Maps Style Guide: `https://tomchentw.github.io/react-google-maps/`

