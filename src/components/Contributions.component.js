import { Component } from '../core/Component.js';

export class Contributions extends Component {
    render() {
        const { data } = this.props;
        const contributionsHTML = data.contributions.map(item => `
            <li><strong>${this.getData(item.title)}:</strong> ${this.getData(item.description)}</li>
        `).join('');
        return `
        <section class="section">
            <h2>${this.t('contributions.title')}</h2>
            <p>${this.t('contributions.intro')}</p>
            <ul>${contributionsHTML}</ul>
            <div class="highlight-box"><p>${this.t('contributions.note')}</p></div>
        </section>`;
    }
}
