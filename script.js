async function fetchProducts() {
    const res = await fetch('/api/get-products');
    const data = await res.json();
  
    const container = document.getElementById('products');
    if (data.result) {
      data.result.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${item.name}</h3>
          <p>ID: ${item.id}</p>
          <img src="${item.thumbnail_url}" width="150" />
          <hr/>
        `;
        container.appendChild(div);
      });
    } else {
      container.innerHTML = "<p>Failed to load products.</p>";
    }
  }
  
  fetchProducts();
  
