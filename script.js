/* Чтобы посчитать среднюю сумму продаж нам нужно создать формулу с arrow function, делим на 3 потому что мы считаем квартал */

const getAverage = (x,y,z) => (x + y + z) / 3; 


/*the first quarter */
/* Далее считаем внедряя формулу выше */

const dep1AverSales1 = getAverage(35467,29842,38501); /* 34603 */
const dep2AverSales1 = getAverage (70533,50121,33899); /* 30497 */

console.log(dep1AverSales1,dep2AverSales1); 
/* Проверяем в консоли все ли работает корректно */ 

/*the second quarter */

const dep1AverSales2 = getAverage(50301,21984,19207); /* 51517 */
const dep2AverSales2 = getAverage (72381,41562,29465); /* 47802 */

console.log(dep1AverSales2,dep2AverSales2); 

/* Создаем функцию Print Bonus которая принимает средние продажи каждого отдела как параметры делаем при помощи expression но можно и по другому мы должны проверить какой отдел продал больше мы делаем это с помощью if statement, проверям с иф стейтмент если деп 1 больше чем деп 2 создаем еще добавим  1 констранту дифф и присвоим  деп 1 - деп 2, после этого мы можем высчитать % при помощи деления этой разности на меньшее число в данном случае это деп 2 потому что мы сами задали такой параметр  */ 

const printBonus = function(dep1AverSales,dep2AverSales) {
if(dep1AverSales > dep2AverSales) {
   const diff = dep1AverSales - dep2AverSales;
   const percent = diff / dep2AverSales * 100; 
   if(percent >= 30) {
    console.log(`Dept 1 will get a bonus ${percent}%`);
   } else {
      console.log('No bonus in this quarter');
   }
}


 else if(dep2AverSales > dep1AverSales) {
   const diff = dep2AverSales - dep1AverSales;
   const percent = diff / dep1AverSales * 100; 
   if(percent >= 30) {
    console.log(`Dept 2 will get a bonus ${percent}%`);
   } else {
      console.log('No bonus in this quarter');
   }
} else {console.log('No bonus in this quarter');}
}

/* Проверяем в консоли все ли работает */ 
printBonus(dep1AverSales1, dep2AverSales1); 
printBonus(dep1AverSales2, dep2AverSales2); 

