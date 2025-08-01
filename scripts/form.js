const products = [
    { id: 'p1', name: 'Laptop Pro 14' },
    { id: 'p2', name: 'SmartWatch Series 9' },
    { id: 'p3', name: 'Wireless Earbuds X' },
    { id: 'p4', name: '4K Monitor UltraWide' },
  ];
  
  const select = document.querySelector('#productName');
  
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });
  