const menu = []; // Lista de itens do menu

// Atualiza a exibição dos itens do menu
function updateMenuDisplay() {
    const adminMenu = document.getElementById('admin-menu');
    adminMenu.innerHTML = ''; // Limpa a lista atual

    menu.forEach((item, index) => {
        adminMenu.innerHTML += `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span>R$ ${item.price}</span>
                    <button onclick="removeItem(${index})">Remover</button>
                </div>
            </div>
        `;
    });
}

// Adiciona um novo item ao menu
function addItem() {
    const name = document.getElementById('item-name').value;
    const description = document.getElementById('item-description').value;
    const price = document.getElementById('item-price').value;
    const image = document.getElementById('item-image').value;

    // Verifica se todos os campos foram preenchidos
    if (name && description && price && image) {
        menu.push({ name, description, price, image });
        updateMenuDisplay();
        document.getElementById('admin-form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Remove um item da lista
function removeItem(index) {
    menu.splice(index, 1); // Remove o item da lista
    updateMenuDisplay(); // Atualiza a exibição
}
