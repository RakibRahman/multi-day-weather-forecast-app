# Install Webpack:

- npm init -y
- npm install webpack webpack-cli --save-dev
- npm i webpack-dev-server

In `package.json`:

```
"scripts": {
"build": "webpack --mode development"
"start-dev":"webpack serve"

},
```

- npx webpack //short for build script
- npx webpack --watch //updates files on changes
- npx webpack serve //short for start-dev script

# loaders
- npm install file-loader --save-dev     
- npm install css-loader style-loader sass-loader --save-dev 
- npm install babel-loader --save-dev