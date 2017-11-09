create database if not exists finance;
use finance;

create table if not exists users(
    id int unsigned not null primary key auto_increment,
    username varchar(10) not null,
    password varchar(64) not null,
    createtime timestamp not null default current_timestamp,
    key idx_username(username)
)engine=myisam character set utf8mb4 collate utf8mb4_general_ci;