//Тренажер по JavaScript -> Функции -> Задание 5
//Напишите функцию getMonth(n), которая принимает номер месяца и возвращает его название.
//Например getMonth(12) ⇒ 'December'. Используйте if/else 

export function getMonth(n){
    let month = "";
    if(n === 1){
        month = "January";
        return month;
    }else if(n === 2){
        month = "February";
        return month;
    }else if(n === 3){
        month = "March";
        return month;
    }else if(n === 4){
        month = "April";
        return month;
    }else if(n === 5){
        month = "May";
        return month;
    }else if(n === 6){
        month = "June";
        return month;
    }else if(n === 7){
        month = "July";
        return month;
    }else if(n === 8){
        month = "August";
        return month;
    }else if(n === 9){
        month = "September";
        return month;
    }else if(n === 10){
        month = "October";
        return month;
    }else if(n === 11){
        month = "November";
        return month;
    }else if(n === 12){
        month = "December";
        return month;
    }
}

