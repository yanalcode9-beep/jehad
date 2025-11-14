import { Component } from '../core/Component.js';

export class Connect extends Component {
    render() {
        const { data } = this.props;
        const linksHTML = data.links.map(link => `
            <a href="${link.url}" class="link-button" target="_blank" rel="noopener noreferrer">
                <span>${link.text}</span>
            </a>
        `).join('');
        return `
        <section class="section">
            <h2>${this.t('connect.title')}</h2>
            <div class="links">${linksHTML}</div>
        </section>`;
    }
}
