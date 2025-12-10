document.addEventListener('DOMContentLoaded', () => {
    // VARIÁVEIS DECLARADAS NO ESCOPO CORRETO
    const menuToggle = document.querySelector('.menu-toggle'); 
    const sideMenu = document.getElementById('side-menu'); 
    

    if (menuToggle && sideMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            sideMenu.classList.toggle('is-open');

            // Garante que qualquer sub-menu seja fechado ao fechar o menu principal
            document.querySelectorAll('.has-submenu.open').forEach(item => {
                item.classList.remove('open');
            });
        });
    }


    const submenuToggles = document.querySelectorAll('.submenu-toggle');

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            
            const parentLi = toggle.closest('.has-submenu');

            if (parentLi) { 
                parentLi.classList.toggle('open');
                
                document.querySelectorAll('.has-submenu.open').forEach(item => {
                    if (item !== parentLi){
                        item.classList.remove('open');
                    }
                });
            }
        });
    });
    
    const menuLinks = sideMenu ? sideMenu.querySelectorAll('a') : [];
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sideMenu && menuToggle && sideMenu.classList.contains('is-open')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                sideMenu.classList.remove('is-open');
            }
        });
    });
}); 