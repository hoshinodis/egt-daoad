CREATE TABLE `sites`
(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'site id',
    `wallet_address` VARCHAR(42) NOT NULL COMMENT 'site owner wallet address',
    `url` LONGTEXT NOT NULL COMMENT 'site url',
    `status` BIGINT NOT NULL DEFAULT 0 COMMENT 'site status',
    PRIMARY KEY (`id`)
) Engine=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='site';

CREATE TABLE `creatives`
(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'creative id',
    `wallet_address` VARCHAR(42) NOT NULL COMMENT 'creative owner wallet address',
    `link` LONGTEXT NOT NULL COMMENT 'creative link url',
    `img` LONGTEXT NOT NULL COMMENT 'creative img base64',
    `status` BIGINT NOT NULL DEFAULT 0 COMMENT 'status',
    PRIMARY KEY (`id`)
) Engine=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='creative';
