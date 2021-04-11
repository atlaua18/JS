document.addEventListener('DOMContentLoaded', () => {

    const inputSurname = document.getElementById('surname');
    const inputName = document.getElementById('name');
    const inputMiddleName = document.getElementById('middleName');
    const inputBirthday = document.getElementById('birthday');
    const inputStartYear = document.getElementById('startYear');
    const inputFaculty = document.getElementById('faculty');
    const form = document.getElementById('form');
    const table = document.querySelector('.table_body');
    const divError = document.createElement('div');
    const spanError = document.createElement('span');
    document.body.append(spanError);
    document.body.append(divError);
    spanError.textContent = 'В следующих полях была допущена ошибка: ';

    const minDate = new Date(1900, 00, 01);
    const currentDate = new Date();

    let arrayOfStudents = [];
    if (localStorage.getItem('studentsTable') !== null) {
        arrayOfStudents = JSON.parse(localStorage.getItem('studentsTable'));
        arrayOfStudents.forEach(element => {
            element.birthday = new Date(element.birthday);
            addRow(element);
        });
    }

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
            isValid = false;
        }
        if (inputName.value.trim() === '') {
            isNameValid = false;
            isValid = false;
        }
        if (inputMiddleName.value.trim() === '') {
            isMiddleNameValid = false;
            isValid = false;
        }
        if (minDate.getFullYear() > yearBirthday || yearBirthday > currentDate.getFullYear() || isNaN(yearBirthday)) {
            isBirthdayValid = false;
            isValid = false;
        }
        if (inputStartYear.value < 2000) {
            isStartYearValid = false;
            isValid = false;
        }
        if (inputFaculty.value.trim() === '') {
            isFacultyValid = false;
            isValid = false;
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

    function getAge(currentDate, birthdayDate) {
        let age = 0;
        if(currentDate.getMonth() > birthdayDate.getMonth()) {
            age = currentDate.getFullYear() - birthdayDate.getFullYear();
        } else if(currentDate.getMonth() < birthdayDate.getMonth()) {
            age = currentDate.getFullYear() - birthdayDate.getFullYear() - 1;
        } else {
            if(currentDate.getDate() > birthdayDate.getDate() || currentDate.getDate() === birthdayDate.getDate()) {
                age = currentDate.getFullYear() - birthdayDate.getFullYear();
            } else if(currentDate.getDate() < birthdayDate.getDate()) {
                age = currentDate.getFullYear() - birthdayDate.getFullYear() - 1;
            }
        }

        return age;
    }

    function addRow(student) { 
        let tr = document.createElement('tr');
            
        for (let i = 0; i < 4; i++) {
            let td = document.createElement('td');
            switch(i) {
                case 0: 
                    td.textContent = student.surname + ' ' + student.name + ' ' + student.middleName;
                    break;
                case 1:
                    td.textContent = student.faculty;
                    break;
                case 2:
                    td.textContent = getAge(currentDate, student.birthday);
                    break;
                case 3:
                    let endYear = parseInt(student.startYear) + 4;
                    td.textContent = student.startYear + '-' + endYear;
                    break;
            }
            tr.append(td);
        }
        table.append(tr);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let validationResult = validate();
        let errorMessage = '';
        if (!validationResult.isValid) {
            errorMessage += validationResult.isSurnameValid ? "" : "Фамилия" + '<br>';
            errorMessage += validationResult.isNameValid ? "" : "Имя" + '<br>';
            errorMessage += validationResult.isMiddleNameValid ? "" : "Отчество" + '<br>';
            errorMessage += validationResult.isBirthdayValid ? "" : "Дата рождения" + '<br>';
            errorMessage += validationResult.isStartYearValid ? "" : "Год начала обучения" + '<br>';
            errorMessage += validationResult.isFacultyValid ? "" : "Факультет";
            divError.innerHTML = errorMessage;
        } else {
            let newStudent = createNewStudent(
                inputSurname.value.trim(),
                inputName.value.trim(),
                inputMiddleName.value.trim(),
                inputBirthday.value,
                inputStartYear.value,
                inputFaculty.value.trim()
            );
            arrayOfStudents.push(newStudent);
            addRow(newStudent);
            putStorage(arrayOfStudents);
            divError.innerHTML = "";
        }                    
        clearForm();
        console.log(arrayOfStudents);
    });

    function putStorage(someArr) {
        localStorage.setItem(`studentsTable`, JSON.stringify(someArr));
    }
});



        //#region Comments

        // let storageArr = [];
    // function storage() {
    //     // let someArray = [];
    //     // someArray = pullStorage(`studentInTable`);
    //     let j = 0;
    //     for(let i = 0; i < localStorage.length; i++) {
    //         let key = localStorage.key(i);           
    //         storageArr.push(JSON.parse(localStorage.getItem(key)));
    //         createTable(storageArr);            
    //         arrayOfRows[i].cells[0].textContent = storageArr[j].surname + ' ' + storageArr[j].name + ' ' + storageArr[j].middleName;
    //         arrayOfRows[i].cells[1].textContent = storageArr[j].faculty;
    //         arrayOfRows[i].cells[2].textContent = currentDate.getFullYear() - parseInt(storageArr[j].birthday);
    //         let endYear = parseInt(storageArr[j].startYear) + 4;
    //         arrayOfRows[i].cells[3].textContent = storageArr[j].startYear + '-' + endYear;
    //         j++;
    //         // console.log(storageArr);
    //     }

    //     // return storageArr;
    // }

        // storage();
    // putStorage(storageArr);

    // function addStudentToTable(array) {
    //     createTable(array);
    //     let i = 0;
    //     for (let j = 0; j <= arrayOfRows; j++) {
    //         arrayOfRows[j].cells[0].textContent = array[i].surname + ' ' + array[i].name + ' ' + array[i].middleName;
    //         arrayOfRows[j].cells[1].textContent = array[i].faculty;
    //         arrayOfRows[j].cells[2].textContent = currentDate.getFullYear() - array[i].birthday.getFullYear();
    //         let endYear = parseInt(array[i].startYear) + 4;
    //         arrayOfRows[j].cells[3].textContent = array[i].startYear + '-' + endYear;
    //         storageArr.push(array[i]);
    //         i++;
    //     }
    // }

    // function updateStorage() {
    //     let t = storage();
    //     console.log(t);
    // }
    // updateStorage();
    // putStorage(storageArr);

        // birthday.value = Intl.DateTimeFormat("en-US").format(new Date());

// if (inputSurname.value.trim() === '' ||
        //     inputName.value.trim() === '' ||
        //     inputMiddleName.value.trim() === '' ||
        //     inputFaculty.value.trim() === '') {
        //     console.log('ошибка');
        // } 

 // document.getElementById(0).textContent = array[i].surname + ' ' + array[i].name + ' ' + array[i].middleName;
                // document.getElementById(1).textContent = array[i].faculty;
                // document.getElementById(2).textContent = currentDate.getFullYear() - array[i].birthday.getFullYear();
                // let endYear = parseInt(array[i].startYear) + 4;
                // document.getElementById(3).textContent = array[i].startYear + '-' + endYear;

            // let a = arrayOfRows[i].cells[i]
            // a.textContent = 'bla';
            // console.log(`тут ${a}`);

            // if(rowId.id === "row 1") {
            //     document.getElementById(0).textContent = array[i].surname + ' ' + array[i].name + ' ' + array[i].middleName;
            // document.getElementById(1).textContent = array[i].faculty;
            // document.getElementById(2).textContent = currentDate.getFullYear() - array[i].birthday.getFullYear();
            // let endYear = parseInt(array[i].startYear) + 4;
            // document.getElementById(3).textContent = array[i].startYear + '-' + endYear;
            // }

            // let len = localStorage.length;
        // if(len > 0) {
        //     for(let i = 0; i < len; i++) {
        //        let key = pullStorage(`studentInTable`);
        //     }
        // }
        // for(let i = 0; i < localStorage.length; i++) {
        //     let key = localStorage.key(0);
        //     getArray = JSON.parse(localStorage.getItem(key));
        //     getArray.push(getArray[i]);
        // }
        // console.log(getArray);
        // return getArray;
        // let t = createTable(localStorage.getItem());

        //#endregion