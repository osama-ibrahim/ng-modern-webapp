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

After grunt has finished building the project you will have the app minified and concatenated under the `dist` folder

## Deploying to Github Pages

after building the app using grunt you should push the files under the `dist` folder to the `gh-pages` branch

```
# Navigate to the dist folder (which is itself the same repo with the `gh-pages` branch checked-out)
cd dist

# Adding all the files under the `dist` folder to the staging area.
git add -A

# Committing the changes
git commit -m "Commit message"

# Pushing the code to the origin's gh-pages branch to update the site
git push origin gh-pages
```
