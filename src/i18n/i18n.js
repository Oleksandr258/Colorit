import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {

    ru: {
        translation: {
            "YOUTH JOURNAL OF CONTEMPORARY ART": "МОЛОДЕЖНЫЙ ЖУРНАЛ О СОВРЕМЕННОМ ИСКУССТВЕ",

            "HOME": "ГЛАВНАЯ",
            "HEADING \"INTERVIEW WITH A BEGINNER\"": "РУБРИКА \"ИНТЕРВЬЮ У НАЧИНАЮЩЕГО\"",
            "ART NEWS": "НОВОСТИ ИСКУССТВА",
            "TIPS": "СОВЕТЫ",
            "SPACES FOR INSPIRATION": "МЕСТА ДЛЯ ВДОХНОВЕНИЯ",
            "ARTISTS SCULPTORS": "ХУДОЖНИКИ СКУЛЬПТОРЫ",
            "NEWS OF THE DAY": "НОВОСТЬ ДНЯ",
            "INTERVIEW WITH A CREATIVE PERSON": "ИНТЕРВЬЮ У ТВОРЧЕСКОГО ЧЕЛОВЕКА",
            "DISCOVERY OF THE ART": "ОТКРЫТИЕ ИСКУССТВА",



            
            "TOP 5 MOST BEAUTIFUL LANDSCAPE LOCATIONS": "ТОП 5 САМЫХ КРАСИВЫХ МЕСТ ДЛЯ ПЕЙЗАЖА",
            "Bosnia and Herzegovina": "Благай, Босния и Герцеговина",
            "Blagaj is a small village": "Благай - это небольшая деревушка, в которой среди маленьких водопадов и лазоревых вод под вертикальной отвесной горой стоят небольшие белоснежные жилища, а в центре высится монастырь.Это святое пространство для дервишей и суфиев, которые и возвели построили деревню в данном раю.",
            "Huacachina, Peru": "Уакачина, Перу",
            "Huacachina is an oasis": "Уакачина (Huacachina) - это город-оазис среди большой пустыни, проезжая часть  до которого займет в пределах около 5 часов на юг от столицы Перу Лимы. Население там всего в пределах около  200 человек, в следствие этого, попадая туда, можно в полной мере ощутить себя отрезанным от всего мира. А ещё там  можно прокатиться на сендбордах по песчаным перуанским холмам",
            "Dongchuan Red Lands, China": "Красные земли Дончуань, Китай",
            "Dongchuan Red Soil is a": "Красные земли Дончуань (Dongchuan Red Soil) — это горная долина на юго-западе от мегаполиса Куньмин, столицы провинции Юньнань. По причине отдаленности от инфраструктуры сего пространства нет в туристической карте Китая. Оно было открыто в середине 1990-х годов. Волнистые ландшафты, похожие на лоскутное одеяло, имеют коричнево-красные оттенки по причине большого содержания минеральных веществ и ископаемых",
            "Darvaza \"Door to the underworld\", Turkmenistan": "Дарваза «Дверь в преисподнюю», Туркменистан",
            "Darvaza is a giant blazing crater within": "Дарваза (Darvaza) - это гигантский пылающий кратер в пределах около 60 метров в диаметре и 20 в глубину. Местные жители именуют это  место «врата ада». Когда-то геологи невзначай обнаружили здесь пещеру, имеющую большие запасы природного газа. Газ во избежание вредоносного влияния на людей и скот подожгли. Но огонь, который должен  был погаснуть сквозь некоторое количество дней, горит вот уже 45 лет. Это уникальное и завораживающее зрелище, на которое съезжаются взглянуть люди со всего мира.",
            "Lencois Maranhensis, Brazil": "\"Ленсойс-Мараньенсис\", Бразилия",
            "State Park \"Lençóis Maranhenses\" (Lençóis Maranhenses) is located": "Государственный парк \"Ленсойс-Мараньенсис\" (Lençóis Maranhenses) находится у побережья Атлантического океана на северо-востоке Бразилии. Во время сезона дождей он дает просто незабываемое зрелище. Каждый год в это время между песчаных дюн образуются тысячи лагун с бирюзовой водой и живностью. Остается загадкой, как впоследствии засухи сюда попадают рыбы и крабы, но размах такого вида просто не может не поражать. Одно из лучших времен для посещения \"Ленсойс-Мараньенсиса\" - период с июля по сентябрь, когда бассейны достигают совершенного объема.",

            "EMBROIDERY ART OR GOLDEN HANDS": "ИСКУССТВО ВЫШИВКИ ИЛИ ЗОЛОТЫЕ РУЧКИ",
            "We interviewed a wonderful needlewoman": "Мы взяли интервью у чудесной  рукодельницы @djozefinna_embroidery",
            "What prompted you to do beadwork?": "Что сподвигло Вас заниматься вышивкой бисером?",
            "In my fourth year of university": "\«На четвёртом курсе универа я возвращалась домой в часов 2  и сидела дома.Муж был на работе и мне было скучно и не было что делать,тогда я решила  повышивать.Сначала нашла свои старые схемы крестиком и довышивала ,потом подумала что нужно что-то необычное и сделала работу гладью,потом бисером ,а потом начала продавать\»",
            "What or who inspires you?": "Что или кто Вас вдохновляет?",
            "I am inspired by": "\« Меня вдохновляют работы других дизайнеров модельеров ,очень вдохновляет  природа и исскуство\»",
            "Are you the only creative person in the family?": "Вы единственный творческий человек в семье?",
            "I have a very creative family": "\«У меня очень творческая семья,я врач и моя бабушка врач и она всю жизнь   пела в хоре ,мама поет,дядя фотограф,сестра иллюстратор.У нас каждый проявляется в творчестве по своему .Вышивать, кстати, меня научила бабушка и тетя\»",
            "What do your very first works look like?": "Как выглядят Ваши самые первые работы?",
            "I heve a braided butterfly made": "\"С детства есть плетеная бабочка из бисера,еще есть работы которые я начинала 5 лет назад,выглядят довольно неплохо\"",
            "What do you do when the motivation to create something disappears?": "Что Вы делаете когда пропадает мотивация что-либо творить?",
            "This happens every half a year": "\«У меня такое случается каждые пол года.Тогда я  откладываю и не беру заказы и просто пытаюсь переключиться на какие-то свои проекты .Потому что я работаю на заказ и это очень важно и тяжело именно с точки отношения к человеку, как он хочет сделать,я к этому очень ответственно отношусь , а в своих проектах я могу эксперементировать больше с фактурами ,формами и материалами\»",
            "How do you feel when doing what you love?": "Что Вы чувствуете когда занимаетесь любимым делом?",
            "In fact, I love medicine": "\«На самом деле я и медицину очень люблю и не могу сказать что вышивка это мое единственное любимое дело в жизни ,я думаю что не нужно концентрироваться на чем-то одном .Да ,я получила  образование и работала врачом ,но сейчас в данный момент своей жизни  и развития  я поняла что хочу заниматься именно творчеством,даже не то что любимым делом ,а в принципе творчеством,потому что вышивка ,что бы это кто-то замечал нужно и красиво фотографировать и преподносить ,и вести соц сети это все большая творческая и в какой-то степени не очень творческая работа .Когда я просыпаюсь утром, я понимаю,что я хочу идти в мастерскую делать это все ,ездить на встречи устраивать фотосессии ,я чувствую желание это делать.Как только оно пропадет ,наверное займусь чем-то другим.\"",
            "It was nice to talk": "Было приятно с вами сегодня побеседовать. Спасибо за уделенное нам время, ответы на вопросы и внимательность. Желаем творческих успехов",

            "NEWBREAKED ABSTRACTIST": "НОВОИСПЕЧЕННЫЙ АБСТРАКЦИОНИСТ",
            "Interview with an aspiring artist": "\«Интервью с начинающим художником\»",
            "In this section, we meet young artists": "В этом рубрике мы знакомимся с молодыми художниками и задаем им несколько вопросов об их искусстве и что побудило их на создание прекрасного",
            "Today we interview anonymous artist": "В этом рубрике мы знакомимся с молодыми художниками и задаем им несколько вопросов об их искусстве и что побудило их на создание прекрасного",
            "Why did you decide to stay behind the mask?": "Почему ты решил/а оставаться за маской?",
            "I want to communicate with": "\«Я хочу через картины общаться со зрителем,передавать свои эмоции с помощью красок.Я считаю такие картины очень интимными,так как душа это самое сокровенное и таинственное в людях,и смысла показывать лицо из-за этого я не вижу\»",
            "When did you become interested in the visual arts?": "Когда ты заинтересовался/лась изобразительным искусством?",
            "From an early age": "\«Еще с малых лет.Сначала это были цветочки на дверях ,а возрасте 12 лет я забросил/а рисование и занимался/лась танцами и посещал/а муз школу.И в возрасте 15 лет у меня снова появилось рвение к рисованию и на этот раз именно мои эмоции заставили меня рисовать\»",
            "What emotions or even events that triggered those emotions influenced your inspiration?": "Какие эмоции или даже события который вызвали эти эмоции повлияли на твое вдохновение?",
            "During the quarantine": "\«Во время карантина у моей семьи был очень тяжелый период в жизни.На несколько месяцев мы потеряли работу из-за чего были частые ссоры и недопонимания и это мягко сказано.я пролил/а много слез.Мне было очень трудно и эти негативные эмоции копились во мне 4 месяца,пока в один момент я не выплеснул/а их на полотно.Я прошел/шла через четыре сильные эмоции :злость,обида, прощение и принятие.Именно этот этап поменял меня полностью и я хочу поделиться чувствами со зрителем.\"",
            "Why abstract art?": "Почему именно абстракционизм?",
            "Because here": "\«Потому что здесь,я не должен/на передавать,то что я могу видеть глазами.Абстракционизм-это об твоем внутреннем состоянии,то что нельзя увидеть или прочитать.Я делюсь частичкой себя и это сближает меня со всеми,кто видит мои картины\»",
            "Do you have any rituals that you follow before you start creating? Signs you believe in?": "Есть ли у тебя какие-нибудь ритуалы, которым ты следуешь, прежде чем начать творить? Приметы, в которые веришь?",
            "It will sound boring": "\«Это будет звучать скучно,но я люблю раскладывать кисти ,баночки,краски.Очень люблю стелить пленку на пол ,а потом ложить на нее холст,всегда создается впечатление,словно сейчас произойдет что-то магическое\»",
            "What makes you happy?": "Что делает тебя счастливым/ой?",
            "When I am alone": "\«Когда я один на один,я могу поговорить с собой и избавиться от негатива.Как я говорил/а ранее в этом мне помогает искусство,именно оно спасло меня и сделало счастливым/ой\»",


            "PHOTOGRAPHERS OF THE NEW GENERATION": "ФОТОГРАФЫ НОВОГО ПОКОЛЕНИЯ",
            "Lera is a photographer from Kiev": "Лера-фотограф из Киева (Украина) работы которого завораживают.Кроме красивого сочетания цветов и оригинальности снимков, фотографии Леры могут похвастаться  и совместимостью несовместимого:белье на улице или замке,каблуки с бассейном и многое другое.девушка удачно находить ракурсы и позы моделей ,а потом усовершенствует фотографии крутой обработкой.Наша команда считает,что Вам стоит уделить немного внимания работам этой прекрасной девушки ",
            "Vika is a photographer from": "Вика-фотограф из Москвы с большим будущим .Для некоторых людей ее работы могут показаться странными,но именно в этом фишка фотографа.Девушка любит экспериментировать не только с образами и позами, а и со светом и деформацией .Вика доказывает,что  крутое фото не зависит от техники,а зависит от человека который умеет фотографировать и модели.",


            "DIGITAL ART": "КОМПЬЮТЕРНОЕ ИСКУССТВО",
            "Many artists have already switched": "Все больше оборотов набирает диджитал искусство.Уже многие художники перешли на планшеты и стали писать свои творения там.Стало ли хуже?Мы думаю,что нет.Ведь мы идем в перед и открываем новые блоки искусства,очень крутым примером такой работы есть @raretempter -иллюстратор,который просто взрывает соц.сети своими рисунками.",
            "Here are author": "Здесь и комиксы и авторская адаптация персонажев Дисней ,селебрети и много других чудесных работ. Но не спешите назвать это талантом,за талантом такого масштаба стоят часы тяжелой работы над рисунком и над собой.",
            "@raretempter shows the amazing": "@raretempter  показывает удивительную сторону диджитал,можно часами наблюдать за ее картинами и даже за процессом создания шедевров!!! Желаем удачи в творчестве и во всех творческих начинаниях",

            "COMPETITION FOR THE BEST ARTICLE ABOUT ART": "КОНКУРС НА ЛУЧШУЮ СТАТЬЮ ОБ ИСКУССТВЕ",
            "COMPETITION FOR THE BEST STORY ABOUT ART": "КОНКУРС НА ЛУЧШУЮ ИСТОРИЮ ОБ ИСКУССТВЕ",
            "Friends!": "Друзья!",
            "Our team announces a competition": "Наша команда объявляет конкурс.Тот,кто одержит победу,сможет размещать свои статьи в журнале и получить супер приз 5 000$.Участвовать может каждый!! Неважно из какой вы страны и на какой языке разговариваете.Это твой счастливый шанс,так ИСПОЛЬЗУЙ ЕГО!!",
            "Conditions of the competition:": "Условия конкурса:",
            "-be over 14 years old": "-быть старше 14 лет",
            "-write about art": "-писать об искусстве",
            "-participation 10 $": "-участие 10$",
            "-write an article with a maximum of 2 pages": "-писать статью  максимум на 2 страницы",
            "You must write an article about art": "Вы должны написать статью об искусстве(фото,изобразительно искусство,скульптура,архитектура,интересные личности и тд).Ваша статья должна быть эксклюзивной и интересной. Нажимайте на кнопку «учавствовать» и в магазине ищите подходящий билет который в наличии (три публикации одного билета)и покупайте билет.После того как вы получили билет.Вы пишите статью и скидываете ее вместе со своим билетом (пронумерованным) на этот электронный адрес  colorit_competition@mail.ru  .Всего может быть 2000 участников. Всем удачи!!",
            "Link to tickets for participation in the competition:": "Ссылка на билеты для участия в конкурсе:",
"To buy tickets": "Купить билеты",
"You must write an interesting story": "Вы должны написать интересную историю связанную с искусством или фольклором . Нажимайте на кнопку \«учавствовать\» и в магазине ищите подходящий билет который в наличии (три публикации одного билета)и покупайте билет. После того как вы получили билет.Вы пишите историю и скидываете ее вместе со своим билетом (пронумерованным) на этот электронный адрес  colorit_competition@mail.ru  .Всего может быть 2000 участников. Всем удачи!!",


        }
    },

    en: {
        translation: {
            "YOUTH JOURNAL OF CONTEMPORARY ART": "YOUTH JOURNAL OF CONTEMPORARY ART",

            "HOME": "HOME",
            "HEADING \"INTERVIEW WITH A BEGINNER\"": "HEADING \"INTERVIEW WITH A BEGINNER\"",
            "ART NEWS": "ART NEWS",
            "TIPS": "TIPS",
            "SPACES FOR INSPIRATION": "SPACES FOR INSPIRATION",
            "ARTISTS SCULPTORS": "ARTISTS SCULPTORS",
            "NEWS OF THE DAY": "NEWS OF THE DAY",
            "INTERVIEW WITH A CREATIVE PERSON": "INTERVIEW WITH A CREATIVE PERSON",
            "DISCOVERY OF THE ART": "DISCOVERY OF THE ART",


            
            "TOP 5 MOST BEAUTIFUL LANDSCAPE LOCATIONS": "TOP 5 MOST BEAUTIFUL LANDSCAPE LOCATIONS",
            "Bosnia and Herzegovina": "Bosnia and Herzegovina",
            "Blagaj is a small village": "Blagaj is a small village in which, among small waterfalls and azure waters under a vertical sheer small snow- white dwellings stand uphill, and a monastery rises in the center.This is a sacred space for dervishes and Sufis, who built a village in this paradise.",
            "Huacachina, Peru": "Huacachina, Peru",
            "Huacachina is an oasis": "Huacachina is an oasis city in the middle of a large desert, the carriageway which will take within about 5 hours south of the capital of Peru, Lima.  The population there is only about 200 people, as a result of this, getting there, you can fully experience cut off from the world.  And also  there you can ride sandboards on sandy Peruvian hills",
            "Dongchuan Red Lands, China": "Dongchuan Red Lands, China",
            "Dongchuan Red Soil is a": "Dongchuan Red Soil is a mountainous valley southwest of the metropolis of Kunming, the capital of Yunnan province.  Due to the remoteness from the infrastructure, this space is not included in the tourist map of China.  It was opened in the mid 90s.  Wavy landscapes similar to patchwork quilt, have brown-red shades due to the large mineral content and fossils",
            "Darvaza \"Door to the underworld\", Turkmenistan": "Darvaza \"Door to the underworld\", Turkmenistan",
            "Darvaza is a giant blazing crater within": "Darvaza is a giant blazing crater within about 60 meters in diameter and 20 in depth. Locals call this place \"hell Gate\".  Once upon a time geologists by chance discovered here a cave with large reserves of natural gas.  Gas to avoid harmful effects people and cattle were set on fire.  But fire that should have faded through a certain number of days, it has been burning for 45 years.  It's unique and mesmerizing a spectacle that people come to see people from all over the world.",
            "Lencois Maranhensis, Brazil": "Lencois Maranhensis, Brazil",
            "State Park \"Lençóis Maranhenses\" (Lençóis Maranhenses) is located": "State Park \"Lençóis Maranhenses\" (Lençóis Maranhenses) is located off the coast of the Atlantic Ocean in northeastern Brazil.  During the rainy season, he simply gives an unforgettable sight.  Every a year at this time, thousands of lagoons with turquoise water and living creatures are formed between the sand dunes.  It remains a mystery how fish and crabs subsequently get here after droughts, but the scale of this species simply cannot but amaze.  One of the best times to visit Lencois Maranhensis is period from July to September, when the pools reach the perfect volume.",

            "EMBROIDERY ART OR GOLDEN HANDS": "EMBROIDERY ART OR GOLDEN HANDS",
            "We interviewed a wonderful needlewoman": "We interviewed a wonderful needlewoman  @djozefinna_embroidery",
            "What prompted you to do beadwork?": "What prompted you to do beadwork?",
            "In my fourth year of university": "\“In my fourth year of university, I returned home at 2 o'clock and sat at home. My husband was at work and I was bored and had nothing to do, then I decided to raise. Firstly I found my old schemes with a cross and finished it, then I thought I needed something,something unusual and did the work with satin stitch, then beads, and then began to sell\"",
            "What or who inspires you?": "What or who inspires you?",
            "I am inspired by": "\"I am inspired by the work of other fashion designers, I am very inspired by nature and art\"",
            "Are you the only creative person in the family?": "Are you the only creative person in the family?",
            "I have a very creative family": "\“I have a very creative family, I am a doctor and my grandmother is a doctor, but she was singing a lot in the choir all her life, my mother sings, my uncle is a photographer, my sister is an illustrator. Each of us expresses themselves in their own ways. By the way, my grandmother and aunt taught me to embroider. ",
            "What do your very first works look like?": "What do your very first works look like?",
            "I heve a braided butterfly made": "\"I heve a braided butterfly made of beads from my childhood, there are still works that I started 5 years ago, they look pretty good\"",
            "What do you do when the motivation to create something disappears?": "What do you do when the motivation to create something disappears?",
            "This happens every half a year": "\"This happens every half a year. I can see directly (the light at the end of the tunnel). Then I postpone and do not take orders and just try to switch to some of my projects. Because I work on order is very important (hard) precisely from the point of relation to a person, how he wants to do, I am very responsible for this, and in my projects I can experiment more with textures, forms and materials\"",
            "How do you feel when doing what you love?": "How do you feel when doing what you love?",
            "In fact, I love medicine": "\“In fact, I love medicine very much and I can't say that embroidery is my only favorite thing in life, I think that I don't need to concentrate on one thing. Yes, I received my education, I worked as a doctor, but now at the moment my life and development, I realized that I want to be engaged in creativity, not even what I love, but, in principle, creativity, because embroidery, so that someone would notice it is necessary and beautifully photographed and presented, and to conduct a social network is more and more creative and to some extent not very creative work. When I wake up in the morning I realize that I want to go to the workshop to do all this, go to meetings and arrange photo shoots, I feel the desire to do it. As soon as it disappears, I will probably do something else.\"",
            "It was nice to talk": "It was nice to talk to you today.  Thank you for your time, answering questions and being attentive.  We wish you creative success",

            "NEWBREAKED ABSTRACTIST": "NEWBREAKED ABSTRACTIST",
            "Interview with an aspiring artist": "Interview with an aspiring artist",
            "In this section, we meet young artists": "In this section, we meet young artists and ask them a few questions about their art and what prompted them to create beautiful art",
            "Today we interview anonymous artist": "Today we interview anonymous artist. Our character wants to keep his persona a secret.",
            "Why did you decide to stay behind the mask?": "Why did you decide to stay behind the mask?",
            "I want to communicate with": "\"I want to communicate with the viewer through pictures, convey my emotions with the help of paints. I consider such pictures very intimate, since the soul is the most intimate and mysterious in people, and I don't see any reason to show my face because of this\"",
            "When did you become interested in the visual arts?": "When did you become interested in the visual arts?",
            "From an early age": "\"From an early age. At first it was flowers on the doors, and at the age of 12 I gave up on drawing . I started dancing and attended a music school. And at the age of 15 I again had a zeal for drawing, and this time it was my emotions that made me paint\"",
            "What emotions or even events that triggered those emotions influenced your inspiration?": "What emotions or even events that triggered those emotions influenced your inspiration?",
            "During the quarantine": "\“During the quarantine, my family had a very difficult period in life. For several months we lost our jobs because of which there were frequent quarrels and misunderstandings, and to put it mildly. I shed a lot of tears. It was very difficult for me and these negative emotions accumulated in me for 4 months, until at one moment I splashed them on the canvas. I went through four strong emotions: anger, resentment, forgiveness and acceptance. It was this stage that completely changed me and I want to share my feelings with the viewer.\"",
            "Why abstract art?": "Why abstract art?",
            "Because here": "\"Because here, I don't have to transfer, what I can see with my eyes. Abstractionism is about your inner state, that which cannot be seen or read. I share a part of myself and it brings me closer to everyone who sees my paintings\"",
            "Do you have any rituals that you follow before you start creating? Signs you believe in?": "Do you have any rituals that you follow before you start creating? Signs you believe in?",
            "It will sound boring": "\"It will sound boring, but I like to put brushes, jars, paints on the floor. I really like to put cloth on the floor, and then lay the canvas on it, it always seems as if something magical is about to happen.\"",
            "What makes you happy?": "What makes you happy?",
            "When I am alone": "\"When I am alone, I can talk to myself and get rid of the negativity. As I said, art helps me with this, it was it that saved me and made me happy.\"",


            "PHOTOGRAPHERS OF THE NEW GENERATION": "PHOTOGRAPHERS OF THE NEW GENERATION",
            "Lera is a photographer from Kiev": "Lera is a photographer from Kiev (Ukraine) whose works are mesmerizing. In addition to the beautiful combination of colors and the uniqueness of the pictures, Lera's pictures can boast of incompatible compatibility: lingerie on the street or in a castle, heels with a pool and much more. The girl successfully finds the angles and poses for models, and then improves the photos with cool editing.Our team thinks that you should pay a little attention to the work of this beautiful girl",
            "Vika is a photographer from": "Vika is a photographer from Moscow with a bright future. For some people her works may seem odd, but this is her main unique feature. The girl loves to experiment not only with images and poses, but also with light and deformation. Vika proves that a cool photo does not depend from technology, but depends on the person who knows how to work with camera and the model.",

            "DIGITAL ART": "DIGITAL ART",
            "Many artists have already switched": "Many artists have already switched to tablets and began to write their creations there. Has it gotten worse? We think not. Because we go to the front and open new blocks of art, a cool example of such work is @raretempter - an illustrator who simply blows up on social networks with his drawings.",
            "Here are author": "Here are author's adaptations of Disney characters, celebrities and many other wonderful works. But do not rush to call it a talent, behind a talent of this magnitude there are hours of hard work on the ddrawins and yourself",
            "@raretempter shows the amazing": "@raretempter shows the amazing side of Digital, you can watch her paintings and even the process of creating masterpieces for hours !!! We wish you good luck in your work and new begginigs.",

            "COMPETITION FOR THE BEST ARTICLE ABOUT ART": "COMPETITION FOR THE BEST ARTICLE ABOUT ART",
            "COMPETITION FOR THE BEST STORY ABOUT ART": "COMPETITION FOR THE BEST STORY ABOUT ART",
"Friends!": "Friends!",
"Our team announces a competition": "Our team announces a competition. Anyone who wins will be able to post their articles in the magazine and receive a super prize of $ 5,000. Everyone can participate !!  No matter what country you are from and what language you speak, this is your lucky chance, so USE IT !!",
"Conditions of the competition:": "Conditions of the competition:",
"-be over 14 years old": "-be over 14 years old",
"-write about art": "-write about art",
"-participation 10 $": "-participation 10 $",
"-write an article with a maximum of 2 pages": "-write an article with a maximum of 2 pages",
"You must write an article about art": "You must write an article about art (photography, fine art, sculpture, architecture, interesting personalities, etc.). Your article must be exclusive and interesting. Click on the button \"participate\" and in the store look for a suitable ticket that is available (three publications of one ticket) and buy a ticket. After you have received a ticket. You write an article and drop it along with your ticket (numbered) to this email address colorit_competition@mail.ru .there can be 2,000 members in total. Good luck to all!!",
"Link to tickets for participation in the competition:": "Link to tickets for participation in the competition:",
"To buy tickets": "To buy tickets",
"You must write an interesting story": "You must write an interesting story related to art or folklore.  Click on the \"participate\" button and in the store look for a suitable ticket that is available (three publications of one ticket) and buy a ticket.  After you have received your ticket, you write a story and drop it along with your ticket (numbered) to this email address  colorit_competition@mail.ru .There can be a total of 2000 participants. Good luck to all!!",


        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ru",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;