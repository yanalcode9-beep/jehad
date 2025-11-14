import { Component } from '../core/Component.js';

export class Header extends Component {
    render() {
        const { data } = this.props;
        return `
        <header>
            <div class="profile-section">
                <img src="${data.profile.image}" alt="${this.t('header.name')}" class="profile-image"/>
                <div>
                    <h1>${this.t('header.name')}</h1>
                    <p class="subtitle">${this.t('header.title')}</p>
                    <p class="subtitle">${this.t('header.subtitle')}</p>
                </div>
            </div>
        </header>`;
    }
}
