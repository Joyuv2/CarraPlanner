PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_plannings` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`musics` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_plannings`(`id`, `name`, `type`, `musics`) SELECT `id`, `name`, `type`, `musics` FROM `plannings`;--> statement-breakpoint
DROP TABLE `plannings`;--> statement-breakpoint
ALTER TABLE `__new_plannings` RENAME TO `plannings`;--> statement-breakpoint
PRAGMA foreign_keys=ON;