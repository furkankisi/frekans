let cumle = prompt("Bir cümle girin:");
let sayac = {};

for (let i = 0; i < cumle.length; i++) {
    let harf = cumle[i].toLowerCase();
    if (harf >= 'a' && harf <= 'z') {
        if (sayac[harf]) {
            sayac[harf]++;
        } else {
            sayac[harf] = 1;
        }
    }
}

for (let harf in sayac) {
    console.log("Harf: " + harf + ", Sayı: " + sayac[harf]);
}
