//Page Logo
import favi from '../images/favicon-32x32.png';

export const addLogo = () => {
    const logoTag = document.createElement('link');
    logoTag.rel = 'icon';
    logoTag.type = 'icon/image';
    logoTag.href = `${favi}`;
    document.querySelector('head').appendChild(logoTag);
}