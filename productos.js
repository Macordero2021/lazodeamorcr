document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("categoryFilter");
    const subcategoryFilter = document.getElementById("subcategoryFilter");
    const sizeFilter = document.getElementById("sizeFilter");
    const priceFilter = document.getElementById("priceFilter");
    const clearButton = document.getElementById("clearFilters");
    const products = document.querySelectorAll(".product-card");

    const subcategories = {
        Mujeres: ["Blusas", "Shorts", "Faldas", "Abrigos", "Pijamas", "Vestidos", "Zapatos", "Lenceria", "Enterizos", "Deportiva", "Conjuntos","Trajes de baño"],
        Hombres: ["Abrigos", "Pijamas", "Deportiva","Camisetas"],
        Niñas: ["Blusas", "Faldas", "Vestidos","Conjuntos","Trajes de baño"],
        Niños: ["Camisetas"],
        Accesorios: ["Uñas", "Moda","Hogar","Aretes","Bolsos","Juegos","Comida","Collares","Llaveros","Escolares","Maquillaje","Tecnología","Deportivos","Decoración"], 
    };

    function updateSubcategories() {
      const selectedCategory = categoryFilter.value;
      console.log("Categoría seleccionada:", selectedCategory); // DEBUG

      subcategoryFilter.innerHTML = '<option value="">Subcategoría</option>';

      if (subcategories[selectedCategory]) {
        subcategories[selectedCategory].forEach(sub => {
          const option = document.createElement("option");
          option.value = sub;
          option.textContent = sub;
          subcategoryFilter.appendChild(option);
        });
      }
  }

    function applyFilters() {
        const category = categoryFilter.value.toLowerCase();
        const subcategory = subcategoryFilter.value.toLowerCase();
        const size = sizeFilter.value.toLowerCase();
        const priceRange = priceFilter.value;

        products.forEach(product => {
            const info = product.getAttribute("data-info").toLowerCase();
            let show = true;

            if (category && !info.includes(category)) show = false;
            if (subcategory && !info.includes(subcategory)) show = false;
            if (size && !info.includes(`talla ${size}`)) show = false;

            if (priceRange) {
                const price = parseInt(info.replace(/[^\d]/g, ""));
                if (priceRange === "0-5000" && !(price >= 0 && price <= 5000)) show = false;
                if (priceRange === "5000-10000" && !(price > 5000 && price <= 10000)) show = false;
                if (priceRange === "10000-20000" && !(price > 10000 && price <= 20000)) show = false;
                if (priceRange === "20000+" && !(price > 20000)) show = false;
            }

            product.style.display = show ? "block" : "none";
        });
    }

    // Eventos
    categoryFilter.addEventListener("change", () => {
        updateSubcategories();
        applyFilters();
    });
    subcategoryFilter.addEventListener("change", applyFilters);
    sizeFilter.addEventListener("change", applyFilters);
    priceFilter.addEventListener("change", applyFilters);

    clearButton.addEventListener("click", () => {
        categoryFilter.value = "";
        subcategoryFilter.innerHTML = '<option value="">Subcategoría</option>';
        sizeFilter.value = "";
        priceFilter.value = "";
        applyFilters();
    });

    // Inicialización
    updateSubcategories();
    applyFilters();

    document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", function () {
    const productCard = this.closest(".product-card");
    const title = productCard.querySelector(".product-title").innerText.trim();
    const size = productCard.querySelector(".product-brand").innerText.replace("Talla:", "").trim();
    const price = productCard.querySelector(".product-price").innerText.trim();

    // Extraer subcategoría de data-info
    const dataInfo = productCard.getAttribute("data-info").toLowerCase();
    const parts = dataInfo.split(" ");

    // Suponemos: parts[0] = categoría, parts[1] = subcategoría
    const subcategory = parts.length > 1 ? parts[1] : "";

    // Solo incluir subcategoría si existe
    const subcatText = subcategory ? `, subcategoría ${subcategory}` : "";

    const mensaje = `Hola, estoy interesado en el producto ${title}${subcatText}, talla ${size}, con precio ${price}.`;
    const telefono = "50686819741";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});


});