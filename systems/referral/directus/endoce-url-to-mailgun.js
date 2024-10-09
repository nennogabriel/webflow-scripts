function encodeFormData(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

module.exports = async function(data) {
    const emailData = {
        from: 'ZIGChain Team <team@mail.zigchain.com>',
        to: data.$trigger.payload.email,
        subject: 'Welcome to ZIGChain',
        html: `
            <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Template</title>
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;600;700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Red Hat Text', Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #000;
                        color: #fff;
                    }
                    table {
                        font-family: inherit;
                    }
                </style>
            </head>
            <body>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#000;color:#fff;background-image:url('https://example.com/background.jpg');background-repeat:no-repeat;background-size:cover;">
                    <tr>
                        <td align="center">
                            <table width="800" cellpadding="0" cellspacing="0" border="0" style="max-width: 800px; padding: 20px;">
                                <tr>
                                    <td align="left" style="padding: 20px;">
                                        <span style="font-size: 40px; line-height: 46px; color: #ffffff;">Welcome Wealth Seeker</span>
                                        <h1 style="margin: 0; font-size: 87px; line-height: 84px; font-weight: 600; color: #ffffff;">Your Quest <br>Begins</h1>
                                        <p style="margin-top: 200px; font-size: 52px; line-height: 46px; font-weight: bold; color: #ffffff;">Dear Wealth Seeker,</p>
                                        <p style="font-size: 31px; line-height: 43px; color: #ffffff;">Welcome to your Wealth Generation Quest! By signing up, you have taken the first step to unlocking the <span style="font-weight: 600; color: #229FB4;">Wealth Pass.</span></p>
                                        <p style="font-size: 31px; line-height: 43px; color: #ffffff;">The <span style="font-weight: 600; color: #229FB4;">Wealth Pass</span> will serve as your gateway into exclusive products, events, giveaways, and many more surprises within the <span style="font-weight: 600; color: #229FB4;">ZIGChain</span> ecosystem. The pass is limited in quantity with <span style="font-weight: 600; color: #229FB4;">100 whitelist spots</span> available in the first phase.</p>
                                        <p style="font-size: 31px; line-height: 43px; color: #ffffff;">How to make sure you are one of the first 100? Generate your referral link, if not already done, and share your quest with others. The more seekers that join through your invite, the more you level up on the leaderboard!</p>
                                        <h3 style="font-weight: bold; color: #ffffff;">What's next?</h3>
                                        <p style="font-size: 31px; line-height: 43px; color: #ffffff;">Stay tuned to our X to keep up with the latest announcements & network updates. We'll be sharing exclusive sneak peeks, tips on how to get your hands on the <span style="font-weight: 600; color: #229FB4;">Wealth Pass,</span> and information about secret rewards exclusively available to early participants.</p>
                                        <a href="#" style="font-size: 30px; line-height: 36px; display: inline-block; padding: 16px 80px; background: linear-gradient(-63deg, #1DB3B0, #347FBF); color: #000000; text-decoration: none; border-radius: 5px; font-weight: 700;">Follow Our X</a>
                                        <hr style="margin-top: 80px; border: 1px solid #ffffff; width: 100%;">
                                        <p style="color: #ffffff;">Your contact information will be confidential and stored and processed securely in accordance with applicable local laws. You can find out more by visiting our <a href="https://app.zignaly.com/legal/privacy" style="color: #ffffff; text-decoration: underline;">Privacy Policy</a></p>
                                        <p style="color: #ffffff;">This email and any attachments are intended solely for the use of the addressee. If you are not the intended recipient, please notify the sender immediately and delete this message.</p>
                                        <p style="color: #ffffff;">ZIGChain</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
        `
    };

    const encodedData = encodeFormData(emailData);

    return { data: encodedData };
}