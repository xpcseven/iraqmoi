const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhooks/clerk', (req, res) => {
    const event = req.body;

    // التحقق من نوع الحدث
    if (event.type === 'user.created' || event.type === 'user.updated') {
        const username = event.data.username;

        // التحقق من القواعد المفروضة على username
        if (!isValidUsername(username)) {
            // إذا كان الاسم غير صالح، قم بإرجاع خطأ أو اتخاذ إجراء آخر
            console.log('Invalid username:', username);
        }
    }

    res.status(200).send('Webhook received');
});

const isValidUsername = (username) => {
    // قم بتعريف القواعد هنا
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
};

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
