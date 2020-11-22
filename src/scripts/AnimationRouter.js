import AnimateScreenFollow from './Animations/NavLinks/AnimateScreenFollow'
import DOM from './commons/DOMelements'

export default () => {
    function onRouteChanged(e) {
        const currentHash = e.oldURL.slice(e.oldURL.lastIndexOf("#"))
        const nextHashLocation = document.getElementById((window.location.hash + '-page').slice(1));
       
        AnimateScreenFollow(nextHashLocation, currentHash)
        
        // if(window.location.hash === '#technology'){
        //    AnimateScreenFollow(hashLocation, 3200, {element: DOM.svgs.homeTechnologyLine, break: 2});
        // }else if(window.location.hash === '#project') {
        //    AnimateScreenFollow(hashLocation, 3000, {element: DOM.svgs.homeProjectLine, break: 1})
        // } else {
        //     AnimateScreenFollow(hashLocation)
        // }
    }

    window.addEventListener('hashchange', e => onRouteChanged(e));
}   