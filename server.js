import express from 'express';

const service = express();

service.get('/', (req, res) => {
    res.send('Graph QL');
});

service.listen(8765, () => console.log("Server started and called back :)"));