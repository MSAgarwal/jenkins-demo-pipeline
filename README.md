Here is your complete and polished `README.md` file, ready to place in the root of your `nodejs-demo-app` GitHub repository:

---

````markdown
# Node.js Demo App

> A simple and modular Node.js + Express application demonstrating routing, templating, static assets, and optional integrations like MongoDB, Azure AD login, and weather APIs.

![Version](https://img.shields.io/github/package-json/v/MSAgarwal/nodejs-demo-app?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Build](https://github.com/MSAgarwal/nodejs-demo-app/actions/workflows/ci.yml/badge.svg)

---

## ✨ Features

- ⚙️ Express-based routing and middleware
- 🐳 Docker support for easy deployment
- 🚀 GitHub Actions for CI/CD

---

## 🧰 Prerequisites

- Node.js v16+
- npm or yarn

---

## 🚀 Installation

```bash
git clone https://github.com/MSAgarwal/nodejs-demo-app.git
cd nodejs-demo-app
npm install
````

Create an `.env` file from the example:

```bash
cp .env.example .env
```

---

## 🧪 Development

Start the development server with auto-reloading:

```bash
npm run dev
```

Start the production server:

```bash
npm start
```

---

## 📂 Folder Structure

```
nodejs-demo-app/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── views/
│   └── public/
├── Dockerfile
├── package.json
└── README.md
```

---

## 🐳 Docker

Build and run using Docker:

```bash
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app
```

---

## ✅ CI/CD with GitHub Actions

```yaml
name: Node.js CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```
link --http://localhost:3000
---

## 📝 License

This project is licensed under the MIT License.

---

## 👤 Author

**Shubham Agarwal**
GitHub: [@MSAgarwal](https://github.com/MSAgarwal)

---

## ⭐️ Show Your Support

If you like this project, give it a ⭐️ on GitHub!

---

> Generated using `readme-md-generator` and customized manually

```

---

Let me know if you'd also like a matching `.env.example` or Dockerfile template.
```
