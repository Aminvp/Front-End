function fetchPrice() {
    return window.fetch('http://localhost:3000/random').then(res => res.json());
  }
  
  function renderPrice(price) {
    const priceElement = document.getElementById('price');
    priceElement.innerHTML = price;
  }
  
  fetchPrice()
    .then(res => res.price)
    .then(renderPrice);
  
  setInterval(() => {
    fetchPrice()
      .then(res => res.price)
      .then(renderPrice);
  }, 1000);
