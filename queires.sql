CREATE TABLE `laws` (
  `id` int(11),
  `author` varchar(64),
  `title` text,
  `article` text,
  `lawyer` int(11),
  PRIMARY KEY (`id`)
);

CREATE TABLE `polices` (
  `id` int(11),
  `designation` varchar(255),
  `station` int(8),
  PRIMARY KEY (`id`)
);

CREATE TABLE `complaints` (
  `id` int(11),
  `nic` varchar(100),
  `full_name` varchar(255),
  `mobile` varchar(10),
  `address` varchar(255),
  `complaint` text,
  `file` text,
  `people` int(11),
  `created_on` datetime,
  `status` int(1),
  PRIMARY KEY (`id`)
);

CREATE TABLE `lawyers` (
  `id` int(11),
  `designation` varchar(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `harassments` (
  `id` int(11),
  `description` text,
  `created_on` datetime,
  `people` int(11),
  PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
  `id` int(11),
  `nic` varchar(100),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `email` varchar(100),
  `password` varchar(255),
  `mobile` varchar(10),
  `created_on` datetime,
  `level` int(1),
  `status` int(1),
  PRIMARY KEY (`nic`)
);

CREATE TABLE `stations` (
  `id` int(11),
  `name` varchar(100),
  `address` varchar(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `peoples` (
  `id` int(11),
  `address` varchar(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `wanted_list` (
  `id` int(11),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `description` text,
  `image` text,
  `police` int(11),
  `created_on` datetime,
  `status` int(1),
  PRIMARY KEY (`id`)
);

CREATE TABLE `suspects` (
  `id` int(11),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `description` text,
  `image` text,
  `police` int(8),
  `created_on` datetime,
  `status` int(1),
  PRIMARY KEY (`id`)
);

