DROP TABLE IF EXISTS house_members;
CREATE TABLE house_members (
    id int NOT NULL AUTO_INCREMENT,
    firstName varchar(255) NOT NULL default '',
    lastName varchar(255) NOT NULL default '',
    party varchar(255) NOT NULL default '',
    homeState varchar(255) NOT NULL default '',
    phoneNum varchar(255) NOT NULL default '',
    position varchar(255) default 'House',
    PRIMARY KEY (id)
)ENGINE=INNODB;