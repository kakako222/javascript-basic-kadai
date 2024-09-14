/**< ランダムに数字を生成->numに格納 */
let num = Math.floor(Math.random() * 50) + 1;

if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}
//変数(num)が3の倍数の場合： “3の倍数です”
else if (num % 3 === 0) {
    console.log('3の倍数です')
}
//変数(num)が5の倍数の場合： “5の倍数です”
else if (num % 5 === 0) {
    console.log('5の倍数です')
}
// それ以外は変数（num）を出力する
else {
    console.log(num);
}