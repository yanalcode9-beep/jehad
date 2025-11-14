import express from 'express';
import { renderHomePage, render404 } from '../controllers/page.controller.js';

const router = express.Router();

router.get('/', renderHomePage);
router.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

router.use(render404);

export default router;
