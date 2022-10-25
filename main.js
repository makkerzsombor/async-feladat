

document.addEventListener('DOMContentLoaded', () => {    

    // Minden
    document.getElementById('minden').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let termekLista = document.getElementById('adatok');
        termekLista.textContent = '';
        // ha apple kell akkor appleTermekek a forba
        for (let p of eredmeny.products){
            let li = document.createElement('li');
            li.textContent = p.title + ' leírás: ' + p.description + ' ár: ' + p.price + ' rating: ' + p.rating + ' raktáron: ' + p.stock +
            ' márka: ' + p.brand + ' kategoria: ' + p.category;
            termekLista.appendChild(li);
        }
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

        let termekLista = document.getElementById('adatok');
        termekLista.textContent = '';
        // ha apple kell akkor appleTermekek a forba
        for (let p of abc){
            let li = document.createElement('li');
            li.textContent = p.title;
            termekLista.appendChild(li);
        }
    });

    // Legdrágább
    document.getElementById('ar').addEventListener('click', () => {

    });

    // Leírásos
    document.getElementById('kereso').addEventListener('click', () => {
        let szoveg = document.getElementById('keresett').value;
    });

    
    // Ajánlott
    document.getElementById('100Alatt').addEventListener('click', () => {

    });

});

