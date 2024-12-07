



/*מערך של תמנות והחלפת הקישור שלהם  */
let arrimage = ["z.jpg", "y.jpg", "x.jpg"];
let index = 0;

/* פונקציה שסופרת 3 שניות ומחליפה את התמונה*/
let Image;
function Running_pictures() {
    Image = setInterval(() => {
        if (index === arrimage.length)
            index = 0;
        document.getElementById("gallery").src = arrimage[index];
        index++;

    }
        , 5000);
}

/*כפתור הבא בגלריה*/
document.getElementById("next").addEventListener("click", function () {
    clearInterval(Image);
    if (index === arrimage.length) {
        index = 0;
        document.getElementById("gallery").src = arrimage[index];
    }
    else
        document.getElementById("gallery").src = arrimage[index++];
    Running_pictures();
});
/*כפתור קודם בגלריה*/
document.getElementById("prev").addEventListener("click", function () {
    clearInterval(Image);
    if (index === 0) {
        index = arrimage.length - 1;
        document.getElementById("gallery").src = arrimage[index];
    }
    else
        document.getElementById("gallery").src = arrimage[index--];
    Running_pictures();
});

/*כפתור עצור בגלריה*/
let flag = true;
document.getElementById("pause").addEventListener("click", function () {
    if (flag == true) {
        clearInterval(Image);
        this.style.color = "red"
        flag = false
    }
    else {
        Running_pictures();
        flag = true;
        this.style.color = "black"
    }
});
Running_pictures();

/*  חסימת אפשרות לכתוב בחיפוש*/
function blockInput() {
    let input = document.querySelectorAll("#container_gallery input")
    for (item of input)
        item.readOnly = true;
}

blockInput()

/*פתיחת הסוגים בחיפוש*/
let dropdown_container;
let arr_dropdown_container = [];
let arr_open_filter = document.querySelectorAll("button.filter")
for (item of arr_open_filter) {
    item.addEventListener("click", open_filter)
}
function open_filter() {
    dropdown_container = this.closest('div')
    dropdown_container.classList.add("open")
    arr_dropdown_container.push(dropdown_container);

}

/*סגירת הערים ביציאה*/
document.addEventListener("click", function (event) {
    for (item of arr_dropdown_container) {
        if (event.target !== item && !item.contains(event.target)) {
            item.classList.remove("open");
            event.stopPropagation();
        }
    }
});




let arr_vacation = [
    {
        id: 0,
        name: "plaza",
        city: "ירושלים",
        description: "מלון הטוב ביותר בירושלים, בו יוקרה פוגשת היסטוריה ונוחות פוגשת תרבות. שוכן בלב העיר התוססת הזו, המלון שלנו מציע חוויה שובת לב שתשאיר אתכם מרותקים. טבלו את עצמכם באווירה הקסומה של החדרים המעוצבים באלגנטיות שלנו, התענגו על מאכלים מענגים במסעדות ברמה עולמית שלנו, והצעירו את החושים שלכם בספא השליו שלנו. עם מיקומו המעולה ליד ציוני דרך איקוניים כמו הכותל המערבי והשווקים התוססים של העיר העתיקה, המלון שלנו הוא השער המושלם לחקור את המורשת העשירה של ירושלים. בואו, לאמץ את הפיתוי של ירושלים, ותנו לנו להיות הבית המפואר שלכם הרחק מהבית.ה",
        img: "https://www.sinaisite.co.il/wp-content/uploads/2018/11/%D7%9E%D7%9C%D7%95%D7%9F-%D7%91%D7%A9%D7%90%D7%A8%D7%9D.jpg", 
        price: 1500,
        phone: "0504125896",
        type: "type_b",
        id_city: "city_d",
        AirConditioning: 1,
        accessible: 0,
        wifi: 1,
        view: 1,
        pool: 1,
        img_arr: ["https://www.mdo-f.co.il/images/itempics/1086_220520221104021.jpg", "https://www.sinaisite.co.il/wp-content/uploads/2018/11/%D7%9E%D7%9C%D7%95%D7%9F-%D7%91%D7%A9%D7%90%D7%A8%D7%9D.jpg", "https://ichotels.co.il//octopus/upload/images/pages/daniel-501.jpg", "https://www.startip.co.il/wp-content/uploads/2020/09/%D7%90%D7%99%D7%9A-%D7%9C%D7%A4%D7%AA%D7%95%D7%97-%D7%91%D7%99%D7%AA-%D7%9E%D7%9C%D7%95%D7%9F-%D7%A1%D7%98%D7%90%D7%A8%D7%98%D7%99%D7%A4.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/The_main_dining_room%2C_Fujiya_Hotel%2C_Miyanoshita%2C_Hakone.jpg/1200px-The_main_dining_room%2C_Fujiya_Hotel%2C_Miyanoshita%2C_Hakone.jpg", "https://www.bordo100.co.il/thumb.php?src=1682248964028753001682248964.jpg.huge.jpg&height=350&width=980&siteID=868"],
        alt_img: ["לובי", "בריכה", " חיצונית בריכה", "מרפסת", "חדר אוכל", "תפריט"],
        email: "plaza@gmail.com"



    },
    {
        id: 1,
        name: "נופש בוטיקי",
        city: "טבריה",
        description: `ברחו לשקט בלב טבריה, שם ממתין הצימר המקסים שלנו שיציע לכם מפלט בלתי נשכח. שוכן בתוך צמחייה עבותה ומשקיף על הכנרת עוצרת הנשימה, הצימר שלנו הוא גן עדן של שלווה. היכנסו לנווה המדבר הפרטי שלכם, המעוצב באלגנטיות כדי לספק נוחות ורגיעה מירבית. התענגו על הנופים המהפנטים מהמרפסת שלכם, טבלו את עצמכם במים המרגיעים של הבריכה החיצונית שלנו, והתענגו על מאכלים מקומיים אותנטיים בפינת האוכל הנעימה שלנו. עם קרבתו לאתרים היסטוריים ידועים ולטיילת התוססת, הצימר שלנו הוא הבסיס המושלם לחקור את פלאי טבריה. בואו, חבקו את יופייה של העיר הקסומה הזו, ותנו לנו ליצור זיכרונות שיימשכו לכל החיים.`,
        img: "https://loghome.co.il/wp-content/uploads/2020/08/%D7%A6%D7%99%D7%9E%D7%A8-35-%D7%9E1.jpg",
        price: 2000,
        phone: "05625874523",
        type: "type_a",
        id_city: "city_a",
        AirConditioning: 1,
        accessible: 0,
        wifi: 1,
        view: 0,
        pool: 0,
        img_arr: ["https://www.weekend-family.co.il/images/customerimages/21134/gallery/image_21134_5f2558817d394614832ba3ed9f7bbe34.jpg?w=700&h=400&mode=crop", "https://images.hapisga.co.il/ssd/sites/302/406229c21a0eb6e.jpg", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251292175.jpg?k=f4b75379f946efe9f92f2a5e67ef10605094daa16c52d395ab300650f64932f7&o=&hp=1", "https://zimertov.com/wp-content/uploads/2021/07/%D7%A6%D7%99%D7%9E%D7%A8-%D7%A8%D7%95%D7%AA%D7%9D-1-1024x682.jpg", "https://loghome.co.il/wp-content/uploads/2020/08/%D7%A6%D7%99%D7%9E%D7%A8-35-%D7%9E1.jpg", "https://cdn.zimertop.co.il/gallery/thumbs/159152468964_640x420.jpg"],
        alt_img: ["חדר שינה", "גקוזי", " נוף", "חדר ילדים", "מבט מבחוץ", "בריכה מחוממת "],
        email: "hguj@gmail.com"
    },
    {
        id: 2,
        name: "hotel",
        city: "אילת",
        description: "מלון קומפורט אילת (Comfort Hotel Eilat) ממוקם במרכז אילת, במרחק של 12 דקות הליכה בלבד מחופי הים האדום, ומציע בריכה חיצונית עם בר גריל, גישה חופשית לאינטרנט אלחוטי בכל האזורים וחדרים ממוזגים עם מרפסות פרטיות. המלון שלנו נועד לספק את מירב הנוחות והנוחות עבור האורחים שלנו. התחילו את היום שלכם עם מזנון ארוחת בוקר טעים, המציע מגוון רחב של מרכיבים טריים ומקומיים. הירגעו ליד הבריכה החיצונית תוך כדי לגימת קוקטיילים מרעננים מבר הגריל שלנו, או צאו לטיול נינוח כדי לחקור את חופי הים האדום המדהימים במרחק דקות ספורות משם. כל אחד מהחדרים הממוזגים שלנו מרוהט בקפידה וכולל מרפסת פרטית, מושלמת ליהנות מהבריזה האילתית החמימה. בין אם אתם מבקרים לצורך עסקים או פנאי, מלון קומפורט אילת הוא הבחירה האידיאלית לשהייה בלתי נשכחת בעיר החוף התוססת הזו",
        img: "https://telechofesh.co.il/wp-content/uploads/2022/05/%D7%9B%D7%A4%D7%A8-%D7%94%D7%A0%D7%95%D7%A4%D7%A9-%D7%94%D7%99%D7%95%D7%95%D7%A0%D7%99-%D7%A9%D7%9C-%D7%99%D7%95%D7%A0%D7%99%D7%A7-%D7%91%D7%A4%D7%90%D7%A4%D7%95%D7%A1-9-%D7%98%D7%9C%D7%97%D7%95%D7%A4%D7%A9.jpg",
        price: 2500,
        phone: "058235623",
        type: "type_c",
        id_city: "city_b",
        AirConditioning: 1,
        accessible: 1,
        wifi: 1,
        view: 1,
        pool: 1,
        img_arr: ["https://telechofesh.co.il/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-22-at-09.37.50-1-1024x768.jpeg", "https://telechofesh.co.il/wp-content/uploads/2022/05/%D7%9B%D7%A4%D7%A8-%D7%94%D7%A0%D7%95%D7%A4%D7%A9-%D7%94%D7%99%D7%95%D7%95%D7%A0%D7%99-%D7%A9%D7%9C-%D7%99%D7%95%D7%A0%D7%99%D7%A7-%D7%91%D7%A4%D7%90%D7%A4%D7%95%D7%A1-9-%D7%98%D7%9C%D7%97%D7%95%D7%A4%D7%A9.jpg", "https://telechofesh.co.il/wp-content/uploads/2022/05/%D7%9B%D7%A4%D7%A8-%D7%94%D7%A0%D7%95%D7%A4%D7%A9-%D7%94%D7%99%D7%95%D7%95%D7%A0%D7%99-%D7%A9%D7%9C-%D7%99%D7%95%D7%A0%D7%99%D7%A7-%D7%91%D7%A4%D7%90%D7%A4%D7%95%D7%A1-11-%D7%98%D7%9C%D7%97%D7%95%D7%A4%D7%A9-1024x683.jpg", "https://telechofesh.co.il/wp-content/uploads/2022/05/%D7%94%D7%9B%D7%A4%D7%A8-%D7%94%D7%99%D7%95%D7%95%D7%A0%D7%99-%D7%A9%D7%9C-%D7%99%D7%95%D7%A0%D7%99%D7%A7-%D7%91%D7%A4%D7%90%D7%A4%D7%95%D7%A1-7-%D7%99%D7%95%D7%A0%D7%99%D7%A7-%D7%98%D7%9C%D7%97%D7%95%D7%A4%D7%A9-1024x585.jpeg", "https://telechofesh.co.il/wp-content/uploads/2019/03/42.jpg","https://telechofesh.co.il/wp-content/uploads/2017/08/%D7%9E%D7%9C%D7%95%D7%9F-%D7%94%D7%93%D7%99%D7%A8%D7%95%D7%AA-%D7%A1%D7%99%D7%98%D7%99-%D7%A1%D7%A0%D7%98%D7%A8-%D7%90%D7%A4%D7%A8%D7%98%D7%9E%D7%A0%D7%98%D7%A1-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-12-%D7%98%D7%9C%D7%97%D7%95%D7%A4%D7%A9-1024x683.jpg"],
        alt_img: ["לובי", "בריכת שיזוף", "חצר", "בירכה מחוממת", "חדר ילדים", "חדר שינה"],
        email: "yuh0565@gmail.com"
    },
    {
        id: 3,
        name: "חויה",
        city: "מירון",
        description: `ברוכים הבאים למקלט הקדוש שלנו השוכן בארץ הקדושה מירון. בית ההארחה שלנו מציע מפלט שליו ורוחני, מושלם עבור אלה המחפשים חיבור עמוק יותר וחוויות משמעותיות. לטבול את עצמך באווירה המיסטית של מירון, הידועה במסורות העתיקות והאנרגיה הרוחנית שלה. בית ההארחה שלנו מספק חדרי אירוח נוחים מלאי חמימות ואירוח. חווה את השלווה של הגנים השלווים שלנו, שבהם אתה יכול לעשות מדיטציה, להרהר ולמצוא נחמה. עם קרבתו למקום מנוחתו הקדוש של רבי שמעון בר יוחאי, בית ההארחה שלנו מהווה שער להארה רוחנית. בואו, צאו למסע טרנספורמטיבי וחשפו את יופיו העמוק של מירון.`,
        img: "https://www.kaza.co.il/wp-content/uploads/2022/05/3d-10254-008-1-1024x542.jpg",
        price: 1000,
        phone: "0548562289",
        type: "type_a",
        id_city: "city_c",
        AirConditioning: 1,
        accessible: 0,
        wifi: 0,
        view: 0,
        pool: 1,
        img_arr: ["https://www.kaza.co.il/wp-content/uploads/2022/05/3d-10254-008-1-1024x542.jpg", "https://wallsmag.co.il/wp-content/uploads/2017/11/1-1.jpg", "https://www.habsor.co.il/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-29-at-15.46.35.jpeg", "https://img.emalon.co.il/hotels-pictures/jerusalem/neve-ilan-hotel-600x398-9.jpg", "https://celvilon.co.il/wp-content/uploads/2022/02/download-49.png", "https://www.shalomhotel.co.il//octopus/upload/images/pages/stndrt-2.jpg"],
        alt_img: ["מרפסת", "חצר", "חדר אוכל", "חדר ילדים", "מרספת נוף", "חדר הורים"],
        email: "sssss0565@gmail.com"
    },
]
if (!localStorage['arr']) {
    let arr = JSON.stringify(arr_vacation);
    localStorage.setItem('arr', arr);
}


let arr_vacation2 = localStorage.getItem('arr');
arr_vacation2 = JSON.parse(arr_vacation2)

function draw(arr) {
    for (item of arr) {

        // תיאור קצר
        let wordArr = item.description.split(" ");
        let wordShort = wordArr.splice(0, 15).join(" ");

        let vacation = `
 <div class="aaa" id="${item.id}">
 <p><b>${item.name + " ב" + item.city}</b><br>
 ${(wordShort)}</p>
 <br>
 <div class="img"><img src="${item.img} " alt=""> 
 <a href="P2.HTML?id=${item.id}"> <b>לפרטים נוספים</b></a>
 </div>
 </div>
 `
        document.getElementById("container_vacation").innerHTML += vacation


    }

}

draw(arr_vacation2);


/*מעיף את הערים שבברירת מחדל*/
document.getElementById('search').addEventListener('click', function () {

    document.getElementById("container_vacation").innerHTML = "";

    let chosen_city = document.querySelector("input[type = 'radio'][name='city']:checked");
    chosen_city = chosen_city ? chosen_city.value : '';
    let chosen_type = document.querySelector("input[type = 'radio'][name='type']:checked");
    chosen_type = chosen_type ? chosen_type.value : '';
    let chosen_price = document.querySelector("input[type = 'radio'][name='price']:checked");
    // let input_chosen=chosen_price;
    chosen_min = chosen_price ? chosen_price.getAttribute('data-min') : '';
    chosen_max = chosen_price ? chosen_price.getAttribute('data-max') : '';




    //מכינים מערך ריק חדש לקוביות התקינות
    let filtered = [];


    // פונקציה שרצה על המערך הגדול, מחזירה true/false לפי השאלה האם הפריט צריך או לא צריך להופיע
    filtered = arr_vacation2.filter(function (item) {

        if (!chosen_city || chosen_city == item.id_city)
            if (!chosen_type || chosen_type == item.type)

                if (!chosen_price || (item.price > chosen_min && item.price <= chosen_max))
                    return true;

        return false;
    });

    draw(filtered)


    //נקה בחירה
    document.getElementById('clear').addEventListener('click', () => {
        document.getElementById('container_vacation').innerHTML = ""
        draw(arr_vacation2);
        document.querySelector('#city').innerHTML = "לאן אתם נוסעים?";
        document.querySelector('#type').innerHTML = "איזה נופש אתם בוחרים?";
        document.querySelector('#price').innerHTML = "מה התקציב שלכם?";

        let radioButtons = document.querySelectorAll('.filter_input');
        radioButtons.forEach((button) => {
            button.checked = false;
        });

    })
})






/*לקבל את האי די של החופש שבחרו לקישור*/
for (item of document.querySelectorAll(".img a")) {
    item.addEventListener("click", function () {
        let id_click = this.getAttribute('id');
        let strparam = location.search;
        let newparams = new URLSearchParams(strparam);
        let item = arr_vacation2[newparams.get('id')];

        let details = `       <h1>${item.name}</h1>
        <img src="${item.img}" alt="">
        <p>${item.description} </p>
        <br>
        <p>
            ליצירת קשר
            <br>
            0504124027
            <br>
            R0556766538@GMAIL.COM
        </p>`;
        document.querySelector('.private_page').innerHTML = details;

    })
}

/*האזנה לכפתור כניסת מנהלים*/

document.querySelector("#popup").addEventListener("click", function () {

    document.querySelector('body').classList.add('popup_open')
    document.querySelector("#x").addEventListener("click", function () {
        document.querySelector("body").classList.remove("popup_open");
    })
})




/*הקשבה לאירוע שליחת  קוד*/
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    if (input_password.value == 1234)
        window.location.href = "enter-place.html";
    else
        document.getElementById('errormessage').classList.remove("lll")
    input_password.value = ""

}
)

const passwordInput = document.getElementById("input_password");
const submitButton = document.getElementById("submit");
const inpurName = document.getElementById('nameManagar');
let detailsManager = [passwordInput, inpurName];
for (i of detailsManager) {
    i.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addUserName();
            submitButton.click();
            const storedValu = localStorage.getItem("n_user");
            console.log(JSON.parse(storedValu))
        }
    });
}

function addUserName() {
    if (inpurName.value != '') {
        let Manager = JSON.stringify(inpurName.value);
        localStorage.setItem('n_user', Manager);
    }

}
const dropdownContainers = document.querySelectorAll('.dropdown_container');


dropdownContainers.forEach(container => {
    const labels = container.querySelectorAll('label');

    labels.forEach(item => {
        item.addEventListener('click', function () {
            const value = this.textContent;
            const container = this.closest('.dropdown_container');
            container.querySelector('.filter').textContent = value;
        })
    });
});


//       img_arr: ["a(0).jpg", "a(1).jpg", "a(2).jpg", "a(3).jpg", "a(4).jpg", "a(5).jpg"],
//  alt_img: ["sea", "pool", "room", "flower", "bathroom", "garden"],