let button = document.getElementById('myButton');
let counter = 0;

setInterval(function(){
    button.click()
    counter ++;
    document.getElementById('MyCounter').innerHTML = counter;
    console.log(counter, 'this is counter');
}, 200);
