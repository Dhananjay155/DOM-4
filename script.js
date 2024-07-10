document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    const productRating = document.getElementById('productRating');
    const priceGraph = document.getElementById('priceGraph');
    const ratingGraph = document.getElementById('ratingGraph');
    const sortPriceBtn = document.getElementById('sortPrice');
    const sortRatingBtn = document.getElementById('sortRating');

    let products = [];

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = productName.value;
        const price = parseFloat(productPrice.value);
        const rating = parseFloat(productRating.value);

        if (name && !isNaN(price) && !isNaN(rating)) {
            products.push({ name, price, rating });
            updateGraphs();
            productForm.reset();
        }
    });

    sortPriceBtn.addEventListener('click', () => {
        products.sort((a, b) => a.price - b.price);
        updateGraphs();
    });

    sortRatingBtn.addEventListener('click', () => {
        products.sort((a, b) => a.rating - b.rating);
        updateGraphs();
    });

    function updateGraphs() {
        priceGraph.innerHTML = '';
        ratingGraph.innerHTML = '';

        products.forEach(product => {
            const priceBar = document.createElement('div');
            priceBar.className = 'bar';
            priceBar.style.height = '0px';
            priceBar.style.width = '50px';
            priceBar.textContent = product.price;

            const ratingBar = document.createElement('div');
            ratingBar.className = 'bar';
            ratingBar.style.height = '0px';
            ratingBar.style.width = '50px';
            ratingBar.textContent = product.rating;

            // Append bars first with height 0 to enable transition effect
            priceGraph.appendChild(priceBar);
            ratingGraph.appendChild(ratingBar);

            // Use setTimeout to trigger the height transition
            setTimeout(() => {
                priceBar.style.height = `${product.price * 2}px`;
                ratingBar.style.height = `${product.rating * 30}px`;
            }, 0);
        });
    }
});
