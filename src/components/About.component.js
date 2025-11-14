import { Component } from '../core/Component.js';

export class About extends Component {
    render() {
        return `
        <section class="section">
            <h2>${this.t('about.title')}</h2>
            <p>${this.t('about.description')}</p>
            <div class="highlight-box">
                <p><strong>${this.t('about.education')}:</strong> ${this.t('about.education.text')}</p>
            </div>
        </section>`;
    }
}
