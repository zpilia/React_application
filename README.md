# 🛒 Product Management App – Application de gestion de produits

**Product Management App** est une application web développée en **React**, **Node.js**, **Express**, et **MongoDB**.  
Elle permet aux utilisateurs de gérer un catalogue de produits via une interface ergonomique et moderne intégrant **Material-UI** et **Redux**.

---

## 📌 Objectif

Fournir un outil complet de gestion produit permettant :
- De **consulter** un inventaire de produits
- D’**ajouter**, **modifier** ou **supprimer** des fiches produits
- D’**organiser** les données produits via un back-office intuitif
- De bénéficier d’une **expérience en temps réel** (optionnelle) grâce à **Socket.IO**

---

## 🧩 Fonctionnalités

### 🛠️ Espace Administrateur

- 👁️ **Consultation** :
    - Liste complète des produits
    - Détails d’un produit individuel

- ➕ **Ajout** :
    - Formulaire de création avec validation
    - Champs : nom, prix, stock, image, etc.

- ✏️ **Modification** :
    - Formulaire pré-rempli pour édition rapide

- ❌ **Suppression** :
    - Action sécurisée avec confirmation
    - Mise à jour automatique de l’interface

- ⚠️ **Alertes & UX** :
    - Utilisation des **Snackbars (Material-UI)**
    - Retours visuels en cas de succès ou d’erreur

- 🔄 **Bonus** :
    - **Redux Toolkit** pour la gestion d’état
    - **Socket.IO** pour des mises à jour en temps réel (optionnel)

---

## 🛠️ Technologies Utilisées

| Catégorie | Technologies |
|----------|--------------|
| Frontend | React, Redux Toolkit, Material-UI, Axios |
| Backend | Node.js, Express |
| Base de données | MongoDB |
| Temps réel (option) | Socket.IO |
| Outils | ESLint, npm |

---

## 🗂️ Architecture du Projet

```
product-management-app/
├── client/
│   └── src/
│       ├── components/
│       ├── slices/
│       ├── store.js
│       ├── theme.js
│       └── App.js
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   └── server.js
└── README.md
```

---

## 🚀 Lancement

1. Cloner le projet :
```bash
git clone https://github.com/<username>/product-management-app.git
cd product-management-app
```

2. Installer les dépendances :
```bash
cd client && npm install
cd ../server && npm install
```

3. Lancer MongoDB :
```bash
mongod
```

4. Démarrer les serveurs :
```bash
# Backend
cd server
npm start

# Frontend (dans un autre terminal)
cd client
npm start
```

Accès à l’application sur **http://localhost:3000**

---

## 📡 API – Principaux Endpoints

| Méthode | Endpoint | Description |
|--------|----------|-------------|
| GET | /products | Récupère tous les produits |
| GET | /products/:id | Récupère un produit spécifique |
| POST | /products | Crée un nouveau produit |
| PUT | /products/:id | Met à jour un produit |
| DELETE | /products/:id | Supprime un produit |

---

## 🖼️ Aperçu

<p align="center"><img src="./assets/" width="900"/></p>

---

## 🤝 Auteur

Développé par [zpilia](https://github.com/zpilia)  
Réalisé dans le cadre d’un **test technique pour une alternance**, durant la formation **Web@cadémie**.

---

## 🪪 Licence

© zpilia — Tous droits réservés.  
L’usage, la reproduction ou la distribution sont soumis à autorisation.

---

# 🇬🇧 English Version

# 🛒 Product Management App – Inventory Web Platform

**Product Management App** is a modern full-stack web application built with **React**, **Node.js**, **Express**, and **MongoDB**.  
It allows users to browse, create, update, and delete products through a clean admin interface using **Material-UI** and **Redux Toolkit**.

---

## 📌 Objective

Provide companies with a full-featured product management interface to:
- Manage product data
- Validate user input
- Track inventory
- Provide real-time sync (optional)

---

## 🧩 Features

### 🛠️ Admin Panel

- 👁️ **View** products list and details
- ➕ **Add** new items with form validation
- ✏️ **Edit** products via prefilled forms
- ❌ **Delete** items with confirmation
- ⚠️ **UX feedback** using Material-UI Snackbars
- 🔄 Optional real-time updates with Socket.IO

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React, Redux Toolkit, Material-UI |
| Backend | Node.js, Express |
| Database | MongoDB |
| Realtime | Socket.IO (optional) |

---

## 🗂️ Project Structure

```
product-management-app/
├── client/
│   └── src/
│       ├── components/
│       ├── slices/
│       ├── store.js
│       └── App.js
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
```

---

## 🚀 Getting Started

1. Clone the project:
```bash
git clone https://github.com/<username>/product-management-app.git
cd product-management-app
```

2. Install dependencies:
```bash
cd client && npm install
cd ../server && npm install
```

3. Start MongoDB:
```bash
mongod
```

4. Run the servers:
```bash
cd server && npm start
cd ../client && npm start
```

---

## 🖼️ Preview

<p align="center"><img src="./assets/pm_1.png" width="900"/></p>
<p align="center"><img src="./assets/pm_2.png" width="900"/></p>
<p align="center"><img src="./assets/pm_3.png" width="900"/></p>

---

## 👤 Developed by

Developed by [zpilia](https://github.com/zpilia)  
Created as part of a **technical test for an internship** during the **Web@cadémie** training program.

---

## 🪪 License

© zpilia — All rights reserved.  
Use, reproduction or distribution requires authorization.
