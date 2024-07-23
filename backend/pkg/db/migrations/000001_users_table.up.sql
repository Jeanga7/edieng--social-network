CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    `password` TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    avatar TEXT,         -- Optional: URL or path to avatar/image
    nickname TEXT,       -- Optional: Nickname or username
    about_me TEXT        -- Optional: Description or bio
);
