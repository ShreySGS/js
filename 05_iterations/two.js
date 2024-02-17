// forin cant be used on maps
const myObj = {
    g1 : 'NfS',
    g2 : 'Solo'
}

for (const key in myObj) {
    // console.log(key, ':-', myObj[key]);
}

const arr = [1, 2, 3, 4, 5]

for (const key in arr) {
      console.log(arr[key]);//key -> pos
}
