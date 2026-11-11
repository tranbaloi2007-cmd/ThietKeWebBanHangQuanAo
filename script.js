// ===============================
// 1. DỮ LIỆU SẢN PHẨM
// ===============================

const products = {
    home: [
        ["home1", "Áo thun Basic", 199000, "home1.png"],
        ["home2", "Áo sơ mi thanh lịch", 299000, "home2.png"],
        ["home3", "Quần jean cá tính", 399000, "home3.png"],
        ["home4", "Áo khoác thời trang", 450000, "home4.png"],
        ["home5", "Váy nữ thanh lịch", 350000, "home5.png"],
        ["home6", "Đầm dự tiệc", 499000, "home6.png"],
        ["home7", "Giày sneaker trắng", 550000, "home7.png"],
        ["home8", "Túi xách nữ", 320000, "home8.png"],
        ["home9", "Áo polo nam", 250000, "home9.png"],
        ["home10", "Quần kaki nam", 380000, "home10.png"]
    ],

    nam: [
        ["nam1", "Áo thun nam Basic", 199000, "nam1.png"],
        ["nam2", "Áo polo nam", 250000, "nam2.png"],
        ["nam3", "Áo sơ mi trắng", 299000, "nam3.png"],
        ["nam4", "Áo sơ mi nam", 320000, "nam4.png"],
        ["nam5", "Áo khoác nam", 450000, "nam5.png"],
        ["nam6", "Quần jean nam", 399000, "nam6.png"],
        ["nam7", "Quần kaki nam", 380000, "nam7.png"],
        ["nam8", "Quần short nam", 220000, "nam8.png"],
        ["nam9", "Áo hoodie nam", 420000, "nam9.png"],
        ["nam10", "Áo sweater nam", 390000, "nam10.png"]
    ],

    nu: [
        ["nu1", "Áo thun nữ", 199000, "nu1.png"],
        ["nu2", "Áo sơ mi nữ", 280000, "nu2.png"],
        ["nu3", "Áo kiểu nữ", 250000, "nu3.png"],
        ["nu4", "Áo croptop", 180000, "nu4.png"],
        ["nu5", "Váy hoa nữ", 320000, "nu5.png"],
        ["nu6", "Đầm dự tiệc", 499000, "nu6.png"],
        ["nu7", "Chân váy nữ", 270000, "nu7.png"],
        ["nu8", "Quần jean nữ", 350000, "nu8.png"],
        ["nu9", "Áo khoác nữ", 420000, "nu9.png"],
        ["nu10", "Quần ống rộng", 330000, "nu10.png"]
    ],

    phukien: [
        ["phukien1", "Giày sneaker trắng", 550000, "phukien1.png"],
        ["phukien2", "Giày thể thao", 620000, "phukien2.png"],
        ["phukien3", "Giày casual", 490000, "phukien3.png"],
        ["phukien4", "Dép thời trang", 180000, "phukien4.png"],
        ["phukien5", "Túi xách nữ", 320000, "phukien5.png"],
        ["phukien6", "Balo thời trang", 350000, "phukien6.png"],
        ["phukien7", "Mũ lưỡi trai", 120000, "phukien7.png"],
        ["phukien8", "Thắt lưng da", 200000, "phukien8.png"],
        ["phukien9", "Kính thời trang", 250000, "phukien9.png"],
        ["phukien10", "Ví cầm tay", 220000, "phukien10.png"]
    ],

    moi: [
        ["moi1", "Áo thun Oversize", 220000, "moi1.png"],
        ["moi2", "Áo polo mới", 280000, "moi2.png"],
        ["moi3", "Sơ mi phong cách", 320000, "moi3.png"],
        ["moi4", "Quần jean mới", 420000, "moi4.png"],
        ["moi5", "Áo khoác mới", 480000, "moi5.png"],
        ["moi6", "Váy nữ mới", 350000, "moi6.png"],
        ["moi7", "Đầm thời trang", 520000, "moi7.png"],
        ["moi8", "Giày sneaker mới", 590000, "moi8.png"],
        ["moi9", "Túi xách mới", 360000, "moi9.png"],
        ["moi10", "Balo mới", 390000, "moi10.png"]
    ]
};


// ===============================
// 2. HÀM ĐỊNH DẠNG GIÁ
// ===============================

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}


// ===============================
// 3. LẤY DANH SÁCH GIỎ HÀNG
// ===============================

function getCart() {
    return JSON.parse(localStorage.getItem("fashionCart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("fashionCart", JSON.stringify(cart));
}


// ===============================
// 4. TẠO THANH MENU
// ===============================

const page = document.body.dataset.page;

const menuItems = [
    ["home", "Trang chủ", "index.html"],
    ["nam", "Nam", "nam.html"],
    ["nu", "Nữ", "nu.html"],
    ["phukien", "Giày & phụ kiện", "phukien.html"],
    ["moi", "Hàng mới", "hang-moi.html"],
    ["dangnhap", "Đăng nhập", "dangnhap.html"]
];

const header = document.getElementById("header");

header.innerHTML = `
    <div class="header-top">
        <a href="index.html" class="logo">
            FASHION <span>STORE.</span>
        </a>

        <form class="search-box" id="search-form">
            <input type="text" id="search-input"
                placeholder="Tìm kiếm sản phẩm...">
            <button type="submit">Tìm</button>
        </form>

        <a href="gio-hang.html" class="cart-link">
            🛒 Giỏ hàng
            <span class="cart-count" id="cart-count">0</span>
        </a>
    </div>

    <nav class="navbar">
        ${menuItems.map(item => `
            <a href="${item[2]}"
                class="${page === item[0] ? "active" : ""}">
                ${item[1]}
            </a>
        `).join("")}

        <a href="gio-hang.html"
            class="${page === "cart" ? "active" : ""}">
            Giỏ hàng
        </a>
    </nav>
`;


// ===============================
// 5. TẠO CHÂN TRANG
// ===============================

document.getElementById("footer").innerHTML = `
    <div class="footer-logo">
        FASHION <span>STORE.</span>
    </div>

    <p>Thời trang hiện đại - Phong cách của bạn.</p>
    <p>Địa chỉ: Việt Nam</p>
    <p>Email: fashionstore@gmail.com</p>
    <p>© 2026 FASHION STORE. All rights reserved.</p>
`;


// ===============================
// 6. HIỂN THỊ SẢN PHẨM
// ===============================

function renderProducts(list) {
    const container = document.getElementById("product-list");

    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
        return;
    }

    container.innerHTML = list.map(product => `
        <div class="product-card">
            <img
                class="product-image"
                src="images/${product[3]}"
                alt="${product[1]}"
                onerror="this.src='https://placehold.co/400x500?text=Product'"
            >

            <div class="product-info">
                <h3>${product[1]}</h3>

                <p class="product-price">
                    ${formatPrice(product[2])}
                </p>

                <button class="add-cart"
                    onclick="addToCart('${product[0]}')">
                    THÊM VÀO GIỎ HÀNG
                </button>
            </div>
        </div>
    `).join("");
}


// ===============================
// 7. TÌM KIẾM SẢN PHẨM
// ===============================

document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const keyword = document.getElementById("search-input")
        .value.trim().toLowerCase();

    const allProducts = Object.values(products).flat();

    const result = allProducts.filter(product =>
        product[1].toLowerCase().includes(keyword)
    );

    if (page === "cart") {
        window.location.href = "index.html?search=" +
            encodeURIComponent(keyword);
        return;
    }

    renderProducts(result);

    const heading = document.querySelector(".section-heading h2");

    if (heading) {
        heading.textContent = "KẾT QUẢ TÌM KIẾM";
    }
});


// ===============================
// 8. THÊM SẢN PHẨM VÀO GIỎ
// ===============================

function addToCart(productId) {
    const allProducts = Object.values(products).flat();

    const product = allProducts.find(item => item[0] === productId);

    if (!product) return;

    let cart = getCart();

    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product[0],
            name: product[1],
            price: product[2],
            image: product[3],
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCount();

    alert("Đã thêm " + product[1] + " vào giỏ hàng!");
}


// ===============================
// 9. CẬP NHẬT SỐ LƯỢNG TRÊN MENU
// ===============================

function updateCartCount() {
    const cart = getCart();

    const total = cart.reduce((sum, item) =>
        sum + item.quantity, 0
    );

    const count = document.getElementById("cart-count");

    if (count) {
        count.textContent = total;
    }
}


// ===============================
// 10. HIỂN THỊ GIỎ HÀNG
// ===============================


function renderCart() {
    const container = document.getElementById("cart-content");

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <h2>Giỏ hàng đang trống!</h2>
                <p>Cậu hãy chọn sản phẩm yêu thích nhé.</p>
                <a href="index.html" class="btn">TIẾP TỤC MUA SẮM</a>
            </div>
        `;
        return;
    }

    let total = 0;

    const productsHTML = cart.map(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}"
                     onerror="this.src='https://placehold.co/150x180?text=Product'">

                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>

                    <div class="quantity-control">
                        <button onclick="changeQuantity('${item.id}', -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>

                <div class="cart-item-right">
                    <strong>${formatPrice(subtotal)}</strong>
                    <button class="remove-btn"
                        onclick="removeFromCart('${item.id}')">
                        Xóa
                    </button>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="cart-layout">

            <div class="cart-products">
                <h2>SẢN PHẨM CỦA BẠN (${cart.length})</h2>
                ${productsHTML}
                <a href="index.html" class="continue-shopping">
                    ← Tiếp tục mua sắm
                </a>
            </div>

            <div class="cart-checkout">
                <h2>THÔNG TIN ĐƠN HÀNG</h2>

                <div class="cart-total">
                    <span>Tạm tính</span>
                    <strong>${formatPrice(total)}</strong>
                </div>

                <div class="cart-total">
                    <span>Phí vận chuyển</span>
                    <strong>Miễn phí</strong>
                </div>

                <div class="cart-total final-total">
                    <span>Tổng thanh toán</span>
                    <strong>${formatPrice(total)}</strong>
                </div>

                <form class="checkout-form" onsubmit="placeOrder(event)">
                    <h3>THÔNG TIN NHẬN HÀNG</h3>

                    <label>Họ và tên</label>
                    <input type="text" id="customer-name"
                        placeholder="Nhập họ và tên" required>

                    <label>Số điện thoại</label>
                    <input type="tel" id="customer-phone"
                        placeholder="Nhập số điện thoại"
                        pattern="[0-9]{10,11}" required>

                    <label>Địa chỉ nhận hàng</label>
                    <textarea id="customer-address"
                        placeholder="Nhập địa chỉ nhận hàng"
                        required></textarea>

                    <label>Phương thức thanh toán</label>
                    <select id="payment-method">
                        <option value="Thanh toán khi nhận hàng">
                            Thanh toán khi nhận hàng (COD)
                        </option>
                    </select>

                    <button type="submit" class="checkout-btn">
                        XÁC NHẬN ĐẶT HÀNG
                    </button>
                </form>
            </div>

        </div>
    `;
}



// ===============================
// 11. TĂNG GIẢM SỐ LƯỢNG
// ===============================

function changeQuantity(productId, amount) {
    let cart = getCart();

    const item = cart.find(product => product.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== productId);
    }

    saveCart(cart);
    renderCart();
    updateCartCount();
}


// ===============================
// 12. XÓA SẢN PHẨM
// ===============================

function removeFromCart(productId) {
    let cart = getCart();

    cart = cart.filter(item => item.id !== productId);

    saveCart(cart);
    renderCart();
    updateCartCount();
}


// ===============================
// 13. THANH TOÁN
// ===============================

function placeOrder(event) {
    event.preventDefault();

    const cart = getCart();

    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const address = document.getElementById("customer-address").value.trim();
    const payment = document.getElementById("payment-method").value;

    if (!name || !phone || !address) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const total = cart.reduce((sum, item) =>
        sum + item.price * item.quantity, 0
    );

    alert(
        "ĐẶT HÀNG THÀNH CÔNG!\n\n" +
        "Người nhận: " + name + "\n" +
        "Số điện thoại: " + phone + "\n" +
        "Địa chỉ: " + address + "\n" +
        "Thanh toán: " + payment + "\n" +
        "Tổng tiền: " + formatPrice(total) +
        "\n\nCảm ơn cậu đã mua hàng!"
    );

    localStorage.removeItem("fashionCart");

    renderCart();
    updateCartCount();
}


// ===============================
// 14. KHỞI ĐỘNG WEBSITE
// ===============================

if (page === "cart") {
    renderCart();
} else {
    renderProducts((products[page] || products.home).slice(0, 8));
}

updateCartCount();