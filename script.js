document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const mulaiButton = document.getElementById("mulai");

    // Ganti ke menu utama saat tombol "Mulai" ditekan
    mulaiButton.addEventListener("click", function() {
        body.id = "menu-utama";
        body.innerHTML = `
            <div class="container fade-in">
                <h1>JAWAB YAH</h1>
                <button id="sekali" class="btn">KAMU SUKA SAMA AKU??</button>
                <button id="menghindar" class="btn">TEMENAN AJA YAH</button>
            </div>
        `;

        setEventListeners();
    });

    function setEventListeners() {
        let tekanMenghindar = 0;
        const menghindarBtn = document.getElementById("menghindar");

        document.getElementById("sekali").addEventListener("click", function() {
            body.id = "sekali-tekan";
            body.innerHTML = `
                <div class="container fade-in">
                    <h1>Kalo You Like Me, Aku akan menerimamu dengan senang hati..</h1>
                    <p>Chat aku dan sampaikan perasaan mu kepadaku dan alasan kenapa kamu menerimaku</p>
                    <a href="https://wa.me/6282117821064" class="btn" target="_blank">Chat di WhatsApp</a>
                </div>
            `;
        });

        menghindarBtn.addEventListener("click", function() {
            tekanMenghindar++;

            // Pindah posisi tombol secara random
            const randomX = Math.random() * (window.innerWidth - 150);
            const randomY = Math.random() * (window.innerHeight - 50);
            menghindarBtn.style.position = "absolute";
            menghindarBtn.style.left = `${randomX}px`;
            menghindarBtn.style.top = `${randomY}px`;

            if (tekanMenghindar >= 3) {
                body.id = "tiga-tekan";
                body.innerHTML = `
                    <div class="container fade-in">
                        <h1>Aku tau kamu ga suka aku, tapi aku akan tetap jadi teman terbaik buat kamu.</h1>
                        <p>Chat aku dan katakan kenapa kamu tetap mau jadi temanku dan alasan kamu menolakku</p>
                        <a href="https://wa.me/6282117821064" class="btn" target="_blank">Chat di WhatsApp</a>
                    </div>
                `;
            }
        });
    }
});
