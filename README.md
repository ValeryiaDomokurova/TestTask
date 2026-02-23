# Test Task — Automation Tests for DemoQA

This project contains automated tests for the **Dragabble** and **Droppable** sections of the [DemoQA](https://demoqa.com) website.  
The tests are written using **Playwright** and follow the **Page Object Model (POM)** pattern.

---

## Project Structure
---
```
TestTask/
├── pages/
│ ├── base.page.js
│ ├── dragabble.page.js
│ └── droppable.page.js
├── tests/
│ ├── dragabble.test.js
│ └── droppable.test.js
├── playwright.config.js
├── package.json
└── README.md
```
---

## How to Run Tests

### 1. Install dependencies

```
npm install
```

### 2. Run all tests

```
npx playwright test
```

### 3. Run tests with visible browser

```
npx playwright test --headed
```

### 4. Run a specific test file

```
npx playwright test tests/dragabble.test.js --headed
```

---

## Technologies Used

```
Playwright — testing framework
JavaScript — programming language
Page Object Model — architecture pattern
```

## Author

```
Valeryia Domokurova
```
