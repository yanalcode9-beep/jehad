import { Component } from '../core/Component.js';

export class Academic extends Component {
    render() {
        const { data } = this.props;
        const lang = this.props.lang || 'en';
        const items = data.academic[lang];
        const academicHTML = items.map(item => `<li>${item}</li>`).join('');
        return `
        <section class="section">
            <h2>${this.t('academic.title')}</h2>
            <p>${this.t('academic.intro')}</p>
            <ul>${academicHTML}</ul>
        </section>`;
    }
}
