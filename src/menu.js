export function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');

    // Menu Heading
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    menuDiv.appendChild(heading);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItems');

    // Sample menu items
    const menuData = [
        { name: 'Burger', price: '$5', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Pizza', price: '$10', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Pasta', price: '$8', img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Salad', price: '$6', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    menuData.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItemDiv');

        // Image container
        const menuImgBox = document.createElement('div');
        menuImgBox.classList.add('menuImgBox');
        menuImgBox.innerHTML = `<img src="${item.img}" alt="${item.name}">`;

        // Menu Header (Item Name & Price)
        const menuHeader = document.createElement('div');
        menuHeader.classList.add('menuHeader');

        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;

        menuHeader.appendChild(itemName);
        menuHeader.appendChild(itemPrice);

        // Append image and header to the item div
        menuItemDiv.appendChild(menuImgBox);
        menuItemDiv.appendChild(menuHeader);

        // Add menu item div to menuItems container
        menuItems.appendChild(menuItemDiv);
    });

    menuDiv.appendChild(menuItems);
    return menuDiv;
}