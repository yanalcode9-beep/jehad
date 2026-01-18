import { Component } from '../core/Component.js';
import { Header } from './Header.component.js';
import { About } from './About.component.js';
import { Video } from './Video.component.js';
import { Achievements } from './Achievements.component.js';
import { Contributions } from './Contributions.component.js';
import { Focus } from './Focus.component.js';
import { Experience } from './Experience.component.js';
import { Academic } from './Academic.component.js';
import { Connect } from './Connect.component.js';
import { Footer } from './Footer.component.js';
import { getStyles } from '../styles/main.styles.js';
import { getClientScript } from '../scripts/client.script.js';

export class Page extends Component {
    render() {
        const lang = this.props.lang || 'en';
        const isRTL = lang === 'ar';
        
        return `<!DOCTYPE html>
<html lang="${lang}" dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${this.t('header.title')}">
    <meta name="author" content="Yanal">
    <title>${this.t('header.name')}</title>
    <style>${getStyles(isRTL)}</style>
</head>
<body>
    <button id="languageToggle" class="language-toggle" aria-label="Switch Language">
        <span id="languageText">${this.t('language.switch')}</span>
    </button>
    <div id="particles"></div>
    <div class="container">
        ${new Header(this.props)}
        <div class="content">
            ${new About(this.props)}
            ${new Video(this.props)}
            ${new Achievements(this.props)}
            ${new Contributions(this.props)}
            ${new Focus(this.props)}
            ${new Experience(this.props)}
            ${new Academic(this.props)}
            ${new Connect(this.props)}
        </div>
        ${new Footer(this.props)}
    </div>
<script>window.currentLang = '${lang}';</script>
    <script src="/js/client.js"></script>
</body>
</html>`;
    }
}
