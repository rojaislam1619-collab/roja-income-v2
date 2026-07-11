const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // আপনার HTML ফাইলটি 'public' ফোল্ডারে রাখুন

app.listen(PORT, () => {
    console.log(`সার্ভার চলছে ${PORT} পোর্টে`);
});
