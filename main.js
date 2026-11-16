

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

// Entity Configuration Schema for Forms & Validation
const entitySchemas = {
    phones: {
        title: "Add New Mobile Phone",
        idField: "phoneId",
        list: mobilePhones,
        render: renderMobilePhones,
        fields: [
            {
                name: "brand",
                label: "Brand",
                type: "text",
                dataType: "string",
                placeholder: "e.g. Apple",
                fullWidth: false
            },
            {
                name: "model",
                label: "Model",
                type: "text",
                dataType: "string",
                placeholder: "e.g. iPhone 15 Pro",
                fullWidth: false
            },
            {
                name: "price",
                label: "Price ($)",
                type: "number",
                dataType: "positive-float",
                placeholder: "e.g. 999.99",
                step: "0.01",
                min: "0.01",
                fullWidth: false
            },
            {
                name: "storageCapacity",
                label: "Storage Capacity (GB)",
                type: "number",
                dataType: "positive-integer",
                placeholder: "e.g. 256",
                step: "1",
                min: "1",
                fullWidth: false
            },
            {
                name: "color",
                label: "Color",
                type: "text",
                dataType: "string",
                placeholder: "e.g. Black",
                fullWidth: false
            },
            {
                name: "stockQuantity",
                label: "Stock Quantity",
                type: "number",
                dataType: "non-negative-integer",
                placeholder: "e.g. 15",
                step: "1",
                min: "0",
                fullWidth: false
            }
        ]
    },
    customers: {
        title: "Add New Customer",
        idField: "customerId",
        list: customers,
        render: renderCustomers,
        fields: [
            {
                name: "firstName",
                label: "First Name",
                type: "text",
                dataType: "string",
                placeholder: "e.g. John",
                fullWidth: false
            },
            {
                name: "lastName",
                label: "Last Name",
                type: "text",
                dataType: "string",
                placeholder: "e.g. Smith",
                fullWidth: false
            },
            {
                name: "email",
                label: "Email Address",
                type: "email",
                dataType: "email",
                placeholder: "e.g. john.smith@gmail.com",
                fullWidth: false
            },
            {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                dataType: "phone",
                placeholder: "e.g. +1234567890",
                fullWidth: false
            },
            {
                name: "address",
                label: "Address",
                type: "text",
                dataType: "string",
                placeholder: "e.g. 123 Main Street, New York",
                fullWidth: true
            },
            {
                name: "registrationDate",
                label: "Registration Date",
                type: "date",
                dataType: "date",
                placeholder: "YYYY-MM-DD",
                fullWidth: true
            }
        ]
    },
    employees: {
        title: "Add New Employee",
        idField: "employeeId",
        list: employees,
        render: renderEmployees,
        fields: [
            {
                name: "firstName",
                label: "First Name",
                type: "text",
                dataType: "string",
                placeholder: "e.g. Michael",
                fullWidth: false
            },
            {
                name: "lastName",
                label: "Last Name",
                type: "text",
                dataType: "string",
                placeholder: "e.g. Brown",
                fullWidth: false
            },
            {
                name: "email",
                label: "Email Address",
                type: "email",
                dataType: "email",
                placeholder: "e.g. michael.brown@mobilestore.com",
                fullWidth: false
            },
            {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                dataType: "phone",
                placeholder: "e.g. +1987654321",
                fullWidth: false
            },
            {
                name: "position",
                label: "Position",
                type: "text",
                dataType: "string",
                placeholder: "e.g. Sales Manager",
                fullWidth: false
            },
            {
                name: "salary",
                label: "Salary ($)",
                type: "number",
                dataType: "positive-float",
                placeholder: "e.g. 3500.00",
                step: "0.01",
                min: "0.01",
                fullWidth: false
            }
        ]
    }
};

let currentModalEntity = null;
let currentlyEditingCell = null;

function getFieldConfig(entityKey, fieldName) {
    const schema = entitySchemas[entityKey];
    if (!schema) return null;
    return schema.fields.find(f => f.name === fieldName) || null;
}

function formatCellValue(entityKey, fieldName, value, item) {
    switch (entityKey) {
        case "phones":
            if (fieldName === "brand") return `<strong>${escapeHtml(value)}</strong>`;
            if (fieldName === "model") return `${escapeHtml(value)}`;
            if (fieldName === "price") return `$${Number(value).toFixed(2)}`;
            if (fieldName === "storageCapacity") return `${value} GB`;
            if (fieldName === "color") return `<span class="color-dot" style="background-color: ${getColorHex(value)}"></span>${escapeHtml(value)}`;
            if (fieldName === "stockQuantity") return `<span class="stock-badge">${value} in stock</span>`;
            break;
        case "customers":
            if (fieldName === "firstName") return `${escapeHtml(value)}`;
            if (fieldName === "lastName") return `<strong>${escapeHtml(value)}</strong>`;
            if (fieldName === "email") return `<a href="mailto:${escapeHtml(value)}" style="color: var(--primary-color); text-decoration: none;">${escapeHtml(value)}</a>`;
            if (fieldName === "phoneNumber") return `${escapeHtml(value)}`;
            if (fieldName === "address") return `${escapeHtml(value)}`;
            if (fieldName === "registrationDate") return `${escapeHtml(value)}`;
            break;
        case "employees":
            if (fieldName === "firstName") return `${escapeHtml(value)}`;
            if (fieldName === "lastName") return `<strong>${escapeHtml(value)}</strong>`;
            if (fieldName === "email") return `<a href="mailto:${escapeHtml(value)}" style="color: var(--primary-color); text-decoration: none;">${escapeHtml(value)}</a>`;
            if (fieldName === "phoneNumber") return `${escapeHtml(value)}`;
            if (fieldName === "position") return `<span style="font-weight: 500;">${escapeHtml(value)}</span>`;
            if (fieldName === "salary") return `$${Number(value).toFixed(2)}`;
            break;
    }
    return escapeHtml(String(value));
}

//  Rendering Functions

function renderMobilePhones() {
    const tbody = document.getElementById("phones-tbody");
    const countBadge = document.getElementById("phones-count");
    if (!tbody) return;

    tbody.innerHTML = "";
    if (countBadge) countBadge.textContent = `${mobilePhones.length} items`;

    if (mobilePhones.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-state-cell">No mobile phones available</td></tr>`;
        return;
    }

    mobilePhones.forEach(phone => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>#${phone.phoneId}</td>
            <td class="editable-cell" data-entity="phones" data-id="${phone.phoneId}" data-field="brand" data-type="string"><strong>${escapeHtml(phone.brand)}</strong></td>
            <td class="editable-cell" data-entity="phones" data-id="${phone.phoneId}" data-field="model" data-type="string">${escapeHtml(phone.model)}</td>
            <td class="editable-cell price-tag" data-entity="phones" data-id="${phone.phoneId}" data-field="price" data-type="positive-float">$${Number(phone.price).toFixed(2)}</td>
            <td class="editable-cell" data-entity="phones" data-id="${phone.phoneId}" data-field="storageCapacity" data-type="positive-integer">${phone.storageCapacity} GB</td>
            <td class="editable-cell" data-entity="phones" data-id="${phone.phoneId}" data-field="color" data-type="string"><span class="color-dot" style="background-color: ${getColorHex(phone.color)}"></span>${escapeHtml(phone.color)}</td>
            <td class="editable-cell" data-entity="phones" data-id="${phone.phoneId}" data-field="stockQuantity" data-type="non-negative-integer"><span class="stock-badge">${phone.stockQuantity} in stock</span></td>
            <td><button type="button" class="btn-delete" data-entity="phones" data-id="${phone.phoneId}" title="Delete">Delete</button></td>
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

    if (customers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-state-cell">No customers registered</td></tr>`;
        return;
    }

    customers.forEach(customer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>#${customer.customerId}</td>
            <td class="editable-cell" data-entity="customers" data-id="${customer.customerId}" data-field="firstName" data-type="string">${escapeHtml(customer.firstName)}</td>
            <td class="editable-cell" data-entity="customers" data-id="${customer.customerId}" data-field="lastName" data-type="string"><strong>${escapeHtml(customer.lastName)}</strong></td>
            <td class="editable-cell" data-entity="customers" data-id="${customer.customerId}" data-field="email" data-type="email"><a href="mailto:${escapeHtml(customer.email)}" style="color: var(--primary-color); text-decoration: none;">${escapeHtml(customer.email)}</a></td>
            <td class="editable-cell" data-entity="customers" data-id="${customer.customerId}" data-field="phoneNumber" data-type="phone">${escapeHtml(customer.phoneNumber)}</td>
            <td class="editable-cell" data-entity="customers" data-id="${customer.customerId}" data-field="address" data-type="string">${escapeHtml(customer.address)}</td>
            <td class="editable-cell" data-entity="customers" data-id="${customer.customerId}" data-field="registrationDate" data-type="date">${escapeHtml(customer.registrationDate)}</td>
            <td><button type="button" class="btn-delete" data-entity="customers" data-id="${customer.customerId}" title="Delete">Delete</button></td>
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

    if (employees.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-state-cell">No staff members found</td></tr>`;
        return;
    }

    employees.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>#${employee.employeeId}</td>
            <td class="editable-cell" data-entity="employees" data-id="${employee.employeeId}" data-field="firstName" data-type="string">${escapeHtml(employee.firstName)}</td>
            <td class="editable-cell" data-entity="employees" data-id="${employee.employeeId}" data-field="lastName" data-type="string"><strong>${escapeHtml(employee.lastName)}</strong></td>
            <td class="editable-cell" data-entity="employees" data-id="${employee.employeeId}" data-field="email" data-type="email"><a href="mailto:${escapeHtml(employee.email)}" style="color: var(--primary-color); text-decoration: none;">${escapeHtml(employee.email)}</a></td>
            <td class="editable-cell" data-entity="employees" data-id="${employee.employeeId}" data-field="phoneNumber" data-type="phone">${escapeHtml(employee.phoneNumber)}</td>
            <td class="editable-cell" data-entity="employees" data-id="${employee.employeeId}" data-field="position" data-type="string"><span style="font-weight: 500;">${escapeHtml(employee.position)}</span></td>
            <td class="editable-cell salary-tag" data-entity="employees" data-id="${employee.employeeId}" data-field="salary" data-type="positive-float">$${Number(employee.salary).toFixed(2)}</td>
            <td><button type="button" class="btn-delete" data-entity="employees" data-id="${employee.employeeId}" title="Delete">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}

//  Deletion Logic

function deleteEntityItem(entityKey, id) {
    const schema = entitySchemas[entityKey];
    if (!schema) return;

    const numId = Number(id);
    const index = schema.list.findIndex(item => Number(item[schema.idField]) === numId);
    if (index !== -1) {
        schema.list.splice(index, 1);
        schema.render();
    }
}

//  Inline Cell Editing Logic

function setupTableInteractions() {
    const tables = ["phones", "customers", "employees"];

    tables.forEach(entityKey => {
        const tbody = document.getElementById(`${entityKey}-tbody`);
        if (!tbody) return;

        tbody.addEventListener("click", (event) => {
            // Delete button click
            const deleteBtn = event.target.closest(".btn-delete");
            if (deleteBtn) {
                event.stopPropagation();
                const id = deleteBtn.getAttribute("data-id");
                deleteEntityItem(entityKey, id);
                return;
            }

            // Editable cell click
            const cell = event.target.closest(".editable-cell");
            if (cell && !cell.classList.contains("editing-cell")) {
                startEditingCell(cell);
            }
        });
    });
}

function startEditingCell(cell) {
    // If another cell is being edited, finish it
    if (currentlyEditingCell && currentlyEditingCell !== cell) {
        if (typeof currentlyEditingCell.finishEdit === "function") {
            currentlyEditingCell.finishEdit(false);
        }
    }

    const entityKey = cell.getAttribute("data-entity");
    const id = Number(cell.getAttribute("data-id"));
    const fieldName = cell.getAttribute("data-field");
    const dataType = cell.getAttribute("data-type");

    const schema = entitySchemas[entityKey];
    if (!schema) return;

    const item = schema.list.find(i => Number(i[schema.idField]) === id);
    if (!item) return;

    const fieldConfig = getFieldConfig(entityKey, fieldName);
    const currentValue = item[fieldName];

    currentlyEditingCell = cell;
    cell.classList.add("editing-cell");

    const wrapper = document.createElement("div");
    wrapper.className = "cell-edit-wrapper";

    const input = document.createElement("input");
    input.className = "cell-edit-input";
    input.type = fieldConfig ? fieldConfig.type : "text";
    if (fieldConfig && fieldConfig.step) input.step = fieldConfig.step;
    if (fieldConfig && fieldConfig.min !== undefined) input.min = fieldConfig.min;
    input.value = currentValue !== undefined && currentValue !== null ? String(currentValue) : "";

    const tooltip = document.createElement("div");
    tooltip.className = "cell-edit-error-tooltip";
    tooltip.style.display = "none";

    wrapper.appendChild(input);
    wrapper.appendChild(tooltip);

    cell.innerHTML = "";
    cell.appendChild(wrapper);

    input.focus();
    if (typeof input.select === "function" && input.type !== "date") {
        input.select();
    }

    let isFinished = false;

    function finishEdit(isEnterKey) {
        if (isFinished) return;

        const rawVal = input.value;
        const error = validateValue(rawVal, dataType);

        if (error) {
            if (isEnterKey) {
                input.classList.add("input-error");
                tooltip.textContent = error;
                tooltip.style.display = "block";
                input.focus();
                return;
            } else {
                // If clicked outside and value is invalid, restore original value
                isFinished = true;
                cell.classList.remove("editing-cell");
                cell.innerHTML = formatCellValue(entityKey, fieldName, item[fieldName], item);
                if (currentlyEditingCell === cell) currentlyEditingCell = null;
                return;
            }
        }

        // Value is valid, save to data model
        isFinished = true;
        const trimmed = rawVal.trim();
        let parsedValue;
        if (dataType === "positive-float") {
            parsedValue = parseFloat(trimmed);
        } else if (dataType === "positive-integer" || dataType === "non-negative-integer") {
            parsedValue = parseInt(trimmed, 10);
        } else {
            parsedValue = trimmed;
        }

        item[fieldName] = parsedValue;
        cell.classList.remove("editing-cell");
        cell.innerHTML = formatCellValue(entityKey, fieldName, parsedValue, item);

        if (currentlyEditingCell === cell) currentlyEditingCell = null;
    }

    cell.finishEdit = finishEdit;

    input.addEventListener("input", () => {
        input.classList.remove("input-error");
        tooltip.style.display = "none";
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            finishEdit(true);
        } else if (e.key === "Escape") {
            e.preventDefault();
            isFinished = true;
            cell.classList.remove("editing-cell");
            cell.innerHTML = formatCellValue(entityKey, fieldName, item[fieldName], item);
            if (currentlyEditingCell === cell) currentlyEditingCell = null;
        }
    });

    input.addEventListener("blur", () => {
        setTimeout(() => {
            if (!isFinished && currentlyEditingCell === cell) {
                finishEdit(false);
            }
        }, 120);
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

// Modal and Form Handling

function setupModal() {
    const modalOverlay = document.getElementById("modal-overlay");
    const closeBtn = document.getElementById("modal-close-btn");
    const cancelBtn = document.getElementById("modal-cancel-btn");
    const entityForm = document.getElementById("entity-form");
    const addButtons = document.querySelectorAll(".btn-add");

    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            const entityKey = button.getAttribute("data-entity");
            openModal(entityKey);
        });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

    // Close on overlay backdrop click
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
            closeModal();
        }
    });

    // Form submission
    if (entityForm) {
        entityForm.addEventListener("submit", handleFormSubmit);
    }
}

function openModal(entityKey) {
    const schema = entitySchemas[entityKey];
    if (!schema) return;

    currentModalEntity = entityKey;

    const modalTitle = document.getElementById("modal-title");
    const formFieldsContainer = document.getElementById("modal-form-fields");
    const modalOverlay = document.getElementById("modal-overlay");

    if (modalTitle) modalTitle.textContent = schema.title;

    if (formFieldsContainer) {
        formFieldsContainer.innerHTML = "";

        schema.fields.forEach(field => {
            const group = document.createElement("div");
            group.className = `form-group ${field.fullWidth ? "full-width" : ""}`;

            const label = document.createElement("label");
            label.htmlFor = `field-${field.name}`;
            label.innerHTML = `${escapeHtml(field.label)} <span class="required-star">*</span>`;

            const input = document.createElement("input");
            input.id = `field-${field.name}`;
            input.name = field.name;
            input.type = field.type;
            input.className = "form-control";
            input.placeholder = field.placeholder || "";
            if (field.step) input.step = field.step;
            if (field.min !== undefined) input.min = field.min;
            input.setAttribute("data-type", field.dataType);

            // Default registration date to today if applicable
            if (field.type === "date" && field.name === "registrationDate") {
                const today = new Date().toISOString().split("T")[0];
                input.value = today;
            }

            const errorSpan = document.createElement("div");
            errorSpan.className = "field-error";
            errorSpan.id = `error-${field.name}`;

            input.addEventListener("input", () => {
                input.classList.remove("input-error");
                errorSpan.textContent = "";
            });

            group.appendChild(label);
            group.appendChild(input);
            group.appendChild(errorSpan);
            formFieldsContainer.appendChild(group);
        });
    }

    if (modalOverlay) {
        modalOverlay.classList.add("active");
        modalOverlay.setAttribute("aria-hidden", "false");

        // Focus first field
        const firstInput = formFieldsContainer ? formFieldsContainer.querySelector("input") : null;
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeModal() {
    const modalOverlay = document.getElementById("modal-overlay");
    const entityForm = document.getElementById("entity-form");

    if (modalOverlay) {
        modalOverlay.classList.remove("active");
        modalOverlay.setAttribute("aria-hidden", "true");
    }

    if (entityForm) {
        entityForm.reset();
        const errorSpans = entityForm.querySelectorAll(".field-error");
        errorSpans.forEach(span => span.textContent = "");
        const inputs = entityForm.querySelectorAll(".form-control");
        inputs.forEach(input => input.classList.remove("input-error"));
    }

    currentModalEntity = null;
}

// Field Validation Logic

function validateValue(rawValue, dataType) {
    const value = (rawValue !== undefined && rawValue !== null) ? String(rawValue).trim() : "";

    // 1. Emptiness check for all fields
    if (value === "") {
        return "This field cannot be empty.";
    }

    // 2. Data type specific validations
    switch (dataType) {
        case "positive-float": {
            const num = parseFloat(value);
            if (isNaN(num) || num <= 0) {
                return "Must be a valid positive number greater than 0.";
            }
            break;
        }

        case "positive-integer": {
            const num = Number(value);
            if (!Number.isInteger(num) || num <= 0) {
                return "Must be a positive whole number greater than 0.";
            }
            break;
        }

        case "non-negative-integer": {
            const num = Number(value);
            if (!Number.isInteger(num) || num < 0) {
                return "Must be a non-negative whole number (0 or greater).";
            }
            break;
        }

        case "email": {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return "Please enter a valid email address (e.g. name@example.com).";
            }
            break;
        }

        case "phone": {
            const phoneRegex = /^\+?[\d\s\-().]{7,20}$/;
            const digitCount = (value.match(/\d/g) || []).length;
            if (!phoneRegex.test(value) || digitCount < 7) {
                return "Please enter a valid phone number with at least 7 digits.";
            }
            break;
        }

        case "date": {
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
            if (!dateRegex.test(value) || isNaN(Date.parse(value))) {
                return "Please provide a valid date in YYYY-MM-DD format.";
            }
            break;
        }

        case "string":
        default: {
            if (value.length < 1) {
                return "This field cannot be empty.";
            }
            break;
        }
    }

    return null; // Valid
}

function validateField(input, dataType) {
    return validateValue(input.value, dataType);
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (!currentModalEntity) return;
    const schema = entitySchemas[currentModalEntity];
    if (!schema) return;

    let hasErrors = false;
    let firstInvalidInput = null;
    const formData = {};

    schema.fields.forEach(field => {
        const input = document.getElementById(`field-${field.name}`);
        const errorSpan = document.getElementById(`error-${field.name}`);
        if (!input) return;

        const error = validateField(input, field.dataType);

        if (error) {
            hasErrors = true;
            input.classList.add("input-error");
            if (errorSpan) errorSpan.textContent = error;
            if (!firstInvalidInput) firstInvalidInput = input;
        } else {
            input.classList.remove("input-error");
            if (errorSpan) errorSpan.textContent = "";

            const trimmedVal = input.value.trim();
            if (field.dataType === "positive-float") {
                formData[field.name] = parseFloat(trimmedVal);
            } else if (field.dataType === "positive-integer" || field.dataType === "non-negative-integer") {
                formData[field.name] = parseInt(trimmedVal, 10);
            } else {
                formData[field.name] = trimmedVal;
            }
        }
    });

    if (hasErrors) {
        if (firstInvalidInput) firstInvalidInput.focus();
        return;
    }

    // Auto-increment ID calculation
    const idField = schema.idField;
    const currentList = schema.list;
    const nextId = currentList.length > 0 
        ? Math.max(...currentList.map(item => Number(item[idField]) || 0)) + 1 
        : 1;

    const newItem = {
        [idField]: nextId,
        ...formData
    };

    // Add new item and re-render table
    currentList.push(newItem);
    schema.render();

    // Close popup modal
    closeModal();
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
    setupModal();
    setupTableInteractions();
});