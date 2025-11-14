import { Component } from '../core/Component.js';

export class Achievements extends Component {
    render() {
        const { data } = this.props;
        const achievementsHTML = data.profile.achievements.map(item => `
            <div class="stat-card">
                <span class="stat-number">${item.number}</span>
                <span class="stat-label">${this.t(item.key)}</span>
            </div>
        `).join('');
        return `
        <section class="section">
            <h2>${this.t('achievements.title')}</h2>
            <div class="stats">${achievementsHTML}</div>
        </section>`;
    }
}
