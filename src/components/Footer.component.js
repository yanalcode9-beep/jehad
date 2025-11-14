import { Component } from '../core/Component.js';

export class Footer extends Component {
    render() {
        return `
        <footer>
            <p>&copy; 2025 ${this.t('header.name')}. ${this.t('footer.rights')}</p>
            <p>${this.t('footer.collaboration')}</p>
            <p style="margin-top: 10px; font-size: 0.9em; opacity: 0.8;">
                ${this.t('footer.developed')} Yanal | ${this.t('footer.powered')}
            </p>
        </footer>`;
    }
}
