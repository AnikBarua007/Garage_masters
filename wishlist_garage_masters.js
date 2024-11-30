class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Wishlist extends Subject {
  constructor() {
    super();
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    this.notifyObservers(this.items);
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.notifyObservers(this.items);
  }
}

class WishlistView {
  constructor(wishlist, containerId) {
    this.wishlist = wishlist;
    this.container = document.getElementById(containerId);
    this.wishlist.addObserver(this);
  }

  update(items) {
    this.container.innerHTML = items
      .map(
        item => `
        <div class="wishlist-item">
          <span>${item.name} - $${item.price}</span>
          <button onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
      `
      )
      .join("");
  }
}

const wishlist = new Wishlist();
new WishlistView(wishlist, "wishlist");

// Sample products
const products = [
  { id: 1, name: "Garage Tool Set", price: 99.99 },
  { id: 2, name: "Car Jack", price: 49.99 },
  { id: 3, name: "Workbench", price: 199.99 },
];

// Render products
const productContainer = document.getElementById("products");
products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
    <span>${product.name} - $${product.price}</span>
    <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
  `;
  productContainer.appendChild(productDiv);
});

// Handlers
function addToWishlist(productId) {
  const product = products.find(p => p.id === productId);
  wishlist.addItem(product);
}

function removeFromWishlist(productId) {
  wishlist.removeItem(productId);
}

// Checkout
document.getElementById("checkout").addEventListener("click", () => {
  if (wishlist.items.length === 0) {
    alert("Your wishlist is empty.");
    return;
  }
  const itemNames = wishlist.items.map(item => item.name).join(", ");
  alert(`You have checked out the following items: ${itemNames}`);
  wishlist.items = [];
  wishlist.notifyObservers([]);
});