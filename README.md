# What Is This?
- A Lightweight Node.js module to easily upload image through [freeimage.host](https://freeimage.host/) API

# Installation
```
npm install freeimage.js --save
```

# Usage
```js
const ClientApi = require("freeimage.js");

const api = new ClientApi({
    key: "YOUR API KEY"
});

/**
 * @param { * } IMAGE Either a image URL or a base64 encoded image string. You can also use FILES["source"] in your request.. up to 32MB
 **/

api.upload("IMAGE URL").then(status => console.log(status))
```

# Output

```
{
  success: true,
  status: 200,
  data: {
    name: 'My Girl',
    extension: 'jpg',
    width: '1920',
    height: '1200',
    size: 338822,
    time: '1603468633',
    expiration: '0',
    adult: '1',
    status: '0',
    cloud: '0',
    vision: '1',
    likes: '0',
    description: null,
    original_exifdata: null,
    original_filename: 'My_Girl.jpg',
    views_html: '0',
    views_hotlink: '0',
    access_html: '0',
    access_hotlink: '0',
    file: { resource: [Object] },
    is_animated: 0,
    nsfw: 0,
    id_encoded: '3VyDzv',
    ratio: 1.6,
    size_formatted: '338.8 KB',
    filename: '3VyDzv.jpg',
    url: 'https://iili.io/3VyDzv.jpg',
    url_short: 'https://freeimage.host/',
    url_seo: 'https://freeimage.host/i/my-girl.3VyDzv',
    url_viewer: 'https://freeimage.host/i/3VyDzv',
    url_viewer_preview: 'https://freeimage.host/i/3VyDzv',
    url_viewer_thumb: 'https://freeimage.host/i/3VyDzv',
    image: {
      filename: '3VyDzv.jpg',
      name: '3VyDzv',
      mime: 'image/jpeg',
      extension: 'jpg',
      url: 'https://iili.io/3VyDzv.jpg',
      size: 338822
    },
    thumb: {
      filename: '3VyDzv.th.jpg',
      name: '3VyDzv.th',
      mime: 'image/jpeg',
      extension: 'jpg',
      url: 'https://iili.io/3VyDzv.th.jpg'
    },
    medium: {
      filename: '3VyDzv.md.jpg',
      name: '3VyDzv.md',
      mime: 'image/jpeg',
      extension: 'jpg',
      url: 'https://iili.io/3VyDzv.md.jpg'
    },
    display_url: 'https://iili.io/3VyDzv.md.jpg',
    display_width: '1920',
    display_height: '1200',
    views_label: 'views',
    likes_label: 'likes',
    how_long_ago: '20 minutes ago',
    date_fixed_peer: '2020-10-23 15:57:13',
    title: 'My Girl',
    title_truncated: 'My Girl',
    title_truncated_html: 'My Girl',
    is_use_loader: false
  }
```