# AngularJS Modern Webapp Sample

## Building the webapp

This project uses [Yeoman](http://yeoman.io/) for building, please install it first, then clone this repo and run the following command to install its dependencies:
```
# Clone the repo
git clone https://github.com/osama-ibrahim/ng-modern-webapp.git

# Navigate inside the dir
cd ng-modern-webapp

# Clone the `gh-pages` branch into the `dist` folder for deployment
git clone -b gh-pages https://github.com/osama-ibrahim/ng-modern-webapp.git dist

# Updated all npm dependencies
npm install

# Updated all bower dependencies
bower install
```

After everything gets installed, you should run the following command to build the project and generate the `dist` folder:
```bash
# Build the web app using grunt
grunt
```

After grunt has finished building the project you will have the app minified and concatinated under the `dist` folder
