const htmlPdf = require('html-pdf-chrome');

const html = '<p>Hello, world!</p>';
const options = {
    port: 9222, // port Chrome is listening on
};

htmlPdf.create(html, options).then((pdf) => pdf.toFile('test.pdf'));
