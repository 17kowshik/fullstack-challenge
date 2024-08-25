const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "venigalla_kowshik_eswara_chaitanya_17122005";
    const email = "kowshik.21bce7146@vitapstudent.ac.in";
    const roll_number = "21BCE7146";
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_lowercase_alphabet = alphabets.filter(item => /[a-z]/.test(item)).sort().pop() || null;

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
