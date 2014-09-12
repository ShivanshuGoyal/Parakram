-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 23, 2012 at 04:43 PM
-- Server version: 5.5.20
-- PHP Version: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `parakram`
--

-- --------------------------------------------------------

--
-- Table structure for table `athletics`
--

CREATE TABLE IF NOT EXISTS `athletics` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `athletics`
--

INSERT INTO `athletics` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `badminton`
--

CREATE TABLE IF NOT EXISTS `badminton` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `badminton`
--

INSERT INTO `badminton` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('dd', 'indian school of mines', 'shivan@gmail.com', '8989898989');

-- --------------------------------------------------------

--
-- Table structure for table `basketball`
--

CREATE TABLE IF NOT EXISTS `basketball` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `basketball`
--

INSERT INTO `basketball` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `cricket`
--

CREATE TABLE IF NOT EXISTS `cricket` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cricket`
--

INSERT INTO `cricket` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('lsjfs', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('jklfa', 'fsfs', 'slfasf', 'jalkd'),
('zdexrx', 'indian school of mines', 'shivanshu@gmail.com', '9837188729'),
('shivanshu goyalfdq', 'shivams', 'shivan@gmail.com', '');

-- --------------------------------------------------------

--
-- Table structure for table `football`
--

CREATE TABLE IF NOT EXISTS `football` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `football`
--

INSERT INTO `football` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian', 'shivan@gmail.com', '9837188729'),
('shivam', 'shivam', 'shivan@gmail.com', '9837188729'),
('shivamji', 'indafda', 'shivan@gmail.com', '9837188729'),
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('umang', 'college', 'shivan@gmail.com', '9837188729'),
('ksdfja', 'ksf', 'shivan@gmail.com', '9837188729'),
('lsjfs', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('shiv', 'shivams', 'shivan@gmail.com', '9837188729'),
('moa', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('uaaaaawr', 'indina', 'shivan@gmail.com', '8989898989'),
('ljfs', 'ljdsf', 'lajd', '0809090909'),
('lajf', 'idnad', 'lksdjf', '8989898989'),
('qqqq', '2', 'shivan@gmail.com', '9837188729'),
('shhh', '', 'shivan@gmail.com', '9837188729'),
('dd', 'idnad', 'shivan@gmail.com', '8989898989'),
('zdexrx', 'indian school of mines', 'shivanshu@gmail.com', '9837188729'),
('shivanshu goyal', 'indian school of mines', 'shivanshu@gmail.com', ''),
('shiviii', 'indian school of mines', 'shivanshu@gmail.com', '');

-- --------------------------------------------------------

--
-- Table structure for table `gaming`
--

CREATE TABLE IF NOT EXISTS `gaming` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gaming`
--

INSERT INTO `gaming` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `gym`
--

CREATE TABLE IF NOT EXISTS `gym` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gym`
--

INSERT INTO `gym` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('zdexrx', 'indian school of mines', 'shivanshu@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `others`
--

CREATE TABLE IF NOT EXISTS `others` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `others`
--

INSERT INTO `others` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'sfas', 'shivan@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `squash`
--

CREATE TABLE IF NOT EXISTS `squash` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `squash`
--

INSERT INTO `squash` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `tabletennis`
--

CREATE TABLE IF NOT EXISTS `tabletennis` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tabletennis`
--

INSERT INTO `tabletennis` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `tennis`
--

CREATE TABLE IF NOT EXISTS `tennis` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tennis`
--

INSERT INTO `tennis` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729');

-- --------------------------------------------------------

--
-- Table structure for table `volleyball`
--

CREATE TABLE IF NOT EXISTS `volleyball` (
  `username` text NOT NULL,
  `college` text NOT NULL,
  `email` text NOT NULL,
  `contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `volleyball`
--

INSERT INTO `volleyball` (`username`, `college`, `email`, `contact`) VALUES
('shivanshu goyal', 'indian school of mines', 'shivan@gmail.com', '9837188729'),
('pavan', 'indian school of mines', 'shivan@gmail.com', '9837188729');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
