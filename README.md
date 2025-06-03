Groupe : Yacine KADDOURI, Mika LY
App: React
vercel : https://pharmacare-eight.vercel.app/

# Pharmacare 

Une application web de gestion des **laboratoires** et **médicaments**, construite avec **React** côté frontend et un backend JAVA spring BOOt hébergé sur Heroku.

---

##  Fonctionnalités

- Affichage de la liste des laboratoires
- Affichage des médicaments associés à chaque laboratoire
- Création, modification, suppression de laboratoires
- Création, modification, suppression de médicaments
- Intégration possible d’un système d’authentification ( Auth0)
- Ajoute de médicaments dans un panier
- Payement avec paypal ou par Carte bancaire 

---

## 🛠 Stack technique

- **Frontend** : React + Vite
- **Backend** : Java –Spring boot- REST API (exposé via Heroku)
- **Hébergement API** : [https://pharmacare-medapp-b10126e80cac.herokuapp.com](https://pharmacare-medapp-b10126e80cac.herokuapp.com)

---

## ⚙Installation

### 1. Cloner le projet

```bash
git clone https://github.com/ton-nom-utilisateur/pharmacare-medapp.git
cd pharmacare-medapp
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration des variables d’environnement

Créer un fichier `.env` à la racine avec :

```env
VITE_REACT_APP_API_BASE_URL=https://pharmacare-medapp-b10126e80cac.herokuapp.com

```

### 4. Lancer le projet

```bash
npm run dev
```

L’application sera accessible sur [http://localhost:5173](http://localhost:5173)

---


## 📁 Structure (simplifiée)

```
📁 src
├── api.js              # Service d’appel API
├── components/         # Composants React (LaboratoryCard, MedicineList, etc.)
├── pages/              # Pages principales
├── App.jsx
└── main.jsx
```

---



## 🧪 Exemples d'API

- `GET /laboratories` → Liste des laboratoires
- `GET /meds` → Liste des médicaments
- `POST /laboratories` → Ajouter un laboratoire
- `PUT /meds/:id` → Modifier un médicament
- `DELETE /meds/:id` → Supprimer un médicament

---




