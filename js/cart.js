document.addEventListener("DOMContentLoaded", function () {
    let cart = []; // Array untuk menyimpan item dalam cart

    // Event listener untuk menambahkan produk ke cart
    document.querySelectorAll("#cart_fill").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            let parentDiv = this.closest(".menu-wrap"); // Cari elemen utama
            let productName = parentDiv.querySelector("h3 a").textContent; // Nama produk
            let productPrice = parentDiv.querySelector(".price span").textContent; // Harga produk
            let productImage = parentDiv.querySelector(".menu-img").style.backgroundImage; // Gambar produk

            // Simpan data produk ke cart
            let product = { name: productName, price: productPrice, image: productImage };
            cart.push(product);

            alert(`${productName} telah ditambahkan ke cart!`);
        });
    });

    // Event listener untuk menampilkan popup cart
    document.getElementById("Cart_show").addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman
        showCartPopup();
    });

    // Fungsi untuk menampilkan popup cart
    function showCartPopup() {
        let cartContainer = document.getElementById("cart-items");
        cartContainer.innerHTML = ""; // Bersihkan isi cart sebelum menampilkan

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Cart masih kosong.</p>";
        } else {
            cart.forEach((item, index) => {
                let cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <div class="cart-img" style="${item.image}"></div>
                    <p>${item.name} - <strong>${item.price}</strong></p>
                    <button class="remove-item" data-index="${index}">Hapus</button>
                `;
                cartContainer.appendChild(cartItem);
            });

            // Tambahkan event listener untuk tombol hapus
            document.querySelectorAll(".remove-item").forEach(button => {
                button.addEventListener("click", function () {
                    let index = this.getAttribute("data-index");
                    cart.splice(index, 1); // Hapus item dari cart
                    showCartPopup(); // Perbarui tampilan popup cart
                });
            });
        }

        // Tampilkan popup
        document.getElementById("cart-popup").style.display = "block";
    }

    // Event listener untuk tombol Close popup
    document.getElementById("close-cart").addEventListener("click", function () {
        document.getElementById("cart-popup").style.display = "none";
    });
});
