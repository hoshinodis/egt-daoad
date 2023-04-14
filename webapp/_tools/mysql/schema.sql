CREATE TABLE `sites`
(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'site id',
    `name` VARCHAR(128) NOT NULL COMMENT 'site name',
    `url` LONGTEXT NOT NULL COMMENT 'site url',
    `status` BIGINT NOT NULL DEFAULT 0 COMMENT 'site status',
    PRIMARY KEY (`id`)
) Engine=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='site';

CREATE TABLE `creatives`
(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'creative id',
    `name` VARCHAR(128) NOT NULL COMMENT 'creative name',
    `link` LONGTEXT NOT NULL COMMENT 'creative link url',
    `img` LONGTEXT NOT NULL COMMENT 'creative img base64',
    `status` BIGINT NOT NULL DEFAULT 0 COMMENT 'status',
    PRIMARY KEY (`id`)
) Engine=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='creative';
