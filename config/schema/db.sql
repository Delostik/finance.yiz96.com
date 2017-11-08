create database finance;
create table user(
	`id` bigint unsigned NOT NULL auto_increment,
    `username` varchar(20),
    `password` varchar(128),
	primary key (`id`),
    key idx_username(username)
)ENGINE=Innodb DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_unicode_ci;
