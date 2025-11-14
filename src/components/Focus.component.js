import { Component } from '../core/Component.js';

export class Focus extends Component {
    render() {
        const { data } = this.props;
        const lang = this.props.lang || 'en';
        const areas = data.focusAreas[lang];
        const areasHTML = areas.map(area => `<div class="expertise-item"><span>${area}</span></div>`).join('');
        return `
        <section class="section">
            <h2>${this.t('focus.title')}</h2>
            <div class="expertise-grid">${areasHTML}</div>
        </section>`;
    }
}
