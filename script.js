

// Ұлттық мерекелер
const holidays = [
    "Жұмыс істемеу күні – Бәрі мем жасап демалады.",
    "Салық төлемеу күні – Себебі салық жинайтын ешкім жоқ.",
    "Үкіметті сынға алу күні – Мем жасаушыларға бостандық беріледі!",
];
function changeHoliday() {
    let randomIndex = Math.floor(Math.random() * holidays.length);
    document.getElementById("holiday").innerText = `"${holidays[randomIndex]}"`;
}

// Жаңалықтар
const newsList = [
    "Байгайстанда инфляция 0% – себебі ақша жоқ!",
    "Жол жөндеу аяқталды – себебі жолдар жоқ!",
    "Ең үлкен экспорт – мемдер, себебі басқа ештеңе жоқ!",
];
function changeNews() {
    let randomIndex = Math.floor(Math.random() * newsList.length);
    document.getElementById("news").innerText = `"${newsList[randomIndex]}"`;
}

// Азаматтық алу (Паспорт жасау)
function generatePassport() {
    let name = document.getElementById("citizen-name").value;
    let position = document.getElementById("position").value;
    let fileInput = document.getElementById("photo");
    let passportMessage = document.getElementById("passport"); // Ескертуді көрсету үшін
    
    if (name.trim() === "" || !fileInput.files.length) {
        passportMessage.innerText = "⚠️ Аты-жөніңізді енгізіп, сурет жүктеңіз!";
        passportMessage.style.color = "red";
        return;
    }

    // Файлды оқу
    let reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("passport-photo").src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);

    // Паспорт деректерін толтыру
    document.getElementById("passport-name").innerText = name;
    document.getElementById("passport-position").innerText = position;
    document.getElementById("passport-id").innerText = "BG-" + Math.floor(100000 + Math.random() * 900000);

    // Паспортты көрсету
    document.getElementById("passport-section").classList.remove("hidden");

    // Ескертуді шығару
    passportMessage.innerText = `🎫 Құттықтаймыз, ${name}! Сіз енді Байгайстан азаматысыз!`;
    passportMessage.style.color = "green";
}

// Паспортты сурет ретінде жүктеу
function downloadPassport() {
    html2canvas(document.getElementById("passport-section")).then(canvas => {
        let link = document.createElement("a");
        link.download = "Baygaistan_Passport.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Президенттің үндеулері (әр 10 секунд сайын ауысады)
const messages = [
    "Байгайстанда жемқорлық жоқ – себебі ақша жоқ!",
    "Бізде бензин бағасы тұрақты – 0 теңге, себебі бензин жоқ!",
    "Жұмыссыздық 0%! Себебі жұмыс істейтін адам жоқ!",
    "Экономикамыз мықты, өйткені оны тек мемдер ұстап тұр!",
    "Бізде барлық заңдар әділ, себебі заң жоқ!"
];

function changeMessage() {
    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("president-message").innerText = `"${messages[randomIndex]}"`;
}

// Әр 10 секунд сайын үндеуді өзгерту
setInterval(changeMessage, 10000);

// Президентке сұрақ қою
const answers = [
    "Бұл сұрақты зерттеу үшін комиссия құрылды. Нәтижесін 2075 жылы білеміз!",
    "Жақсы сұрақ! Бірақ менің көмекшілерім оны түсіндіріп береді... кейін.",
    "Кешіріңіз, менің интернетім баяулап тұр. Басқа сұрақ қойыңыз!",
    "Мен бұл туралы ойланамын... бірақ бүгін емес!",
    "Біз бұл мәселені шешуге дайынбыз! Бірақ нақты қашан – белгісіз..."
];

function askPresident() {
    let question = document.getElementById("question").value;
    if (question.trim() === "") {
        document.getElementById("president-answer").innerText = "⚠️ Сұрағыңызды жазыңыз!";
        return;
    }
    let randomIndex = Math.floor(Math.random() * answers.length);
    document.getElementById("president-answer").innerText = `"${answers[randomIndex]}"`;
}
// BGTV – Байгайстан Телеарнасы жаңалықтары
const bgtvNewsList = [
    "📢 Байгайстан экономикасы 300%-ға өсті! (0 × 3 = 0)",
    "🛑 Еліміздің қазынасы толы! Бірақ қағазбен, себебі ақша жоқ.",
    "⚡ Байгайстан халықаралық келісім жасады! Бірақ басқа тарап келмей қалды...",
    "🚦 Жол жөндеу аяқталды! Себебі жолдар жоқ.",
    "🏆 Байгайстан әлемдегі ең бақытты ел атанды! Себебі бізде уайым жоқ.",
    "💡 Ғалымдар мем жасау – мидың дамуына әсер ететінін дәлелдеді!",
    "🎉 Бүгін - Ұлттық Жұмыс Істемеу Күні! Бірақ бізде онсыз да бәрі демалыста.",
];

// Жаңалықты өзгерту функциясы
function changeBGTVNews() {
    let randomIndex = Math.floor(Math.random() * bgtvNewsList.length);
    document.getElementById("bgtv-news").innerText = bgtvNewsList[randomIndex];
}

// Автоматты түрде жаңалықты әр 8 секунд сайын ауыстыру
setInterval(changeBGTVNews, 8000);

