## JamStack Website

#### TECH STACK
- **ReactJs** & **Bootstrap**
- Deployed in **Netlify** which is our CDN
- **Netlify** serverless functions
- **FaunDB** with Graphql(no REST)


#### Setting Up Netlify Functions
- Make a netlify.toml file which serves as the configuration file which includes:
```bash
    [build]
        functions = "serverless/netlify-functions"
    [[redirects]] 
        from = "/api/*" 
        to= "/.netlify/functions/:splat" 
        status = 200
        force = true
```
- The above configuration tells the following:
  - [build] -> Where our netlify functions folder is.
  - [[redirects]] -> By default netlify functions served from /.netlify/functions/:splat, instead we want it to serve from /api/:splat which will redirect it to actual /.netlify/functions/:splat.


#### How to Run

In the project directory, you can run:

#### `netlify dev`

To run this app locally, you'll need to install the `netlify-cli`
using `yarn add global netlify-cli`. The React app and the serverless
functions will be served at
[http://localhost:8888](http://localhost:8888).

You'll also need to add a `.env` file in the root directory and
include 
```bash
FAUNA_SECRET_KEY = <API key in https://dashboard.fauna.com/>
```

### Deployment

You can connect your repository to Netlify for Contiuous Integration
deployments. In the Netlify deploy configuration, tell Netlify to run
`yarn build` as the command and then serve the `build` directory.

You'll also need to add `FAUNA_SECRET_KEY` environment variable inside
of Netlify dashboard.

