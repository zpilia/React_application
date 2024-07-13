# Application de gestion de produits en React

## Description

Il s'agit d'une application de gestion de produits basée sur React qui permet aux utilisateurs de consulter, ajouter, modifier et supprimer des produits. L'application utilise Redux pour la gestion de l'état et Material-UI pour le design. L'API backend est construite avec Express et MongoDB.

## Fonctionnalités

- Consulter une liste de produits
- Ajouter un nouveau produit
- Modifier un produit existant
- Supprimer un produit
- Alertes pour les messages de succès et d'erreur

## Technologies Utilisées

- React
- Material-UI
- Axios
- Express
- MongoDB
- WebSocket (Socket.IO) [Bonus]
- Redux [Bonus]
- 
## Configuration du Projet

### Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (v14.x ou version ultérieure)
- npm (v6.x ou version ultérieure)
- MongoDB (exécuté localement ou instance cloud)

### Installation

1. **Cloner le dépôt :**
    ```sh
    git clone https://github.com/votre-nom-utilisateur/votre-nom-depot.git
    cd votre-nom-depot
    ```

2. **Installer les dépendances pour le client :**
    ```sh
    cd client
    npm install
    ```

3. **Installer les dépendances pour le serveur :**
    ```sh
    cd ../server
    npm install
    ```

### Exécution de l'Application

1. **Démarrer le serveur MongoDB :**
   Assurez-vous que votre serveur MongoDB est en cours d'exécution. Si vous utilisez une instance locale, vous pouvez le démarrer avec :
    ```sh
    mongod
    ```

2. **Démarrer le serveur :**
    ```sh
    cd server
    npm start
    ```

3. **Démarrer le client :**
   Ouvrez un nouveau terminal et naviguez jusqu'au répertoire client, puis démarrez le client :
    ```sh
    cd client
    npm start
    ```

L'application devrait maintenant être accessible à l'adresse `http://localhost:3000`.

### Commandes Importantes

#### Client

- **Installer les dépendances :**
    ```sh
    npm install
    ```

- **Démarrer le client :**
    ```sh
    npm start
    ```

- **Construire le client pour la production :**
    ```sh
    npm run build
    ```

#### Serveur

- **Installer les dépendances :**
    ```sh
    npm install
    ```

- **Démarrer le serveur :**
    ```sh
    npm start
    ```

### Configuration de Redux

Ce projet utilise Redux pour la gestion de l'état. Le store Redux est configuré dans `src/store.js` et les slices sont situées dans `src/slices`.

### Configuration de Material-UI

Ce projet utilise Material-UI pour le design. La configuration du thème est située dans `src/theme`.

### Configuration de WebSocket

Le projet utilise Socket.IO pour les mises à jour en temps réel. Le serveur WebSocket est configuré dans `server/sockets/productSocket.js`.

### Endpoints de l'API

- **GET /products** - Récupérer tous les produits
- **GET /products/:id** - Récupérer un produit par ID
- **POST /products** - Créer un nouveau produit
- **PUT /products/:id** - Mettre à jour un produit par ID
- **DELETE /products/:id** - Supprimer un produit par ID

### Configuration d'ESLint

Ce projet utilise ESLint pour appliquer les normes de codage. Le fichier de configuration se trouve à la racine du projet.