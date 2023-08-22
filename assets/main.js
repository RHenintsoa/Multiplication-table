// Récupération div box pour l'affichage
var box = document.getElementsByClassName('box')[0];

for (var i = 1; i <= 9; i++) {
    // Création tableau pour chaque table
    var table = document.createElement('table');
    table.className = 'table table-hover';

    //Création élément tableau : thead
    var thead = document.createElement('thead');
    var th = document.createElement('th');
    th.className = 'text-center title';
    th.textContent = 'TABLE ' + i;
    thead.appendChild(th);

    // Création élément tableau : tbody
    var tbody = document.createElement('tbody');

    // Affichage tableau : thead+tbody
    table.appendChild(thead);
    table.appendChild(tbody);

    // Affichage div box qui contient le tableau
    box.appendChild(table);

        for (var j = 1; j <= 10; j++) {
            var result = i * j;
            // contenu tr du tbody
            var tr = document.createElement('tr');
            tr.innerHTML = 

                ` <td>`+i+`x`+j+`=`+result+`</td>`
            tbody.appendChild(tr);
        }
}




