# 📝 Task Tracker Fullstack

**Task Tracker** est une application web **Full Stack** réalisée dans le cadre d’un test technique chronométré de **2 heures**.  
L’objectif : partir de zéro et livrer une application fonctionnelle permettant de **créer, afficher, filtrer, mettre à jour et supprimer des tâches**, avec une architecture claire et une stack moderne.


---

## ⚡ Fonctionnalités

- ➕ **Ajout d’une tâche** avec titre, description et statut (`pending` ou `completed`)
- 📋 **Affichage de toutes les tâches** présentes en base de données
- ✏️ **Mise à jour rapide du statut** (toggle pending ↔ completed)
- 🗑️ **Suppression d’une tâche** par son ID
- 🔍 **Filtrage par statut** (All / Pending / Completed)
- ⏳ **Gestion simple du chargement et des erreurs** lors des appels API (GET et POST)

---

## 🔧 Stack utilisée et raisons des choix

### Frontend
- **React 19** : interface réactive avec composants fonctionnels et hooks (`useState`, `useEffect`)
- **Vite 7** : environnement de développement rapide, peu de configuration
- **Axios** : bibliothèque HTTP plus concise et simple que fetch, avec gestion intégrée des JSON et des erreurs.
- **CSS** : styles basiques de Vite conservés tels quels après création du projet (CSS peu important)

### Backend
- **Express.js** : framework léger pour créer des routes REST rapidement
- **better-sqlite3** : base SQLite locale, rapide et adaptée à un projet test
- **CORS** : permet au client React de communiquer avec le serveur pendant le développement

### Outils
- **Concurrently** : lance le frontend et le backend avec une seule commande
- **React StrictMode** : activé par défaut dans Vite + React, il détecte les problèmes potentiels en développement
- **ESLint** : analyse statique du code pour détecter les erreurs et garantir une cohérence du style (complémentaire à StrictMode)

---

## 🛠 Choix de développement

1. **Backend développé en premier**  
   Création des routes `GET`, `POST`, `PUT`, `DELETE` pour disposer rapidement d’une API fonctionnelle.

2. **PUT limité au changement de statut**  
   Par manque de temps, la mise à jour complète (titre + description + statut) côté interface n’a pas été finalisée.  
   Le PUT sert principalement à basculer le statut d’une tâche (pending ↔ completed).

3. **Gestion d’erreurs progressive**  
   Utilisation de codes HTTP adaptés :  
   - `400` : données invalides
   - `404` : ressource non trouvée
   - `500` : erreur serveur  
   Côté frontend, la gestion d’erreurs est en place pour GET et POST mais reste à compléter pour PUT et DELETE (manque de temps).

---

## 🚀 Lancer le projet en local

### 📦 Prérequis
- [Node.js](https://nodejs.org/) ≥ 18.x (inclut npm ≥ 9.x)

### Étapes
```bash
# 1. Cloner le dépôt
git clone https://github.com/Hamzael25/Task_Tracker.git
cd Task_Tracker

# 2. Installer les dépendances et lancer le projet (frontend + backend en même temps)
npm install
npm run dev

