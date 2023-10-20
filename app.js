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
    correct:'入場料'
    
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

 {
    question :'followingの意味は？',
    answers:[
    '～に続いて',
　　'～に関して',
    '～と比べて',
    '～に付随して'
    ],
    correct:'～に続いて'
    
 },

 {
    question :'refer to の意味は？',
    answers:[
    '検討する',
    '参照する',
    '研究する',
    'くつろぐ'
    ],
    correct:'参照する'
    
 },

 {
    question :'availableの意味は？',
    answers:[
    '実現できる',
    '商業の',
    '入手できる',
    '達成できる'
    ],
    correct:'入手できる'
    
 },

 {
    question :'departmentの意味は？',
    answers:[
    '工場',
    '落胆',
    '研究所',
    '部門'
    ],
    correct:'部門'
    
 },

 {
    question :'conferenceの意味は？',
    answers:[
    '会議',
    '職場',
    '大会',
    '本社'
    ],
    correct:'会議'
    
 },

 {
    question :'according toの意味は？',
    answers:[
    '～に続いて',
    '～として',
    '～によると',
    '～関して'
    ],
    correct:'～によると'
    
 },

 {
    question :'likelyの意味は？',
    answers:[
    '好きそうな',
　　'おそらく',
    '似ている',
    '違っている'
    ],
    correct:'おそらく'
    
 },

 {
    question :'offerの意味は？',
    answers:[
    '出社する',
　　'参照する',
    '返事をする',
    '申し出る'
    ],
    correct:'申し出る'
    
 },

 {
    question :'equipmentの意味は？',
    answers:[
    '機器',
　　'研究',
    '展示',
    '寄付'
    ],
    correct:'機器'
    
 },

 {
    question :'provideの意味は？',
    answers:[
    '享受する',
　　'参加する',
    '提供する',
    '購入する'
    ],
    correct:'提供する'
    
 }
];

// ランダムに5つのクイズオブジェクトを抽出
function getRandomQuizzes(quiz, num) {
  if (num > quiz.length) {
    throw new Error("要求数がリストの長さを超えています");
  }

  const shuffledQuizList = quiz.sort(() => 0.5 - Math.random()); // クイズリストをシャッフル
  return shuffledQuizList.slice(0, num); // ランダムに選択された5つのクイズを取得
}

const selectedQuizzes = getRandomQuizzes(quiz, 5);
console.log(selectedQuizzes);




const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < 10){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + "10" + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
