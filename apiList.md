### **1. Authentification**

1. **Inscription Utilisateur**
   - **Endpoint :** `/api/auth/register`
   - **Méthode :** `POST`
   - **Description :** Permet aux nouveaux utilisateurs de s'inscrire.

2. **Connexion Utilisateur**
   - **Endpoint :** `/api/auth/login`
   - **Méthode :** `POST`
   - **Description :** Permet aux utilisateurs existants de se connecter.

3. **Déconnexion Utilisateur**
   - **Endpoint :** `/api/auth/logout`
   - **Méthode :** `POST`
   - **Description :** Permet aux utilisateurs de se déconnecter.

---

### **2. Gestion des Profils Utilisateurs**

4. **Récupérer le Profil Utilisateur**
   - **Endpoint :** `/api/user/profile`
   - **Méthode :** `GET`
   - **Description :** Récupère les informations du profil de l'utilisateur connecté (données perso, statut profil, followers, following...).

5. **Récupérer l'Activité de l'Utilisateur**
   - **Endpoint :** `/api/user/activity`
   - **Méthode :** `GET`
   - **Description :** Récupère les posts et les interactions de l'utilisateur (posts...).

6. **Récupérer les followers de l'utilisateur**
   - **Endpoint :** `/api/user/followers`
   - **Méthode :** `GET`
   - **Description :** Récupère les followers de l'utilisateur.

7. **Récupérer les following de l'utilisateur**
   - **Endpoint :** `/api/user/following`
   - **Méthode :** `GET`
   - **Description :** Récupère les following de l'utilisateur.

8. **Récupérer tous les Non-following**
   - **Endpoint :** `/api/user/non-following`
   - **Méthode :** `GET`
   - **Description :** Récupère tous les utilisateurs non-following pour faire des suggestions.

---

### **3. Gestion des Posts et Commentaires**

9. **Créer un Post**
   - **Endpoint :** `/api/posts/create`
   - **Méthode :** `POST`
   - **Description :** Crée un nouveau post avec du contenu texte, images, GIFs...

10. **Récupérer les Posts de l'Utilisateur**
    - **Endpoint :** `/api/posts/{username}`
    - **Méthode :** `GET`
    - **Description :** Récupère tous les posts d'un utilisateur spécifique.

11. **Ajouter un Commentaire**
    - **Endpoint :** `/api/posts/{postId}/comments/create`
    - **Méthode :** `POST`
    - **Description :** Ajoute un commentaire à un post.

---

### **4. Messagerie Privée**

12. **Envoyer un Message Privé**
    - **Endpoint :** `/api/messages/send`
    - **Méthode :** `POST`
    - **Description :** Envoie un message privé à un autre utilisateur.

13. **Récupérer les Messages d'une Conversation**
    - **Endpoint :** `/api/messages/conversation/{userId}`
    - **Méthode :** `GET`
    - **Description :** Récupère l'historique des messages avec un utilisateur spécifique.

14. **Récupérer les Conversations de l'Utilisateur**
    - **Endpoint :** `/api/messages/conversations`
    - **Méthode :** `GET`
    - **Description :** Récupère toutes les conversations de l'utilisateur connecté.

---

### **5. Gestion des Amis**

15. **Envoyer une Demande d'Ami**
    - **Endpoint :** `/api/friends/request`
    - **Méthode :** `POST`
    - **Description :** Envoie une demande d'ami à un autre utilisateur.

16. **Accepter une Demande d'Ami**
    - **Endpoint :** `/api/friends/accept`
    - **Méthode :** `POST`
    - **Description :** Accepte une demande d'ami reçue.

17. **Récupérer la Liste d'Amis**
    - **Endpoint :** `/api/friends/list`
    - **Méthode :** `GET`
    - **Description :** Récupère la liste d'amis de l'utilisateur.

---

### **6. Notifications**

18. **Récupérer les Notifications Utilisateur**
    - **Endpoint :** `/api/notifications`
    - **Méthode :** `GET`
    - **Description :** Récupère les notifications non lues de l'utilisateur.

19. **Marquer les Notifications Comme Lues**
    - **Endpoint :** `/api/notifications/mark-read`
    - **Méthode :** `POST`
    - **Description :** Marque toutes les notifications de l'utilisateur comme lues.

---

### **7. Gestion des Groupes**

20. **Créer un Groupe**
    - **Endpoint :** `/api/groups/create`
    - **Méthode :** `POST`
    - **Description :** Crée un nouveau groupe.

21. **Envoyer une Demande pour Rejoindre un Groupe**
    - **Endpoint :** `/api/groups/{groupId}/request`
    - **Méthode :** `POST`
    - **Description :** Envoie une demande pour rejoindre un groupe. La demande doit être acceptée par le créateur du groupe.

22. **Accepter une Demande d'Adhésion à un Groupe**
    - **Endpoint :** `/api/groups/{groupId}/accept-request`
    - **Méthode :** `POST`
    - **Description :** Accepte une demande d'adhésion à un groupe. Seul le créateur du groupe peut accepter.

23. **Rejoindre un Groupe**
    - **Endpoint :** `/api/groups/{groupId}/join`
    - **Méthode :** `POST`
    - **Description :** Permet à un utilisateur de rejoindre un groupe après acceptation de la demande.

24. **Récupérer les Groupes de l'Utilisateur**
    - **Endpoint :** `/api/groups/user/{userId}`
    - **Méthode :** `GET`
    - **Description :** Récupère tous les groupes auxquels un utilisateur appartient.

25. **Récupérer les Groupes Non-suivis**
    - **Endpoint :** `/api/groups/non-followed`
    - **Méthode :** `GET`
    - **Description :** Récupère tous les groupes non-suivis pour pouvoir faire des suggestions.

26. **Récupérer les Posts d'un Groupe**
    - **Endpoint :** `/api/groups/{groupId}/posts`
    - **Méthode :** `GET`
    - **Description :** Récupère tous les posts existants d'un groupe.

27. **Créer un Événement dans un Groupe**
    - **Endpoint :** `/api/groups/{groupId}/events/create`
    - **Méthode :** `POST`
    - **Description :** Crée un nouvel événement dans un groupe. Tous les membres du groupe sont notifiés.

28. **Récupérer les Événements d'un Groupe**
    - **Endpoint :** `/api/groups/{groupId}/events`
    - **Méthode :** `GET`
    - **Description :** Récupère tous les événements existants d'un groupe.

29. **Envoyer des Notifications dans un Groupe**
    - **Endpoint :** `/api/groups/{groupId}/notify`
    - **Méthode :** `POST`
    - **Description :** Permet aux membres du groupe d'envoyer des notifications à d'autres utilisateurs.

---

### **8. Recherche**

30. **Rechercher des Utilisateurs**
    - **Endpoint :** `/api/search/users`
    - **Méthode :** `GET`
    - **Description :** Recherche des utilisateurs par nom ou pseudonyme.

31. **Rechercher des Groupes**
    - **Endpoint :** `/api/search/groups`
    - **Méthode :** `GET`
    - **Description :** Recherche des groupes par nom ou description.

32. **Rechercher des messages**
    - **Endpoint :** `/api/search/groups`
    - **Méthode :** `GET`
    - **Description :** Recherche des messages ou des discussions
---