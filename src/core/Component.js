export class Component {
    constructor(props = {}) {
        this.props = props;
        this.children = [];
    }
    
    render() {
        throw new Error('Component must implement render() method');
    }
    
    addChild(child) {
        this.children.push(child);
        return this;
    }
    
    toString() {
        return this.render();
    }
    
    t(key) {
        const lang = this.props.lang || 'en';
        const { translations } = this.props;
        return translations[lang][key] || key;
    }
    
    getData(obj) {
        const lang = this.props.lang || 'en';
        if (typeof obj === 'object' && obj[lang]) {
            return obj[lang];
        }
        return obj;
    }
}
