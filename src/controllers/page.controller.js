import { Page } from '../components/Page.component.js';
import { translations, data } from '../config/translations.js';

export function renderHomePage(req, res) {
    let lang = req.query.lang || 'en';
    if (!['en', 'ar'].includes(lang)) lang = 'en';
    
    const page = new Page({
        lang: lang,
        translations: translations,
        data: data
    });
    
    const html = page.render();
    res.send(html);
}

export function render404(req, res) {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>404 - Not Found</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                .container {
                    text-align: center;
                }
                h1 { font-size: 6em; margin: 0; }
                p { font-size: 1.5em; }
                a {
                    color: white;
                    text-decoration: none;
                    padding: 15px 30px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50px;
                    display: inline-block;
                    margin-top: 20px;
                    transition: background 0.3s;
                }
                a:hover { background: rgba(255,255,255,0.3); }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>404</h1>
                <p>Page Not Found</p>
                <a href="/">Go Home</a>
            </div>
        </body>
        </html>
    `);
}
