-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 22. Jul 2015 um 23:13
-- Server-Version: 5.6.24
-- PHP-Version: 5.6.8


--V04
-- rol: Hinzufügen einer Komponentenbezeichnung (z.B. Galaxy S10)

--V05
-- rol: V05: Bei Attribut "raeume_r_id" in Tabelle "Komponenten" wurde Eigenschaft "not Null" entfernt, da sonst bei Software ein Raum anegeben werden muss

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `itv_v05`
--

DROP DATABASE IF EXISTS `itv_v05`;
CREATE DATABASE IF NOT EXISTS `itv_v05` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `itv_v05`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `lieferant`
--

CREATE TABLE IF NOT EXISTS `lieferant` (
  `l_id` int(11) NOT NULL,
  `l_firmenname` varchar(45) DEFAULT NULL,
  `l_strasse` varchar(45) DEFAULT NULL,
  `l_plz` varchar(5) DEFAULT NULL,
  `l_ort` varchar(45) DEFAULT NULL,
  `l_tel` varchar(20) DEFAULT NULL,
  `l_mobil` varchar(20) DEFAULT NULL,
  `l_fax` varchar(20) DEFAULT NULL,
  `l_email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `lieferant`
--

INSERT INTO `lieferant` (`l_id`, `l_firmenname`, `l_strasse`, `l_plz`, `l_ort`, `l_tel`, `l_mobil`, `l_fax`, `l_email`) VALUES
(1, 'Tall Software', 'Tallstrasse 13', '96047', 'Bamberg', '0951000000', '0873 376461', '040-999 8888', 'Tall.Software@gmail.de'),
(2, 'Easy Hardware', 'Nordweg 33', '14770', 'Brandenburg', '0338100000', '0929 123458', '040-999 7889', 'Easy.Hardware@gmail.de'),
(3, 'TeraShark', 'Sandweg 5', '20149', 'Hamburg', '040 748385', '0422 777777', '040-999 2555', 'Tera.Sahrk@web.de');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `raeume`
--

CREATE TABLE IF NOT EXISTS `raeume` (
  `r_id` int(11) NOT NULL,
  `r_nr` varchar(20) DEFAULT NULL COMMENT 'z.B. r014, W304, etc.',
  `r_bezeichnung` varchar(45) DEFAULT NULL COMMENT 'z.B. Werkstatt, Lager,...',
  `r_notiz` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `raeume`
--

INSERT INTO `raeume` (`r_id`, `r_nr`, `r_bezeichnung`, `r_notiz`) VALUES
(1, 'r001', 'Elektrotechnik', 'Strom nicht abschalten'),
(2, 'r002', 'IT', 'Rechner nach der Stunde heruntefahren'),
(3, 'r003', 'Lager', 'Hier werden Komponenten gelagert');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `komponentenarten`
--

CREATE TABLE IF NOT EXISTS `komponentenarten` (
  `ka_id` int(11) NOT NULL,
  `ka_komponentenart` varchar(45) DEFAULT NULL,
  `ka_software` BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `komponentenarten`
--

INSERT INTO `komponentenarten` (`ka_id`, `ka_komponentenart`, `ka_software`) VALUES
(1, 'PC', 0),
(2, 'Switch', 0),
(3, 'Router', 0),
(4, 'Accesspoints', 0),
(5, 'Drucker', 0),
(6, 'Beamer', 0),
(7, 'Visualizer', 0),
(8, 'Software', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `komponentenattribute`
--

CREATE TABLE IF NOT EXISTS `komponentenattribute` (
  `kat_id` int(11) NOT NULL,
  `kat_bezeichnung` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `komponentenattribute`
--

INSERT INTO `komponentenattribute` (`kat_id`, `kat_bezeichnung`) VALUES
(1, 'Seriennummer'),
(2, 'RAM'),
(3, 'CPU'),
(4, 'Festplatte'),
(5, 'Festplatten Typ'),
(6, 'Grafikausgang'),
(7, 'Anzahl Ports'),
(8, 'Uplinktyp'),
(9, 'IP'),
(10, 'WLAN-Standard'),
(11, 'Druckertyp'),
(12, 'DruckerArt'),
(13, 'Druckformat'),
(14, 'Beidseitiger Druck'),
(15, 'ANSI-Lumen'),
(16, 'Eingang'),
(17, 'Lautsprecher'),
(18, 'Anschlusstyp'),
(19, 'Versionsnummer'),
(20, 'Lizenztyp'),
(21, 'Lizenzanzahl'),
(22, 'Lizenzlaufzeit'),
(23, 'Lizenzinformationen'),
(24, 'Installationshinweise');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `wird_beschrieben_durch`
--

CREATE TABLE IF NOT EXISTS `wird_beschrieben_durch` (
  `komponentenarten_ka_id` int(11) NOT NULL,
  `komponentenattribute_kat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `wird_beschrieben_durch`
--

INSERT INTO `wird_beschrieben_durch` (`komponentenarten_ka_id`, `komponentenattribute_kat_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(2, 1),
(2, 7),
(2, 8),
(3, 1),
(3, 7),
(3, 9),
(4, 1),
(4, 10),
(5, 1),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(6, 1),
(6, 15),
(6, 16),
(6, 17),
(7, 1),
(7, 18),
(8, 19),
(8, 20),
(8, 21),
(8, 22),
(8, 23),
(8, 24);
  
-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `komponenten`
--

CREATE TABLE IF NOT EXISTS `komponenten` (
  `k_id` int(11) NOT NULL,
  `k_bezeichnung` varchar(100) NOT NULL,
  `raeume_r_id` int(11),
  `lieferant_l_id` int(11) NOT NULL,
  `k_einkaufsdatum` date DEFAULT NULL,
  `k_gewaehrleistungsdauer` int(11) DEFAULT NULL,
  `k_notiz` varchar(1024) DEFAULT NULL,
  `k_hersteller` varchar(45) DEFAULT NULL,
  `k_beleg_id` int(11) NOT NULL,
  `komponentenarten_ka_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `komponenten`
--

INSERT INTO `komponenten` (`k_id`, `k_bezeichnung`, `raeume_r_id`, `lieferant_l_id`, `k_einkaufsdatum`, `k_gewaehrleistungsdauer`, `k_notiz`, `k_hersteller`, `k_beleg_id`, `komponentenarten_ka_id`) VALUES
(1, 'ThinkCentre', 2, 2, '2017-04-27 17:52:15', 5, 'Win10 vorinstalliert', 'Think', 1, 1),
(2, 'Switch', 3, 2, '2017-04-27 17:52:15', 2, 'Switch', 'Cisco', 2, 2),
(3, 'PowerPoint', 2, 1, '2017-02-13 13:52:15', 3, 'Lizenz bis 2019 gueltig', 'Microsoft', 3, 8);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `komponente_hat_attribute`
--

CREATE TABLE IF NOT EXISTS `komponente_hat_attribute` (
  `komponenten_k_id` int(11) NOT NULL,
  `komponentenattribute_kat_id` int(11) NOT NULL,
  `khkat_wert` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `komponente_hat_attribute`
--

INSERT INTO `komponente_hat_attribute` (`komponenten_k_id`, `komponentenattribute_kat_id`, `khkat_wert`) VALUES
(1, 1, '939393'),
(1, 2, '4GB'),
(1, 3, 'Intel Core-i5 3470'),
(1, 4, '500GB'),
(1, 5, 'SSD'),
(1, 6, '2xHDMI'),
(2, 1, '222'),
(2, 7, '16'),
(2, 8, 'LWL'),
(3, 19, '1811'),
(3, 20, 'Schuelerversion'),
(3, 21, '20'),
(3, 22, '3 Jahre'),
(3, 23, 'Die 3 Jahre beginne bei Aktivierung des Lizenzschluessels'),
(3, 24, 'Befolgen Sie die Anweisungen des Installationsassistent');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `software_in_raum`
--

CREATE TABLE IF NOT EXISTS `software_in_raum` (
  `sir_k_id` int(11) NOT NULL,
  `sir_r_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `software_in_raum`
--

INSERT INTO `software_in_raum` (`sir_k_id`, `sir_r_id`) VALUES
(1, 2),
(2, 3),
(3, 2);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gruppe`
--

CREATE TABLE IF NOT EXISTS `gruppe` (
	`g_id` int (11) NOT NULL,
	`g_bezeichnung` varchar(30) NOT NULL,
	`g_privilegiert` BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `gruppe`
--

INSERT INTO `gruppe` (`g_id`, `g_bezeichnung`, `g_privilegiert`) VALUES
(1, 'Systembetreuung', TRUE),
(2, 'Azubi', TRUE),
(3, 'Verwaltung', FALSE),
(4, 'Lehrkraft', FALSE);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `benutzer`
--

CREATE TABLE IF NOT EXISTS `benutzer` (
	`b_id` int (11) NOT NULL,
	`gruppe_g_id` int (11) NOT NULL,
	`b_vorname` varchar(50) NOT NULL,
	`b_nachname` varchar(50) NOT NULL,
	`b_username` varchar(50) NOT NULL,
	`b_passwort` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `benutzer`
--

INSERT INTO `benutzer` (`b_id`, `gruppe_g_id`, `b_vorname`, `b_nachname`, `b_username`, `b_passwort`) VALUES
(1, 1, 'Manfred', 'Fischer', 'A0001', '$2y$10$iHqwBPJh.UtLUCZQYtzdmOv40q6j26pc8PAvf5M3rjPfbmoBaaBF2'),
(2, 2, 'Lukas', 'Nuber', 'A0002', '$2y$10$oGtvVZtxnIXp0aahpEWN1ODHJQlLbn3doj9tIAdXZK4xev5FRylqa'),
(3, 3, 'Hannah', 'Leugnert', 'A0003', '$2y$10$uRooRoK59TCr.pi4zdNG3eGLxVODizJLO40KxqR4hpmlAaMWaJYJy'),
(4, 4, 'Udo', 'Schmidt', 'A0004', '$2y$10$.ffq49dPG764uiMZyBCFIOHcP6H2B9NY98Jk0vnBI8LyRxFO1FEFG');


--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `komponenten`
--
ALTER TABLE `komponenten`
  ADD PRIMARY KEY (`k_id`), ADD KEY `fk_komponenten_haendler` (`lieferant_l_id`), ADD KEY `fk_komponenten_raeume1` (`raeume_r_id`), ADD KEY `fk_komponenten_komponentenarten1` (`komponentenarten_ka_id`);

--
-- Indizes für die Tabelle `komponentenarten`
--
ALTER TABLE `komponentenarten`
  ADD PRIMARY KEY (`ka_id`);

--
-- Indizes für die Tabelle `komponentenattribute`
--
ALTER TABLE `komponentenattribute`
  ADD PRIMARY KEY (`kat_id`);

--
-- Indizes für die Tabelle `komponente_hat_attribute`
--
ALTER TABLE `komponente_hat_attribute`
  ADD PRIMARY KEY (`komponenten_k_id`,`komponentenattribute_kat_id`), ADD KEY `fk_komponenten_has_komponentenattribute_komponentenattribute1` (`komponentenattribute_kat_id`), ADD KEY `fk_komponenten_has_komponentenattribute_komponenten1` (`komponenten_k_id`);

--
-- Indizes für die Tabelle `lieferant`
--
ALTER TABLE `lieferant`
  ADD PRIMARY KEY (`l_id`);

--
-- Indizes für die Tabelle `raeume`
--
ALTER TABLE `raeume`
  ADD PRIMARY KEY (`r_id`);

--
-- Indizes für die Tabelle `software_in_raum`
--
ALTER TABLE `software_in_raum`
  ADD PRIMARY KEY (`sir_k_id`,`sir_r_id`), ADD KEY `sir_r_id` (`sir_r_id`);

--
-- Indizes für die Tabelle `wird_beschrieben_durch`
--
ALTER TABLE `wird_beschrieben_durch`
  ADD PRIMARY KEY (`komponentenarten_ka_id`,`komponentenattribute_kat_id`), ADD KEY `fk_komponentenarten_has_komponentenattribute_komponentenattri1` (`komponentenattribute_kat_id`), ADD KEY `fk_komponentenarten_has_komponentenattribute_komponentenarten1` (`komponentenarten_ka_id`);

--
-- Indizes für die Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  ADD PRIMARY KEY (`b_id`);
  
--
-- Indizes für die Tabelle `gruppe`
--
ALTER TABLE `gruppe`
  ADD PRIMARY KEY (`g_id`);
--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `komponenten`
--
ALTER TABLE `komponenten`
  MODIFY `k_id` int(11) NOT NULL AUTO_INCREMENT;
  
--
-- AUTO_INCREMENT für Tabelle `komponentenattribute`
--
ALTER TABLE `komponentenattribute`
  MODIFY `kat_id` int(11) NOT NULL AUTO_INCREMENT;
  
--
-- AUTO_INCREMENT für Tabelle `komponentenarten`
--
ALTER TABLE `komponentenarten`
  MODIFY `ka_id` int(11) NOT NULL AUTO_INCREMENT;
  
--
-- AUTO_INCREMENT für Tabelle `lieferant`
--
ALTER TABLE `lieferant`
  MODIFY `l_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `raeume`
--
ALTER TABLE `raeume`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `benutzer`
--
ALTER TABLE `benutzer`
  MODIFY `b_id` int(11) NOT NULL AUTO_INCREMENT;
  
--
-- AUTO_INCREMENT für Tabelle `gruppe`
--
ALTER TABLE `gruppe`
  MODIFY `g_id` int(11) NOT NULL AUTO_INCREMENT;
  
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `komponenten`
--
ALTER TABLE `komponenten`
ADD CONSTRAINT `fk_komponenten_haendler` FOREIGN KEY (`lieferant_l_id`) REFERENCES `lieferant` (`l_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT `fk_komponenten_komponentenarten1` FOREIGN KEY (`komponentenarten_ka_id`) REFERENCES `komponentenarten` (`ka_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT `komponenten_ibfk_1` FOREIGN KEY (`raeume_r_id`) REFERENCES `raeume` (`r_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints der Tabelle `komponente_hat_attribute`
--
ALTER TABLE `komponente_hat_attribute`
ADD CONSTRAINT `fk_komponenten_has_komponentenattribute_komponenten1` FOREIGN KEY (`komponenten_k_id`) REFERENCES `komponenten` (`k_id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_komponenten_has_komponentenattribute_komponentenattribute1` FOREIGN KEY (`komponentenattribute_kat_id`) REFERENCES `komponentenattribute` (`kat_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints der Tabelle `software_in_raum`
--
ALTER TABLE `software_in_raum`
ADD CONSTRAINT `software_in_raum_ibfk_1` FOREIGN KEY (`sir_r_id`) REFERENCES `raeume` (`r_id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `software_in_raum_ibfk_2` FOREIGN KEY (`sir_k_id`) REFERENCES `komponenten` (`k_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `wird_beschrieben_durch`
--
ALTER TABLE `wird_beschrieben_durch`
ADD CONSTRAINT `fk_komponentenarten_has_komponentenattribute_komponentenarten1` FOREIGN KEY (`komponentenarten_ka_id`) REFERENCES `komponentenarten` (`ka_id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_komponentenarten_has_komponentenattribute_komponentenattri1` FOREIGN KEY (`komponentenattribute_kat_id`) REFERENCES `komponentenattribute` (`kat_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints der Tabelle `benutzer`
--
ALTER TABLE `benutzer`
ADD CONSTRAINT `fk_benutzer_gruppe` FOREIGN KEY (`gruppe_g_id`) REFERENCES `gruppe` (`g_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
ADD CONSTRAINT `unique_username` UNIQUE (`b_username`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
