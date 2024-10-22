const fs = require('fs');

const xc1 = `Abnormal Clone Barg 	77 	Barg 	Prison Island 	First Sanctum 	After Mechonis Core (Chapter 17)
Active Impulso 	72 	Selua 	Bionis' Interior 	Middle part of the Second Lung 	After Mechonis Core (Chapter 17)
Affluent Beleth 	57 	Upa 	Fallen Arm 	Bottom water area of 5th Pulse Zone 	Anytime
Aged Leraje 	56 	Volff 	Fallen Arm 	Radiocarpea Coast 	Nighttime
Aggressive Cornelius 	28 	Igna 	Satorl Marsh 	S parts of Igna Territory 	Anytime
Ageless Moabit 	75 	Nebula 	Prison Island 	Damaged Transporter 	After Mechonis Core (Chapter 17)
Agile Albatro 	33 	Ansel 	Makna Forest 	Beach below Bridge Three 	Clear or Torrid weather
Agile Barbatos 	47 	Ories 	Valak Mountain 	NE of Ignia Hill 	Nighttime
Amber Fischer 	27 	Flamii 	Satorl Marsh 	Near the Altar of Fate 	No dense fog
Amorous Arca 	57 	Mechon 	Mechonis Field 	Near the 3rd floor Bulkhead Controls 	Before the events at the Meyneth Shrine
Ancient Daedala 	105 	Mechon 	Fallen Arm 	Near Wreckage Beach 	After Mechonis Core (Chapter 17)
Armoured Rockwell 	82 	Torta 	Bionis' Leg 	Under Viliera Hill 	Rain or thunderstorm
Avalanche Abaasy 	120 	Dragon 	Valak Mountain 	Three Sage Summit 	Nighttime and blizzard
Balanced Palamedes 	62 	Mechon 	Central Factory 	N of the Central Tower Roof (third floor) 	Before reaching the Mechonis Core
Banquet Vassago 	48 	Chilkin 	Valak Mountain 	Antol Den 	During The Balance of Power
Barbaric Sitri 	47 	Antol 	Valak Mountain 	Antol Den 	Anytime
Beautiful Vagul 	60 	Mechon 	Central Factory 	Storage Depot 	Before reaching the Mechonis Core
Benevolent Aim 	51 	Mechon 	Sword Valley 	Monado Wound 	Before reaching the end of Mechonis Field
Bizarre Ragoel 	88 	Rhana 	Eryth Sea 	Anu Shore (top of the lower cape) 	Anytime
Blizzard Belgazas 	114 	Behemoth 	Valak Mountain 	Near the Great Glacier 	After Mechonis Core (Chapter 17)
Breezy Zolos 	37 	Eks 	Makna Forest 	N of the Windmill Pavilion 	Anytime
Brutal Gravar 	46 	Kromar 	Makna Forest 	King Agni's Tomb 	After accepting Mystery of Makna Ruins 2
Calm Anzabi 	38 	Astas 	High Entia Tomb 	Second Treasury 	Anytime
Canyon Valencia 	78 	Rhogul 	Bionis' Leg 	Observation Platform 	Clear weather
Cautious Balteid 	26 	Igna 	Satorl Marsh 	S of the Poison Swamp 	Anytime
Cellar Bugworm 	10 	Caterpile 	Tephra Cave 	Caterpile Nest 	Anytime
Clamorous Dablon 	92 	Lexos 	Eryth Sea 	NW coast of Sleeping Dragon Isle 	Thunderstorm
Clandestine Apety 	74 	Telethia 	Bionis' Interior 	Second Lung 	After Mechonis Core (Chapter 17)
Clifftop Bayern 	32 	Antol 	Bionis' Leg 	Summit of Daksha Shrine 	Anytime
Cold Ageshu 	77 	Ageshu 	Prison Island 	S side of the Kitchen 	After Mechonis Core (Chapter 17)
Commander Oracion 	61 	Mechon 	Mechonis Field 	Spent Fuel Tank 	Before the events at the Meyneth Shrine
Conflagrant Raxeal 	45 	Lexos 	Valak Mountain 	Lava Cave 	During The Magma Rock
Cumulus Danaemos 	41 	Ekidno 	Eryth Sea 	Khatorl Seal Island 	Anytime
Dark King Barbarus 	77 	Telethia 	Bionis' Interior 	E of the Second Lung (on the platform) 	After Mechonis Core (Chapter 17)
Dark Kisling 	20 	Vang 	Ether Mine 	E of the Central Terminal (fire crystal deposit) 	Anytime
Dark Murakmor 	18 	Tokilos 	Colony 9 	On the slope of the Anti-Air Battery 3 	Nighttime
Dazzling Tolosnia 	97 	Arachno 	Tephra Cave 	SW of Heavenly Window 	During The Blood of Bafalgar
Deadly Medorlo 	93 	Telethia 	Eryth Sea 	Middle of Central Seal Island 	After Mechonis Core (Chapter 17)
Defective Ipos 	50 	Mechon 	Sword Valley 	W side of the Ether Storage Area 	Before reaching the end of Mechonis Field
Despotic Arsene 	108 	Bunnit 	Satorl Marsh 	North of the Glowing Obelisk 	After Mechonis Core (Chapter 17)
Destroyer Salvacion 	59 	Mechon 	Mechonis Field 	2F Observation Post 	Before the events at the Meyneth Shrine
Destructive Bors 	64 	Mechon 	Agniratha 	Near the Telethia Bridge 	Before reaching the Mechonis Core
Drifter Jutard 	25 	Hox 	Colony 6 	Pod Depot 	Anytime
Elder Gragus 	34 	Quadwing 	Makna Forest 	E of the Nopon Arch (on high ground) 	Clear or Torrid weather
Elegant Marin 	29 	Krabble 	Ether Mine 	Near Glowmoss Lake 	Anytime
Enchanting Grune 	13 	Flamii 	Colony 9 	E and below Tephra Cave Entrance (lands on beach) 	Dawn at 5:00
Erratic Goliante 	97 	Gogol 	Tephra Cave 	Entrance of the Trader's Stopover 	After Mechonis Core (Chapter 17)
Eternal Palsadia 	91 	Arachno 	Satorl Marsh 	Top of the Exile Fortress 	After completing The Giants' Treasure
Evil Bathin 	54 	Mechon 	Fallen Arm 	Inner area of the Ether Exhaust System 	Anytime
Evil Rhangrot 	6 	Bunnit 	Colony 9 	Tephra Hill 	Anytime
Experienced Tristan 	64 	Mechon 	Agniratha 	SW of the 1st Control Platform 	Before reaching the Mechonis Core
Exposure Wolfol 	97 	Lexos 	Valak Mountain 	Lava Cave 	After completing The Magma Rock
Faithful Lancelot 	59 	Mechon 	Central Factory 	Control Tower 	Before reaching the Mechonis Core
Fate Labolas 	51 	Mechon 	Sword Valley 	Port Maintenance Bay 	Before reaching the end of Mechonis Field
Field Altrich 	76 	Tirkin 	Bionis' Leg 	NW of Crevasse Waterfall 	Anytime
Fiendish Auburn 	78 	Balgas 	Prison Island 	Gravina Bridge 	After Mechonis Core (Chapter 17)
Final Marcus 	100 	Slobos 	Valak Mountain 	Three Sage Summit 	Night and clear or snowy weather
Firework Geldesia 	98 	Arachno 	Tephra Cave 	Arachno Queen's Nest 	During Battling Brutes
Flabbergasted Jerome 	38 	Nebula 	Eryth Sea 	Island below Hovering Reef 5 	Clear weather or shooting stars
Flailing Bracken 	73 	Flamii 	Colony 9 	Shore NW of Anti-Air Battery 2 	Anytime
Frenzied Bana 	78 	Pterix, Nopon 	Frontier Village 	Apex Lake 	During Bana the Betrayer
Funeral Gozra 	42 	Orluga 	Eryth Sea 	Hode Refuge 	Anytime
Furious Jozan 	96 	Telethia 	High Entia Tomb 	Telethia Laboratory 	After Mechonis Core (Chapter 17)
Gentle Mother Armu 	37 	Armu 	Colony 9 	Near Agora Shore 	Anytime
Gentle Rodriguez 	40 	Brog 	Colony 9 	Far N end of Agora Shore 	Anytime
Ghostly Mahatos 	76 	Telethia 	Bionis' Interior 	W of the Terminal Nerve Tower 	After Mechonis Core (Chapter 17)
Glacier Acon 	52 	Mechon 	Galahad Fortress 	1st Turbine Room, then Main Control Room 	Before reaching the end of Mechonis Field
Glorious Buer 	45 	Chillkin 	Valak Mountain 	S of Sealed Tower 	Anytime
Glorious Jurom 	55 	Mechon 	Galahad Fortress 	Ether Blast Furnace 	Before reaching the end of Mechonis Field
Gluttonous Eugen 	11 	Brog 	Tephra Cave 	Vilia Lake 	Anytime
Graceful Holand 	19 	Nebula 	Colony 6 	Splintered Path 	Rain or thunderstorm
Hidden Gamigin 	49 	Taos 	Valak Mountain 	SE of Ignia Hill (on the natural bridge) 	Nighttime
Illustrious Golteus 	98 	Pterix 	Makna Forest 	Precipice Bridge 	Clear or Tortid weather
Immovable Gonzalez 	90 	Gogol 	Bionis' Leg 	Spiral Valley 	After Xord battle (after Chapter 4)
Impenetrable Redrob 	38 	Krabble 	Colony 9 	S side of Hazzai Cape 	Nighttime
Indomitable Daulton 	85 	Gogol 	Satorl Marsh 	Soter Ruins 	Anytime
Infernal Crocell 	58 	Mechon 	Mechonis Field 	E of the 4F Main Power Switch (S side of the platform) 	Before the events at the Meyneth Shrine
Inferno Heinrich 	76 	Nebula 	Prison Island 	Back of the Kitchen 	After Mechonis Core (Chapter 17)
Itinerant Dorothea 	6 	Krabble 	Colony 9 	Cliff Lake 	Daytime
Judicious Bunnitzol 	94 	Bunnit 	Tephra Cave 	Forgotten Cave 	After Mechonis Core (Chapter 17)
Kamikaze Bune 	53 	Mechon 	Sword Valley 	N of the Control Tower 	Before reaching the end of Mechonis Field
Lake Magdalena 	6 	Piranhax 	Colony 9 	Small inlet under Outlook Park 	Nighttime
Lakebed Orthlus 	40 	Torta 	Colony 9 	Beach of Agora Shore 	During Preparing for Adventure 3
Lazy Bluco 	34 	Eluca 	Makna Forest 	Yellow Flower Grove 	Nighttime
Lightning Ronove 	55 	Mechon 	Sword Valley 	Near the Radio Tower 	Before reaching the end of Mechonis Field
Lightspeed Sonid 	44 	Eks 	Eryth Sea 	Anu Shore 	Anytime
Magnificent Digalus 	99 	Sauros 	Makna Forest 	Near the Decayed Forest 	After Mechonis Core (Chapter 17)
Majestic Clone Barg 	77 	Barg 	Prison Island 	Second Sanctum 	After Mechonis Core (Chapter 17)
Magestic Mordred 	70 	Mechon 	Central Factory 	NE of the Face Maintenance Bay 	Before reaching the Mechonis Core
Masterful Gigapur 	77 	Laia 	Prison Island 	Travalga Bridge 	After Mechonis Core (Chapter 17)
Meditative Varla 	65 	Mechon 	Agniratha 	Near the Telethia Bridge 	Before reaching the Mechonis Core
Mild Florence 	58 	Mechon 	Central Factory 	Up a ramp near Landing Strip 2 	Before reaching the Mechonis Core
Mining Patrichev 	8 	Bunniv 	Tephra Cave 	NE of Caterpile Nest 	Anytime
Mischievious Naberius 	57 	Mechon 	Sword Valley 	Behind 3rd Gate 	After completing 3rd Gate Front Line
Moonlight Paimon 	46 	Nebula 	Valak Mountain 	Lava Cave 	Anytime
Musical Vanflare 	93 	Vang 	Tephra Cave 	Near Bone Corridor 	After Mechonis Core (Chapter 17)
Mysterious Barnaby 	75 	Arachno 	Bionis' Leg 	Windy Cave 	Anytime
Mystical Klesida 	72 	Selua 	Bionis' Interior 	Third Lung 	After Mechonis Core (Chapter 17)
Napping Volfen 	17 	Volff 	Bionis' Leg 	E part of Gaur Plain 	Rain or thunderstorm
Night Cardamon 	18 	Wisp 	Bionis' Leg 	Near Kasharpa Falls 	Nighttime and clear weather
North Star Gusion 	50 	Lexos 	Valak Mountain 	W edge of the Url Crevasse 	Nighttime and snowy weather or blizzard
Obsessive Galgaron 	35 	Orluga 	Makna Forest 	Hode Lair 	Anytime
Officer Robusto 	75 	Selua 	Bionis' Interior 	Near the platform beneath Venous Plexus 	After Mechonis Core (Chapter 17)
Peeling Kircheis 	38 	Kromar 	Eryth Sea 	Middle of Hovering Reef 7 	Anytime
Plump Sprahda 	92 	Arachno 	Tephra Cave 	SW of the Bafalgar Tomb 	After Mechonis Core (Chapter 17)
Powerful Eligos 	80 	Antol 	Fallen Arm 	S part of the Digit 1 	Anytime
Precious Retrato 	53 	Mechon 	Galahad Fortress 	3rd Fuel Supply Room 	Before reaching the end of Mechonis Field
Proper Bandaz 	39 	Pagul 	Eryth Sea 	Secluded Island 	Nighttime with shooting stars
Prosperous Zepar 	56 	Flamii 	Fallen Arm 	Jifum Beach 	Evening, at 18:00
Protective Torquidon 	96 	Tokilos 	Tephra Cave 	Heavenly Window 	After Mechonis Core (Chapter 17)
Prudent Purson 	49 	Mechon 	Sword Valley 	Dolgan Outpost 	Before reaching the end of Mechonis Field
Reckless Galdon 	95 	Andos 	Tephra Cave 	Hidden Warehouse 	After Mechonis Core (Chapter 17)
Reckless Godwin 	31 	Igna 	Satorl Marsh 	Exile Fortress 	Anytime
Reckless Zanden 	98 	Gogol 	Tephra Cave 	Arachno Queen's Nest 	During Battling Brutes
Revolutionary Bifrons 	60 	Mechon 	Mechonis Field 	NE of 4F Main Power Switch 	Before the events at the Meyneth Shrine
Roguish Frengel 	39 	Antol 	Colony 9 	Tunnel NW of Cliff Lake 	Anytime
Sacred Zagamei 	89 	Tude 	Eryth Sea 	Island below Hovering Reef 9 	Anytime
Shadeless Matrix 	44 	Vang 	Colony 9 	Tunnel NW of Cliff Lake 	Nighttime
Sentimental Flamral 	66 	Mechon 	Agniratha 	Judicial District 	Before reaching the Mechonis Core
Serene Imlaly 	76 	Deinos 	Prison Island 	Banquet Hall 	After Mechonis Core (Chapter 17)
Shimmering Forte 	33 	Deinos 	Makna Forest 	E of Eks Watering Hole 	Torrid Weather after reaching Frontier Village
Sinful Lamorak 	63 	Mechon 	Central Factory 	Room SW of Tower Boarding Gate 	Before reaching the Mechonis Core
Sniper Paramecia 	15 	Tirkin 	Bionis' Leg 	SW part of Gaur Plain, S of Jabos Rock Rest Area 	Anytime
Solid Konev 	10 	Krabble 	Tephra Cave 	S side of Spring of Grief 	Nighttime
Soothed Aglovale 	65 	Mechon 	Agniratha 	Near the Legislative District 	Before reaching the Mechonis Core
Speedy Ramshyde 	10 	Bunnit 	Colony 9 	Cliff Lake 	Anytime
Splendid Botis 	58 	Mechon 	Fallen Arm 	Digit 5 Beach 	Anytime
Stormy Belagon 	87 	Kromar 	Eryth Sea 	Kromar Coast 	Anytime
Stormy Widardun 	25 	Quadwing 	Satorl Marsh 	Ridge west of Zaldania Waterfall 	Daytime
Subterranean Zomar 	40 	Kromar 	Eryth Sea 	Soltnar Seal Island 	Anytime
Sunlight Schvaik 	30 	Rhogul 	Satorl Marsh 	Barren Moor 	Daytime
Swift Zektol 	28 	Volff 	Satorl Marsh 	E of Igna Territory 	Daytime
Synchronised Gaheris 	61 	Mechon 	Central Factory 	E of Central Tower Lift (between the stacks of containers) 	Before reaching the Mechonis Core
Tempestuous Edegia 	39 	Laia 	Eryth Sea 	Hovering Reef 10 	Nighttime
Temporal Gawain 	65 	Mechon 	Central Factory 	Inside the Control Tower 	Before reaching the Mechonis Core
Territorial Rotbart 	81 	Gogol 	Bionis' Leg 	E part of Gaur Plain, E of Jabos Rock Rest Area 	Anytime
Trainer Harmelon 	15 	Tirkin 	Bionis' Leg 	High hill E of Zax Guidepost 	Anytime
Tranquil Morax 	50 	Mechon 	Sword Valley 	Inside the Enalda Control Base 	Before reaching the end of Mechonis Field
Tumultuous Felix 	27 	Igna 	Satorl Marsh 	Cliff SE of Silent Obelisk 	Anytime
Turbulent Belmo 	36 	Hiln 	Eryth Sea 	Hovering Reef 1 	Clear weather or shooting stars
Unreliable Rezno 	96 	Lexos 	Makna Forest 	Middle island of the Great Makna Falls 	Daytime, no torrid Weather
Vagabond Allocer 	63 	Mechon 	Agniratha 	N of the Helas Pillar 	Before reaching the Mechonis Core
Vagrant Alfead 	16 	Tirkin 	Bionis' Leg 	Tirkin Headquarters 	Anytime
Vague Barbas 	46 	Nebula 	Valak Mountain 	Near the Nagul Waterfall, SW of Befalgar Pedestal 	Anytime
Verdant Bluchal 	5 	Caterpile 	Colony 9 	Beach S of Anti-Air Battery 1, N of the Main Entrance 	Anytime
Venerable Focalor 	64 	Mechon 	Central Factory 	Training Ground Roof 	Before reaching the Mechonis Core
Vengeful Daulton 	22 	Upa 	Ether Mine 	E of Test Pit 4 	Anytime
Veteran Yozel 	83 	Feris 	Satorl Marsh 	NE of the Silent Obelisk 	Nighttime
Victorious Gross 	73 	Selua 	Bionis' Interior 	Pars Sympathica Tower 	After Mechonis Core (Chapter 17)
Violent Andante 	16 	Ardun 	Bionis' Leg 	Either N or S of Viliera Hill 	Anytime
Vivid Anstan 	75 	Telethia 	Bionis' Interior 	Near the middle of Third Lung 	After Mechonis Core (Chapter 17)
Wallslide Gwynry 	9 	Lizard 	Tephra Cave 	Dead-end E of Escape Pod Bay in Mag Mell Ruins 	Anytime
Wandering Amon 	98 	Eks 	Valak Mountain 	Bionis' Right Elbow (near the crystal deposit) 	Nighttime
White Eduardo 	17 	Brog 	Bionis' Leg 	Island in the middle of Raguel Lake 	Thunderstorm
Wicked Sallos 	95 	Pterix 	Fallen Arm 	Distant Fingertip 	Clear weather
Wise Gremory 	68 	Mechon 	Agniratha 	Near the Meyneth Statue 	Before reaching the Mechonis Core
Wrathful Orobas 	67 	Mechon 	Agniratha 	Near the Dios Pillar 	Before reaching the Mechonis Core
Air Marshal Reisenbach 	69 	Pterix 	Bionis' Shoulder 	Clear Sky Bluff 	Anytime
Booming Frederick 	66 	Brog 	Bionis' Shoulder 	Purifying Falls 	Rain
Buoyant Rostein 	68 	Eluca 	Bionis' Shoulder 	Xen's Thoroughfare 	Anytime
Caustic Naquatra 	73 	Arachno 	Bionis' Shoulder 	Zekr Marga Quarry 	Anytime
Citadel Tostega 	74 	Tude 	Bionis' Shoulder 	Tranquil Tarn 	Anytime
Confluent Uzva 	69 	Quadwing 	Bionis' Shoulder 	Fyme Lane 	Anytime
Contemptuous Greymane 	78 	Fogbeast Gogol 	Bionis' Shoulder 	Agni's Skygarden Ruins 	After Fogbeasts appear
Custodian Barreldart 	71 	Fogbeast Torta 	Bionis' Shoulder 	Gamaro Hollow 	After Fogbeasts appear
Cyclonic Yughana 	70 	Tokilos 	Bionis' Shoulder 	Old King's Testament 	Anytime
Deputy Seagal 	72 	Igna 	Bionis' Shoulder 	Zekr Marga Quarry 	Anytime
Dismal Umya 	73 	Lizard 	Bionis' Shoulder 	Nerthis Necropolis 	Anytime
Grotesque Deimis 	65 	Antol 	Bionis' Shoulder 	Barouh Ruins Cave 	Anytime
Highborn Alexandra 	64 	Eks 	Bionis' Shoulder 	Cinnabar Plateau 	Anytime
Marquis Odesh 	74 	Igna 	Bionis' Shoulder 	Clear Sky Bluff 	Anytime
Perceptive Quinops 	74 	Orluga 	Bionis' Shoulder 	Purifying Falls 	Anytime
Phlegmatic Jamir 	63 	Bunnit 	Bionis' Shoulder 	Navvir Crossroads 	Anytime
Prosecutor Davrum 	80 	Dragon 	Bionis' Shoulder 	Nerthis Necropolis 	During Ponspectors Till We Cry
Quondam Grimbellum 	69 	Orluga 	Bionis' Shoulder 	Cinnabar Plateau 	Anytime
Ravager Apelpisía 	77 	Kromar 	Bionis' Shoulder 	Marga's Weeping 	Anytime
Terpsichorean Cenoth 	73 	Flamii 	Bionis' Shoulder 	Gran Dell 	Anytime `

const xc2 = `Acute Melvyn 	25 	Tirkin 	Gormott Province 	Boulderbore Gate 	Anytime
Anguished Solomon 	28 	Piranhax 	Gormott Province 	Coolley Lake 	Rain/thunderstorm
Antecedent Xiaxia 	99 	Blade Bot 	Empire of Mor Ardain 	Old Factory 	After entering the First Low Orbit Station
Armored Brennan 	86 	Ropl (Driver) 	Empire of Mor Ardain 	Chansagh Wastes 	Anytime
Artifice Ophion 	117 	Artifice 	Cliffs of Morytha 	Gotrock Oracle Ruins 	After entering the First Low Orbit Station
Atrocious Hermes 	58 	Igna (Driver) 	Temperantia 	Bastion of Varrac 	Anytime
Autumn-Shower Melvin 	46 	Driver 	Kingdom of Tantal 	Lumos Pillar 	Nighttime after Spring-Shower Elliott has been defeated
Azure Reginald 	41 	Lexos 	Kingdom of Uraya 	Coralline Sanctum 	Clear/Overcast
Beast-Hunter William 	99 	Driver 	Kingdom of Uraya 	Olethro Playhouse 	Final Chapter, after Farewell, Good Friend
Blue-Eyed Korbin 	42 	Volff 	Kingdom of Tantal 	Amphoret Pillar 	Snow
Chickenheart Dagmara 	120 	Pippito 	Empire of Mor Ardain 	Industrial Zone, Upper Duct 	After entering the First Low Orbit Station
Climactic Honnold 	45 	Urchon 	Leftherian Archipelago 	Isle of Urchon 	Anytime
Cloud Sea King Ken 	110 	Squood 	Kingdom of Tantal 	Genbu Drifts 	Cloud Sea Mist, After entering the First Low Orbit Station
Confiscator Jimmy 	38 	Jagron (Driver) 	Leftherian Archipelago 	Daram Isle 	Anytime
Crimson Derrick 	58 	Taos 	Cliffs of Morytha 	Cape O-uru 	Anytime
Cunning Saggie 	24 	Skwaror 	Kingdom of Uraya 	Minnet Terrace 	Anytime
Decapitator Marvin 	33 	Igna 	Empire of Mor Ardain 	Old City of Teddim 	Anytime
Dedicated Conroy 	51 	Tirkin 	Kingdom of Tantal 	Tirkinlandia 	Anytime
Deep-Green Oscar 	41 	Ellook 	Kingdom of Tantal 	Sacred Ice Caverns 	Nighttime
Demon King Gilbert 	80 	Igna 	Kingdom of Uraya 	Badfella's Cave Fort 	Anytime
Demon-Shell Jacob 	30 	Crustip 	Empire of Mor Ardain 	Fief of Forgetfulness 	Anytime
Enlightened Morris 	42 	Pippito 	Kingdom of Tantal 	Pippito's Haunt 	Anytime
Epicurean Ligia 	48 	Lysaat (Driver) 	Leftherian Archipelago 	Lud Cloudway 	Anytime
Evileye Mambor 	54+ 	Aspar (Driver) 	Cliffs of Morytha 	Path of the Believer 	Anytime
Excavator Darius 	46 	Grebel 	Spirit Crucible Elpys 	Underground River Lavi 	Anytime
Gladiator Orion 	100 	Driver 	Cliffs of Morytha 	Hallowed Godswood Shrine 	Anytime
Glamorous Alfred 	50 	Arachno 	Spirit Crucible Elpys 	Chamber of Offering 	Anytime
Grievous Clive 	94 	Jagron 	Temperantia 	Jagron's Citadel 	Anytime
Hard-Bitten Xavier 	48 	Urchon (Driver) 	Spirit Crucible Elpys 	Elpys Great Hall 	Anytime
Haywire Kustal 	60 	Sovereign 	World Tree 	Nuclear Dump Facility 	Anytime
Haywire Phoebus 	66 	Sovereign 	World Tree 	7th Perimeter Defense Post 	Anytime
Haywire Radclyffe 	58 	Sovereign 	World Tree 	Sky Bridge 	Anytime
Heroic Edwin 	44 	Garlus 	Kingdom of Tantal 	Pillar City Ruins 	Anytime
Holy Lancer Efrain 	51 	Marrin 	Spirit Crucible Elpys 	Chamber of Pillars 	Anytime
Howitzer Leon 	48 	Gyanna 	Kingdom of Uraya 	Old Quarry 	Anytime
Immovable Gonzalez 	90 	Gogol 	Gormott Province 	Nocclia Woods 	Anytime
Impassable Edgar 	60 	Garlus 	Kingdom of Tantal 	Declessa Altar Hill 	Anytime
Implacable Dylan 	23 	Riik 	Kingdom of Uraya 	Acid Gullet 	Anytime
Incandescent Marcus 	54 	Plambus 	Kingdom of Tantal 	Pillar City Ruins 	Anytime
Insectivore Malcom 	75 	Vang 	Gormott Province 	Coolley Lake 	Clear/Overcast
Jadeite Polly 	38 	Grady 	Leftherian Archipelago 	Baldotas Isle 	Aurora
Judicial Kollin 	33 	Igna 	Empire of Mor Ardain 	Delizé's Infirmary 	Anytime
Leonine Sadie 	95 	Sauros 	Temperantia 	Titan Weapon Dig Site 	Anytime
Machine-Gun Julio 	53 	Ansel 	Cliffs of Morytha 	Morytha Falls 	Anytime
Malicious Dimitri 	57 	Guldo 	Land of Morytha 	Evacuation Center 	Anytime
Man-Eating Glenn 	32 	Griffox 	Empire of Mor Ardain 	Jelidorend Highlands 	Anytime
Martial Kamron 	23 	Driver 	Kingdom of Uraya 	Stone Gate Ruins 	Anytime
Moonlighting Elwyn 	8 	Bunnit 	Gormott Province 	Plains of Evening Calm 	Anytime
Muscley Damian 	43 	Buloofo 	Kingdom of Tantal 	Sanguinous Grotto 	Anytime
Myrmidon Eugene 	33 	Driver 	Empire of Mor Ardain 	Eggle Jetty (Abandoned) 	Anytime
Nitpicking Beru 	27 	Driver 	Gormott Province 	Solitary Block #2 	Anytime
Parasite Aplacus 	58 	Parisax 	Land of Morytha 	Decaying Titan 	Anytime
Peerless Beaufort 	49 	Crustip 	Leftherian Archipelago 	Isle of Sleeping Remains 	Anytime
Pernicious Benf 	109 	Behemoth 	Temperantia 	Aegishammer 	After entering the First Low Orbit Station
Perplexed Stoyan 	47 	Serprond 	Leftherian Archipelago 	Little Garden of Tradition 	Anytime
Praetorian Argus 	65 	Indoline Loyalist 	World Tree 	7th Perimeter Skyport 	Anytime
Praetorian Medea 	66 	Indoline Loyalist 	World Tree 	7th Perimeter Skyport 	Anytime
Rapturous Scandia 	48 	Taos 	Leftherian Archipelago 	Godsford Isle 	Anytime
Ravenwing Skull 	62 	Ageshu 	Temperantia 	Xataris Spring 	Anytime
Reeking Douglas 	104 	Skwaror 	Gormott Province 	Brigands' Hideout 	After entering the First Low Orbit Station
Relentless Arduran ※ 	99 	Ardun 	Gormott Province 	Kloom Farm 	After raising Pekka's Ardun
Remorseful Vaclav 	14 	Ardainian Soldier 	Gormott Province 	Solitary Block #1 	Anytime
Runaway Train Bool 	55 	Garlus (Driver) 	Temperantia 	Ardainian Garrison 	Anytime
Sad Bernard 	12 	Feris 	Gormott Province 	Garanti Plain 	Anytime
Skyfist Remington 	39 	Driver 	Leftherian Archipelago 	Ysheva Harbor 	Anytime
Slasher Buffon 	40 	Anlood (Driver) 	Empire of Mor Ardain 	Mine No. 2 Entrance 	Clear, Overcast
Sniping Brent 	18 	Rhogul 	Gormott Province 	Melnath's Shoulder 	Clear/Overcast
Soothsayer Gerald 	78 	Ellook 	Kingdom of Uraya 	Loska's Gap 	Night Incense (Night)
Soul-Eater Stanley 	56 	Guldo 	Land of Morytha 	Collapsed Roadway 	Anytime
Spellbinder Billy 	46 	Peng 	Kingdom of Tantal 	Genbu Drifts 	Snow
Spring-Shower Elliott 	42 	Driver 	Kingdom of Tantal 	Lumos Pillar 	Anytime
Supercharged Alfonso 	20 	Garaffa 	Gormott Province 	Masrah Spring 	Low Tide
Tattooed Hugo 	31 	Rhogul 	Empire of Mor Ardain 	Mine Elevator 	Clear, Overcast, Sandstorm
Territorial Rotbart 	81 	Gogol 	Gormott Province 	Plains of Evening Calm 	Anytime
Tyrannotitan Kurodil 	130 	Titan 	Temperantia 	Profaned Place 	Anytime (Unsealed with Field Skills)
Unflinching Saxton 	99 	Driver 	Empire of Mor Ardain 	Work Observation Tower 	After entering the First Low Orbit Station
Vagrant Baldr 	62 	Brionac 	Empire of Mor Ardain 	Brionac Occupied Zone 	Anytime
Vampire Bride Marion 	65 	Parisax 	Kingdom of Uraya 	Dragon's Stomach 	Anytime
Venal Montgomery 	45 	Brog 	Gormott Province 	Coolley Lake 	Anytime
Vile Howard 	47 	Blant 	Spirit Crucible Elpys 	Wonder Spring Plaza Ruins 	Anytime
Walker Trap 	26 	Blant (Driver) 	Kingdom of Uraya 	Farlaine Wells 	Anytime
Beatific Ophelia 	48 	Ellook 	Kingdom of Torna 	Loftin Nature Preserve 	Nighttime
Erratic Goliante 	45 	Gogol 	Gormott 	Saints' Practice Grounds 	Anytime
Everdark Erg 	36 	Quadwing 	Kingdom of Torna 	Lasaria Woodland 	After reaching Aletta Harbor for the first time
Flying Fortress Desmor 	55 	Moramora 	Kingdom of Torna 	Turqos Plateau 	Anytime
Gourmand Galgan 	38+ 	Aspar 	Kingdom of Torna 	Ancient Lakebed 	Anytime
Handwringing Bigelow 	25 	Brog 	Gormott 	Serene Springside 	Anytime
Harbinger Cavill 	23 	Scorpox 	Kingdom of Torna 	Haradd Hills 	Anytime
Herculean Gibson 	75 	Ardun 	Kingdom of Torna 	Wrackham Moor 	After purchasing Gibson's Location from the Nopon Halfsage
Hurricane Anise 	100 	Rhogul 	Kingdom of Torna 	Pedestal of Stargazing 	After purchasing Anise's Location from the Nopon Halfsage
Interceptor Grace 	40 	Antol 	Kingdom of Torna 	The Great Breaksand 	Anytime
Ionospheric Mitchell 	50 	Marrin 	Kingdom of Torna 	Uccar's Trail 	Anytime
Lunar Amaruq 	34 	Volff 	Kingdom of Torna 	Hyber Village 	Nighttime
Mesmer Tlaloc 	85 	Blant 	Kingdom of Torna 	Streamsand Corridor 	After purchasing Tlaloc's Location from the Nopon Halfsage
Nomadic Rusholme 	44 	Griffox 	Kingdom of Torna 	Behemoth's Roost 	After defeating the Grafton Feris
Overaffectionate Murph 	18 	Taos 	Gormott 	Lascham Cove 	Anytime
Ravine Bunnit 	50 	Bunnit 	Gormott 	Hoary Weald Camp 	Anytime
Scowling Quincy 	25 	Tirkin 	Kingdom of Torna 	Tirkin Cliff Colony 	Anytime
Sentinel Carpathia 	65 	Urchon 	Kingdom of Torna 	Great Crater 	After purchasing Carpathia's Location from the Nopon Halfsage
Sequestered Ludd 	48 	Parisax 	Kingdom of Torna 	Pulsating Passage 	Anytime
Sleepwalker Mork 	33 	Caterpile 	Kingdom of Torna 	Peln, Pilgrim's Springland 	Anytime`;

const xc3 = `Abysmal Rakshmi 	64 	Arachno (Arachno Queen) 	Erythia Sea 	Lavi Sandbar 	Anytime 	Queen of Mercy (Skill)
Altruistic Maribel 	29 	Skeeter 	Millick Meadows 	Murmur Rise 	Anytime 	Air Body (Skill)
Ambusher Tirion 	39 	Levnis (Speculatos) 	Syra Hovering Reefs 	Ether Mine 	Anytime 	Damage Share (Skill)
Artificial Optho 	69 	Droid 	Origin Interior 	Hangar, Upper Level 	Anytime, among the Hollow Ones quartet 	Magic Transmutation (Skill)
Barbed Merod 	51 	Urchon 	Erythia Sea 	Anu Shoals 	Anytime 	Needle Shell (Skill)
Besieger Sheritt 	48 	Levnis (Centuris) 	Urayan Trail 	Mountain Front: Keves 	Anytime 	Piercing Laser (Art)
Blazing Karlos 	40 	Ekidno 	Syra Hovering Reefs 	Hovering Reef 4 	Anytime 	Dino Storm (Art)
Bloodsucking Elvis 	53 	Vang 	Urayan Trail 	Loska's Cavern 	Anytime 	Double Strike (Art)
Budding Francis 	32 	Amoney 	Great Cotte Falls 	Titan Rock 	Anytime 	Spiritual Absorber (Skill)
Bushwhacker Farritt 	48 	Levnis (Ulula) 	Urayan Trail 	Mountain Front: Agnus 	Anytime 	Reserve Life (Skill)
Clinging Azreel 	69 	Flak 	Origin Interior 	Central Defense 	Anytime 	Elimination Beam (Art)
Conqueror Deepwan 	102 	Igna 	Erythia Sea 	Demihuman Gutter 	Anytime, among The King-Kings duo 	King's Bash (Art)
Covetous Gerondon 	60 	Rhana 	Erythia Sea 	Cape Arcaphor 	Anytime 	Aquaball (Art)
Crafty Anskey 	54 	Wisp 	Elaice Highway 	Yunnae's Rise 	Anytime 	Revenge Impetus (Skill)
Craven Piggard 	38 	Kapiba 	Syra Hovering Reefs 	Hovering Reef 3 	Anytime 	Nimbleness Itself (Skill)
Creeping Hameel 	67 	Flak 	Origin Interior 	Amplifier No. 2 	Anytime 	Attack Mastery (Skill)
Cruelfist Rojou 	66 	Droid 	Origin Interior 	Amplifier Control Room 	Anytime, among the Armbenders trio 	Recharge Cheer (Skill)
Crystalline DuGarre 	27 	Ropl 	Dannagh Desert 	Alefa Skysphere 	Anytime 	Cursed Cuisine (Art)
Dapper Sepiar 	22 	Urchon 	Rae-Bel Tableland 	The Lace Subterranean 	Anytime 	Natural Guard (Skill)
Darkening Asha 	65 	Agnus Forces 	Erythia Sea 	Colony 15 	Among the 4 Blades in the Dark after completing A Young Noble's Request 	Debuff Counter (Skill)
Defiled Ishtar 	65 	Myoot 	Origin Interior 	Ferronis Arsenal #3 	Anytime 	Vampire Bat (Art)
Demonic Krenolur 	75 	Plambus 	Erythia Sea 	Daedal Isle 	Anytime 	Hydra Gas (Art)
Desired Oruria 	86 	Vokooku 	Origin Interior 	Hangar, Lower: Main Gate 	Anytime 	Wild Tendencies (Skill)
Determined Vatslav 	43 	Levnis (Speculatos) 	Keves Castle 	Troop Reserve Section 	Anytime, among The Black Triad 	Supercharged (Skill)
Diabolical Rindolph 	49 	Moramora 	Syra Hovering Reefs 	Hovering Reef 7 	Anytime 	Spinning Bolt (Art)
Dimwitted Tirkin 	45 	Tirkin 	High Maktha Wildwood 	The Tirkinhold 	Anytime 	Royal Aide (Skill)
Dishonest Karom 	69 	Droid 	Origin Interior 	Hangar, Upper Level 	Anytime, among the Hollow Ones quartet 	Evasive Posture (Art)
Doomfang Caum 	50 	Feris 	Rae-Bel Tableland 	Pinasa Highland 	Anytime 	Megashout (Skill)
Dreadwyrm Nizoont 	105-170 	Drague 	Low Maktha Wildwood 	Forgotten Trick Gate 	Anytime 	Hot Soul (Skill)
Dunesea Marcellus 	87 	Marrin 	Dannagh Desert 	Devil's Skillet 	Anytime 	Strike Shirker (Skill)
Fairscale Marina 	66 	Merigna 	Erythia Sea 	Oshia's Reef Ravine 	Anytime, among the Whirlpool Triumvirate trio 	Breath of an Era (Skill)
Fang-King Clavein 	80 	Darbus 	Millick Meadows 	Elgares Depths 	Anytime 	Counter Puncher (Skill)
Farseer Pirtett 	40 	Hox 	Eagus Wilderness 	Zem's Crossway 	Anytime 	Sacrificial Heal (Skill)
Fineblade Faltaar 	47 	Taos 	Great Sword's Hilt 	Material Storage Warehouse 	Anytime 	Dino Flash (Art)
Fleeting Shikino 	65 	Agnus Forces 	Erythia Sea 	Colony 15 	Among the 4 Blades in the Dark after completing A Young Noble's Request 	Battle Fever (Skill)
Flyswatter Kamado 	77 	Antol 	Erythia Sea 	Daedal Isle 	Anytime 	Spider Web (Art)
Foolhardy Saide 	58 	Rhinon 	Great Sword's Base 	Pedesto Valley Floor 	Anytime 	Rhino Storm (Art)
Forsaken Arbiter 	42 	Levnis (Velites) 	Keves Castle 	Hangar, Lower Level 	Anytime, among The Executioners duo 	Neck Slice (Art)
Frolicking Parker 	31 	Ottil 	Great Cotte Falls 	Cotte Trick Ruins 	Anytime 	Aquatic Missile (Art)
Gallivanter Buckley 	30 	Hox 	Great Cotte Falls 	Titan Rock 	Anytime 	Sandsmoke (Skill)
Galloping Ghuldan 	56 	Ellook 	Erythia Sea 	Farlaine Underpass 	Anytime 	Apothecary's Wisdom (Skill)
Ghostfist Róisín 	66 	Droid 	Origin Interior 	Amplifier Control Room 	Anytime, among the Armbenders trio 	Murder Knuckle (Art)
Ghosting Lulika 	65 	Agnus Forces 	Erythia Sea 	Colony 15 	Among the 4 Blades in the Dark after completing A Young Noble's Request 	Terran Warrior (Skill)
Godlike Krastor 	82 	Agnus Forces 	Urayan Tunnels 	Ruins of Seebu 	Anytime, among the Agnian Assassins duo 	Large-Scale Shock (Skill)
Gorgeous Mandora 	96 	Blant 	Low Maktha Wildwood 	Cavern of Oblivion 	Anytime 	Life Plant (Art)
Gracious Titania 	50 	Arachno (Arachno Queen) 	Urayan Tunnels 	Roaring Spring 	Anytime 	Battle Pheromone (Art)
Gushing Masquin 	24 	Piranhax 	Yzana Plains 	Colony 9 	Anytime 	Dodge Acceleration (Skill)
Hardscale Gouran 	66 	Merigna 	Erythia Sea 	Oshia's Reef Ravine 	Anytime, among the Whirlpool Triumvirate trio 	Dragon Decree (Art)
Hardshelled Admory 	57 	Krammit 	Erythia Sea 	Krezen Cliffs 	Anytime 	Shell Guard (Art)
Hazardous Jarrahed 	16 	Aspar 	Eagus Wilderness 	Racine's Platter 	Anytime 	Snake Eyes (Art)
Heavenrazor Egreet 	90 	Rhogul 	The Cavity 	Shattered Pathway 	Anytime 	Gatling Peck (Art)
Hedonist Tirkin 	23 	Tirkin 	Ribbi Flats 	Tirkin Headquarters 	Anytime 	Tactical Eye (Skill)
Heretical Saurow 	25 	Upa 	Rae-Bel Tableland 	Old Kana Battlefield 	Anytime 	Hypno-Light (Art)
Heroic Gulkin 	76 	Gulkin 	Erythia Sea 	Place of Heroes Past 	Anytime 	Royal Charisma (Skill)
Hornbow Dante 	55 	Balgas 	Syra Hovering Reefs 	Ekdaso Verge 	Anytime 	Dual-Horn Pressure (Skill)
Househunter Carly 	21 	Krabble 	Alfeto Valley 	Berje Belt 	Anytime 	Bubble Cloud (Art)
Immovable Gonzalez 	88 	Gogol 	High Maktha Wildwood 	Gogols' Tree 	Anytime 	Wild Wave (Art)
Impish Langobard 	74 	Gogol 	Elaice Highway 	Purus Palecolumn 	Anytime 	Non-Stop Barrage (Skill)
Impregnable Sandhu 	82 	Agnus Forces 	Urayan Tunnels 	Ruins of Seebu 	Anytime, among the Agnian Assassins duo 	Fiery Morale (Skill)
Indiscreet Gombaba 	12 	Brog 	Millick Meadows 	Millick Ravine Way 	Anytime 	Sumo Press (Art)
Infiltrator Garnach 	64 	Levnis (Gastrates) 	Syra Hovering Reefs 	Fourth Ixia Bridge 	Anytime 	Super Explosion (Skill)
Intrusive Neville 	49 	Gyaark 	Erythia Sea 	Migrow's Rosary 	Anytime 	Shark Shock (Art)
Jealous Mizraile 	72 	Aspar 	Erythia Sea 	Lavi Sandbar 	Anytime 	Creeping Predator (Skill)
Jingoistic Gigantus 	80 	Gogol 	Millick Meadows 	Viliera Hill 	Anytime 	Blasting Stomp (Skill)
Joyful Nimroog 	68 	Anlood 	Rae-Bel Tableland 	Valley of Anguish 	Anytime 	Instant Charge (Skill)
Keen Chicky-Chicky 	59 	Grebel 	Captocorn Peak 	Nocclia Mire 	After completing In Search of a Home 	Burrowing Rocket (Art)
Killhappy Brijaidor 	79 	Merfrey 	Erythia Sea 	Vinisog Holm 	Anytime 	Strength Support (Skill)
Kilocorn Grandeps 	95-150 	Ardun 	Rae-Bel Tableland 	Dumas' Jaw 	Anytime 	Monarch's Heart (Skill)
King Krawkin 	102 	Tirkin 	Erythia Sea 	Demihuman Gutter 	Anytime, among The King-Kings duo 	Desperate Charge (Art)
Lapdog Veece 	9 	Volff 	Alfeto Valley 	Volff Lair 	Anytime 	Beast Howl (Art)
Levialord Empireo 	110-180 	Ravoon 	Erythia Sea 	The Aegis Sea 	Anytime 	Power Pick-Me Up (Skill)
Littlefort Morley 	46 	Pagul 	Erythia Sea 	Needle Reef Beach 	Anytime 	Cavalry (Art)
Massive Georges 	37 	Aligo 	Great Cotte Falls 	Hidden Freshwater Inlet 	Anytime 	Fin of Fear (Art)
Migratory Circe 	14 	Flamii 	Millick Meadows 	Millick Ravine Way 	Anytime 	Just A Moment (Skill)
Miraging Yuri 	65 	Agnus Forces 	Erythia Sea 	Colony 15 	Among the 4 Blades in the Dark after completing A Young Noble's Request 	One with the Land (Skill)
Mobile Vespa 	41 	Levnis (Equites) 	Keves Castle 	Hangar, Lower Level 	Anytime 	Spit Beam (Art)
Naval Gyrus 	75 	Krodlax 	Erythia Sea 	Irma's Secret Base 	Anytime 	Trout Hop (Art)
Navigator Helios 	48 	Levnis (Testudo) 	Erythia Sea 	Erythia Relay Base 	Anytime 	Reckless Attack (Skill)
Night-Stalker Volodya 	43 	Vang 	Elaice Highway 	Torus Hollow 	Anytime 	Accelerator Organ (Skill)
Obliterator Centaurio 	91 	Levnis (Gyrinus) 	Agnus Castle Barbican 	Levnis Workyard 	Anytime 	Psychowave (Art)
Oceanic Lucera 	73 	Moramora 	Erythia Sea 	Anu Shoals 	Anytime 	Bomberhead (Art)
Otherworldly Rodsin 	60 	Serprond 	Erythia Sea 	Welkin Falls 	Anytime 	Jet Stream (Art)
Perilwing Ryuho 	100-160 	Vollgull 	Melnath's Shoulder 	Coolley Lake 	Anytime 	Eagle Rush (Skill)
Perspicacious Oldar 	20 	Ardun 	Ribbi Flats 	Sparres Barr 	Anytime 	Horn Dance (Art)
Perturbed Bilkin 	13 	Flier 	Millick Meadows 	Viliera Hill 	Anytime 	Butterfly Dust (Art)
Petrivore Judomar 	31 	Ropl 	Melnath's Shoulder 	Melnath's Pass, Upper 	Anytime after Chapter 3 	Accelerating Attacks (Skill)
Phantasmagorical Rist 	35 	Medooz 	Great Cotte Falls 	Cotte Trick Ruins 	Anytime 	Physical Absorber (Skill)
Phantom Streya 	51 	Amoney 	Millick Meadows 	Elgares Depths Entrance 	Anytime 	Mimic Technique (Skill)
Phony Temnos 	69 	Droid 	Origin Interior 	Hangar, Upper Level 	Anytime, among the Hollow Ones quartet 	Exoshell (Skill)
Pressing Rafeel 	69 	Enpedia 	Origin Interior 	Hangar, Lower: Main Gate 	Anytime 	Defense Mastery (Skill)
Profound Hodzuki 	44 	Quadwing 	Elaice Highway 	Visura Parkland 	Anytime 	Hypnotism (Art)
Protector Revelta 	64 	Levnis (Sagittarius) 	Syra Hovering Reefs 	Hovering Reef 1 	Anytime 	Heavy Armor (Skill)
Puzzled Raquinu 	45 	Bunnit 	Rae-Bel Tableland 	Elsayer Cape 	Anytime 	Raid Strike (Art)
Ragemaw Tempeldo 	78 	Taos 	Erythia Sea 	Daedal Isle 	Anytime 	Celestial Conqueror (Skill)
Rambler Curalie 	17 	Caterpile 	Eagus Wilderness 	Bennel Cave 	Anytime 	Poison Spray (Art)
Raucous Ron 	27 	Skeeter 	Urayan Tunnels 	Roaring Spring 	Anytime 	Last Fencer (Art)
Ravenous Babayaga 	84 	Moglum 	Erythia Sea 	Patulia Bay 	Anytime 	Attack Heal (Skill)
Reaping Anteel 	72 	Horrish 	Origin Interior 	Ferronis Arsenal #2 	Anytime 	Healing Mastery (Skill)
Repulsive Deepus 	24 	Piranhax 	Yzana Plains 	Sonata Saddleback 	Anytime 	Emergency Turbo (Skill)
Ruthless Grokken 	81 	Brog 	Ribbi Flats 	Killy Fors 	Anytime 	Predation (Art)
Saberly Dorampé 	65 	Quardun 	Great Cotte Falls 	Cotte Fountainhead 	Anytime, among the Aquatic Beasts duo 	Double Slap (Art)
Scornful Daria 	22 	Skwaror 	Dannagh Desert 	Great Idalla Ravine 	Anytime 	Tail Slap (Art)
Seadragoon Melchior 	85 	Merigna 	Erythia Sea 	Twinpalm Isle 	Anytime 	Dual Attack (Art)
Seatiger Tridence 	77 	Shoox 	Erythia Sea 	Patulia Bay 	Nighttime 	Ether Sphere (Art)
Sensitive Catullus 	26 	Levnis (Avis) 	Alfeto Valley 	Sepulchral Cliffpath 	Anytime after Chapter 1 	Systematic Defense (Skill)
Seraphic Ceratinia 	120-200 	Unknown 	The Cavity 	Shattered Pathway 	After all other Superbosses are defeated and the topic "Aionios' Strongest" has been discussed at a Rest Spot 	Transient Bond (Art)
Sharkblade Nedd 	67 	Gyaark 	Erythia Sea 	Doublecrag Gate 	Daytime 	Positional Attacker (Skill)
Sharpscale Ragoon 	66 	Merigna 	Erythia Sea 	Oshia's Reef Ravine 	Anytime, among the Whirlpool Triumvirate trio 	Aquatic Warrior (Skill)
Sharpwitted Tracy 	15 	Camill 	Eagus Wilderness 	Reith Valley 	Anytime 	Surprise Attack (Skill)
Shimmering Marcko 	28 	Pippito 	Urayan Tunnels 	Kachurichu Cavern 	Anytime 	Radiant Arts (Art)
Slack-Jawed Zephal 	80 	Darbus 	Erythia Sea 	Daedal Isle 	During a Storm 	Emperor of Violence (Skill)
Soaring Virion 	36 	Rhogul 	Great Cotte Falls 	Amoney's Hallows 	Anytime 	Dangerous Claws (Skill)
Spartan Fennick 	78 	Ageshu 	Low Maktha Wildwood 	Gingin's Treehouse 	Anytime 	Ministorm (Art)
Spectral Rémy 	42 	Medooz 	Great Sword's Base 	Bannis Path 	Anytime 	Toxic Gas (Art)
Spiky Aurelia 	63 	Antol (Antol Queen) 	Erythia Sea 	Antol Pit 	Anytime 	Queenly Pride (Skill)
Spiralhorn Baccro 	56 	Ories 	Captocorn Peak 	Tsang Road 	Anytime 	Grace of the Land (Skill)
Stately Doramma 	64 	Quarmu 	Great Cotte Falls 	Cotte Fountainhead 	Anytime, among the Aquatic Beasts duo 	Scattered Healing (Skill)
Stoneclipper Gorse 	25 	Scorpox 	Dannagh Desert 	Bulik Brae 	Anytime 	Drain Guard (Skill)
Stonehoof Torphan 	57 	Aries 	Captocorn Peak 	Piula Path 	Anytime 	Sense of Danger (Skill)
Sundappled Floria 	71 	Garaffa 	Great Sword's Base 	N'ohm Wetlands 	Anytime 	Electric Skin (Art)
Sycophantic Lilith 	5 	Bunnit 	Yzana Plains 	Colony 9 Front Gate 	Anytime 	Hard Dig (Art)
Talkative Dirakha 	63 	Moglum 	Erythia Sea 	Cape Arcaphor 	Anytime 	Deeply Tactical (Skill)
Taskmaster Imperion 	49 	Levnis (Ulula) 	Erythia Sea 	Erythia Relay Base 	Anytime 	Excessive Armor (Skill)
Tenderling Rumi 	23 	Armu 	Rae-Bel Tableland 	Lisza Garden 	Anytime 	Amazing Growth (Skill)
Terrorbird Zieger 	37 	Ansel 	Dannagh Desert 	Glam Rock 	Anytime 	Hawk Shot (Art)
Thaumawolf Bajeek 	71 	Kananus 	Origin Interior 	Central Defense 	Anytime 	Wolf Spirit (Skill)
Thunderclap Dalton 	43 	Levnis (Speculatos) 	Keves Castle 	Troop Reserve Section 	Anytime, among The Black Triad 	Deflector Plate (Skill)
Timbercorn Cthinos 	61 	Ellook 	Captocorn Peak 	Ladras Way 	Anytime 	Healing Rest (Art)
Trickfist Tuano 	66 	Droid 	Origin Interior 	Amplifier Control Room 	Anytime, among the Armbenders trio 	Mano a Mano Evasion (Skill)
Turbulent Martinez 	43 	Levnis (Speculatos) 	Keves Castle 	Troop Reserve Section 	Anytime, among The Black Triad 	Energy Efficiency (Skill)
Unobtrusive Liggy 	43 	Arachno 	Elaice Highway 	Three Heroes Peak 	Anytime after starting Her Reasons 	Underworld Rage (Skill)
Unruffled Narrah 	19 	Armu 	Ribbi Flats 	Laprel Knoll 	Anytime 	Defense Time (Skill)
Vapid Roger 	70 	Droid 	Origin Interior 	Hangar, Upper Level 	Anytime, among the Hollow Ones quartet 	Berserker Mindset (Skill)
Vengeful Dominator 	42 	Levnis (Velites) 	Keves Castle 	Hangar, Lower Level 	Anytime, among The Executioners duo 	Action Reaction (Skill)
Villainous Igna 	46 	Igna 	Elaice Highway 	Igna Conglomerate 	Anytime 	Dragon Gas (Art)
Virtuous Gulkin 	52 	Gulkin 	Erythia Sea 	Tengate Ruins 	Anytime 	Pointy Stick (Art)
Well-Plated Zelinka 	53 	Crustip 	Yzana Plains 	Svinne Cavity 	Anytime 	Ultranull Shield (Skill)
Wicked Wolf Aranqui 	70 	Vvarga 	Millick Meadows 	Fuschian Fields 	Anytime 	Thunderclap (Art)
Widdershins Radler 	48 	Eluca 	Erythia Sea 	Anu Shoals 	Anytime 	Awakilling (Skill)
Witchwind Kujjat 	59 	Ansel 	Everblight Plain 	Rottswoe Battlescar 	Anytime after Chapter 3 	Trick Dart (Art)
Wraithfin Segna 	24 	Piranhax 	Rae-Bel Tableland 	Riez Tarn 	Anytime 	Water Jet (Art)
Advent Wolf Marduk 	9 	Volff 	Vermilion Woods 	Colony Gamma Wreckage 	Anytime
Bioluminescent Bob 	70 	Egel 	Yesterdale 	Gotrock Oracle Ruins 	After reaching the Black Mountains
Bombastic Rotbart Jr. 	10 	Gogol 	Vermilion Woods 	Leaf-Strewn Clearing 	Anytime
Cavalier MacBright 	23 	Igna 	Aurora Shelf 	Agni's Tomb Ruins 	Anytime
Cryoconite Laurel 	26 	Moglum 	Yesterdale 	Lakeside Grotto 	Anytime
Dragon God Alcar 	46 	Draigul 	Black Mountains 	Raxeal Lavaflow 	Anytime
Fogdweller Abaasy 	100 	Fogbeast Draigul 	Black Mountains 	Valak Mountain 	After reaching N on the Prison Terrace
Foghewn Augustus 	48 	Fogbeast Egel 	Black Mountains 	Travalga Bridge 	Anytime
Fograptor D'nari 	37 	Fogbeast Vollgull 	Aurora Shelf 	Declessa Altar 	Anytime
Fogstalker Naiara 	45 	Fogbeast Feris 	Vermilion Woods 	Rhogett Causeway 	After reaching the Black Mountains
Fogtrawler Tallstuff 	55 	Fogbeast Garaffa 	Aurora Shelf 	Sullied Temple of Abitalia 	Anytime
Gotthard, the Ethereal 	60 	Darbus 	Aurora Shelf 	Sullied Temple of Abitalia 	After reaching the Black Mountains
Hallowcanter Hazerune 	42 	Aries 	Black Mountains 	Belgazas' Drifts 	Anytime
Hilltop Chegwin 	13 	Tirkin 	Aurora Shelf 	Zalmor's Falls 	Anytime
Many-Lived Derrick 	42 	Taos 	The Ragmos Desolation 	Gelgemos Garrison 	Anytime
Naberius Invictus 	40 	Levnis 	The Ragmos Desolation 	Magwall Road 	Anytime
Peacebringer Divalo 	90 	Levnis 	Vermilion Woods 	Colony Gamma Wreckage 	After reaching the Black Mountains, among The Slow 'n' Steadies duo
Perambulator Moritz 	28 	Levnis 	The Ragmos Desolation 	Lumos Garrison 	Anytime
Prohibitor Giuseppe 	23 	Brog 	Vermilion Woods 	Inconspicuous Cave 	Anytime
Radicalized Godwin 	43 	Igna 	Aurora Shelf 	Exile Fortress Ruins 	Anytime
Sensational Gigapur 	47 	Fogbeast Laia 	Black Mountains 	Gravina Bridge 	During Red Lightning
Smackdown Brannigan 	24 	Aligo 	Yesterdale 	Tephra Hill 	Anytime
Smothering Andante 	11 	Ardun 	Aurora Shelf 	Gaur Viaduct 	Anytime
Stronghammer Dorga 	90 	Levnis 	Vermilion Woods 	Colony 5 Wreckage 	After reaching the Black Mountains, among The Slow 'n' Steadies duo
Surrogate Fitzpatrick 	41 	Vollgull 	The Ragmos Desolation 	Raguel Bridge 	Anytime
Sworn Protector Hector 	32 	Gogol 	The Ragmos Desolation 	Waterlogged Daksha Shrine 	Anytime
Tenebrous Muramasa 	39 	Taos 	Yesterdale 	Ruined Anti-Air Battery 3 	Nighttime
Thunderfish Duna-Roa 	80 	Ravoon 	The Ragmos Desolation 	Raguel Lake 	Storms, After reaching the Black Mountains and viewing the Lord of the Lake Affinity Scene
Treehugger Gerald 	14 	Ellook 	Aurora Shelf 	Waypoint Sapling 	Anytime
Troglodyte Umir 	22 	Caterpile 	Yesterdale 	Tephra Hill 	Anytime
Watchful Valencia 	10 	Rhogul 	Aurora Shelf 	Ragrinar Passage 	Anytime`

function parseData(stringData) {
    const lines = stringData.trim().split('\n');

    const epithets = [];
    const names = [];

    lines.forEach(line => {
        const columns = line.split(' \t');
        const monster = columns[0];
        const parts = monster.split(' ');
        const name = parts.pop();
        const epithet = parts.join(' ');
        epithets.push(epithet);
        names.push(name);
    });

    return { epithets: epithets, names: names };
}

const xc1Parsed = parseData(xc1);
const xc2Parsed = parseData(xc2);
const xc3Parsed = parseData(xc3);

// Custom Additions
const customEpithets = [
    "Wide",
    "Wretched",
    "Mere",
    "Insidious",
    "Succinct",
    "Squalid",
    "Torpid",
    "Grevous",
    "Questionable",
    "Dramatic",
    "Dominant",
    "Regal",
    "Anxious",
    "Possessive",
    "Jittery",
    "Sorrowful",
    "Disturbed",
    "Doomfist",
    "Ghastly",
    "Unforgiven",
    "Deliquent",
    "Volcanic",
    "Serpentine",
    "Rowdy",
    "Emaciated",
    "Forgotten",
    "Bogbottomed",
    "Spike-Spined",
    "Barnacled",
    "Ceaseless",
    "Frostbounded",
    "Hallowed",
    "Jubilant",
    "Obsidian-Eyed",
    "Quaking",
    "Radiant",
    "Thunderous",
    "Unyielding",
    "Whispering",
    "Zealous"
];
const customNames = [
    "Maarvi",
    "Horace",
    "Balthazar",
    "Babak",
    "Zephyr",
    "Zachariah",
    "Rkard",
    "Mortimer",
    "Balbino",
    "Gertruda",
    "Gregor",
    "Laurent",
    "Morewater",
    "Bonzales",
    "Grider",
    "Dustice",
    "Rortugal",
    "Truk",
    "McDichael",
    "Dourque",
    "Dandleton",
    "Furcotte",
    "Nogilny",
    "Archideld",
    "Lopsworded",
    "Chamgerlain",
    "Jocelyn",
    "Eggbert",
    "Tryphena",
    "Hortense",
    "Vernon",
    "Lanzo",
    "Berthold",
    "Wrathgar",
    "Wraithclaw",
    "Wendelin",
    "Igor",
    "Immacolata",
    "Tharlic",
    "Gorath",
    "Mordain",
    "Ulric",
    "Perrimound",
    "L'thorpe"
];

monsters = {
    epithets: [...new Set([...xc1Parsed.epithets, ...xc2Parsed.epithets, ...xc3Parsed.epithets, ...customEpithets])],
    names: [...new Set([...xc1Parsed.names, ...xc2Parsed.names, ...xc3Parsed.names, ...customNames])]
}

fs.writeFileSync('monsters.json', JSON.stringify(monsters, null, 2));

console.log("Epithets: ", monsters.epithets.length, " Names: ", monsters.names.length);