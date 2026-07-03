// =========================
// Connect Wallet (MetaMask)
// =========================

const connectBtn = document.getElementById("connectWallet");

async function connectWallet() {

    if (!window.ethereum) {
        alert("MetaMask is not installed.");
        return;
    }

    try {

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });

        const address = accounts[0];

        connectBtn.innerText =
            address.slice(0, 6) + "..." + address.slice(-4);

    } catch (err) {

        console.log(err);

    }

}

connectBtn.addEventListener("click", connectWallet);


// =========================
// Fade Animation
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.about,.community,.gallery").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


// =========================
// Navbar Background
// =========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.85)";

    } else {

        nav.style.background = "rgba(0,0,0,.45)";

    }

});


// =========================
// Button Glow
// =========================

document.querySelectorAll(".btn").forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow = "0 0 30px #8B5CF6";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "none";

    });

});