//output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {
    console.log('クリックされました！')
});
const addBtn = document.getElementById('add-btn');
//parent-listというidを持つHTML要素を取得し定数に代入する
const parentlist = document.getElementById('parent-list');

//li要素を新しく作成する
addBtn.addEventListener('click', () => {
    const childList = document.createElement('li');
    //作成したli要素に『これはリスト要素です』というテキストを追加する
    childList.textContent = 'これはリスト要素です';
    //作成したli要素をul要素の子要素として末尾に追加する
    parentlist.appendChild(childList);
});
//count-btnというidを持つHTML要素を取得し定数に代入する
const countbtn = document.getElementById('count-btn');

//HTML要素がクリックされた時にイベント処理を実行する
countbtn.addEventListener('click', () => {

    //テキストボックスに入力された文字列を取得する
    const textBox = document.forms.textForm.textBox.value;

    //取得した文字列の文字数を出力する
    console.log(textBox.length + '文字');
})
//area-btnというidを持つHTML要素を取得し、定数に代入する
const areaBth = document.getElementById('area-btn');

//HTML要素がクリックされた時にイベント処理を実行する
areaBth.addEventListener('click', () => {
    //選択されたラジオボタンの値を取得する
    const area = document.forms.areaForm.area.value;
    //取得した値を出力する
    console.log(area);
});
//os-btnというidを持つHTML要素を取得し、定数に代入する
const osBth = document.getElementById('os-btn');

//HTML要素がクリックされた時にイベント処理を実行する
osBth.addEventListener('click', () => {
    //全てのチェックボックスを配列風のデータで取得する
    const items = document.forms.osForm.os;
    //繰り返し処理でチェックボックスを一つづつ取り出し、もし選択されていれば値を出力する
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            console.log(items[i].value);
        }
    }
});










