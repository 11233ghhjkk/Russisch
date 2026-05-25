// 俄语学习数据：字母表 + 口腔诊所词汇
// Full Dataset of Russian Alphabet (33 letters)
// Includes: Category (vowel, consonant, sign), IPA, Chinese Hints, Everyday high-frequency word, Medical high-frequency word
const alphabetData = [
    {
        letter: "А", lowercase: "а", type: "vowel", ipa: "[a]", chinese_hint: "阿",
        everyday: { word: "Автобус", trans: "Avtobus", cn: "公共汽车", hint: "阿夫多布斯" },
        medical: { word: "Артерия", trans: "Arteriya", cn: "动脉", hint: "阿尔阶里亚" }
    },
    {
        letter: "Б", lowercase: "б", type: "consonant", ipa: "[b]", chinese_hint: "波",
        everyday: { word: "Банан", trans: "Banan", cn: "香蕉", hint: "巴南" },
        medical: { word: "Бактерия", trans: "Bakteriya", cn: "细菌", hint: "巴克阶里亚" }
    },
    {
        letter: "В", lowercase: "в", type: "consonant", ipa: "[v]", chinese_hint: "乌(摩擦音)",
        everyday: { word: "Вода", trans: "Voda", cn: "水", hint: "瓦达 (元音弱化)" },
        medical: { word: "Вирус", trans: "Virus", cn: "病毒", hint: "微鲁斯" }
    },
    {
        letter: "Г", lowercase: "г", type: "consonant", ipa: "[g]", chinese_hint: "格",
        everyday: { word: "Город", trans: "Gorod", cn: "城市", hint: "郭拉特 (末尾浊辅音清化)" },
        medical: { word: "Гемоглобин", trans: "Gemoglobin", cn: "血红蛋白", hint: "给马格拉宾" }
    },
    {
        letter: "Д", lowercase: "д", type: "consonant", ipa: "[d]", chinese_hint: "德",
        everyday: { word: "Дом", trans: "Dom", cn: "房子", hint: "多姆" },
        medical: { word: "Диагноз", trans: "Diagnoz", cn: "诊断", hint: "吉阿格纳斯" }
    },
    {
        letter: "Е", lowercase: "е", type: "vowel", ipa: "[je]", chinese_hint: "耶",
        everyday: { word: "Еда", trans: "Yeda", cn: "食物", hint: "耶达" },
        medical: { word: "Евстахиева труба", trans: "Yevstakhieva truba", cn: "咽鼓管/欧氏管", hint: "耶夫斯塔希耶瓦 德鲁巴" }
    },
    {
        letter: "Ё", lowercase: "ё", type: "vowel", ipa: "[jo]", chinese_hint: "约",
        everyday: { word: "Ёж", trans: "Yozh", cn: "刺猬", hint: "约什 (末尾清化)" },
        medical: { word: "Ёд", trans: "Yod", cn: "碘", hint: "约特 (末尾清化)" }
    },
    {
        letter: "Ж", lowercase: "ж", type: "consonant", ipa: "[ʒ]", chinese_hint: "日(发音舌头平放)",
        everyday: { word: "Жизнь", trans: "Zhizn'", cn: "生活 / 生命", hint: "日自恩" },
        medical: { word: "Желудок", trans: "Zheludok", cn: "胃", hint: "日鲁达克" }
    },
    {
        letter: "З", lowercase: "з", type: "consonant", ipa: "[z]", chinese_hint: "滋",
        everyday: { word: "Зонт", trans: "Zont", cn: "雨伞", hint: "宗特" },
        medical: { word: "Зуб", trans: "Zub", cn: "牙齿", hint: "祖普 (末尾清化)" }
    },
    {
        letter: "И", lowercase: "и", type: "vowel", ipa: "[i]", chinese_hint: "衣",
        everyday: { word: "Игра", trans: "Igra", cn: "游戏", hint: "伊格拉" },
        medical: { word: "Иммунитет", trans: "Immunitet", cn: "免疫力", hint: "伊姆尼阶特" }
    },
    {
        letter: "Й", lowercase: "й", type: "consonant", ipa: "[j]", chinese_hint: "短衣(快速掠过)",
        everyday: { word: "Йогурт", trans: "Yogurt", cn: "酸奶", hint: "约古尔特" },
        medical: { word: "Йод", trans: "Yod", cn: "碘剂", hint: "约特 (等同于 Ёд)" }
    },
    {
        letter: "К", lowercase: "к", type: "consonant", ipa: "[k]", chinese_hint: "科",
        everyday: { word: "Книга", trans: "Kniga", cn: "书", hint: "克尼加" },
        medical: { word: "Кровь", trans: "Krov'", cn: "血液", hint: "克罗夫 (末尾清化)" }
    },
    {
        letter: "Л", lowercase: "л", type: "consonant", ipa: "[l]", chinese_hint: "勒",
        everyday: { word: "Лимон", trans: "Limon", cn: "柠檬", hint: "里蒙" },
        medical: { word: "Лекарство", trans: "Lekarstvo", cn: "药物 / 药水", hint: "列卡尔斯德瓦" }
    },
    {
        letter: "М", lowercase: "м", type: "consonant", ipa: "[m]", chinese_hint: "摸",
        everyday: { word: "Мама", trans: "Mama", cn: "妈妈", hint: "妈妈" },
        medical: { word: "Мозг", trans: "Mozg", cn: "大脑", hint: "莫斯克 (末尾清化)" }
    },
    {
        letter: "Н", lowercase: "н", type: "consonant", ipa: "[n]", chinese_hint: "讷",
        everyday: { word: "Ночь", trans: "Noch'", cn: "夜晚", hint: "诺奇" },
        medical: { word: "Нерв", trans: "Nerv", cn: "神经", hint: "涅尔夫 (末尾清化)" }
    },
    {
        letter: "О", lowercase: "о", type: "vowel", ipa: "[o]", chinese_hint: "奥(发音口型圆)",
        everyday: { word: "Окно", trans: "Okno", cn: "窗户", hint: "阿克诺 (首字母弱化)" },
        medical: { word: "Организм", trans: "Organizm", cn: "有机体 / 机体", hint: "阿尔加尼兹姆" }
    },
    {
        letter: "П", lowercase: "п", type: "consonant", ipa: "[p]", chinese_hint: "泼",
        everyday: { word: "Папа", trans: "Papa", cn: "爸爸", hint: "爸爸" },
        medical: { word: "Пульс", trans: "Pul's", cn: "脉搏", hint: "普里斯" }
    },
    {
        letter: "Р", lowercase: "р", type: "consonant", ipa: "[r]", chinese_hint: "特鲁(大舌颤音)",
        everyday: { word: "Работа", trans: "Rabota", cn: "工作", hint: "拉波达 (首字母大舌音)" },
        medical: { word: "Рецепт", trans: "Retsept", cn: "处方 / 药方", hint: "里阶普特" }
    },
    {
        letter: "С", lowercase: "с", type: "consonant", ipa: "[s]", chinese_hint: "丝",
        everyday: { word: "Солнце", trans: "Solntse", cn: "太阳", hint: "松策 (中间л不发音)" },
        medical: { word: "Сердце", trans: "Serdtse", cn: "心脏", hint: "谢尔策 (中间д不发音)" }
    },
    {
        letter: "Т", lowercase: "т", type: "consonant", ipa: "[t]", chinese_hint: "特",
        everyday: { word: "Телефон", trans: "Telefon", cn: "电话", hint: "底里锋" },
        medical: { word: "Температура", trans: "Temperatura", cn: "体温 / 温度", hint: "底姆比拉度拉" }
    },
    {
        letter: "У", lowercase: "у", type: "vowel", ipa: "[u]", chinese_hint: "乌",
        everyday: { word: "Утро", trans: "Utro", cn: "早上", hint: "乌德拉" },
        medical: { word: "УЗИ", trans: "UZI", cn: "B超 / 超声检查", hint: "乌在伊" }
    },
    {
        letter: "Ф", lowercase: "ф", type: "consonant", ipa: "[f]", chinese_hint: "佛",
        everyday: { word: "Фото", trans: "Foto", cn: "照片", hint: "佛达" },
        medical: { word: "Фармацевт", trans: "Farmatsevt", cn: "药剂师", hint: "法尔马阶夫特" }
    },
    {
        letter: "Х", lowercase: "х", type: "consonant", ipa: "[x]", chinese_hint: "喝",
        everyday: { word: "Хлеб", trans: "Khleb", cn: "面包", hint: "赫列普 (末尾清化)" },
        medical: { word: "Хирург", trans: "Khirurg", cn: "外科医生", hint: "黑鲁尔克" }
    },
    {
        letter: "Ц", lowercase: "ц", type: "consonant", ipa: "[ts]", chinese_hint: "刺",
        everyday: { word: "Цвет", trans: "Tsvet", cn: "颜色", hint: "茨微特" },
        medical: { word: "Цинга", trans: "Tsinga", cn: "坏血病 / 维生素C缺乏症", hint: "茨恩加" }
    },
    {
        letter: "Ч", lowercase: "ч", type: "consonant", ipa: "[tʃ]", chinese_hint: "去(发音极软)",
        everyday: { word: "Чай", trans: "Chay", cn: "茶", hint: "拆" },
        medical: { word: "Череп", trans: "Cherep", cn: "头骨 / 颅骨", hint: "切列普" }
    },
    {
        letter: "Ш", lowercase: "ш", type: "consonant", ipa: "[ʃ]", chinese_hint: "湿(发音舌头平放)",
        everyday: { word: "Школа", trans: "Shkola", cn: "学校", hint: "什高拉" },
        medical: { word: "Шок", trans: "Shok", cn: "休克", hint: "肖克" }
    },
    {
        letter: "Щ", lowercase: "щ", type: "consonant", ipa: "[ɕː]", chinese_hint: "希(极软，发声拉长)",
        everyday: { word: "Щётка", trans: "Shchyotka", cn: "刷子 / 牙刷", hint: "晓得卡" },
        medical: { word: "Щитовидная железа", trans: "Shchitovidnaya zheleza", cn: "甲状腺", hint: "施多微德纳亚 日里扎" }
    },
    {
        letter: "Ъ", lowercase: "ъ", type: "sign", ipa: "[-]", chinese_hint: "硬音符号(只起分音作用，不发音)",
        everyday: { word: "Объявление", trans: "Ob'yavleniye", cn: "公告 / 广告", hint: "阿布-呀夫列里耶" },
        medical: { word: "Инъекция", trans: "In'yektsiya", cn: "注射 / 打针", hint: "因-耶克茨亚" }
    },
    {
        letter: "Ы", lowercase: "ы", type: "vowel", ipa: "[ɨ]", chinese_hint: "额-衣(嘴角往后咧发音)",
        everyday: { word: "Мыло", trans: "Mylo", cn: "肥皂", hint: "美罗" },
        medical: { word: "Мышцы", trans: "Myshtsy", cn: "肌肉", hint: "美施茨" }
    },
    {
        letter: "Ь", lowercase: "ь", type: "sign", ipa: "[-]", chinese_hint: "软音符号(使前一辅音发软音)",
        everyday: { word: "День", trans: "Den'", cn: "白天 / 一天", hint: "阶里 (带软化音)" },
        medical: { word: "Боль", trans: "Bol'", cn: "疼痛 / 痛苦", hint: "波里 (带软化音)" }
    },
    {
        letter: "Э", lowercase: "э", type: "vowel", ipa: "[e]", chinese_hint: "挨",
        everyday: { word: "Экран", trans: "Ekran", cn: "屏幕", hint: "埃克兰" },
        medical: { word: "Эпидемия", trans: "Epidemiya", cn: "流行病 / 传染病", hint: "埃毕阶米亚" }
    },
    {
        letter: "Ю", lowercase: "ю", type: "vowel", ipa: "[ju]", chinese_hint: "英文 you",
        everyday: { word: "Юбка", trans: "Yubka", cn: "裙子", hint: "优布卡" },
        medical: { word: "Ювенильный", trans: "Yuvenil'nyy", cn: "青少年的 / 幼年的", hint: "由微尼里内" }
    },
    {
        letter: "Я", lowercase: "я", type: "vowel", ipa: "[ja]", chinese_hint: "呀",
        everyday: { word: "Яблоко", trans: "Yabloko", cn: "苹果", hint: "呀布拉卡" },
        medical: { word: "Язва", trans: "Yazva", cn: "溃疡", hint: "呀子瓦" }
    }
];

// 口腔诊所常见词汇表（sentence / sentenceCn = 点击翻转后展示的例句）
const dentalClinicVocab = [
    { word: "Стоматология", cn: "口腔医学 / 牙科", hint: "斯达马托洛吉亚", tag: "科室", sentence: "Наша стоматология работает с девяти до шести.", sentenceCn: "我们口腔科从早上九点营业到下午六点。" },
    { word: "Стоматолог", cn: "牙医 / 口腔科医生", hint: "斯达马托洛格", tag: "人员", sentence: "Стоматолог осмотрел зубы пациента.", sentenceCn: "牙医检查了病人的牙齿。" },
    { word: "Зубной врач", cn: "牙科医师", hint: "祖普诺伊 夫拉奇", tag: "人员", sentence: "Зубной врач сделал рентгеновский снимок.", sentenceCn: "牙科医师拍了 X 光片。" },
    { word: "Медсестра", cn: "护士", hint: "麦德谢斯特拉", tag: "人员", sentence: "Медсестра подготовила инструменты для приёма.", sentenceCn: "护士为接诊准备好了器械。" },
    { word: "Пациент", cn: "患者 / 病人", hint: "帕齐恩特", tag: "就诊", sentence: "Пациент ждёт в коридоре.", sentenceCn: "病人在走廊里等候。" },
    { word: "Приём", cn: "接诊 / 就诊", hint: "普里耶姆", tag: "就诊", sentence: "Приём начнётся через десять минут.", sentenceCn: "就诊将在十分钟后开始。" },
    { word: "Запись на приём", cn: "预约挂号", hint: "扎皮西 纳 普里耶姆", tag: "就诊", sentence: "Я хочу записаться на приём к стоматологу.", sentenceCn: "我想预约看牙医。" },
    { word: "Кабинет", cn: "诊室", hint: "卡比涅特", tag: "科室", sentence: "Кабинет стоматолога находится на втором этаже.", sentenceCn: "牙医诊室在二楼。" },
    { word: "Регистратура", cn: "挂号处", hint: "列吉斯特拉图拉", tag: "科室", sentence: "Пожалуйста, запишитесь в регистратуре.", sentenceCn: "请到挂号处登记。" },
    { word: "Зуб", cn: "牙齿", hint: "祖普", tag: "牙齿", sentence: "У меня болит зуб справа.", sentenceCn: "我右边一颗牙疼。" },
    { word: "Молочный зуб", cn: "乳牙", hint: "马洛奇内 祖普", tag: "牙齿", sentence: "Молочный зуб скоро выпадет.", sentenceCn: "这颗乳牙快掉了。" },
    { word: "Постоянный зуб", cn: "恒牙", hint: "波斯托扬内 祖普", tag: "牙齿", sentence: "Постоянный зуб уже прорезался.", sentenceCn: "恒牙已经长出来了。" },
    { word: "Десна", cn: "牙龈", hint: "杰斯纳", tag: "牙齿", sentence: "Десна красная и опухшая.", sentenceCn: "牙龈又红又肿。" },
    { word: "Челюсть", cn: "颌骨 / 下颌", hint: "切柳斯特", tag: "牙齿", sentence: "Откройте челюсть шире, пожалуйста.", sentenceCn: "请把下颌再张大一些。" },
    { word: "Прикус", cn: "咬合", hint: "普里库斯", tag: "牙齿", sentence: "Прикус нужно исправить с помощью брекетов.", sentenceCn: "需要用牙套矫正咬合。" },
    { word: "Кариес", cn: "龋齿 / 蛀牙", hint: "卡里耶斯", tag: "疾病", sentence: "У вас кариес на жевательной стороне зуба.", sentenceCn: "您牙齿的咀嚼面有龋齿。" },
    { word: "Пульпит", cn: "牙髓炎", hint: "普里普伊特", tag: "疾病", sentence: "Пульпит вызывает сильную боль.", sentenceCn: "牙髓炎会引起剧烈疼痛。" },
    { word: "Периодонтит", cn: "牙周炎", hint: "佩里阿东季特", tag: "疾病", sentence: "Периодонтит лечат за несколько визитов.", sentenceCn: "牙周炎需要多次就诊治疗。" },
    { word: "Воспаление", cn: "炎症", hint: "瓦斯帕列尼耶", tag: "疾病", sentence: "Есть воспаление десны вокруг зуба.", sentenceCn: "牙齿周围的牙龈有炎症。" },
    { word: "Боль", cn: "疼痛", hint: "波里", tag: "症状", sentence: "Боль усиливается ночью.", sentenceCn: "疼痛在夜间会加重。" },
    { word: "Кровоточивость", cn: "出血", hint: "克罗瓦托奇沃斯特", tag: "症状", sentence: "Кровоточивость появляется при чистке зубов.", sentenceCn: "刷牙时会出现出血。" },
    { word: "Пломба", cn: "补牙 / 充填物", hint: "普隆巴", tag: "治疗", sentence: "Пломба выпала вчера вечером.", sentenceCn: "补牙材料昨晚掉了。" },
    { word: "Пломбирование", cn: "充填治疗", hint: "普隆比罗瓦尼耶", tag: "治疗", sentence: "Пломбирование займёт около тридцати минут.", sentenceCn: "充填治疗大约需要三十分钟。" },
    { word: "Удаление зуба", cn: "拔牙", hint: "乌达列尼耶 祖巴", tag: "治疗", sentence: "Удаление зуба проводят под анестезией.", sentenceCn: "拔牙在麻醉下进行。" },
    { word: "Чистка зубов", cn: "洁牙 / 洗牙", hint: "奇斯特卡 祖波夫", tag: "治疗", sentence: "Профессиональная чистка зубов — раз в полгода.", sentenceCn: "专业洁牙建议每半年一次。" },
    { word: "Анестезия", cn: "麻醉", hint: "阿涅斯铁济亚", tag: "治疗", sentence: "Сначала сделаем местную анестезию.", sentenceCn: "我们先做局部麻醉。" },
    { word: "Рентген", cn: "X 光 / 牙片", hint: "连特根", tag: "检查", sentence: "Сделайте рентген перед началом лечения.", sentenceCn: "开始治疗前请先拍 X 光。" },
    { word: "Снимок", cn: "影像 / 片子", hint: "斯尼莫克", tag: "检查", sentence: "На снимке виден глубокий кариес.", sentenceCn: "片子上可以看到深度龋齿。" },
    { word: "Имплант", cn: "种植体", hint: "伊姆普兰特", tag: "修复", sentence: "Имплант установят на следующей неделе.", sentenceCn: "种植体将在下周安装。" },
    { word: "Коронка", cn: "牙冠", hint: "科龙卡", tag: "修复", sentence: "Коронка хорошо подходит по цвету.", sentenceCn: "牙冠的颜色很匹配。" },
    { word: "Протез", cn: "假牙 / 修复体", hint: "普罗铁兹", tag: "修复", sentence: "Протез нужно снимать на ночь.", sentenceCn: "假牙夜间需要取下。" },
    { word: "Брекеты", cn: "牙套 / 矫治器", hint: "布雷基铁", tag: "修复", sentence: "Брекеты обычно носят один–два года.", sentenceCn: "牙套通常要戴一到两年。" },
    { word: "Щётка", cn: "牙刷", hint: "晓特卡", tag: "护理", sentence: "Меняйте щётку каждые три месяца.", sentenceCn: "请每三个月更换一次牙刷。" },
    { word: "Зубная паста", cn: "牙膏", hint: "祖普纳亚 帕斯塔", tag: "护理", sentence: "Используйте зубную пасту с фтором.", sentenceCn: "请使用含氟牙膏。" },
    { word: "Слюна", cn: "唾液", hint: "斯柳纳", tag: "检查", sentence: "Слюна мешает работе врача.", sentenceCn: "唾液会影响医生操作。" },
    { word: "Инструмент", cn: "器械", hint: "因斯特鲁门特", tag: "器械", sentence: "Положите инструмент на стерильный стол.", sentenceCn: "请把器械放在无菌台上。" },
    { word: "Открыть рот", cn: "请张嘴", hint: "阿特克里特 罗特", tag: "用语", sentence: "Пожалуйста, откройте рот пошире.", sentenceCn: "请把嘴再张大一些。" },
    { word: "Закройте рот", cn: "请闭嘴", hint: "扎克罗伊特耶 罗特", tag: "用语", sentence: "Закройте рот и немного подождите.", sentenceCn: "请闭上嘴，稍等片刻。" },
    { word: "Полощите рот", cn: "请漱口", hint: "帕洛希特耶 罗特", tag: "用语", sentence: "Полощите рот тёплой водой.", sentenceCn: "请用温水漱口。" }
];
