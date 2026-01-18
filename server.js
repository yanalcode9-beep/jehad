import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { configureMiddleware } from './src/middleware/security.middleware.js';
import routes from './src/routes/index.routes.js';
import { render404 } from './src/controllers/page.controller.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

configureMiddleware(app, __dirname);

app.use('/', routes);

app.use(render404);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   🚀 Dr. Jehad Professional Website                           ║
║   📦 Component-Based Architecture                             ║
║   🌐 Bilingual Support (English/Arabic)                       ║
║                                                                ║
║   Local: http://localhost:${PORT.toString().padEnd(45)}║
║   Network: http://172.16.107.36:${PORT.toString().padEnd(39)}║
║   Environment: ${(process.env.NODE_ENV || 'development').padEnd(41)}║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
    `);
});