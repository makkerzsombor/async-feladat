document.addEventListener('DOMContentLoaded', () => {    

    // Mindig meg kell hívni
    function adatmegjelenites(termekek) {

        let termekLista = document.getElementById('adatok');
        termekLista.textContent = '';
        for (let p of termekek){
            let li = document.createElement('li');
            li.innerHTML = p.title + '<br> leírás: ' + p.description + '<br> ár: ' + p.price + '<br> rating: ' + p.rating + '<br> raktáron: ' + p.stock + '<br> márka: ' + p.brand + '<br> kategoria: ' + p.category;
            termekLista.appendChild(li);
        }        
    }

    // Minden
    document.getElementById('minden').addEventListener('click', async () => {        
        let response = await fetch('products.json');
        let eredmeny = await response.json();
        adatmegjelenites(eredmeny.products);
    });

    // ABC
    document.getElementById('abc').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let abc = eredmeny.products.sort(function(a, b){
            let anev = a.title.toUpperCase();
            let bnev = b.title.toUpperCase();

            if(anev < bnev){
                return -1;
            }else if(anev > bnev){
                return 1;
            }else {
                return 0;
            }
        });

        adatmegjelenites(abc);
    });

    // Legdrágább
    document.getElementById('ar').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let sorrendes = eredmeny.products.sort((a, b) => {
            if(a.price < b.price){
                return 1;
            }else if(a.price > b.price){
                return -1;
            }else {
                return 0;
            }
        });

        adatmegjelenites(sorrendes);
    });

    // Leírásos
    document.getElementById('kereso').addEventListener('click', async () => {
        let szoveg = document.getElementById('keresett').value;
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let leirasos = eredmeny.products.contains(szoveg);
        adatmegjelenites(leirasos);
    });

    
    // Ajánlott
    document.getElementById('100Alatt').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let szazAlatt = eredmeny.products.filter(e => e.price <= 100);

        let ertekeleses = szazAlatt.sort((a, b) => {
            if(a.rating < b.rating){
                return 1;
            }else if(a.rating > b.rating){
                return -1;
            }else {
                return 0;
            }
        });
        adatmegjelenites(ertekeleses);
    });

});

