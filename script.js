const classes = [
 {name:"Scout",ru:"Разведчик",role:"Нападение",hp:125,speed:"133%",icon:"🏃",desc:"Самый быстрый класс. Отлично обходит противников, быстро захватывает точки и наносит высокий урон вблизи.",weapons:"Scattergun, Pistol, Bat",skill:"Двойной прыжок"},
 {name:"Soldier",ru:"Солдат",role:"Нападение",hp:200,speed:"80%",icon:"🚀",desc:"Универсальный боец с ракетницей. Может наносить урон по площади и взлетать с помощью ракетного прыжка.",weapons:"Rocket Launcher, Shotgun, Shovel",skill:"Ракетный прыжок"},
 {name:"Pyro",ru:"Поджигатель",role:"Нападение",hp:175,speed:"100%",icon:"🔥",desc:"Опасен на короткой дистанции. Огнемёт поджигает врагов, а воздушный заряд отражает многие снаряды.",weapons:"Flame Thrower, Shotgun, Fire Axe",skill:"Воздушный заряд"},
 {name:"Demoman",ru:"Подрывник",role:"Оборона",hp:175,speed:"93%",icon:"💣",desc:"Специалист по взрывчатке. Гранаты и липучие бомбы помогают контролировать проходы и удерживать позиции.",weapons:"Grenade Launcher, Stickybomb Launcher, Bottle",skill:"Ловушки из липучих бомб"},
 {name:"Heavy",ru:"Пулемётчик",role:"Оборона",hp:300,speed:"77%",icon:"🔫",desc:"Самый выносливый класс со стандартными 300 единицами здоровья. Сильнее всего в длительных перестрелках.",weapons:"Minigun, Shotgun, Fists",skill:"Высокое здоровье"},
 {name:"Engineer",ru:"Инженер",role:"Оборона",hp:125,speed:"100%",icon:"🔧",desc:"Строит турели, раздатчики и телепорты. Помогает команде удерживать позиции и быстрее возвращаться в бой.",weapons:"Shotgun, Pistol, Wrench",skill:"Постройки"},
 {name:"Medic",ru:"Медик",role:"Поддержка",hp:150,speed:"107%",icon:"🩺",desc:"Лечит союзников и заряжает убер-заряд, который может дать команде решающее преимущество.",weapons:"Syringe Gun, Medi Gun, Bonesaw",skill:"Лечение и ÜberCharge"},
 {name:"Sniper",ru:"Снайпер",role:"Поддержка",hp:125,speed:"100%",icon:"🎯",desc:"Устраняет важные цели с дальней дистанции. Точный выстрел в голову может мгновенно изменить ход боя.",weapons:"Sniper Rifle, SMG, Kukri",skill:"Выстрелы в голову"},
 {name:"Spy",ru:"Шпион",role:"Поддержка",hp:125,speed:"100%",icon:"🕵️",desc:"Проникает за линию врага, маскируется, становится невидимым и уничтожает постройки инженера жучком.",weapons:"Revolver, Knife, Sapper",skill:"Маскировка и невидимость"}
];
const items = [
 {name:"Scattergun",ru:"Дробовик разведчика",cls:"Scout",type:"Оружие",slot:"Основное оружие",icon:"💥",desc:"Мощный дробовик для боя на близкой дистанции."},
 {name:"Rocket Launcher",ru:"Ракетница",cls:"Soldier",type:"Оружие",slot:"Основное оружие",icon:"🚀",desc:"Запускает взрывные ракеты; позволяет выполнять ракетные прыжки."},
 {name:"Flame Thrower",ru:"Огнемёт",cls:"Pyro",type:"Оружие",slot:"Основное оружие",icon:"🔥",desc:"Поджигает противников на близкой дистанции."},
 {name:"Grenade Launcher",ru:"Гранатомёт",cls:"Demoman",type:"Оружие",slot:"Основное оружие",icon:"💣",desc:"Запускает отскакивающие взрывные гранаты."},
 {name:"Minigun",ru:"Миниган Саша",cls:"Heavy",type:"Оружие",slot:"Основное оружие",icon:"🔫",desc:"Пулемёт с высокой скорострельностью, но замедляет владельца при раскрутке."},
 {name:"Wrench",ru:"Гаечный ключ",cls:"Engineer",type:"Оружие",slot:"Ближний бой",icon:"🔧",desc:"Используется для ремонта и улучшения построек инженера."},
 {name:"Medi Gun",ru:"Медпушка",cls:"Medic",type:"Оружие",slot:"Дополнительное оружие",icon:"💉",desc:"Лечит союзников и заряжает убер-заряд."},
 {name:"Sniper Rifle",ru:"Снайперская винтовка",cls:"Sniper",type:"Оружие",slot:"Основное оружие",icon:"🎯",desc:"Позволяет наносить точный урон с большого расстояния."},
 {name:"Knife",ru:"Нож шпиона",cls:"Spy",type:"Оружие",slot:"Ближний бой",icon:"🔪",desc:"Позволяет шпиону наносить смертельный удар в спину."},
 {name:"Backburner",ru:"Обратный огонь",cls:"Pyro",type:"Оружие",slot:"Основное оружие",icon:"🔥",desc:"Альтернативный огнемёт, особенно опасный при атаке со спины.",rarity:"Обычное",stats:"Критические атаки сзади"},
 {name:"Rocket Jumper",ru:"Rocket Jumper",cls:"Soldier",type:"Оружие",slot:"Особое оружие",icon:"🪂",desc:"Учебная ракетница для отработки ракетных прыжков."},
 {name:"ÜberSaw",ru:"Übersaw",cls:"Medic",type:"Оружие",slot:"Ближний бой",icon:"🪚",desc:"Альтернативная пила медика, связанная с зарядом убер-заряда."},
 {name:"Mann Co. Cap",ru:"Кепка Mann Co.",cls:"Все классы",type:"Аксессуар",slot:"Головной убор",icon:"🧢",desc:"Классическая кепка TF2. Проверь доступные варианты и качество на Steam Market."},
 {name:"Fancy Fedora",ru:"Элегантная федора",cls:"Все классы",type:"Аксессуар",slot:"Головной убор",icon:"🎩",desc:"Стильный головной убор для образа наёмника."},
 {name:"Party Hat",ru:"Праздничная шапка",cls:"Все классы",type:"Аксессуар",slot:"Головной убор",icon:"🥳",desc:"Праздничный аксессуар для персонажа."},
 {name:"Mining Light",ru:"Шахтёрский фонарь",cls:"Engineer",type:"Аксессуар",slot:"Головной убор",icon:"⛑️",desc:"Аксессуар в тематике инженера и шахтёрского снаряжения."},
 {name:"Soldier's Stash",ru:"Шапка солдата",cls:"Soldier",type:"Аксессуар",slot:"Головной убор",icon:"🪖",desc:"Военный головной убор для Солдата."},
 {name:"Pyro's Beanie",ru:"Шапка Поджигателя",cls:"Pyro",type:"Аксессуар",slot:"Головной убор",icon:"🔥",desc:"Головной убор для Поджигателя."},
 {name:"Demoman's Fro",ru:"Причёска Подрывника",cls:"Demoman",type:"Аксессуар",slot:"Головной убор",icon:"💈",desc:"Косметический предмет для образа Подрывника."},
 {name:"Heavy Duty Rag",ru:"Бандана Пулемётчика",cls:"Heavy",type:"Аксессуар",slot:"Головной убор",icon:"🥷",desc:"Косметический аксессуар для Пулемётчика."},
 {name:"Medic's Mask",ru:"Маска Медика",cls:"Medic",type:"Аксессуар",slot:"Лицо",icon:"😷",desc:"Медицинская маска для образа Медика."},
 {name:"Sniper's Boonie",ru:"Панама Снайпера",cls:"Sniper",type:"Аксессуар",slot:"Головной убор",icon:"🤠",desc:"Панама в стиле Снайпера."},
 {name:"Spy's Fedora",ru:"Федора Шпиона",cls:"Spy",type:"Аксессуар",slot:"Головной убор",icon:"🕵️",desc:"Классический элегантный аксессуар для Шпиона."},
 {name:"Scout's Bonk Bat",ru:"Косметический образ с Bonk",cls:"Scout",type:"Аксессуар",slot:"Аксессуар",icon:"🥤",desc:"Подборка поиска по тематическим предметам Разведчика."},
 {name:"The Essential Accessories",ru:"Набор аксессуаров",cls:"Все классы",type:"Аксессуар",slot:"Аксессуары",icon:"🕶️",desc:"Открой поиск на Steam Market, чтобы посмотреть доступные косметические предметы."},
 {name:"Force-A-Nature",ru:"Сила природы",cls:"Scout",type:"Оружие",slot:"Основное оружие",icon:"💥",desc:"Двухзарядный дробовик с сильной отдачей, отбрасывающей цели.",rarity:"Обычное",stats:"2 патрона в магазине · сильная отдача"},
 {name:"Bonk! Atomic Punch",ru:"Атомный удар Bonk!",cls:"Scout",type:"Оружие",slot:"Дополнительное оружие",icon:"🥤",desc:"Напиток, который временно помогает пережить входящий урон.",rarity:"Обычное",stats:"Временная неуязвимость к урону с побочными эффектами"},
 {name:"Direct Hit",ru:"Прямое попадание",cls:"Soldier",type:"Оружие",slot:"Основное оружие",icon:"🎯",desc:"Ракетница с высокой скоростью снарядов и бонусом против подброшенных врагов.",rarity:"Обычное",stats:"Меньший радиус взрыва · быстрые ракеты"},
 {name:"Black Box",ru:"Чёрный ящик",cls:"Soldier",type:"Оружие",slot:"Основное оружие",icon:"📦",desc:"Ракетница, которая восстанавливает здоровье при попадании.",rarity:"Обычное",stats:"Восстановление здоровья при попадании"},
 {name:"Backburner",ru:"Обратный огонь",cls:"Pyro",type:"Оружие",slot:"Основное оружие",icon:"🔥",desc:"Огнемёт, наносящий критический урон при атаке со спины.",rarity:"Обычное",stats:"Критические атаки сзади"},
 {name:"Phlogistinator",ru:"Флогистонатор",cls:"Pyro",type:"Оружие",slot:"Основное оружие",icon:"🌋",desc:"Огнемёт с особым режимом усиления после накопления урона огнём.",rarity:"Обычное",stats:"Особое усиление после заполнения шкалы"},
 {name:"Iron Bomber",ru:"Железный бомбардировщик",cls:"Demoman",type:"Оружие",slot:"Основное оружие",icon:"💣",desc:"Гранатомёт с более предсказуемой траекторией гранат.",rarity:"Обычное",stats:"Гранаты меньше отскакивают"},
 {name:"Eyelander",ru:"Глазоруб",cls:"Demoman",type:"Оружие",slot:"Ближний бой",icon:"⚔️",desc:"Меч, позволяющий накапливать головы и увеличивать максимальное здоровье и скорость.",rarity:"Обычное",stats:"Рост характеристик за головы · риск меньшего здоровья при экипировке"},
 {name:"Tomislav",ru:"Томислав",cls:"Heavy",type:"Оружие",slot:"Основное оружие",icon:"🔫",desc:"Миниган с тихой раскруткой и улучшенной точностью.",rarity:"Обычное",stats:"Тише раскрутка · точнее стрельба"},
 {name:"Sandvich",ru:"Сэндвич",cls:"Heavy",type:"Оружие",slot:"Дополнительное оружие",icon:"🥪",desc:"Восстанавливает здоровье Пулемётчика и может быть брошен союзнику.",rarity:"Обычное",stats:"Лечение · можно поделиться с союзником"},
 {name:"Jag",ru:"Жаг",cls:"Engineer",type:"Оружие",slot:"Ближний бой",icon:"🔧",desc:"Ключ, ускоряющий строительство построек, но слабее в бою.",rarity:"Обычное",stats:"Быстрее строительство · меньше урона"},
 {name:"Wrangler",ru:"Управленец",cls:"Engineer",type:"Оружие",slot:"Дополнительное оружие",icon:"🎮",desc:"Позволяет вручную управлять турелью и временно усиливать её защиту.",rarity:"Обычное",stats:"Ручное управление турелью"},
 {name:"Crusader's Crossbow",ru:"Арбалет крестоносца",cls:"Medic",type:"Оружие",slot:"Основное оружие",icon:"🏹",desc:"Стреляет болтами, которые лечат союзников и наносят урон врагам.",rarity:"Обычное",stats:"Лечение и урон зависят от расстояния"},
 {name:"Kritzkrieg",ru:"Крицкриг",cls:"Medic",type:"Оружие",slot:"Дополнительное оружие",icon:"⚡",desc:"Медпушка, дающая союзнику усиление критического урона.",rarity:"Обычное",stats:"Убер-заряд усиливает критические атаки"},
 {name:"Huntsman",ru:"Охотник",cls:"Sniper",type:"Оружие",slot:"Основное оружие",icon:"🏹",desc:"Лук для снайпера, позволяющий стрелять без прицела.",rarity:"Обычное",stats:"Заряд выстрела · стрелы летят по дуге"},
 {name:"Jarate",ru:"Банкате",cls:"Sniper",type:"Оружие",slot:"Дополнительное оружие",icon:"🫙",desc:"Бросаемая банка, покрывающая противников и усиливающая урон по ним.",rarity:"Обычное",stats:"Помечает врагов для усиленного урона"},
 {name:"Dead Ringer",ru:"Мёртвый звонок",cls:"Spy",type:"Оружие",slot:"Часы невидимости",icon:"⌚",desc:"Устройство, создающее обманку при получении урона и помогающее уйти от преследования.",rarity:"Обычное",stats:"Обманка и временная невидимость"},
 {name:"Ambassador",ru:"Посол",cls:"Spy",type:"Оружие",slot:"Револьвер",icon:"🔫",desc:"Револьвер, способный наносить критический урон точными попаданиями в голову.",rarity:"Обычное",stats:"Точный выстрел в голову"},
 {name:"Unusual Hat",ru:"Шапка необычного качества",cls:"Все классы",type:"Аксессуар",slot:"Головной убор",icon:"✨",desc:"Категория косметических предметов с необычными визуальными эффектами. Конкретный эффект и цена зависят от экземпляра.",rarity:"Необычное",stats:"Редкий визуальный эффект · цена сильно меняется"},
 {name:"The Burning Flames Effect",ru:"Эффект «Пылающее пламя»",cls:"Все классы",type:"Аксессуар",slot:"Необычный эффект",icon:"🔥",desc:"Один из известных необычных эффектов косметики. Это название эффекта, а не отдельная шапка.",rarity:"Редкое",stats:"Эффект предмета · доступность зависит от конкретной косметики"},
 {name:"The Team Captain",ru:"Командирская фуражка",cls:"Soldier",type:"Аксессуар",slot:"Головной убор",icon:"🧢",desc:"Известная косметика TF2 в военном стиле.",rarity:"Редкое",stats:"Косметика · совместимость проверяй в игре"},
 {name:"The Golden Frying Pan",ru:"Золотая сковорода",cls:"Все классы",type:"Оружие",slot:"Ближний бой",icon:"🍳",desc:"Чрезвычайно редкий золотой вариант оружия ближнего боя; цена и наличие на рынке могут быть ограничены.",rarity:"Чрезвычайно редкое",stats:"Редкий предмет · доступность и цена могут быть ограничены"},
 {name:"The Horseless Headless Horsemann's Head",ru:"Голова Всадника без головы",cls:"Все классы",type:"Аксессуар",slot:"Головной убор",icon:"🎃",desc:"Тематический косметический предмет, связанный с Хэллоуином.",rarity:"Редкое",stats:"Тематическая косметика"},
 {name:"The Gibus",ru:"Цилиндр Гибуса",cls:"Все классы",type:"Аксессуар",slot:"Головной убор",icon:"🎩",desc:"Знаменитый цилиндр TF2, знакомый многим новичкам.",rarity:"Обычное",stats:"Косметика для образа персонажа"},
 {name:"The Pyrovision Goggles",ru:"Очки Пиро-видения",cls:"Все классы",type:"Аксессуар",slot:"Очки",icon:"🥽",desc:"Очки, связанные с ярким и мультяшным эффектом Pyrovision.",rarity:"Обычное",stats:"Косметика · особый визуальный стиль"},
 {name:"The Tough Guy's Toque",ru:"Берет крутого парня",cls:"Heavy",type:"Аксессуар",slot:"Головной убор",icon:"🧢",desc:"Головной убор для Пулемётчика.",rarity:"Обычное",stats:"Косметика Пулемётчика"},
 {name:"The Medic's Medallion",ru:"Медальон медика",cls:"Medic",type:"Аксессуар",slot:"Аксессуар",icon:"🏅",desc:"Косметический аксессуар для Медика.",rarity:"Обычное",stats:"Косметика Медика"},
 {name:"The Crocodile Smile",ru:"Крокодиловая улыбка",cls:"Sniper",type:"Аксессуар",slot:"Лицо",icon:"🐊",desc:"Косметический предмет для тематического образа Снайпера.",rarity:"Обычное",stats:"Косметика Снайпера"},
 {name:"The Larrikin Robin",ru:"Шляпа Ларрикина",cls:"Spy",type:"Аксессуар",slot:"Головной убор",icon:"🎩",desc:"Косметический головной убор для Шпиона.",rarity:"Обычное",stats:"Косметика Шпиона"},
 {name:"The Engineer's Cap",ru:"Кепка Инженера",cls:"Engineer",type:"Аксессуар",slot:"Головной убор",icon:"🧢",desc:"Классический головной убор в стиле Инженера.",rarity:"Обычное",stats:"Косметика Инженера"},
 {name:"The Demoman's Fro",ru:"Причёска Подрывника",cls:"Demoman",type:"Аксессуар",slot:"Головной убор",icon:"💈",desc:"Косметический предмет для образа Подрывника.",rarity:"Обычное",stats:"Косметика Подрывника"},
 {name:"The Scout's Cap",ru:"Кепка Разведчика",cls:"Scout",type:"Аксессуар",slot:"Головной убор",icon:"🧢",desc:"Головной убор для быстрого Разведчика.",rarity:"Обычное",stats:"Косметика Разведчика"}
];
const classGrid=document.querySelector("#classGrid"), itemGrid=document.querySelector("#itemGrid");
function renderClasses(){
 const q=document.querySelector("#classSearch").value.toLowerCase();
 const role=document.querySelector("#roleFilter").value;
 classGrid.innerHTML="";
 classes.filter(c=>(c.name+" "+c.ru+" "+c.desc).toLowerCase().includes(q)&&(role==="all"||c.role===role)).forEach(c=>{
  const el=document.createElement("article");el.className="card";
  el.innerHTML=`<div class="cardtop"><div class="avatar">${c.icon}</div><div><h3>${c.name}</h3><div>${c.ru}</div><div class="role">${c.role}</div></div></div>
  <div class="cardbody"><p>${c.desc}</p><div class="stats"><div class="stat">Базовое здоровье<strong>${c.hp} HP</strong></div><div class="stat">Скорость<strong>${c.speed}</strong></div></div><span class="tag">${c.skill}</span><p><b>Стартовое снаряжение:</b><br>${c.weapons}</p><button class="open-items" data-class="${c.name}">Показать предметы класса</button></div>`;
  classGrid.appendChild(el);
 });
 if(!classGrid.children.length)classGrid.innerHTML="<p>Ничего не найдено. Попробуй другой запрос.</p>";
 document.querySelectorAll(".open-items").forEach(b=>b.addEventListener("click",()=>{showTab("items");document.querySelector("#itemClassFilter").value=b.dataset.class;renderItems();}));
}
function renderItems(){
 const q=document.querySelector("#itemSearch").value.toLowerCase(), cls=document.querySelector("#itemClassFilter").value, type=document.querySelector("#itemTypeFilter").value, rarity=document.querySelector("#rarityFilter").value;
 itemGrid.innerHTML="";
 items.filter(i=>(i.name+" "+i.ru+" "+i.desc+" "+i.cls).toLowerCase().includes(q)&&(cls==="all"||i.cls===cls||i.cls==="Все классы")&&(type==="all"||i.type===type)&&(rarity==="all"||(i.rarity||"Обычное")===rarity)).forEach(i=>{
  const el=document.createElement("article");el.className="card item-card";
  const marketUrl="https://steamcommunity.com/market/search?q="+encodeURIComponent(i.name);
  const rarity=i.rarity||"Обычное";
  const rarityClass=rarity==="Редкое"?"rare":rarity==="Необычное"?"unusual":rarity==="Чрезвычайно редкое"?"extreme":"";
  el.innerHTML=`<div class="cardtop"><div><h3>${i.name}</h3><div class="role">${i.type} · ${i.cls} · ${i.slot}</div></div></div><div class="item-icon"><span>${i.icon}</span></div><div class="cardbody"><span class="rarity ${rarityClass}">${rarity}</span><div class="item-art-label">Предмет из арсенала TF2</div><p><b>${i.ru}</b></p><p>${i.desc}</p>${i.stats?`<div class="item-stats"><b>Характеристики:</b> ${i.stats}</div>`:""}<a class="market" href="${marketUrl}" target="_blank" rel="noopener">Проверить цену в Steam ↗</a></div>`;
  itemGrid.appendChild(el);
 });
 if(!itemGrid.children.length)itemGrid.innerHTML="<p>Предметы не найдены.</p>";
}
function showTab(tab){
 document.querySelectorAll("main section").forEach(s=>s.classList.toggle("hidden",s.id!==tab));
 document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
}
document.querySelectorAll("nav button").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
document.querySelector("#classSearch").addEventListener("input",renderClasses);
document.querySelector("#roleFilter").addEventListener("change",renderClasses);
document.querySelector("#itemSearch").addEventListener("input",renderItems);
document.querySelector("#itemClassFilter").addEventListener("change",renderItems);
document.querySelector("#itemTypeFilter").addEventListener("change",renderItems);
document.querySelector("#rarityFilter").addEventListener("change",renderItems);
classes.forEach(c=>{const o=document.createElement("option");o.value=c.name;o.textContent=c.name;document.querySelector("#itemClassFilter").appendChild(o)});
renderClasses();renderItems();
