# Installation
```
npm install node-freeimage --save
```

# Usage
```js
const ClientApi = require("node-freeimage");

const api = new ClientApi({
    key: "YOUR API KEY"
});

/**
 * @param { * } IMAGE Either a image URL or a base64 encoded image string. You can also use FILES["source"] in your request.. up to 32MB
 * /

api.upload("IMAGE URL").then(status => console.log(status))
```