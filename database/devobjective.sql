-- MySQL dump 10.13  Distrib 5.5.41, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: devobjective
-- ------------------------------------------------------
-- Server version	5.5.41-0ubuntu0.14.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `device_token` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zip` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `linkId` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (24,'The Lord of the Rings Balrog Demon of Shadow and Flame Statue','This Lord of the Rings polystone statue from Weta depicts Balrog of Morgoth, wielding a flaming sword.','the+lord+of+the+rings+balrog+demon+of+shadow+and+flame+statue',648.95,'lotrwtstat02.jpg','thumbnail_lotrwtstat02.jpg'),(25,'The Lord of the Rings Ringwraith Statue','This intricately sculpted Lord of the Rings statue captures the undead servant of the Dark Lord Sauron, the Ringwraith.','the+lord+of+the+rings+ringwraith+statue',74.95,'lotrwtstat03.jpg','thumbnail_lotrwtstat03.jpg'),(26,'The Lord of the Rings Arwen Sitting Statue','This intricately sculpted Lord of the Rings statue of Arwen beautifully captures her sitting on a chaise, reading a book.','the+lord+of+the+rings+arwen+sitting+statue',84.95,'lotrwtstat01.jpg','thumbnail_lotrwtstat01.jpg'),(27,'The Lord of the Rings: Fellowship of the Ring Figure Set 3','This is the third and final in a series of three sets, which together make up the entire Fellowship of the Ring. This set includes Aragorn, the company\'s ranger, Samwise Gamgee, ring bearer Frodo\'s gardener and leader of the Fellowship\'s tenth member, Bill the pack pony.','the+lord+of+the+rings+fellowship+of+the+ring+figure+set+3',199.95,'lotrwtset3.jpg','thumbnail_lotrwtset3.jpg'),(28,'The Lord of the Rings Fellowship of the Ring - Figure Set 2','This is the second in a series of three Sets, which together make up the entire Fellowship of the Ring. This second set includes Boromir, Gimli, Merry and Pippin.','the+lord+of+the+rings+fellowship+of+the+ring+-+figure+set+2',199.95,'lotrwtset2.jpg','thumbnail_lotrwtset2.jpg'),(29,'The Lord of the Rings Strider Statue','Watching over Frodo and his party from the shadows is Strider, a grim yet noble Ranger, wanderer and swordsman, and friend to Gandalf the Grey.','the+lord+of+the+rings+strider+statue',84.95,'lotrwtbustsd.jpg','thumbnail_lotrwtbustsd.jpg'),(30,'The Lord of the Rings Fellowship of the Ring - Figure Set 1','This is the first in a series of three Sets, which together make up the entire Fellowship of the Ring. The first set includes the first 3 characters; Gandalf the Grey, Frodo Baggins and Legolas.','the+lord+of+the+rings+fellowship+of+the+ring+-+figure+set+1',199.95,'lotrwtset1.jpg','thumbnail_lotrwtset1.jpg'),(31,'The Lord of the Rings Gandalf Statue','Bilbo\'s old friend, an ancient and powerful wizard, Gandalf was a guide to the Fellowship and mentor to Frodo in his quest to destroy the One Ring in the fires of Mount Doom.','the+lord+of+the+rings+gandalf+statue',79.95,'lotrwtbustgd.jpg','thumbnail_lotrwtbustgd.jpg'),(32,'The Lord of the Rings Rivendell','Home to Elrond, Rivendell was founded in the year 1697 of the Second Age by the Elven Lord as a haven amid the growing darkness in the north of Middle-earth.','the+lord+of+the+rings+rivendell',399.95,'lotrwtldri.jpg','thumbnail_lotrwtldri.jpg'),(33,'The Lord of the Rings Orthanc Black Tower of Isengard','In a great black tower in Isengard dwells Saruman the White.','the+lord+of+the+rings+orthanc+black+tower+of+isengard',275.95,'lotrwtldor.jpg','thumbnail_lotrwtldor.jpg'),(34,'The Lord of the Rings Gollum Statue','Tortured and wrought wretched by the lure of the One Ring, Gollum is a withered, piteous creature.','the+lord+of+the+rings+gollum+statue',79.95,'lotrwtbustgl.jpg','thumbnail_lotrwtbustgl.jpg'),(35,'The Lord of the Rings Bag End','Nestled in the gently rolling green hills of the Shire is the village of Hobbiton, a sleepy assemblage of stone buildings and burrows, home to the diminutive Hobbits.','the+lord+of+the+rings+bag+end',149.95,'lotrwtldbe.jpg','thumbnail_lotrwtldbe.jpg'),(36,'MY PRECIOUS (tm) The Lord of the Rings Gollum and One Ring Statue','This exquisite Lord of the Rings statue depicts The One Ring to Rule Them All suspended in a sphere, tempting and close, yet unattainable to Gollum.','my+precious+the+lord+of+the+rings+gollum+and+one+ring+statue',99.95,'lotrnbmyp.jpg','thumbnail_lotrnbmyp.jpg');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `orders_ID` int(11) DEFAULT NULL,
  `items_ID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `subtotal` double DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `order_number` varchar(45) DEFAULT NULL,
  `customers_Id` int(11) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `total` double DEFAULT NULL,
  `payment_status` tinyint(4) DEFAULT NULL,
  `payment_method` varchar(45) DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-03-26  0:26:00
