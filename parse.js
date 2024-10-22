const fs = require('fs');

data = `Abnormal Clone Barg 	77 	Barg 	Prison Island 	First Sanctum 	After Mechonis Core (Chapter 17)
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

const lines = data.trim().split('\n');

const epithets = [];
const names = [];

lines.forEach(line => {
    const columns = line.split(' \t');
    const monster = columns[0];
    const parts = monster.split(' ');
    //parts.pop();
    const name = parts.pop();
    const epithet = parts.join(' ');
    epithets.push(epithet);
    names.push(name);
});

const result = { epithets: epithets, names: names };

fs.writeFileSync('monsters.json', JSON.stringify(result, null, 2));