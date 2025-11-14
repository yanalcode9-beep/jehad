import { Component } from '../core/Component.js';

export class Video extends Component {
    render() {
        const { data } = this.props;
        return `
        <section class="section">
            <h2>${this.t('video.title')}</h2>
            <div class="video-section">
                <div class="video-container">
                    <video id="researchVideo" loop playsInline controls>
                        <source src="${data.profile.video}" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>`;
    }
}
