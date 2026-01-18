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

export class Page extends Component {
    render() {
        return `
            <button 
                id="languageToggle" 
                class="language-toggle" 
                aria-label="Switch Language"
            >
                ${this.t('language.switch')}
            </button>

            <div id="particles"></div>

            <div class="container">
                ${new Header(this.props).render()}

                <div class="content">
                    ${new About(this.props).render()}
                    ${new Video(this.props).render()}
                    ${new Achievements(this.props).render()}
                    ${new Contributions(this.props).render()}
                    ${new Focus(this.props).render()}
                    ${new Experience(this.props).render()}
                    ${new Academic(this.props).render()}
                    ${new Connect(this.props).render()}
                </div>

                ${new Footer(this.props).render()}
            </div>
        `;
    }
}
