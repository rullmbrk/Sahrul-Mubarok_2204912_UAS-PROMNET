-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jan 2024 pada 14.21
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2204912_sahrulmubarok_uas`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `pasien_puskesmas_sahrulmubarok`
--

CREATE TABLE `pasien_puskesmas_sahrulmubarok` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `usia` int(11) NOT NULL,
  `jenis_kelamin` varchar(100) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `deskripsi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pasien_puskesmas_sahrulmubarok`
--

INSERT INTO `pasien_puskesmas_sahrulmubarok` (`id`, `nama`, `usia`, `jenis_kelamin`, `alamat`, `deskripsi`) VALUES
(1, 'umar', 25, 'laki-laki', 'bandung', 'sering muncul bintik merah diwajah ketika cuaca dingin'),
(2, 'nisa', 18, 'perempuan', 'jakarta', 'kepala pusing dan mual'),
(3, 'rijal', 20, 'laki-laki', 'purwakarta', 'sakit perut dan diare'),
(4, 'siti', 15, 'perempuan', 'karawang', 'demam'),
(5, 'ujang', 10, 'laki-laki', 'subang', 'patah tulang');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `pasien_puskesmas_sahrulmubarok`
--
ALTER TABLE `pasien_puskesmas_sahrulmubarok`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `pasien_puskesmas_sahrulmubarok`
--
ALTER TABLE `pasien_puskesmas_sahrulmubarok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
