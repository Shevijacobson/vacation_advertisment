

if (localStorage['n_user']) {
    let iser = localStorage.getItem('n_user');
    iser = JSON.parse(iser)
    document.getElementById('user_name').innerHTML = "ברוך הבא " + iser;
}
let arr_vacation2 = localStorage.getItem('arr');
arr_vacation2 = JSON.parse(arr_vacation2)

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email');
    const phone = document.getElementById('phone');


    const emailIsValid = isValidEmail(email.value);
    const phoneIsValid = isValidPhone(phone.value);
    const arr = document.querySelectorAll('.notnull')
    let answer = validFields(arr);

    if (!emailIsValid) {
        email.classList.add('invalid');
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    } else {
        email.classList.remove('invalid');
        document.getElementById('email-error').textContent = '';
    }

    if (!phoneIsValid) {
        phone.classList.add('invalid');
        document.getElementById('phone-error').textContent = 'Please enter a valid phone number.';
    } else {
        phone.classList.remove('invalid');
        document.getElementById('phone-error').textContent = '';
    }



    if (emailIsValid && phoneIsValid && answer) {

        document.querySelector('#myForm').addEventListener('submit', (event) => {
            event.preventDefault();

            const placeType = document.getElementById("placeType");
            const selectedOptionType = placeType.options[placeType.selectedIndex].value;
            const placeCity = document.getElementById("city");
            const selectedOptionCity = placeCity.options[placeCity.selectedIndex].value;

            const airConditioning = document.getElementsByName("AirConditioning")[0].checked ? 1 : 0;
            const accessible = document.getElementsByName("accessible")[0].checked ? 1 : 0;
            const wifi = document.getElementsByName("wifi")[0].checked ? 1 : 0;
            const view = document.getElementsByName("view")[0].checked ? 1 : 0;
            const pool = document.getElementsByName("pool")[0].checked ? 1 : 0;
            let arrUrlImages = [];
            let altImages = [];
            let index = 1;
            const selectElement = document.getElementById('city');
            const selectedValue = selectElement.value;
            for (let i = 0; i < 6; i++) {
                arrUrlImages[index - 1] = document.querySelector(`input[name="img${index}"]`).value;
                altImages[index - 1] = document.querySelector(`input[name="de_img${index}"]`).value;
                index++;
            }

            let name_city = ["טבריה", "אילת", "מירון", "ירושלים", "דלתון", "קיסריה"]
            let id_citys = ["city_a", "city_b", "city_c", "city_d", "city_e", "city_f",]
            let key = 0;
            let citychose;
            name_city.map((item) => {
                if (item == selectedValue)
                    citychose = id_citys[key]
                key++;
            })


            //יצירת נופש חדש כאוביקט והכנסתו למערך הנופשים

            let addVacation = {
                id: arr_vacation2.length,
                name: document.querySelector('input[name="namePlace"]').value,
                city: selectedOptionCity,
                description: document.querySelector('input[name="description"]').value,
                img: document.querySelector('input[name="ingmain"]').value,
                price: document.querySelector('input[name="price"]').value,
                phone: document.querySelector('#phone').value,
                type: selectedOptionType,
                id_city: citychose,
                AirConditioning: airConditioning,
                accessible: accessible,
                wifi: wifi,
                view: view,
                pool: pool,
                img_arr: arrUrlImages,
                alt_img: altImages,
                email: document.querySelector('input[name="email"]').value
            }
            console.log(addVacation);

            arr_vacation2.push(addVacation);
            let arr = JSON.stringify(arr_vacation2);
            localStorage.setItem('arr', arr);
            alert("נוסף בהצלחה, אתה מועבר לעמוד הבית😀");
            window.location.href = './P.HTML'
        })

        // showNiceAlert("נוסף בהצלחה, אתה מועבר לעמוד הבית😀");

        // function showNiceAlert(message) {
        //     var alertBox = document.createElement('div');
        //     alertBox.className = 'nice-alert';
        //     alertBox.textContent = message;

        //     var closeButton = document.createElement('button');
        //     closeButton.textContent = 'Close';
        //     closeButton.addEventListener('click', function () {
        //         alertBox.style.display = 'none';
        //         window.location.href = './P.HTML'
        //     });

        //     alertBox.appendChild(closeButton);
        //     document.body.appendChild(alertBox);
        // }


    }

});



function validFields(arr) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        let className = arr[i].id;
        if (arr[i].value === '') {
            flag = false;
            let error = 'שדה זה הינו שדה חובה.';
            document.getElementsByClassName(className)[0].textContent = error;
        }
        else {
            document.getElementsByClassName(className)[0].textContent = '';
        }

    }
    if (flag == true)
        return true;
    return false;


}

function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
function notNull(input) {
    return input.trim() !== '';
}


