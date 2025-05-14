function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }
  
  function addToCart(product) {
    alert(`${product} added to cart! 🛒`);
  }
  
  document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    localStorage.setItem("subscriberEmail", email);
    document.getElementById("confirmation").textContent = "Thanks for subscribing!";
    document.getElementById("email").value = "";
  });
  