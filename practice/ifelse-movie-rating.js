/* 
0-32=F
33-39=D
40-49=C
50-59=B
60-69=A-
70-79=A
80-100=A+
*/


var result = -1;

if (result >= 0 && result <= 100) {
    if (result >= 0 && result <= 32) {
        console.log('F')
    } else if (result >= 33 && result <= 39) {
        console.log('D')
    } else if (result >= 40 && result <= 49) {
        console.log('C')
    } else if (result >= 50 && result <= 59) {
        console.log('B')
    } else if (result >= 60 && result <= 69) {
        console.log('A-')
    } else if (result >= 70 && result <= 79) {
        console.log('A')
    } else if (result >= 80 && result <= 100) {
        console.log('A+')
    } 
} else {
    console.log('Bro 0 theke 100 er vitor result hoy. so 0 theke 100 er vitor tomar prapto number dao')
}