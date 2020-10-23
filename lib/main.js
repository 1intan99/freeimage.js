const ps = require('request-promise');

class FreeImage {
    constructor({key}) {
        this.key = key;
    }

    async upload(image) {
        const op = {
            method: "POST",
            uri: 'https://freeimage.host/api/1/upload',
            form: {
                key: this.key,
                image
            },
            json: true
        };
        try {
            const result = await ps(op);

            return {
                "success": true,
                "status": 200,
                "data": result.data,
            };
        } catch (err) {
            return {
                "success": false,
                "status": err.error.status_code,
                "message": err.error.status_text,
                "error": err.error.error
            };
        }
    }
}

module.exports = FreeImage;