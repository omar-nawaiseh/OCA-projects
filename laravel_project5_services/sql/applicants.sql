-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2021 at 07:41 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_project5_services`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `applicant_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_mobile` bigint(20) DEFAULT NULL,
  `applicant_city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_desc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_education_img` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_subscription_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`applicant_id`, `category_id`, `applicant_name`, `applicant_email`, `applicant_mobile`, `applicant_city`, `applicant_image`, `applicant_desc`, `applicant_education_img`, `applicant_subscription_type`, `created_at`, `updated_at`) VALUES
(2, '2', 'zainab radwan mohammad zubi', 'zainab.alzubi@gmail.com', 773456789, 'Maan', '1609651697.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', '1609651697.jpg', 'Monthly', '2021-01-03 03:52:12', '2021-01-03 03:52:12'),
(3, '3', 'mohammad yacoub jamal khaled', 'moh@gmail.com', 773456789, 'Ajloun', '1609651757.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', '1609651757.jpg', 'Half yearly', '2021-01-03 03:52:15', '2021-01-03 03:52:15'),
(6, '2', 'lara mutaz ail khaled', 'lara@gmail.com', 773456789, 'Amman', '1609652164.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', '1609652164.png', 'Half yearly', '2021-01-03 03:52:28', '2021-01-03 03:52:28'),
(8, '2', 'marina bolas nadi alsahawneh', 'marina@gmail.com', 773456789, 'Amman', '1609652497.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', '1609652497.png', 'Half yearly', '2021-01-03 03:52:36', '2021-01-03 03:52:36'),
(9, '1', 'aburomman ahmad salt salt', 'aburumman@gmail.com', 773456789, 'Irbid', 'defaultImage.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', '1609652853.jpg', 'Monthly', '2021-01-03 03:52:39', '2021-01-03 03:52:39'),
(10, '3', 'laith enooz boom shakaa', 'enooz@gmail.com', 773456789, 'Maan', '1609652927.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', '1609652927.png', 'Yearly', '2021-01-03 03:52:48', '2021-01-03 03:52:48'),
(11, '3', 'maria rad moh zubi', 'marya.alyjutyzubi@gmail.com', 123456789, 'Amman', '1609653949.jpg', 'ddddddddddddddddddddddddddddddddddddd', '1609653949.jpg', 'Monthly', '2021-01-03 04:05:55', '2021-01-03 04:05:55'),
(12, '1', 'ahmad ahmad ahmad ahmad', 'ahmad@gmail.com', 773456789, 'Amman', '1609655179.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', '1609655179.png', 'Half yearly', '2021-01-03 04:26:39', '2021-01-03 04:26:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`applicant_id`),
  ADD UNIQUE KEY `applicants_applicant_email_unique` (`applicant_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `applicant_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
