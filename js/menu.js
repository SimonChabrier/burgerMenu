const menu = {

    init:function(){
        console.log('appInit');
        menu.addAllEventLIsteners();
    },

    addAllEventLIsteners:function(){
        console.log('add all listeners')

        document.getElementById('openBtn').addEventListener('click', () => {
            menu.handleOpenNav()
        });

        document.getElementById('closeBtn').addEventListener('click', () => {
            menu.handleCloseNav()
        });
    },

    handleOpenNav: function() {
        let sidenav = document.getElementById("idSidenav");
        sidenav.classList.add("active");
    },

    handleCloseNav: function() {
        let sidenav = document.getElementById("idSidenav");
        sidenav.classList.remove("active");
    },

}


document.addEventListener("DOMContentLoaded", menu.init);
