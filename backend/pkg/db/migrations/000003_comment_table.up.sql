-- Création de la table Comment
CREATE TABLE IF NOT EXISTS Comment (
    comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    comment TEXT,
    date_creation DATETIME,
    post_id INT,
    `user_id` INT,
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (`user_id`) REFERENCES User(`user_id`)
);