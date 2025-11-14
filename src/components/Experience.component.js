import { Component } from '../core/Component.js';

export class Experience extends Component {
    render() {
        const { data } = this.props;
        const experienceHTML = data.experience.map(item => `
            <li><strong>${this.getData(item.title)}</strong> - ${this.getData(item.organization)}</li>
        `).join('');
        return `
        <section class="section">
            <h2>${this.t('experience.title')}</h2>
            <ul>${experienceHTML}</ul>
        </section>`;
    }
}
