var x = "";
for (i = 1; i <= 9; i++) {
    x = x + document.getElementById('dummyData').innerHTML;
}
document.getElementById('dummyData').innerHTML = x;