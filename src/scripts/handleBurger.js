const btn = document.querySelector( '.btn-menu' );
const menu = document.querySelector( '.navigation__menu' );

const hmbListener = () => {
    btn.addEventListener( 'click', function() {
        const isOpened = btn.getAttribute( 'aria-expanded' ) === 'true';
        
        btn.classList.toggle( 'btn-menu_open', !isOpened );
        btn.setAttribute( 'aria-expanded', String( !isOpened ) );
        menu.classList.toggle( 'navigation__menu_open', !isOpened );
      } );
}

export default hmbListener;