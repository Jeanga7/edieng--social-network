
# Social Network

Ce document décrit les responsabilités et les répartitions des tâches pour chaque membre de l'équipe impliquée dans le développement du social network

---

## 🏗️ **Répartition des Tâches par Membres**

---

### **👤 Membre 1: Frontend - Authentification et Gestion des Profils Utilisateurs**

#### **Responsabilités :**

##### **Authentification (Inscription, Connexion, Déconnexion)**

- **Création des Formulaires d'Inscription et de Connexion**
  - Design et implémentation de formulaires responsifs pour l'inscription et la connexion des utilisateurs.
  - Validation des formulaires et gestion des erreurs.
  - **Dépendances** : API backend pour l'inscription et la connexion des utilisateurs.

- **Gestion des Sessions et des Cookies**
  - Utilisation des cookies pour gérer les sessions utilisateur et stocker les jetons JWT.
  - **Dépendances** : Support backend pour la génération et la validation des jetons.

- **Fonctionnalité de Déconnexion**
  - Implémentation de la déconnexion en vidant les cookies et en mettant à jour l'état de l'UI.
  - **Dépendances** : Point d'API backend pour la terminaison de session.

##### **Profil Utilisateur**

- **Création de la Page de Profil Utilisateur**
  - Affichage des informations utilisateur : Nom, Date de Naissance, Avatar, Username, À propos de moi.
  - Affichage de l'activité de l'utilisateur (posts) et listes des abonnés/abonnements.
  - **Dépendances** : Point d'API backend pour récupérer les données utilisateur.

- **Paramètres de Confidentialité du Profil**
  - Ajout d'un toggle pour les profils publics/privés.
  - Mise à jour de l'UI en fonction des paramètres de confidentialité.
  - **Dépendances** : Support backend pour la mise à jour des paramètres de confidentialité.

---

### **👤 Membre 2: Backend - Authentification et Gestion des Utilisateurs**

#### **Responsabilités :**

##### **Serveur et Middleware**

- **Configuration du Serveur Go**
  - Initialisation du serveur Go avec routage pour les points d'API.
  - Implémentation de la journalisation et de la gestion des erreurs.

- **Middleware d'Authentification**
  - Développement d'un middleware pour la gestion des sessions et des cookies.
  - Utilisation de JWT pour une authentification sécurisée.
  - **Dépendances** : Base de données utilisateur et logique de connexion.

- **Gestion des Fichiers Images**
  - Support des uploads de fichiers et stockage des images dans le système de fichiers.
  - Gestion des formats JPEG, PNG et GIF.
  - **Dépendances** : Intégration avec les fonctionnalités de profil et de post.

##### **Points d'API pour l'Authentification**

- **Endpoints pour l'Inscription, la Connexion et la Déconnexion**
  - Création de points d'API pour l'inscription des utilisateurs, la connexion, et la déconnexion.
  - Gestion de la validation des données et des cas d'erreur.
  - **Dépendances** : Aligner avec les formulaires frontend.

##### **Points d'API pour le Profil Utilisateur**

- **Gestion des Profils Utilisateurs**
  - Endpoints pour récupérer, mettre à jour et gérer les profils utilisateurs.
  - Logique pour le basculement des paramètres de confidentialité.
  - **Dépendances** : Supporte les fonctionnalités frontend du profil.

---

### **👤 Membre 3: Frontend - Posts, Commentaires et Chats Privés**

#### **Responsabilités :**

##### **Posts et Commentaires**

- **Création des Fonctionnalités de Post**
  - Permettre aux utilisateurs de créer posts.
  - Implémentation de l'upload de fichiers pour les images/GIFs.
  - Éditeur de texte enrichi pour le contenu des posts.
  - **Dépendances** : Points d'API backend pour les opérations CRUD.

- **Système de Commentaires**
  - Permettre aux utilisateurs de commenter les posts avec des images/GIFs.
  - Implémentation de l'édition et de la suppression des commentaires.
  - **Dépendances** : Points d'API backend pour les commentaires CRUD.

- **Paramètres de Confidentialité des Posts**
  - Options de confidentialité des posts : public, privé, presque privé.
  - Assurer que l'UI reflète les paramètres de confidentialité actuels.
  - **Dépendances** : Support backend pour la logique de confidentialité.

##### **Chats Privés**

- **Messagerie Privée en Temps Réel**
  - Implémentation de la messagerie privée basée sur WebSocket.
  - Design de l'interface de chat, y compris le support des émojis.
  - **Dépendances** : Serveur WebSocket backend.

---

### **👤 Membre 4: Backend - Gestion des Groupes et WebSocket**

#### **Responsabilités :**

##### **Base de Données et Migrations**

- **Configuration de la Connexion à la Base de Données SQLite**
  - Établissement de la logique de connexion pour SQLite.
  - Assurer un accès sécurisé et efficace à la base de données.
  - **Dépendances** : Configuration et configuration de la base de données.

- **Création de Scripts de Migration**
  - Écriture de scripts de migration pour les tables (utilisateurs, posts, commentaires, etc.).
  - Assurer que les scripts peuvent être exécutés en avant et en arrière.
  - **Dépendances** : Structure alignée avec la logique backend.

- **Système de Migration**
  - Utilisation de golang-migrate pour automatiser les migrations.
  - Intégration transparente dans la configuration backend.
  - **Dépendances** : Doit s'aligner avec le schéma de base de données.

##### **Points d'API pour les Groupes**

- **Gestion des Groupes**
  - Endpoints pour la création de groupes, les invitations, et la gestion des membres.
  - Gestion des posts et des commentaires spécifiques aux groupes.
  - **Dépendances** : Supporte les fonctionnalités frontend de groupe.

- **WebSocket pour les Groupes**
  - Configuration du serveur WebSocket pour le chat de groupe.
  - Assurer des mises à jour en temps réel pour les membres du groupe.
  - **Dépendances** : Logique de gestion des membres de groupe.

##### **Gestion des Notifications**

- **Système de Notifications**
  - Logique pour l'envoi de notifications basées sur des événements.
  - Intégration avec WebSockets pour la livraison en temps réel.
  - **Dépendances** : Lié à de multiples interactions utilisateur.

---

## **📋 Répartition Résumée :**

- **👤 Membre 1 : Frontend - Authentification et Profils Utilisateurs**
  - Inscription, connexion, déconnexion, gestion des sessions, pages de profil utilisateur, paramètres de confidentialité du profil.

- **👤 Membre 2 : Backend - Authentification et Gestion des Utilisateurs**
  - Serveur Go, middleware d'authentification, gestion des fichiers images, points d'API pour l'authentification et le profil utilisateur.

- **👤 Membre 3 : Frontend - Posts, Commentaires et Chats Privés**
  - Création, édition et suppression de posts et commentaires, gestion des fichiers médias, messagerie privée en temps réel.

- **👤 Membre 4 : Backend - Gestion des Groupes et WebSocket**
  - Configuration et migration de la base de données, points d'API pour la gestion des groupes, gestion des chats de groupe, système de notifications.

---

## **🛠️ Plan de Communication**

- **Réunions Hebdomadaires :** Pour évaluer l'avancement des tâches et résoudre les problèmes.

- **Daily Stand-ups :** Sessions courtes pour s'assurer que tout le monde est sur la même page et pour soulever rapidement les obstacles.

- **Plateformes de Communication :** Utilisation de Slack ou Microsoft Teams pour les communications quotidiennes.

- **Gestion de Projet :** Utilisation de Trello ou JIRA pour suivre les tâches, leurs statuts et faciliter la coordination entre les membres de l'équipe.

- **Intégration Continue et Déploiement (CI/CD) :** Mise en place de pipelines pour automatiser les tests et le déploiement, garantissant que les modifications de code n'introduisent pas de régressions.

---


---

## Chronologie du Projet (3 Semaines)

### **Semaine 1 : Préparation et Développement Initial**

#### **Jour 1-2 :**
- **Membre 1 (Frontend)**
  - **Task 1:** Création des Formulaires d'Inscription et de Connexion
    - *Dépendances:* Nécessite des endpoints backend pour les tests.
  
- **Membre 2 (Backend)**
  - **Task 15:** Configuration du Serveur Go
    - *Dépendances:* Aucune, préparation pour les tâches suivantes.

- **Membre 4 (Backend)**
  - **Task 18:** Configuration de la Connexion à la Base de Données SQLite
    - *Dépendances:* Prépare la base pour les migrations et les API.

#### **Jour 3-4 :**
- **Membre 1 (Frontend)**
  - **Task 2:** Gestion des Sessions et des Cookies
    - *Dépendances:* Dépend des endpoints backend pour la gestion des sessions.

- **Membre 2 (Backend)**
  - **Task 16:** Middleware d'Authentification
  - **Task 21:** Création des API Endpoints pour l'Authentification
    - *Dépendances:* Dépend de la configuration du serveur Go.

- **Membre 4 (Backend)**
  - **Task 19:** Création des Scripts de Migration
    - *Dépendances:* Dépend de la configuration de la base de données.

#### **Jour 5-7 :**
- **Membre 2 (Backend)**
  - **Task 22:** Création des API Endpoints pour les Profils Utilisateur
    - *Dépendances:* Dépend des tâches d'authentification et des migrations.

- **Membre 3 (Frontend)**
  - **Task 6:** Création de la Fonctionnalité de Post
    - *Dépendances:* Dépend des endpoints backend pour les posts.

- **Membre 4 (Backend)**
  - **Task 24:** Création des Endpoints pour les Groupes
    - *Dépendances:* Dépend des migrations et de la configuration de la base de données.

- **Membre 1 (Frontend)**
  - **Task 4:** Création de la Page de Profil Utilisateur
    - *Dépendances:* Dépend des endpoints backend pour les profils utilisateurs.

### **Semaine 2 : Développement des Fonctionnalités Avancées**

#### **Jour 8-9 :**
- **Membre 2 (Backend)**
  - **Task 28:** Système de Notifications
    - *Dépendances:* Dépend des fonctionnalités de groupe et des interactions utilisateurs.

- **Membre 3 (Frontend)**
  - **Task 7:** Système de Commentaires
    - *Dépendances:* Dépend des endpoints backend pour les commentaires.

#### **Jour 10-11 :**
- **Membre 3 (Frontend)**
  - **Task 12:** Messagerie Privée en Temps Réel
    - *Dépendances:* Dépend des WebSocket backend pour la messagerie.

- **Membre 4 (Backend)**
  - **Task 27:** WebSocket pour les Chats de Groupe
    - *Dépendances:* Dépend de la mise en place des WebSocket pour la messagerie.

#### **Jour 12-14 :**
- **Membre 4 (Backend)**
  - **Task 25:** Endpoints pour les Messages de Chat
    - *Dépendances:* Dépend des fonctionnalités WebSocket.

- **Membre 3 (Frontend)**
  - **Task 9, 10, 11:** Création des Fonctionnalités de Groupes
    - *Dépendances:* Dépend des endpoints backend pour les groupes et les notifications.

- **Membre 1 (Frontend)**
  - **Task 3:** Fonctionnalité de Déconnexion
    - *Dépendances:* Dépend des endpoints backend pour la déconnexion.

### **Semaine 3 : Finalisation, Tests et Containerisation**

#### **Jour 15-16 :**
- **Tous les Membres**
  - **Task 29, 30:** Création des Dockerfiles
    - *Membre 1:* Dockerfile pour le frontend.
    - *Membre 2:* Dockerfile pour le backend.
    - *Membre 4:* Assurer la configuration correcte de la base de données dans Docker.
    - *Dépendances:* Dépend de la finalisation des fonctionnalités frontend et backend.

  - **Task 31:** Configuration de Docker Compose
    - Assurer que les conteneurs frontend et backend peuvent communiquer efficacement.

#### **Jour 17-18 :**
- **Tous les Membres**
  - **Task 31:** Configuration de Docker Compose
    - Assurer que les conteneurs frontend et backend peuvent communiquer efficacement.
    - *Dépendances:* Dépend de la finalisation des Dockerfiles.

#### **Jour 19-21 :**
- **Tous les Membres**
  - **Tests de Fonctionnalité et Débogage**
    - *Dépendances:* S'assurer que toutes les fonctionnalités sont intégrées et testées de manière fluide.

---
```
/project-root
│
├── /frontend                   # Contient le code source du frontend avec Next.js
│   ├── /public                 # Contient les fichiers statiques accessibles publiquement
│   │   ├── /images             # Images utilisées dans l'application
│   │   └── /styles             # Styles globaux de l'application
│   │       └── globals.css     # Styles globaux appliqués à l'ensemble du site
│   ├── /src                    # Code source de l'application Next.js
│   │   ├── /components         # Composants React utilisés dans les pages
│   │   │   ├── AuthForm.js     # Composant pour le formulaire d'authentification
│   │   │   ├── Profile.js      # Composant pour afficher les informations du profil
│   │   │   ├── Post.js         # Composant pour afficher les posts
│   │   │   ├── Chat.js         # Composant pour le chat
│   │   │   └── Group.js        # Composant pour les groupes
│   │   ├── /pages              # Pages principales de l'application
│   │   │   ├── index.js        # Page d'accueil
│   │   │   ├── auth.js         # Page pour l'authentification
│   │   │   ├── profile.js      # Page pour le profil utilisateur
│   │   │   ├── posts.js        # Page pour les posts
│   │   │   ├── chat.js         # Page pour le chat
│   │   │   └── groups.js       # Page pour les groupes
│   │   ├── /styles             # Fichiers CSS spécifiques à chaque page ou composant
│   │   │   └── Home.module.css # Styles pour la page d'accueil
│   │   └── /utils              # Fonctions utilitaires pour le frontend
│   │       ├── authUtils.js    # Utilitaires pour l'authentification
│   │       ├── profileUtils.js # Utilitaires pour le profil utilisateur
│   │       ├── postsUtils.js   # Utilitaires pour les posts
│   │       ├── chatUtils.js    # Utilitaires pour le chat
│   │       └── groupsUtils.js  # Utilitaires pour les groupes
│   ├── next.config.js          # Configuration spécifique de Next.js
│   ├── package.json            # Dépendances et scripts pour Next.js
│   └── README.md               # Documentation du frontend
│
├── /backend                    # Contient le code source du backend
│   ├── main.go                 # Point d'entrée de l'application backend
│   ├── middlewares.go          # Middleware pour l'authentification, les erreurs, etc.
│   ├── routes.go               # Routage des différentes routes de l'API
│   ├── /controllers            # Contrôleurs pour gérer les requêtes HTTP
│   │   ├── user_controller.go  # Gestion des utilisateurs
│   │   ├── post_controller.go  # Gestion des posts
│   │   └── group_controller.go # Gestion des groupes (si applicable)
│   ├── /services              # Logique métier pour les différentes entités
│   │   ├── user_service.go    # Services pour les utilisateurs
│   │   ├── post_service.go    # Services pour les posts
│   │   ├── comment_service.go # Services pour les commentaires
│   │   └── group_service.go   # Services pour les groupes (si applicable)
│   ├── /websocket             # Configuration et gestion des WebSockets
│   │   └── websocket.go       # Gestion des connexions WebSocket
│   ├── /pkg                   # Paquets utilitaires pour la base de données, les modèles, etc.
│   │   ├── /db                # Logique liée à la base de données
│   │   │   ├── /migrations    # Dossier pour les fichiers de migration SQL
│   │   │   │   ├── /sqlite   # Migrations pour SQLite
│   │   │   │   │   ├── 000001_create_users_table.up.sql # Crée la table des utilisateurs
│   │   │   │   │   ├── 000001_create_users_table.down.sql # Supprime la table des utilisateurs
│   │   │   │   │   ├── 000002_create_posts_table.up.sql  # Crée la table des posts
│   │   │   │   │   └── 000002_create_posts_table.down.sql # Supprime la table des posts
│   │   │   │   └── /other_db_type (si vous ajoutez d'autres types de base de données)
│   │   │   ├── sqlite.go      # Gestion de la connexion SQLite et application des migrations
│   │   │   └── /other_db_type.go (si vous ajoutez d'autres types de base de données)
│   │   ├── /models            # Modèles de données pour l'application
│   │   │   ├── user.go        # Modèle de données pour les utilisateurs
│   │   │   ├── post.go        # Modèle de données pour les posts
│   │   │   └── group.go       # Modèle de données pour les groupes (si applicable)
│   │   ├── /services          # Services pour la logique métier
│   │   │   ├── user_service.go # Logique métier pour les utilisateurs
│   │   │   ├── post_service.go # Logique métier pour les posts
│   │   │   └── group_service.go (si applicable) # Logique métier pour les groupes
│   │   ├── /controllers       # Contrôleurs pour les API
│   │   │   ├── user_controller.go  # Gestion des utilisateurs
│   │   │   ├── post_controller.go  # Gestion des posts
│   │   │   └── group_controller.go (si applicable) # Gestion des groupes
│   │   └── /websocket         # Gestion des WebSockets
│   │       └── websocket.go   # Configuration et gestion des WebSockets
│   ├── server.go              # Serveur principal du backend
│   └── go.mod                 # Dépendances Go pour le backend
│
└── /database                  # Contient les scripts SQL pour les migrations
    └── migrations.sql         # Fichiers SQL pour les migrations de la base de données, si non inclus dans /backend/pkg/db/migrations/sqlite
```