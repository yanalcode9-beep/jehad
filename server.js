/**
 * Dr. Jehad M. Hamamreh Professional Website
 * Component-Based Architecture with i18n
 * Author: Yanal
 * Version: 3.0.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { configureMiddleware } from './src/middleware/security.middleware.js';
import routes from './src/routes/index.routes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
configureMiddleware(app, __dirname);

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   🚀 Dr. Jehad Professional Website                           ║
║   📦 Component-Based Architecture                             ║
║   🌐 Bilingual Support (English/Arabic)                       ║
║                                                                ║
║   Server: http://localhost:${PORT.toString().padEnd(47)}║
║   Environment: ${(process.env.NODE_ENV || 'development').padEnd(41)}║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
    `);
});
