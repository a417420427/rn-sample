const express = require("express");
const fs = require("fs");
const path = require("path");
const ServerRenderer = require("./renderer");
const app = express();

const isProd = process.env.NODE_ENV === "production" 
let renderer;
let readyPromise;
let template = fs.readFileSync(path.resolve(__dirname, '../index.html'), "utf-8");

if (isProd) {
  // 静态资源映射到dist路径下
  app.use("/dist", express.static(path.join(__dirname, "../dist/server")));

  let bundle = require("../dist/server-bundle.json");
  let clientManifest = require("../dist/client-manifest.json"); 
  renderer = new ServerRenderer(bundle, template, clientManifest);
} else {
  readyPromise = require("./dev-server")(app, (
    bundle,
    clientManifest) => {
      renderer = new ServerRenderer(bundle, template, clientManifest);
  });
}

app.use("/dist", express.static(path.join(__dirname, "../dist")));

const render = (req, res, next) => {
  console.log("======enter server======");
  console.log("visit url: " + req.url);
  console.log(req.url.startsWith('/dist'));
  // 静态资源不进行重定向
  if(req.url.startsWith('/dist')) {
    next()
  } else {
    renderer.renderToString(req).then(({error, html}) => {
      if (error) {
        if (error.url) {
          res.redirect(error.url);
        } else if (error.code) {
          res.status(error.code).send("error code：" + error.code);
        }
      }
      res.send(html);
    }).catch(error => {
      console.log(error);
      res.status(500).send("Internal server error");
    });
  }
 
}

app.get("*", isProd ? render : (req, res) => {
  // 等待客户端和服务端打包完成后进行render
  readyPromise.then(() => render(req, res));
});

app.listen(3000, () => {
  console.log("Your app is running");
});
