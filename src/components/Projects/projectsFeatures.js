export const catLabels = (cat) => `catLabel ${catClassNamer(cat)}`;

const catClassNamer = (cat) => {
    switch (cat) {
        case 'Front-End':
            return 'catFrontend'
        case 'Back-End':
            return 'catBackend'
        case 'Full-Stack':
            return 'catFullstack'
        case 'wordpress':
            return 'catWordpress'
        default: 
        return '';
    }
}

export const techLabels = (tech) => `techLabel ${techClassNamer(tech)}`;

const techClassNamer = (tech) => {
    switch (tech) {
        case 'JavaScript':
            return 'techJS';
        case 'React':
            return 'techReact';
        case 'Redux': 
            return 'techRedux';
        case 'HTML':
            return 'techHTML'
        case 'CSS':
            return 'techCSS'
        default: 
        return '';
    }
}
