const products = [
  { id: 1, name: "Coxinha", price: 3.5, img: "https://images.unsplash.com/photo-1601924570733-3f8b5fcf6c3c?&w=400&q=80" },
  { id: 2, name: "Brigadeiro", price: 2.0, img: "./imagens/brigadeiro.jpg" },
  { id: 3, name: "Empada de frango", price: 4.0, img: "https://images.unsplash.com/photo-1622274554222-2ec93a2ee1c4?&w=400&q=80" },
  { id: 4, name: "Beijinho", price: 2.0, img: "./imagens/beiginho.jpg" },
  { id: 5, name: "Quibe", price: 3.5, img: "https://images.unsplash.com/photo-1606312619341-2b7d0db53b5e?&w=400&q=80" },
  { id: 6, name: "Churros", price: 5.0, img: "https://images.unsplash.com/photo-1611599537121-2f9d2b69e3c5?&w=400&q=80" },
  { id: 7, name: "Risoles", price: 3.5, img: "./imagens/risoles.jpg" },
  { id: 8, name: "Mini pizza", price: 6.0, img: "./imagens/mini-pizza.jpg" },
  { id: 9, name: "Pão de queijo", price: 2.5, img: "https://images.unsplash.com/photo-1611599537121-2f8d2b69e3c5?&w=400&q=80" },
  { id: 10, name: "Cupcake", price: 4.5, img: "https://images.unsplash.com/photo-1612270646820-dc5bc3e50a88?&w=400&q=80" }
];

const productsContainer = document.getElementById("products");
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const summaryEl = document.getElementById("summary");
const cartPanel = document.getElementById("cartPanel");
const openCartBtn = document.getElementById("openCart");
const closeCartBtn = document.getElementById("closeCartBtn");
const closeCartOverlay = document.getElementById("closeCart");
const goCheckoutBtn = document.getElementById("goCheckout");
const orderForm = document.querySelector("#checkout form");

let cart = [];

// Preenche o cardápio com imagens
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "border rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition";

  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}" class="rounded-2xl w-full h-40 object-cover mb-4">
    <h4 class="font-bold text-lg">${product.name}</h4>
    <p class="mt-2 text-neutral-600">R$ ${product.price.toFixed(2)}</p>
    <button class="mt-4 px-3 py-2 rounded-2xl bg-neutral-900 text-white hover:opacity-90"
      onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
  `;

  productsContainer.appendChild(card);
});

// Adiciona produto ao carrinho
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartUI();
}

// Atualiza carrinho e resumo com imagens
function updateCartUI() {
  cartCount.textContent = cart.length;

  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((product, index) => {
    total += product.price;
    const item = document.createElement("div");
    item.className = "flex items-center justify-between gap-3 border-b py-2";

    item.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${product.img}" alt="${product.name}" class="w-12 h-12 object-cover rounded-xl">
        <span>${product.name} - R$ ${product.price.toFixed(2)}</span>
      </div>
      <button class="text-red-500" onclick="removeFromCart(${index})">✕</button>
    `;
    cartItemsContainer.appendChild(item);
  });

  cartTotalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
  summaryEl.innerHTML = cart.map(p => `${p.name} - R$ ${p.price.toFixed(2)}`).join("<br>") || "Seu carrinho está vazio.";
}

// Remove item do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Abrir/fechar painel carrinho
openCartBtn.addEventListener("click", () => cartPanel.classList.remove("hidden"));
closeCartBtn.addEventListener("click", () => cartPanel.classList.add("hidden"));
closeCartOverlay.addEventListener("click", () => cartPanel.classList.add("hidden"));

// Ir para checkout
goCheckoutBtn.addEventListener("click", () => {
  cartPanel.classList.add("hidden");
  document.getElementById("checkout").scrollIntoView({ behavior: "smooth" });
});

// Envia os produtos junto com o formulário
// Envia os produtos junto com o formulário
orderForm.addEventListener("submit", (e) => {
  if(cart.length === 0){
    e.preventDefault();
    alert("Seu carrinho está vazio!");
    return;
  }

  // Cria uma lista dos produtos com nome e preço
  const produtosString = cart.map(p => `${p.name} - R$ ${p.price.toFixed(2)}`).join("\n");
  const total = cart.reduce((acc, p) => acc + p.price, 0);

  // Remove campo antigo caso exista
  const oldInput = orderForm.querySelector("input[name='Produtos']");
  if(oldInput) oldInput.remove();

  // Cria campo oculto para enviar via FormSubmit
  let hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = "Produtos";
  hiddenInput.value = produtosString + `\nTotal: R$ ${total.toFixed(2)}`;
  orderForm.appendChild(hiddenInput);
});
