-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 08, 2023 lúc 10:47 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `phukienoto`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pkoto_widget_data`
--

CREATE TABLE `pkoto_widget_data` (
  `id` bigint(20) NOT NULL,
  `data_date` date NOT NULL,
  `data_uv` int(11) NOT NULL,
  `data_pv` int(11) NOT NULL,
  `data_atm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Đang đổ dữ liệu cho bảng `pkoto_widget_data`
--

INSERT INTO `pkoto_widget_data` (`id`, `data_date`, `data_uv`, `data_pv`, `data_atm`) VALUES
(1, '2023-03-30', 3490, 4300, 2100),
(2, '2023-03-31', 2390, 3800, 2500),
(3, '2023-04-01', 1890, 4800, 2181),
(4, '2023-04-02', 2780, 3908, 2000),
(5, '2023-04-03', 2000, 9800, 2290),
(6, '2023-04-04', 3000, 1398, 2210),
(7, '2023-04-05', 4000, 2400, 2400),
(8, '2023-04-06', 3490, 4300, 2100),
(9, '2023-04-07', 3490, 4300, 2100),
(10, '2023-04-08', 2390, 3800, 2500),
(11, '2023-04-09', 1890, 4800, 2181),
(12, '2023-04-10', 2780, 3908, 2500),
(13, '2023-04-11', 2000, 9800, 2500),
(14, '2023-04-12', 3000, 1398, 2500),
(15, '2023-04-13', 4000, 2400, 2500),
(16, '2023-04-14', 3490, 4300, 2500),
(17, '2023-04-15', 3490, 4300, 2500),
(18, '2023-04-16', 2390, 3800, 2500),
(19, '2023-04-17', 1890, 4800, 2500),
(20, '2023-04-18', 2780, 3908, 2500),
(21, '2023-04-19', 2000, 9800, 2500),
(22, '2023-04-20', 3000, 1398, 2500),
(23, '2023-04-21', 4000, 2400, 2500),
(24, '2023-04-22', 3490, 4300, 2100),
(25, '2023-04-23', 3490, 4300, 2100),
(26, '2023-04-24', 2390, 3800, 2100),
(27, '2023-04-25', 1890, 4800, 2100),
(28, '2023-04-26', 2780, 3908, 2100),
(29, '2023-04-27', 2000, 9800, 2100),
(30, '2023-04-28', 3000, 1398, 2100),
(31, '2023-04-29', 4000, 2400, 2100),
(32, '2023-04-30', 3490, 4300, 2100),
(33, '2023-05-01', 2390, 3800, 2100),
(34, '2023-05-02', 1890, 4800, 2100),
(35, '2023-05-03', 2780, 3908, 2100),
(36, '2023-05-04', 5000, 7000, 2100),
(37, '2023-05-05', 3000, 1398, 2100);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `pkoto_widget_data`
--
ALTER TABLE `pkoto_widget_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `pkoto_widget_data`
--
ALTER TABLE `pkoto_widget_data`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
