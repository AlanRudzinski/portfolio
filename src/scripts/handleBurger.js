import animateMobileLines from '../scripts/Animations/animateMobileLines';
import DOM from '../scripts/commons/DOMelements';

const btn = document.querySelector( '.btn-menu' );
const menu = document.querySelector( '.navigation__menu' );
const links = DOM.hmgLinks;

const hmbListener = () => {
    btn.addEventListener( 'click', function() {
        const isOpened = changeBurgerState();
        if(!isOpened) {
          animateMobileLines([...Object.values(DOM.hmg_mobileLines)])
        };
    } );

    links.forEach(el => {
      el.addEventListener('click', function() {
        changeBurgerState()
      })
    })

}

function changeBurgerState() {
  const isOpened = btn.getAttribute( 'aria-expanded' ) === 'true';
  btn.classList.toggle( 'btn-menu_open', !isOpened );
  btn.setAttribute( 'aria-expanded', String( !isOpened ) );
  menu.classList.toggle( 'navigation__menu_open', !isOpened );
  return isOpened
}

export default hmbListener;