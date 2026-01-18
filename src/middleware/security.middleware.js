import helmet from 'helmet';
import compression from 'compression';
import express from 'express';
import path from 'path';

export function configureMiddleware(app, dirname) {
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: ["'self'"],
                    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
                    imgSrc: ["'self'", "data:"],
                    mediaSrc: ["'self'", "data:"],
                    fontSrc: ["'self'", "https://fonts.gstatic.com"],
                    connectSrc: ["'self'"],
                    upgradeInsecureRequests: null
                }
            },
            crossOriginEmbedderPolicy: false,
            crossOriginResourcePolicy: { policy: "cross-origin" }
        })
    );

    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/assets', express.static(path.join(dirname, 'assets')));
    app.use('/public', express.static(path.join(dirname, 'public')));
    app.use('/js', express.static(path.join(dirname, 'public/js')));
}
