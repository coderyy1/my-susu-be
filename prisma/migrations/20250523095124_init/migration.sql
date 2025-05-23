-- CreateTable
CREATE TABLE `photos` (
    `p_id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_url` VARCHAR(512) NOT NULL,
    `p_desc` VARCHAR(255) NULL DEFAULT '',
    `p_type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `photos_p_url_key`(`p_url`),
    PRIMARY KEY (`p_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `games` (
    `g_id` INTEGER NOT NULL AUTO_INCREMENT,
    `g_url` VARCHAR(512) NOT NULL,
    `g_desc` VARCHAR(255) NULL DEFAULT '',
    `g_type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `games_g_url_key`(`g_url`),
    PRIMARY KEY (`g_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
