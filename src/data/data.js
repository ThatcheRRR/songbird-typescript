const data = [
    [
        {
            id: 0,
            name: 'Counter-Strike: Global Offensive',
            description: 'разработана компаниями Valve и Hidden Path Entertainment и издана в 2012 году. Игроки распределяются по двум командам и сражаются друг с другом. В игре представлены две команды: террористы и спецназ, а также два сценария игры: разминирование бомбы и спасение заложника.',
            image: 'https://i.playground.ru/e/k1jAC89bWjiKj38d1xmRpw.jpeg',
            audio: 'https://storage.lightaudio.ru/35c5de35/11921afe4/CSGO%20%E2%80%94%20%D0%98%D0%B7%20%D0%BC%D0%B5%D0%BD%D1%8E%20%D0%B8%D0%B3%D1%80%D1%8B.mp3'
        },
        {
            id: 1,
            name: 'Overwatch',
            description: 'разработана и выпущена компанией Blizzard Entertainment в 2016 году. В Overwatch две команды игроков по шесть человек ведут сражение на сложно устроенной карте; перед каждым сражением игроки выбирают себе персонажей-героев.',
            image: 'https://pbs.twimg.com/media/DuE-k4FXcAATItZ.jpg',
            audio: 'https://storage.lightaudio.ru/39922439/13449780/Overwatch%20%E2%80%94%20Main%20Menu.mp3'
        },
        {
            id: 2,
            name: 'Valorant',
            description: 'разработана и издана компанией Riot Games в 2020 году. Valorant является первой игрой Riot Games в жанре шутера от первого лица. Игра является противостоянием двух команд по пять игроков, каждый из них играет в роли «агентов» с особенными способностями.',
            image: 'https://i.playground.ru/e/xy0V17PAskJun_xqXk8DOQ.jpeg',
            audio: 'https://storage.lightaudio.ru/39923087/294df77a/Valorant%20OST%20%E2%80%94%20Main%20Theme.mp3'
        },
        {
            id: 3,
            name: 'Battlefield 4',
            description: 'двенадцатая по счету из серии игр Battlefield, разработанная компанией DICE и изданная Electronic Arts в 2013 году. Действие происходит через 6 лет после событий Battlefield 3 в 2020 году.',
            image: 'https://media.contentapi.ea.com/content/dam/gin/common/packart/bf4-pc.jpg',
            audio: 'https://storage.lightaudio.ru/1d614d73/15aece4d/Battlefield%204%20%E2%80%94%20Menu%20Theme.mp3'
        },
        {
            id: 4,
            name: `PLAYERUNKNOWN'S BATTLEGROUNDS`,
            description: 'разработана и издана студией PUBG Corporation в 2017 году. Игроки в количестве до 100 человек сражаются в «королевской битве», где игроки воюют между собой, чтобы стать последним выжившим.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c9/Логотип_игры_PlayerUnknown%27s_Battlegrounds.jpg/800px-Логотип_игры_PlayerUnknown%27s_Battlegrounds.jpg',
            audio: 'https://storage.lightaudio.ru/3992251c/47340758/Main%20menu%20—%20OST%20PUBG.mp3'
        },
        {
            id: 5,
            name: 'DOOM Eternal',
            description: 'разработана компанией id Software и издана Bethesda Softworks в 2020 году. Игрок берёт на себя роль Палача Рока, древнего демоноборца. Игра разделена на отдельные уровни, которые сочетают в себе научно-фантастическую и фэнтезийную тематику.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/8/8c/Обложка_Doom_Eternal.jpg',
            audio: 'https://storage.lightaudio.ru/39922745/125c590f/Mick%20Gordon%20%E2%80%94%20DOOM%20Eternal.mp3'
        }
    ],
    [
        {
            id: 0,
            name: 'Mafia II',
            description: 'разработана компанией 2K Czech и издана в 2010 году. Игроку в роли Вито Скалетты необходимо путешествовать по городу Эмпайр-Бэй, общаться с различными персонажами, выполнять задания, заключающиеся в перестрелках, необходимости водить автомобиль и т. д.',
            image: 'https://st.overclockers.ru/legacy/blog/378513/163310_O.jpeg',
            audio: 'https://storage.lightaudio.ru/39922440/28fe6857/Mafia%202%20%E2%80%94%20maim%20theme.mp3'
        },
        {
            id: 1,
            name: 'Grand Theft Auto: San Andreas',
            description: 'разработана студией Rockstar North и издана компанией Rockstar Games в 2004 году. Действие игры происходит в 1992 году, в окрестностях штата Сан-Андреас. Игрок управляет главным героем Карлом Джонсоном, афроамериканцем в возрасте около 25 лет.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/7/75/Grand_Theft_Auto_San_Andreas.jpg',
            audio: 'https://storage.lightaudio.ru/72f4a0a/ca3d934/GTA%20SA%20%E2%80%94%20Menu%20Theme.mp3'
        },
        {
            id: 2,
            name: 'Saints Row: The Third',
            description: 'разработана компанией Volition, Inc и выпущена в 2011 году. Кампания происходит в вымышленном городе Стилпорте, куда Святые были вынуждены бежать из-за конфликта с Синдикатом.',
            image: 'https://game-tips.ru/wp-content/uploads/2017/06/Saints-Row_-The-Third.jpg',
            audio: 'https://storage.lightaudio.ru/2c5b54d6/2260ca91/Saints%20Raw%20%E2%80%94%20main.mp3'
        },
        {
            id: 3,
            name: 'Watch Dogs 2',
            description: 'разработана компанией Ubisoft и выпущена в 2016 году. Главный герой игры — хакер, родом из Окленда, штат Калифорния, по имени Маркус Холлоуэй переезжает в Сан-Франциско, в сердце Кремниевой Долины, где, объединившись с группировкой активистов из организации DedSec.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/86/Watch_Dogs_2_cover.jpg/274px-Watch_Dogs_2_cover.jpg',
            audio: 'https://storage.lightaudio.ru/39922534/2a50253/Watch%20Dogs%20%E2%80%94%20Main%20Menu%20theme.mp3'
        },
        {
            id: 4,
            name: 'The Saboteur',
            description: 'разработана Pandemic Studios и выпущена Electronic Arts в 2009 году. Действие происходит в Париже и его окрестностях. Город разделён на три оккупационные зоны, дороги между которыми перекрыты немецкими блокпостами.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/4/43/Official_Saboteur_Game_Cover_Art.JPG',
            audio: 'https://storage.lightaudio.ru/39934dbe/2ea34339/%D0%A0%D0%B0%D0%B7%D0%BD%D1%8B%D0%B5%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D0%B8%20%E2%80%94%20The%20Saboteur%20Theme.mp3'
        },
        {
            id: 5,
            name: 'Just Cause 2',
            description: 'разработана студией Avalanche Studios и выпущена Square Enix в 2010 году. Игрок управляет оперативником вымышленного Агентства Рико Родригесом. Его с напарницей посылают в островную республику Панау, расположенную в Юго-Восточной Азии. Управляет страной диктатор Малыш Панай — тиран и убийца с манией величия.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/1/15/Just_Cause_2_boxshot.jpg',
            audio: 'https://storage.lightaudio.ru/10b921ac/bd77834/Just%20Cause%202%20%E2%80%94%20Menu.mp3'
        }
    ],
    [
        {
            id: 0,
            name: 'Tropico 5',
            description: 'разработана студией Haemimont Games и издана Kalypso Media в 2014 году. Игрок выступает в роли главы небольшого островного государства Тропико. Ему предстоит привести остров к процветанию и позаботиться о своей жизни, откладывая деньги на счёт в швейцарском банке.',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48deb0b7-f306-452f-9eb1-78793b450b6d/d7jdfq7-ae153b39-2f3b-47fe-befc-99c61c130184.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhkZWIwYjctZjMwNi00NTJmLTllYjEtNzg3OTNiNDUwYjZkXC9kN2pkZnE3LWFlMTUzYjM5LTJmM2ItNDdmZS1iZWZjLTk5YzYxYzEzMDE4NC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iQdIqJRSbEIvnfXUqALEKKC_ccw9FtWjQ1g7z5Ly5tQ',
            audio: 'https://storage.lightaudio.ru/399226c0/13cf1e8f/Tropico%205%20%E2%80%94%20Motika.mp3'
        },
        {
            id: 1,
            name: 'Sid Meier’s Civilization VI',
            description: 'разработана Firaxis Games и выпущена в 2016 году. Игроку предстоит посоревноваться в деле построения и развития своей собственной цивилизации, начав с маленького племени, постепенно расширяя свою империю с целью добиться господства над всей планетой.',
            image: 'https://i18.kanobu.ru/c/e215baa5ef710da7b3f3a67a7809d7d2/200x284/u.kanobu.ru/games/9b07e355-6beb-4ab1-a40c-1d66209111cb.png',
            audio: 'https://storage.lightaudio.ru/39972469/3bb5091f/Peter%20Hollens%20%E2%80%94%20Sogno%20Di%20Volare%20%28Civilization%20VI%20Main%20Theme%29.mp3'
        },
        {
            id: 2,
            name: 'Hearts of Iron IV',
            description: 'разработана студией Paradox Development Studio и издана Paradox Interactive в 2016 году. Hearts of Iron IV фокусируется на Второй мировой войне. Игрок может взять под своей правление любое государство на Земле, привести их к победе или поражению в войне против других государств.',
            image: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1j86.jpg',
            audio: 'https://storage.lightaudio.ru/399227c2/1191f5104/Hearts%20of%20Iron%20IV%20%E2%80%94%20Main%20Theme.mp3'
        },
        {
            id: 3,
            name: 'Warcraft III: Reign of Chaos',
            description: 'разработана компанией Blizzard Entertainment в 2002 году. От игроков требуется собирать ресурсы, строить здания и производить подразделения для разведки карты и победы над противником в бою. Используются 3 основных ресурса: золото, дерево и пропитание',
            image: 'https://i.pinimg.com/736x/73/b9/09/73b909ae907b70001d6d19074e0f7cf4.jpg',
            audio: 'https://storage.lightaudio.ru/399230ab/14b63769/Warcraft%203%20Reign%20Of%20Chaos%20%E2%80%94%20Menu%20Theme.mp3'
        },
        {
            id: 4,
            name: 'XCOM 2',
            description: 'разработчик — Firaxis Games, издатель — 2K Games. Дата выпуска: 2016 год. Пришельцы победили в войне с армиями Земли, организация XCOM забыта и заброшена. Иноземные захватчики колонизировали планету и установили тотальный контроль над миром.',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/XCOM_2_cover_art.jpg/220px-XCOM_2_cover_art.jpg',
            audio: 'https://storage.lightaudio.ru/38140d3c/166496d9/XCOM%202%20OST%20%E2%80%94%20Main%20Menu%20Theme.mp3'
        },
        {
            id: 5,
            name: 'Stronghold 2',
            description: 'выпущена Firefly Studios в 2005 году. Игрок начинает игру лордом, который правит средневековым замком. Используя доступные ресурсы, он строит жилые и военные здания, мастерские, постройки для добычи ресурсов и пищи.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/a/a5/Stronghold_2.png',
            audio: 'https://storage.lightaudio.ru/39922504/66173c4/Stronghold%202%20%28OST%29%20%E2%80%94%20Labyrinth.mp3'
        }
    ],
    [
        {
            id: 0,
            name: 'The Witcher 3: Wild Hunt',
            description: 'разработана студией CD Projekt RED по мотивам серии романов «Ведьмак», выпущена 2015 году. Игрок управляет ведьмаком Геральтом из Ривии, который путешествует по игровому миру, общается с неигровыми персонажами и выполняет различные задания, в частности, связанные с поиском сокровищ и охотой на чудовищ.',
            image: 'https://i.playground.ru/e/9thR9kr-oEyBmZSODTny6w.jpeg',
            audio: 'https://storage.lightaudio.ru/39922488/5901ccc14/The%20Witcher%203%20%E2%80%94%20Main%20Menu%20Theme.mp3'
        },
        {
            id: 1,
            name: 'The Elder Scrolls V: Skyrim',
            description: 'разработана студией Bethesda Game Studios и выпущена компанией Bethesda Softworks в 2010 году. События игры происходят спустя 200 лет после событий Oblivion. Великая война между Империей и Альдмерским Доминионом закончилась унизительным Конкордатом Белого Золота, ущемлявшим множество прав жителей Империи.',
            image: 'https://avatars.mds.yandex.net/get-entity_search/767653/295210449/SUx182_2x',
            audio: 'https://storage.lightaudio.ru/399223f5/30612a9e/The%20Elder%20Skrolls-Skirim%20%E2%80%94%20Menu.mp3'
        },
        {
            id: 2,
            name: 'Cyberpunk 2077',
            description: 'разрабатывается студией CD Projekt RED. Игра повествует о приключениях персонажа по имени Ви в дистопичном городе Найт-Сити, расположенном на Западном побережье Северной Америки. Игроку будет предоставлен на выбор ряд игровых классов с возможностью их комбинирования.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/b/bb/Обложка_компьютерной_игры_Cyberpunk_2077.jpg',
            audio: 'https://storage.lightaudio.ru/399269b8/1bc0c341/Cyberpunk%202077%20%E2%80%94%20Main%20Theme.mp3'
        },
        {
            id: 3,
            name: 'South Park: The Stick of Truth',
            description: 'разработана студией Obsidian Entertainment в 2014 году. В Южный Парк переезжает живущий с родителями новый мальчик. Родители отправляют его познакомиться с местными ребятами, и он сразу же встречает Баттерса. Баттерс отводит героя в крепость Купа — базу «людей», расположенную на заднем дворе Эрика Картмана.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxO1roht9p5LsELWSQewXm9qABgv7a7yf64_24BCTYYsivXR7GO8D8HA_wdbR-kK5-tzyt5Bq5d6auD5lbV4t75Dy4PZsQandUg9Y_&usqp=CAU&ec=45688578',
            audio: 'https://storage.lightaudio.ru/39924554/bbb43c8/South%20Park%3A%20The%20Stick%20of%20Truth%20%E2%80%94%20Main%20Menu.mp3'
        },
        {
            id: 4,
            name: 'Fallot 4',
            description: 'разработана Bethesda Game Studios и издана Bethesda Softworks в 2015 году. Действие игры начинается незадолго до ядерной войны, когда среди мирной жизни в одной из бытовых сцен выбирается протагонист. На ТВ звучит новость об угрозе взрывов, после чего главные герои отправляются в убежище 111 компании Волт-Тек.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/7/77/Fallout_4_poster.jpg',
            audio: 'https://storage.lightaudio.ru/399230b3/1191c49b1/Bethesda%20Game%20Studios%20%E2%80%94%20Fallout%204%20OST%20Menu%20theme.mp3'
        },
        {
            id: 5,
            name: 'Mass Effect 3',
            description: 'разработана компанией BioWare и издана Electronic Arts в 2012 году. Действие разворачивается в Млечном Пути в конце XXII века, когда стали возможны межзвёздные полёты и мгновенное перемещение между отдалёнными участками галактики благодаря открытию ретрансляторов массы.',
            image: 'https://media.kg-portal.ru/games/m/masseffect3/posters/masseffect3_1.jpg',
            audio: 'https://storage.lightaudio.ru/1ed5e24b/2236d7b/OST%20%E2%80%94%20We%20Face%20Our%20Enemy%20Together.mp3'
        }
    ],
    [
        {
            id: 0,
            name: 'Need for Speed: Most Wanted',
            description: 'разработана студией EA Canada и издана Electronic Arts в 2005 году. Действия игры происходят в вымышленном городе Рокпорт, в котором игроку предоставлена свобода передвижения. По сюжету главный герой выигрывает гонки и продвигается вверх по «Чёрному списку» гонщиков, чтобы вернуть свой автомобиль BMW M3 GTR.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/1/15/NFS-Most-Wanted-Front.jpg',
            audio: 'https://storage.lightaudio.ru/3992245f/1fae053/NFS%20Most%20Wanted%20%E2%80%94%20Main%20theme.mp3'
        },
        {
            id: 1,
            name: 'FlatOut 2',
            description: 'разработана компанией Bugbear Entertainment и издана Empire Interactive в 2006 году. В FlatOut 2 представлены 5 режимов игры: «Карьера», «Заезд», «Одиночная гонка», «Трюки» и «Дерби», а также игра по глобальной или локальной сети с реальными людьми.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/8/8f/FlatOut2Coverart.jpg',
            audio: 'https://storage.lightaudio.ru/e562b1e/ffc5d6e/_Soundtracks%20%E2%80%94%20FlatOut%202__Breathing.mp3'
        },
        {
            id: 2,
            name: 'Colin McRae: DiRT 2',
            description: 'разработана и издана студией Codemasters в 2009 году. В DiRT 2 представлено множество игровых режимов. В нём присутствуют лицензированные автомобили, багги, внедорожники, специально отобранные для агрессивных и быстрых гонок. Также присутствует новый, продвинутый режим мультиплеера.',
            image: 'https://static-cdn.jtvnw.net/ttv-boxart/Dirt%202.jpg',
            audio: 'https://storage.lightaudio.ru/399542e9/2ea3434b/Black%20Tide%20%E2%80%94%20Shout.mp3'
        },
        {
            id: 3,
            name: 'Driver: San Francisco',
            description: 'разработана студией Ubisoft Reflections и издана Ubisoft в 2011 году. Игрок управляет Джоном Таннером в различных миссиях на улицах Сан-Франциско. Функция «Shift» позволяет перемещаться в другой автомобиль и продолжать выполнение миссии. В игре присутствует 140 полностью разрушаемых лицензированных автомобилей.',
            image: 'https://i.playground.ru/e/vgjGYzRpVKCp7-TaiNfJAw.jpeg',
            audio: 'https://storage.lightaudio.ru/39922409/41b6cae/Driver%20San%20Francisco%20%E2%80%94%20Main%20Theme.mp3'
        },
        {
            id: 4,
            name: 'The Crew 2',
            description: 'разработана компанией Ivory Tower и издана Ubisoft в 2018 году. Играть предстоит за не очень известного гонщика, который пытается добиться успеха в нескольких дисциплинах. Он в любой момент может участвовать в гонках в свободном мире в упрощённой цифровой модели Соединённых Штатов.',
            image: 'data:image/jpeg;base64,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',
            audio: 'https://storage.lightaudio.ru/4acf289/3d7d225676/Steve%20Ouimette%20%E2%80%94%20Welcome%20to%20MotorNation%20%28The%20Crew%202%20Main%20Theme%29.mp3'
        },
        {
            id: 5,
            name: 'Forza Horizon 3',
            description: 'разработана Playground Games и выпущена Microsoft Studios в 2016 году. Игра с открытым миром, за основу которого взята Австралияю Игра предоставляет режим кооперативного мультиплеера. Игра предоставляет возможность кросс-платформенной игры, которая является частью программы Xbox Play Anywhere.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/a/ab/Обложка_игры_Forza_Horizon_3.jpg',
            audio: 'https://storage.lightaudio.ru/3997bb18/2ea3434a/Dusky%20%E2%80%94%20Ingrid%20Is%20A%20Hybrid.mp3'
        }
    ],
    [
        {
            id: 0,
            name: 'Heavy Rain',
            description: 'разработана студией Quantic Dream и выпущена Sony Computer Entertainment в 2010 году. Всё начинается со вступления, где игрок играет за архитектора Итана Марса, в жизни которого наступила трагедия после того, как его старшего сына Джейсона, насмерть сбила машина, а сам Итан, попытавшись спасти сына, на полгода впал в кому.',
            image: 'https://live.staticflickr.com/4055/4385944028_262a0938a6_b.jpg',
            audio: 'https://storage.lightaudio.ru/2116e5d1/3089dca/Heavy%20Rain%20%E2%80%94%20Main%20Theme.mp3'
        },
        {
            id: 1,
            name: 'The Walking Dead: The Game',
            description: 'разработана студией Telltale Games в 2012 году. Главным героем игры является персонаж Ли Эверетт. В момент начала зомби-апокалипсиса он находится под арестом, но оказывается на свободе и борется за выживание вместе с встреченной им 8-летней девочкой по имени Клементина.',
            image: 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c3/WDG_Season_1_Original_Score.png/revision/latest?cb=20140410003043',
            audio: 'https://muz18.z1.fm/0/00/iz_igri_the_walking_dead_the_game_-_main_theme_(zf.fm).mp3'
        },
        {
            id: 2,
            name: 'Life is Strange',
            description: 'разработана компанией Dontnod Entertainment и издана Square Enix в 2014 году. Игровой мир представлен локациями со множеством необязательных для взаимодействия персонажей и предметов. Главная героиня комментирует почти каждое такое взаимодействие. Диалоги, подобно другим играм этого жанра, имеют несколько вариантов ответа.',
            image: 'https://vignette.wikia.nocookie.net/rememberme/images/3/32/Life_Is_Strange_Cover.jpg/revision/latest/scale-to-width-down/340?cb=20150206090154',
            audio: 'https://storage.lightaudio.ru/2c790ac3/1667f7b/Life%20Is%20Strange%20%E2%80%94%20Main%20Theme.mp3'
        },
        {
            id: 3,
            name: 'Until Dawn',
            description: 'разработана компанией Supermassive Games в 2015 году. Сюжет игры разделён на два временных отрезка с перерывом в год. В основе сюжета положена теория «Эффекта бабочки». На протяжении всей игры игроки будут принимать трудные решения. Им придётся жертвовать одним персонажем, чтобы спасти другого.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/d/d7/Until_Dawn_cover_art.jpg',
            audio: 'https://storage.lightaudio.ru/3992263e/2b10eb77/Until%20Dawn%20%E2%80%94%20The%20Shadow%20of%20the%20Mountain.mp3'
        },
        {
            id: 4,
            name: 'Beyond: Two Souls',
            description: 'разработана студией Quantic Dream и выпущена Sony Computer Entertainment в 2013 году. Игра сосредоточена на вопросах о том, что происходит после смерти. В центре событий находится молодая девушка Джоди Холмс, обладающая сверхъестественными способностями, она может общаться с потусторонним миром.',
            image: 'https://i12.kanobu.ru/c/b504a7ac781490148de36c52f511ee66/200x284/u.kanobu.ru/games/83b298bc-665e-4ef9-94ee-99ea84102b39.JPG',
            audio: 'https://storage.lightaudio.ru/1d5ea8ed/2dfd722/Beyond%3A%20Two%20Souls%20%E2%80%94%20Main%20Theme.mp3'
        },
        {
            id: 5,
            name: 'The Wolf Among Us',
            description: 'разработана студией Telltale Games в 2013 году. Вы играете за оборотня Бигби, он Шериф Фейблтауна, анклава в Нью-Йорке, где живут сказочные создания в обличии людей. Ваша задача – расследовать жестокое убийство девушки Веры, а также решить некоторые другие проблемы Фейблтауна.',
            image: 'https://upload.wikimedia.org/wikipedia/ru/f/f5/The_Wolf_Among_Us.jpeg',
            audio: 'https://storage.lightaudio.ru/34c83605/119203478/The%20Wolf%20Among%20Us%20%E2%80%94%20Main%20Theme.mp3'
        }
    ]
];

export default data;