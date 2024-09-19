//head要素を取得し、中身を出力する
console.log(document.head);

//body要素を取得し、中身を出力する
console.log(document.body);

//windowオブジェクトの中身を出力する
console.log(window);

//HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));

//HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));

//複数のHTML要素を1つずつ取得し中身を出力する
const headings = document.getElementsByClassName('heading');
for (let i = 0; i < headings.length; i++) {
    console.log(headings[i]);
}

//HTML要素をCSSセレクタで取得し、中身を出力する
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

//HTML要素を全て取得する
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

//新しくli要素を作成し、定数に代入
const li = document.createElement('li'); // 修正点: createElementを使用

//作成したli要素にテキストを追加する
li.textContent = 'JavaScriptで新しく作成したリスト3';

//またはHTMLを追加する場合は、以下のようにinnerHTMLを使います
// li.innerHTML = '<a href="#">JavaScriptで新しく作成したリスト3</a>';

//ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);

//再び新しいli要素を作成し定数に代入する
const li2 = document.createElement('li'); // 修正点: createElementを使用

//作成したli要素にテキストを追加する
li2.textContent = 'JavaScriptで新しく作成したリスト4';

//ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li2);


