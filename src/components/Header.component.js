import { Component } from '../core/Component.js';

export class Header extends Component {
    render() {
        const { data } = this.props;
        const profileImage = data?.profile?.image || '/assets/profile.jpg';

        return `
        <header>
            <div class="profile-section">
                <img 
                    id="profileImage"
                    src="${profileImage}" 
                    alt="Dr. Jehad M. Hamamreh" 
                    class="profile-image"
                />

                <div>
                    <h1>${this.t('header.name')}</h1>
                    <p class="subtitle">${this.t('header.title')}</p>
                    <p class="subtitle">${this.t('header.subtitle')}</p>
                </div>
            </div>
        </header>
        `;
    }

    afterRender() {
        const img = document.getElementById('profileImage');
        if (img) {
            img.addEventListener('error', () => {
                console.warn('Profile image failed to load, using fallback.');
                img.src = '/assets/profile.jpg';
            });
        }
    }
}
