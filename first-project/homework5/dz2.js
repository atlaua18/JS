let select = document.createElement('select');

let massObjects = [
    {value: 1, label: "some123 1"},
    {value: 2, label: "some 2"},
    {value: 3, label: "some 3"},
    {value: 4, label: "some 4"},
    {value: 5, label: "some 5"},
    {value: 6, label: "some 6"},
    {value: 7, label: "some 7"},
    {value: 8, label: "some 8"}
];

// let i = 0;
// while(i < 10) {
//     let option = document.createElement('option');

// }
for (let i=0; i<massObjects.length; i++) {
    let option = document.createElement('option');
    option.value = massObjects[i].value;
    option.innerHTML = massObjects[i].label;
    select.append(option);
    //massOption.push(document.createElement('option'));
}

let option  = document.createElement('option');
// {
//     value: "some",
//     label: "some label"
// }
//option.value = value;
option.innerHTML = "<b>SOME TEXT</b>";
select.append(option);
// for(let i = 0; i<mass.length; i++ ) {
//     option[i].value = mass[i].value; 
//     option[i].innerHTML = mass[i].label;
// }

//my_div = document.getElementById("div");
//document.body.insertBefore(select, my_div); //.append(select);
