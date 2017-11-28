# React-boilerplate

## Install:

- `git clone https://github.com/ideus-team/react-boilerplate.git` or `git pull` this repository
- copy file to your project root folder
- `npm install`


## Project Structure:

```bash
root
└── src
│   ├── componnets
│   ├── containers
│   ├── styles
│   ├── images
│   ├── fonts
│   ├── reducers
│   ├── ...
│   └── App.jsx
│   └── index.jsx
└── index.html
```

## Development mode:

- webpack-dev-server (open automatically [http://localhost:3000](http://localhost:3000) in your browser)
- sass to css
- generate sourceMap for js and css
- hot reload react components and css

*command:* `npm run dev`


## Production mode:

- move all assets and `index.html` to dist folder
- minimize css and js
- optimize images
- create svg sprite from icons *(disabled now)*

*command:* `npm run prod` -  generate all assets for deploy
*command:* `npm run build` - clean dist folder and generate all assets for deploy
*command:* `npm run server` - create server for testing production build locally

***dist structure:***

```bash
dist
└── assets
│   ├── css
│   ├── fonts
│   ├── images
│   ├── js
│   └── media
└── index.html
```

## Code style:

##### JS:

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

##### CSS:

- [Css code style](https://github.com/ideus-team/guidelines/blob/master/frontend/codestyle.md)
