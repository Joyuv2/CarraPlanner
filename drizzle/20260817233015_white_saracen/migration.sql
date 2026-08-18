CREATE TABLE `member` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`password_hash` text NOT NULL
);
