class Voucher {
    constructor(amount) {
        this.amount = amount;
    }

    applyDiscount(subtotal) {
        return subtotal - this.amount;
    }
}

class VoucherFactory {
    static createVoucher(subtotal) {
        if (subtotal > 5000) {
            return new Voucher(500);
        } else {
            return new Voucher(0);
        }
    }
}
