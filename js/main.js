'use strict'

window.addEventListener('load', function(){
    
    /* Menu movil */
    var menu = document.querySelector('#menu-movil'),
        nave = document.querySelector('#nave');
    menu.addEventListener('click', function(){
        var estilo = nave.style.display;
        if(estilo === 'none'){
            nave.style.display = "block";
        } else {
            nave.style.display = "none";
        }
    });

    /* Tabs */
    var tab1 = document.querySelector('#tab01'),
        tab2 = document.querySelector('#tab02');

    var tabc1 = document.querySelector('#tabc01'),
        tabc2 = document.querySelector('#tabc02');
        
        
    tab1.addEventListener('click', function(){
        tabc1.style.display = 'grid';
        tabc2.style.display = 'none';        
    });

    tab2.addEventListener('click', function(){
        tabc2.style.display = 'grid';
        tabc1.style.display = 'none';
    });

});