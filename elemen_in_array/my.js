let a = +prompt("nhập phần tử ");
let array = [5,2,3,9,-5];
let check = true;
for (let i = 0; i <array.length; i++){
    if (a ===array[i]) {
        check = true
    }
    else {check = false}
   }
if (check){
    document.write( a + "đây là phần tử mảng");
}
else {
    document.write( a + "đây không phải phần tử mảng");
}