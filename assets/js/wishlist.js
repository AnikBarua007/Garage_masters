// Sample Wishlist Functionality
const wishlistItems = [
  { id: 1, name: "Garage Tool Set", price: 99.99 },
  { id: 2, name: "Car Jack", price: 49.99 },
];

function renderWishlist() {
  const wishlistContainer = document.getElementById("wishlist");
  wishlistContainer.innerHTML = wishlistItems
    .map(
      item => `
      <div class="wishlist-item">
        <span>${item.name} - $${item.price}</span>
        <button onclick="removeItem(${item.id})">Remove</button>
      </div>
    `
    )
    .join("");
}

function removeItem(itemId) {
  const index = wishlistItems.findIndex(item => item.id === itemId);
  if (index !== -1) {
    wishlistItems.splice(index, 1);
    renderWishlist();
  }
}

document.getElementById("checkout").addEventListener("click", () => {
  if (wishlistItems.length === 0) {
    alert("Your wishlist is empty.");
  } else {
    alert("Proceeding to checkout!");
  }
});

// Initial render
renderWishlist();
