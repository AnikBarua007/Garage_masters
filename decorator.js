// Base Discount Class
class Discount {
    constructor(cart) {
        this.cart = cart;
    }

    calculate() {
        return 0; // Default discount is 0
    }
}

// Decorator: Bulk Purchase Discount
class BulkPurchaseDiscount extends Discount {
    calculate() {
        const totalItems = this.cart.reduce((acc, item) => acc + item.quantity, 0);
        const discount = totalItems >= 5 ? 0.1 * this.cartSubtotal() : 0; // 10% discount for 5+ items
        return discount;
    }
    cartSubtotal() {
        return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}

// Decorator: Seasonal Discount
class SeasonalDiscount extends Discount {
    calculate() {
        const isHolidaySeason = true; // Example condition
        const discount = isHolidaySeason ? 0.05 * this.cartSubtotal() : 0; // 5% holiday discount
        return discount;
    }

    cartSubtotal() {
        return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}

// Function to calculate total discounts
function calculateTotalDiscount(cart) {
    const baseDiscount = new Discount(cart);
    const bulkDiscount = new BulkPurchaseDiscount(cart);
    const seasonalDiscount = new SeasonalDiscount(cart);

    return baseDiscount.calculate() + bulkDiscount.calculate() + seasonalDiscount.calculate();
}

// Event Listener for Cart Page
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTableBody = document.querySelector(".cart-table tbody");
    const subtotalElement = document.getElementById("subtotal");
    const discountElement = document.getElementById("discount");
    const totalElement = document.getElementById("total");

    // Check if cart is empty
    if (cart.length === 0) {
        cartTableBody.innerHTML = `<tr><td colspan="5">Your cart is empty!</td></tr>`;
        subtotalElement.textContent = "Subtotal: $0.00";
        discountElement.textContent = "Discount: $0.00";
        totalElement.textContent = "Total: $0.00";
        return;
    }

    // Populate cart table
    let subtotal = 0;
    cartTableBody.innerHTML = cart
        .map((item, index) => {
            const total = item.price * item.quantity;
            subtotal += total;
            return `
                <tr>
                    <td>${item.name} (${item.color})</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td><input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}"></td>
                    <td>$${total.toFixed(2)}</td>
                    <td><button class="remove-btn" data-index="${index}">Remove</button></td>
                </tr>
            `;
        })
        .join("");

    // Calculate discounts using Decorator Pattern
    const totalDiscount = calculateTotalDiscount(cart);
    const total = subtotal - totalDiscount;

    // Update order summary
    subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    discountElement.textContent = `Discount: $${totalDiscount.toFixed(2)}`;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Update quantities
    document.querySelectorAll(".quantity-input").forEach(input => {
        input.addEventListener("change", e => {
            const index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.reload();
        });
    });

    // Remove items from the cart
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", e => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.reload();
        });
    });
});
