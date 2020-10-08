import AnimateScreenFollow from './Animations/NavLinks/AnimateScreenFollow'
import DOM from './commons/DOMelements'

export default () => {
    function onRouteChanged() {
        const hashLocation = document.getElementById((window.location.hash + '-page').slice(1));
        AnimateScreenFollow(hashLocation);
    }

    window.addEventListener('hashchange', onRouteChanged);
}