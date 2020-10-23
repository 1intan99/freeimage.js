const post = require('request-promise');

class NodeFreeImage {
    constructor({key}) {
        this.key = key
    }

    async upload(image) {
        const op = {
            method: "POST",
            uri: "https://freeimage.host/api/1/upload",
            form: {
                key: this.key,
                image
            },
            json: true
        }

        try {
            const result = await post(op)
            return {
                "status": 200,
                "data": result.data
            }
        } catch (e) {
            return{
                "status": e.error.status_code,
                "message": e.error.status_txt,
                "error": e.error.error
            }
        }
    }
}

module.exports = NodeFreeImage;