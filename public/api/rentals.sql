CREATE TABLE `rentals` (
  `type` varchar(255) NOT NULL,
  `rental_id` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`rental_id`)
);

CREATE TABLE `attributes` (
  `attribute_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `bedrooms` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `rental_id` varchar(255) NOT NULL,
  FOREIGN KEY (rental_id) REFERENCES rentals(rental_id),
  PRIMARY KEY (`attribute_id`)
)

CREATE TABLE `locations` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `lat` int(11) NOT NULL,
  `lng` int(11) NOT NULL,
  `rental_id` varchar(255) NOT NULL,
  FOREIGN KEY (rental_id) REFERENCES rentals(rental_id),
  PRIMARY KEY (`location_id`)
)

INSERT INTO `rentals` (`type`, `rental_id`) VALUES
("rentals", "grand-old-mansion"),
("rentals", "urban-living"),
("rentals", "downtown-charm");

INSERT INTO `attributes` (`attribute_id`, `title`, `owner`, `city`, `category`, `bedrooms`, `image`, `description`, `rental_id`) VALUES
(1, "Grand Old Mansion", "Veruca Salt", "San Francisco", "Estate", 15, "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg", "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.", "grand-old-mansion"),
(2, "Urban Living", "Mike Teavee", "Seattle", "Condo", 1, "https://upload.wikimedia.org/wikipedia/commons/2/20/Seattle_-_Barnes_and_Bell_Buildings.jpg", "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.", "urban-living"),
(3, "Downtown Charm", "Violet Beauregarde", "Portland", "Apartment", 3, "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg", "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.", "downtown-charm");

INSERT INTO `locations` (`location_id`, `lat`, `lng`, `rental_id`) VALUES
(1, 37.7749, -122.4194, "grand-old-mansion"),
(2, 47.6062, -122.3321, "urban-living"),
(3, 45.5175, -122.6801, "downtown-charm");