

// Mobile Phone Entity
const mobilePhones = [
    {
        phoneId: 1,
        brand: "Apple",
        model: "iPhone 15 Pro",
        price: 999.99,
        storageCapacity: 256,
        color: "Black",
        stockQuantity: 15
    },
    {
        phoneId: 2,
        brand: "Samsung",
        model: "Galaxy S24 Ultra",
        price: 1199.99,
        storageCapacity: 512,
        color: "Titanium Gray",
        stockQuantity: 8
    },
    {
        phoneId: 3,
        brand: "Google",
        model: "Pixel 8 Pro",
        price: 899.00,
        storageCapacity: 128,
        color: "Porcelain",
        stockQuantity: 20
    },
    {
        phoneId: 4,
        brand: "Xiaomi",
        model: "14 Pro",
        price: 799.50,
        storageCapacity: 256,
        color: "Midnight Silver",
        stockQuantity: 12
    }
];

// Customer Entity
const customers = [
    {
        customerId: 1,
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@gmail.com",
        phoneNumber: "+1234567890",
        address: "123 Main Street, New York",
        registrationDate: "2026-01-15"
    },
    {
        customerId: 2,
        firstName: "Emily",
        lastName: "Davis",
        email: "emily.davis@yahoo.com",
        phoneNumber: "+14155552671",
        address: "456 Market St, San Francisco",
        registrationDate: "2026-02-10"
    },
    {
        customerId: 3,
        firstName: "Alex",
        lastName: "Johnson",
        email: "alex.j@outlook.com",
        phoneNumber: "+12065550199",
        address: "789 Pine Avenue, Seattle",
        registrationDate: "2026-03-01"
    }
];

// Employee Entity
const employees = [
    {
        employeeId: 1,
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@mobilestore.com",
        phoneNumber: "+1987654321",
        position: "Sales Manager",
        salary: 3500.00
    },
    {
        employeeId: 2,
        firstName: "Sarah",
        lastName: "Connor",
        email: "sarah.connor@mobilestore.com",
        phoneNumber: "+1987654322",
        position: "Store Associate",
        salary: 2400.00
    },
    {
        employeeId: 3,
        firstName: "David",
        lastName: "Miller",
        email: "david.miller@mobilestore.com",
        phoneNumber: "+1987654323",
        position: "Technical Specialist",
        salary: 2900.00
    }
];

//  Rendering Functions

function renderMobilePhones() {
    const tbody = document.getElementById("phones-tbody");
    const countBadge = document.getElementById("phones-count");
    if (!tbody) return;

    tbody.innerHTML = "";
    if (countBadge) countBadge.textContent = `${mobilePhones.length} items`;

    mobilePhones.forEach(phone => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>#${phone.phoneId}</td>
            <td><strong>${escapeHtml(phone.brand)}</strong></td>
            <td>${escapeHtml(phone.model)}</td>
            <td class="price-tag">$${Number(phone.price).toFixed(2)}</td>
            <td>${phone.storageCapacity} GB</td>
            <td><span class="color-dot" style="background-color: ${getColorHex(phone.color)}"></span>${escapeHtml(phone.color)}</td>
            <td><span class="stock-badge">${phone.stockQuantity} in stock</span></td>
        `;
        tbody.appendChild(row);
    });
}

function renderCustomers() {
    const tbody = document.getElementById("customers-tbody");
    const countBadge = document.getElementById("customers-count");
    if (!tbody) return;

    tbody.innerHTML = "";
    if (countBadge) countBadge.textContent = `${customers.length} registered`;

    customers.forEach(customer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>#${customer.customerId}</td>
            <td>${escapeHtml(customer.firstName)}</td>
            <td><strong>${escapeHtml(customer.lastName)}</strong></td>
            <td><a href="mailto:${escapeHtml(customer.email)}" style="color: var(--primary-color); text-decoration: none;">${escapeHtml(customer.email)}</a></td>
            <td>${escapeHtml(customer.phoneNumber)}</td>
            <td>${escapeHtml(customer.address)}</td>
            <td>${escapeHtml(customer.registrationDate)}</td>
        `;
        tbody.appendChild(row);
    });
}

function renderEmployees() {
    const tbody = document.getElementById("employees-tbody");
    const countBadge = document.getElementById("employees-count");
    if (!tbody) return;

    tbody.innerHTML = "";
    if (countBadge) countBadge.textContent = `${employees.length} staff members`;

    employees.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>#${employee.employeeId}</td>
            <td>${escapeHtml(employee.firstName)}</td>
            <td><strong>${escapeHtml(employee.lastName)}</strong></td>
            <td><a href="mailto:${escapeHtml(employee.email)}" style="color: var(--primary-color); text-decoration: none;">${escapeHtml(employee.email)}</a></td>
            <td>${escapeHtml(employee.phoneNumber)}</td>
            <td><span style="font-weight: 500;">${escapeHtml(employee.position)}</span></td>
            <td class="salary-tag">$${Number(employee.salary).toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

//  Tab Switching

function setupTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTabId = button.getAttribute("data-tab");

            // Update active state on buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Update visible content
            tabContents.forEach(content => {
                if (content.id === targetTabId) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });
}

// Utility

function escapeHtml(str) {
    if (typeof str !== "string") return str;
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getColorHex(colorName) {
    const map = {
        "Black": "#1a1a1a",
        "Titanium Gray": "#71717a",
        "Porcelain": "#e4e4e7",
        "Midnight Silver": "#94a3b8",
        "White": "#f8fafc",
        "Gold": "#eab308",
        "Blue": "#3b82f6"
    };
    return map[colorName] || "#94a3b8";
}

//  Initialize on DOM Content Loaded

document.addEventListener("DOMContentLoaded", () => {
    renderMobilePhones();
    renderCustomers();
    renderEmployees();
    setupTabs();
});