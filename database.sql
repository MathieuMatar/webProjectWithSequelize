CREATE TABLE IF NOT EXISTS `milestone` (
  `milestone_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `status` enum('Not Started','Planning','In Progress','Review','Completed','Delayed','Cancelled') DEFAULT NULL,
  PRIMARY KEY (`milestone_id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `milestone of project` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `project` (
  `project_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `start_date` date DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `overview` varchar(800) DEFAULT NULL,
  `files` varchar(800) DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  KEY `client_id` (`client_id`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `project_contact` (
  `project_id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  KEY `project_id` (`project_id`),
  KEY `contact_id` (`contact_id`),
  CONSTRAINT `contact` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`contact_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `project` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `project_employee` (
  `project_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  PRIMARY KEY (`project_id`,`employee_id`),
  KEY `employee_id` (`employee_id`),
  CONSTRAINT `project_employee_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`),
  CONSTRAINT `project_employee_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `project_service` (
  `project_id` int(11) NOT NULL,
  `service_id` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`project_id`,`service_id`),
  KEY `service id` (`service_id`),
  CONSTRAINT `service id` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

CREATE TABLE IF NOT EXISTS `task` (
  `task_id` int(11) NOT NULL,
  `type` enum('note','task') NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `contact_assigned` int(11) DEFAULT NULL,
  `employee_assigned` int(11) DEFAULT NULL,
  `contact_completed` int(11) DEFAULT NULL,
  `employee_completed` int(11) DEFAULT NULL,
  `completed` enum('Y','N','C') NOT NULL,
  `date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `task` text DEFAULT NULL,
  `importance` enum('Critical','High','Medium','Low','Optional') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
