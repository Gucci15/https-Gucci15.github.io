const quiz = [
 {
    question:'anywayの意味は？',
    answers: [
    'とにかく',
    'いつでも',
    'なんとなく',
    'どの道も'
    ],
    correct: 'とにかく'
 },
 {
    question:'shipの意味は？',
    answers: [
    '拡大する',
    '約束する',
    '飛ばす',
    '出荷する'
    ],
    correct: '出荷する'
    
 },
 {
    question:'experiencedの意味は？',
    answers: [
    '力がある',
    '経験豊富な',
    '成功しそうな',
    '見たことがある'
    ],
    correct: '経験豊富な'
　},

 {
    question :'alternativeの意味は？',
    answers:[
    '母国語の',
    '分かれた',
    '違いがある',
    '代わりの'
    ],
    correct:'代わりの'
    
 },

 {
    question :'admissionの意味は？',
    answers:[
    '入場料',
    '申込書',
    '役割',
    '参照'
    ],
    correct:'入場量'
    
 },

 {
    question :'temporaryの意味は？',
    answers:[
    '別々の',
    '理想的な',
    '永続的な',
    '一時的な'
    ],
    correct:'一時的な'
    
 },

 {
    question :'branchの意味は？',
    answers:[
    '昼食',
    '社内文書',
    '展示物',
    '支社'
    ],
    correct:'支社'
    
 },

 {
    question :'leadingの意味は？',
    answers:[
    'トップの',
    '意図された',
    '異なった',
    '伝統的な'
    ],
    correct:'トップの'
    
 },

 {
    question :'expenseの意味は？',
    answers:[
    '外出',
    '出張',
    '経費',
    '支援'
    ],
    correct:'経費'
    
 },

 {
    question :'laboratoryの意味は？',
    answers:[
    '工場',
　　'職場',
    '研究所',
    '本社'
    ],
    correct:'研究所'
    
 },

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映される
const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttunIndex = 0;
    while(buttunIndex < buttonLength){
        $button[buttunIndex].textContent = quiz[quizIndex].answers[buttunIndex];
        buttunIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => { if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解◎');
    score++;
  } else {
    window.alert('残念×');
  }

  quizIndex++;
  
  if(quizIndex < quizLength) {
    setupQuiz();  
  } else{
   window.alert('終了です。あなたの正解数は'+ score + '/'+ quizLength + 'です。お疲れ様でした。');
  }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler (e);
    });
    handlerIndex++;
}

//ボタンをクリックしたら正誤判定


