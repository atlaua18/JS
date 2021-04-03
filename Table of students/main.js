document.addEventListener('DOMContentLoaded', () => {

    const inputSurname = document.getElementById('surname');
    const inputName = document.getElementById('name');
    const inputMiddleName = document.getElementById('middleName');
    const birthday = document.getElementById('birthday');
    const startYear = document.getElementById('startYear');
    const faculty = document.getElementById('faculty');
    const form = document.getElementById('form');

    const minDate = new Date(1900, 01, 01);
    const carrentDate = new Date();

    const arrayOfStudents = [];

    function createNewStudent(surname, name, middleName, birthday, startYear, faculty) {
        return {
            surname,
            name,
            middleName,
            birthday,
            startYear,
            faculty,
        }
    }

    function validate() {
        let isSurnameValid = true;
        let isNameValid = true;
        let isMiddleNameValid = true;
        let isFacultyValid = true;
        let isValid = true;

        if(inputSurname.value.trim() === '') {
            isSurnameValid = false;
        }
        if(inputName.value.trim() === '') {
            isNameValid = false;
        } 
        if(inputMiddleName.value.trim() === '') {
            isNameValid = false;
        } 
        if(minDate < birthday.value < carrentDate) {
            isNameValid = false;
        } 
        if(startYear.value < 2000) {
            isNameValid = false;
        } 
        if(faculty.value.trim() === '') {
            isNameValid = false;
        } 
        
        else {
            isValid = true;
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
        birthday.value = '';
        startYear.value = '';
        faculty.value = '';
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let validationResult = validate();
        let errorMessage = '';
        if(!validationResult.isValid) {
            errorMessage += validationResult.isNameValid ? "" : "Имя \n";
            errorMessage += validationResult.isSurnameValid ? "" : "Фамилия \n";
        }
        if (inputSurname.value.trim() === '' ||
            inputName.value.trim() === '' ||
            inputMiddleName.value.trim() === '' ||
            faculty.value.trim() === '') {
            console.log('ошибка');
        } else {
            arrayOfStudents.push(createNewStudent(
                inputSurname.value.trim(),
                inputName.value.trim(),
                inputMiddleName.value.trim(),
                birthday.value,
                startYear.value,
                faculty.value.trim()
            ));
        }
        clearForm();
        console.log(arrayOfStudents);
    });
});

// birthday.value = Intl.DateTimeFormat("en-US").format(new Date());