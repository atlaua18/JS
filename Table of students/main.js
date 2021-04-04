document.addEventListener('DOMContentLoaded', () => {

    const inputSurname = document.getElementById('surname');
    const inputName = document.getElementById('name');
    const inputMiddleName = document.getElementById('middleName');
    const inputBirthday = document.getElementById('birthday');
    const inputStartYear = document.getElementById('startYear');
    const inputFaculty = document.getElementById('faculty');
    const form = document.getElementById('form');

    const divError = document.createElement('div');
    const spanError = document.createElement('span');
    document.body.append(spanError);
    document.body.append(divError);
    spanError.textContent = 'В следующих полях была допущена ошибка: ';

    const minDate = new Date(1900, 00, 01);
    const currentDate = new Date();

    const arrayOfStudents = [];

    function createNewStudent(surname, name, middleName, birthday, startYear, faculty) {
        return {
            surname,
            name,
            middleName,
            birthday: new Date(birthday),
            startYear,
            faculty,
        }
    }

    function validate() {
        let isSurnameValid = true;
        let isNameValid = true;
        let isMiddleNameValid = true;
        let isBirthdayValid = true;
        let isStartYearValid = true;
        let isFacultyValid = true;
        let isValid = true;

        let yearBirthday = new Date(inputBirthday.value).getFullYear();

        if (inputSurname.value.trim() === '') {
            isSurnameValid = false;
        }
        if (inputName.value.trim() === '') {
            isNameValid = false;
        }
        if (inputMiddleName.value.trim() === '') {
            isMiddleNameValid = false;
        }
        if (minDate.getFullYear() > yearBirthday || yearBirthday > currentDate.getFullYear() || isNaN(yearBirthday)) {
            isBirthdayValid = false;
        }
        if (inputStartYear.value < 2000) {
            isStartYearValid = false;
        }
        if (inputFaculty.value.trim() === '') {
            isFacultyValid = false;
        }

        return {
            isSurnameValid,
            isNameValid,
            isMiddleNameValid,
            isBirthdayValid,
            isStartYearValid,
            isFacultyValid,
            isValid
        }
    }

    function clearForm() {
        inputSurname.value = '';
        inputName.value = '';
        inputMiddleName.value = '';
        inputBirthday.value = '';
        inputStartYear.value = '';
        inputFaculty.value = '';
    }

    function createTable(array) {
        let dataStudent = createNewStudent();
        let cell = document.querySelector('.table_body');
        let tr = document.createElement('tr');
        cell.append(tr);
        let td;

        for (let i = 0; i < 4; i++) {
            td = document.createElement('td');
            tr.append(td);
            td.id = i;
        }

        // td.id[0].textContent = arrayOfStudents[0].surname;
        document.getElementById(0).textContent = arrayOfStudents[0].surname + ' ' + arrayOfStudents[0].name + ' ' + arrayOfStudents[0].middleName;
        document.getElementById(1).textContent = arrayOfStudents[0].faculty;
        document.getElementById(2).textContent = currentDate.getFullYear() - arrayOfStudents[0].birthday.getFullYear();
        let y = parseInt(arrayOfStudents[0].startYear) + 4;
        document.getElementById(3).textContent = arrayOfStudents[0].startYear + '-' + y;
    }
    // createTable();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let validationResult = validate();
        let errorMessage = '';
        if (validationResult.isValid) {
            errorMessage += validationResult.isSurnameValid ? "" : "Фамилия" + '<br>';
            errorMessage += validationResult.isNameValid ? "" : "Имя" + '<br>';
            errorMessage += validationResult.isMiddleNameValid ? "" : "Отчество" + '<br>';
            errorMessage += validationResult.isBirthdayValid ? "" : "Дата рождения" + '<br>';
            errorMessage += validationResult.isStartYearValid ? "" : "Год начала обучения" + '<br>';
            errorMessage += validationResult.isFacultyValid ? "" : "Факультет";
            divError.innerHTML = errorMessage;
        } 
        if(divError.innerHTML === ""){
            arrayOfStudents.push(createNewStudent(
                inputSurname.value.trim(),
                inputName.value.trim(),
                inputMiddleName.value.trim(),
                inputBirthday.value,
                inputStartYear.value,
                inputFaculty.value.trim()
            ));

            createTable(arrayOfStudents);
        }
        clearForm();
        console.log(arrayOfStudents);
    });
});

// birthday.value = Intl.DateTimeFormat("en-US").format(new Date());

// if (inputSurname.value.trim() === '' ||
        //     inputName.value.trim() === '' ||
        //     inputMiddleName.value.trim() === '' ||
        //     inputFaculty.value.trim() === '') {
        //     console.log('ошибка');
        // } 