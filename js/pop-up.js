document.addEventListener("DOMContentLoaded", function () {
    // Menangani event tombol untuk masing-masing hidangan
    document.getElementById("show-quesadilla").addEventListener("click", function () {
        document.getElementById("popup-quesadilla").style.display = "flex";
    });

    document.getElementById("show-creamysoup").addEventListener("click", function () {
        document.getElementById("popup-creamysoup").style.display = "flex";
    });

    document.getElementById("show-spaghetti").addEventListener("click", function () {
        document.getElementById("popup-spaghetti").style.display = "flex";
    });

    document.getElementById("show-tart").addEventListener("click", function () {
        document.getElementById("popup-tart").style.display = "flex";
    });
    document.getElementById("show-galaxy").addEventListener("click", function () {
        document.getElementById("popup-galaxy").style.display = "flex";
    });
    document.getElementById("show-strawberry").addEventListener("click", function () {
        document.getElementById("popup-strawberry").style.display = "flex";
    });
    document.getElementById("show-soda").addEventListener("click", function () {
        document.getElementById("popup-soda").style.display = "flex";
    });

    // Menutup pop-up ketika tombol "Tutup" ditekan
    document.getElementById("close-popup1").addEventListener("click", function () {
        document.getElementById("popup-quesadilla").style.display = "none";
    });

    document.getElementById("close-popup2").addEventListener("click", function () {
        document.getElementById("popup-creamysoup").style.display = "none";
    });

    document.getElementById("close-popup3").addEventListener("click", function () {
        document.getElementById("popup-spaghetti").style.display = "none";
    });

    document.getElementById("close-popup4").addEventListener("click", function () {
        document.getElementById("popup-tart").style.display = "none";
    });
    document.getElementById("close-popup5").addEventListener("click", function () {
        document.getElementById("popup-galaxy").style.display = "none";
    });
    document.getElementById("close-popup6").addEventListener("click", function () {
        document.getElementById("popup-strawberry").style.display = "none";
    });
    document.getElementById("close-popup7").addEventListener("click", function () {
        document.getElementById("popup-soda").style.display = "none";
    });
});
