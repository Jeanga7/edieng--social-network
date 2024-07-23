-- Création de la table Post
CREATE TABLE IF NOT EXISTS posts (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT,
    image_name TEXT,
    creation_date DATETIME,
    `user_id` INT,
    FOREIGN KEY (`user_id`) REFERENCES users(`user_id`)
);