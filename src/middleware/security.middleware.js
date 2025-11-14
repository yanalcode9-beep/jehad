import helmet from 'helmet';
import compression from 'compression';
import express from 'express';
import path from 'path';

export function configureMiddleware(app, dirname) {
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'"],
                styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
                imgSrc: ["'self'", "data:", "https:"],
                mediaSrc: ["'self'"],
                fontSrc: ["'self'", "https://fonts.gstatic.com"],
                connectSrc: ["'self'"]
            }
        }
    }));
    
    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/assets', express.static(path.join(dirname, 'assets')));
    app.use('/public', express.static(path.join(dirname, 'public')));
}
