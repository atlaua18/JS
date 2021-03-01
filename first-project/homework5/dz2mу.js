document.addEventListener('DOMContentLoaded', function() {
    let select = document.createElement('select');
    let option;
    
    document.body.append(select);
    // select.innerHTML = option; // <select>[object HTMLOptionElement]</select>
    
    let ingredients =  [
        {value: 'ing1', label: "лаваш"},
        {value: 'ing2', label: "фарш"},
        {value: 'ing3', label: "лук"},
        {value: 'ing4', label: "морковь"},
        {value: 'ing5', label: "перец"},
        {value: 'ing6', label: "соус"},
    ]

    function getIngredients(someArray) {

        for(let i = 0; i < someArray.length; i++) {
            option = document.createElement('option');
            option.value = someArray[i].value;
            option.textContent = someArray[i].label;
            select.append(option);
        }
    }

    getIngredients(ingredients);
});