document.addEventListener('DOMContentLoaded', function() {
    const tiraGostoItems = [
       { name: 'Batata frita',
            description: 'Croquetes dourados e crocantes de batata frita, servidos quentes e temperados na medida certa. Acompanhamento perfeito para qualquer refeição.',
            price: 'R$ 25,00 ',
            image: 'images/camarao-alho.jpg'
        },
        {
            name: 'Macaxeira frita',
            description: 'Fatias perfeitas de macaxeira, fritas até a perfeição dourada e crocante. Um acompanhamento irresistível para qualquer refeição.',
            price: 'R$ 25,00',
            image: 'images/peixe-grelhado.jpg'
        },
        {
            name: 'Caranguejo',
            description: 'Caranguejos cozidos em um rico molho de leite de coco e azeite de dendê, trazendo os sabores autênticos da culinária nordestina. (porçao min 3uni',
            price: 'R$ 30,00',
            image: 'images/moqueca.jpg'},
        
        {
            name: 'Casquinha De Caranguejo',
            description: 'Deliciosa casquinha de caranguejo, feita com carne suculenta de caranguejo temperada com ervas e especiarias, gratinada até a perfeição. Uma verdadeira iguaria do mar.',
            price: 'R$ 30,00',
            image: '',
        },
        { name: 'sf', description: 'fsf', price: 'fs', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const guarnicoesItems = [
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const aperitivosItems = [
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const bebidasItems = [
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const whiskysImportadosItems = [
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const sucosItems = [
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const refeicoesDePeixeItems = [
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const mariscosItems = [
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const carnesItems = [
        { name: 's', description: 's', price: 's', image: '' },
        { name: 'fg', description: 'da', price: 'ada', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' },
        { name: '', description: '', price: '', image: '' }
    ];

    const renderItems = (items, containerId, itemClass) => {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add(itemClass);

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>${item.price}</strong></p>
            `;

            container.appendChild(itemElement);
        });
    };

    renderItems(tiraGostoItems, 'tira-gosto-items', 'tira-gosto-item');
    renderItems(bebidasItems, 'bebidas-items', 'bebida-item');
    renderItems(aperitivosItems, 'aperitivos-items', 'aperitivo-item');
    renderItems(whiskysImportadosItems, 'whiskys-importados-items', 'whisky-importado-item');
    renderItems(sucosItems, 'sucos-items', 'suco-item');
    renderItems(refeicoesDePeixeItems, 'refeicoes-de-peixe-items', 'refeicao-de-peixe-item');
    renderItems(mariscosItems, 'mariscos-items', 'marisco-item');
    renderItems(carnesItems, 'carnes-items', 'carne-item');
});

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Define the default tab to be open
document.getElementsByClassName("tablinks")[0].click();
