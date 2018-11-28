 show dbs;
 use Ninergaming;

 //creating collections

 db.createCollection("items");
 db.createCollection("users");
 db.createCollection("userItems");
 db.createCollection("swaps");
 db.createCollection("offers");

//inserting games

db.items.insert({"itemCode":"nba","itemName":"Nba 2k18","catalogCategory":"Sports","description":"NBA 2K18 is a basketball simulation video game developed by Visual Concepts and published by 2K Sports. It is the 19th installment in the NBA 2K franchise","rating":5,"imageURL":"resources/images/nba.jpg"});
WriteResult({ "nInserted" : 1 })
db.items.insert({"itemCode":"don","itemName":"Don Bradman 2017","catalogCategory":"Sports","description": "Don Bradman Cricket 2017 is a cricket video game developed by Big Ant Studios. It is the sequel to Don Bradman Cricket 14 and was released on 16 December 2016 for PlayStation 4","rating":3,"imageURL":"resources/images/don.jpg"});
WriteResult({ "nInserted" : 1 })
db.items.find().pretty();  //query and the output is below...

{
	"_id" : ObjectId("5bd917296bdbe7ff5202a257"),
	"itemCode" : "pacman",
	"itemName" : "Pacman",
	"catalogCategory" : "Arcade",
	"description" : "Pac-Man, stylized as PAC-MAN, is an arcade game developed by Namco and first released in Japan as Puck Man in May 1980",
	"rating" : 4,
	"imageURL" : "resources/images/pacman.jpg"
}
{
	"_id" : ObjectId("5bd917e56bdbe7ff5202a258"),
	"itemCode" : "mario",
	"itemName" : "Super Mario",
	"catalogCategory" : "Arcade",
	"description" : "Super Mario Bros. is a platform video game developed and published by Nintendo. The successor to the 1983 arcade game, Mario Bros., it was released in Japan in 1985",
	"rating" : 4,
	"imageURL" : "resources/images/mario.png"
}
{
	"_id" : ObjectId("5bd9184a6bdbe7ff5202a259"),
	"itemCode" : "contra",
	"itemName" : "Contra",
	"catalogCategory" : "Arcade",
	"description" : "Contra is a run and gun video game developed and published by Konami, originally released as a coin-operated arcade game on February 20, 1987",
	"rating" : 4,
	"imageURL" : "resources/images/contra.jpg"
}
{
	"_id" : ObjectId("5bd919696bdbe7ff5202a25a"),
	"itemCode" : "cell",
	"itemName" : "Splinter Cell",
	"catalogCategory" : "Adventure",
	"description" : "Tom Clancy's Splinter Cell: Blacklist is an action-adventure stealth video game developed by Ubisoft Toronto and published by Ubisoft",
	"rating" : 3,
	"imageURL" : "resources/images/cell.jpg"
}
{
	"_id" : ObjectId("5bd919fc6bdbe7ff5202a25b"),
	"itemCode" : "pubg",
	"itemName" : "PubG",
	"catalogCategory" : "Adventure",
	"description" : "PlayerUnknown's Battlegrounds is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole",
	"rating" : 3,
	"imageURL" : "resources/images/pub.png"
}
{
	"_id" : ObjectId("5bd91ac16bdbe7ff5202a25c"),
	"itemCode" : "creed",
	"itemName" : "Assasins creed",
	"catalogCategory" : "Adventure",
	"description" : "Assassin's Creed Unity is an action-adventure video game developed by Ubisoft Montreal and published by Ubisoft",
	"rating" : 5,
	"imageURL" : "resources/images/creed.jpeg"
}
{
	"_id" : ObjectId("5bd91b426bdbe7ff5202a25d"),
	"itemCode" : "fifa",
	"itemName" : "Fifa 2018",
	"catalogCategory" : "Sports",
	"description" : "FIFA 18 is a football simulation video game in the FIFA series of video games, developed and published by Electronic Arts and was released worldwide on 29 September 2017",
	"rating" : 4,
	"imageURL" : "resources/images/fifa.jpeg"
}
{
	"_id" : ObjectId("5bd91bb86bdbe7ff5202a25e"),
	"itemCode" : "nba",
	"itemName" : "Nba 2k18",
	"catalogCategory" : "Sports",
	"description" : "NBA 2K18 is a basketball simulation video game developed by Visual Concepts and published by 2K Sports. It is the 19th installment in the NBA 2K franchise",
	"rating" : 5,
	"imageURL" : "resources/images/nba.jpg"
}
{
	"_id" : ObjectId("5bd91c856bdbe7ff5202a25f"),
	"itemCode" : "don",
	"itemName" : "Don Bradman 2017",
	"catalogCategory" : "Sports",
	"description" : "Don Bradman Cricket 2017 is a cricket video game developed by Big Ant Studios. It is the sequel to Don Bradman Cricket 14 and was released on 16 December 2016 for PlayStation 4",
	"rating" : 3,
	"imageURL" : "resources/images/don.jpg"
}


//inserting users

db.users.insert({"userId":1,"firstName":"Lebron","lastName":"James","email":"james@gmail.com","addrFirst":"9407 kittansett","addrSecond":"drive","city":"Charlotte","state":"NC","postCode":28262,"country":"USA"});
WriteResult({ "nInserted" : 1 })
db.users.insert({"userId":2,"firstName":"Steph","lastName":"Curry","email":"curry@gmail.com","addrFirst":"Barton creek","addrSecond":"drive","city":"Greensboro","state":"NC","postCode":28565,"country":"USA"});
WriteResult({ "nInserted" : 1 })
db.users.insert({"userId":3,"firstName":"Klay","lastName":"Thompson","email":"thompson@gmail.com","addrFirst":"Mallard creek","addrSecond":"drive","city":"Columbia","state":"SC","postCode":28999,"country":"USA"});
WriteResult({ "nInserted" : 1 })


> db.users.find().pretty()

{
	"_id" : ObjectId("5bd91e286bdbe7ff5202a260"),
	"userId" : 1,
	"firstName" : "Lebron",
	"lastName" : "James",
	"email" : "james@gmail.com",
	"addrFirst" : "9407 kittansett",
	"addrSecond" : "drive",
	"city" : "Charlotte",
	"state" : "NC",
	"postCode" : 28262,
	"country" : "USA"
}
{
	"_id" : ObjectId("5bd91e856bdbe7ff5202a261"),
	"userId" : 2,
	"firstName" : "Steph",
	"lastName" : "Curry",
	"email" : "curry@gmail.com",
	"addrFirst" : "Barton creek",
	"addrSecond" : "drive",
	"city" : "Greensboro",
	"state" : "NC",
	"postCode" : 28565,
	"country" : "USA"
}
{
	"_id" : ObjectId("5bd91edc6bdbe7ff5202a262"),
	"userId" : 3,
	"firstName" : "Klay",
	"lastName" : "Thompson",
	"email" : "thompson@gmail.com",
	"addrFirst" : "Mallard creek",
	"addrSecond" : "drive",
	"city" : "Columbia",
	"state" : "SC",
	"postCode" : 28999,
	"country" : "USA"
}

//inserting user items

db.userItems.insert({userId: 1,itemCode: "pacman",status: "available",swapItem: "undefined",swapItemRating: "undefined",swapperRating: "undefined"});
db.userItems.insert({userId: 1,itemCode: "creed",status: "available",swapItem: "undefined",swapItemRating: "undefined",swapperRating: "undefined"});

db.userItems.insert({userId: 2,itemCode: "nba",status: "available",swapItem: "undefined",swapItemRating: "undefined",swapperRating: "undefined"});
db.userItems.insert({userId: 2,itemCode: "contra",status: "available",swapItem: "undefined",swapItemRating: "undefined",swapperRating: "undefined"});

db.userItems.insert({userId: 3,itemCode: "fifa",status: "available",swapItem: "undefined",swapItemRating: "undefined",swapperRating: "undefined"});
db.userItems.insert({userId: 3,itemCode: "pubg",status: "available",swapItem: "undefined",swapItemRating: "undefined",swapperRating: "undefined"});