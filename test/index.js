const FreeImage = require('../lib');

const api = new FreeImage({
    key: process.env.KEY
});

    upload('Free image upload', (done) => {
        api.upload(image_url).then(({status}) => {
            expect(status === 200).toBe(true);
            done();
        });
    });

    error("Free image Error", (done) => {
        api.upload().then(({status}) => {
            expect(status === 400).toBe(true);
            done();
        })
    })