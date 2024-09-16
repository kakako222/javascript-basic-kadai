const today = new Date();

const year = today.getFullYear(); // 年の取得

const month = today.getMonth() + 1; // 月の取得、月は0から始まるため+1する

const day = today.getDate(); // 日付（日）の取得

console.log(year + '年' + month + '月' + day + '日');
