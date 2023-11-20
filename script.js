const questions = [
  { description: "주어진 ID를 가진 HTML 요소를 찾습니다.", method: "getElementById" },
  { description: "주어진 클래스 이름에 해당하는 모든 HTML 요소를 반환합니다.", method: "getElementsByClassName" },
  { description: "주어진 태그 이름에 해당하는 모든 HTML요소를 반환합니다.", method: "getElementsByTagName" },
  { description: "주어진 CSS 선택자에 해당하는 첫 번쨰 HTML 요소를 반환합니다.", method: "querySelector" },
  { description: "주어진 CSS 선택자에 해당하는 모든 HTML 요소를 반환합니다. NodeList 형태로 반환됩니다. 인덱스로 접근 할 수 있습니다.", method: "querySelectorAll" },
  { description: "새 HTML 요소를 생성합니다.", method: "createElement" },
  { description: "주어진 노드를 특정 요소의 하위 요소로 추가합니다.", method: "appendChild" },
  { description: "주어진 노드를 특정 요소의 하위 요소에서 제거합니다.", method: "removeChild" },
  { description: "HTML 요소의 속성을 설정하거나 변경합니다", method: "setAttribute" },
  { description: "HTML 요소의 속성 값을 가져옵니다.", method: "getAttribute" },
  { description: "HTML 요소에 이벤트 리스너를 추가합니다.", method: "addEventListener" },
  { description: "이벤트 리스너를 제거합니다.", method: "removeEventListener" },
  { description: "HTML 요소의 내용을 읽거나 설정합니다.", method: "innerHTML" },
  { description: "HTML 요소의 텍스트 내용을 읽거나 설정합니다.", method: "innerText" },
  { description: "HTML 요소의 텍스트 내용을 가져오거나 설정하는 속성입니다.", method: "textContent" },
  { description: "HTML 요소의 스타일 속성을 읽거나 설정합니다.", method: "style" },
  { description: "HTML 요소의 클래스를 조작하는데 사용됩니다. add(), remove(), toggle() 과 같은 메서드를 사용하여 클래스를 추가하거나 제거할 수 있습니다.", method: "classList" },
  { description: "요소에 포커스를 설정합니다. 주로 폼 요소나 키보드 접근성을 위해 사용됩니다.", method: "focus" },
  { description: "문자열을 결합합니다, 배열을 결합하여 새로운 배열을 반환합니다.", method: "concat" },
  { description: "문자열을 대문자로 변환합니다.", method: "toUpperCase" },
  { description: "문자열을 소문자로 변환합니다.", method: "toLowerCase" },
  { description: "주어진 인덱스의 문자를 반환합니다.", method: "charAt" },
  { description: "지정한 부분 문자열의 첫 번째 발생 위치를 찾습니다, 배열에서 주어진 요소의 인덱스를 찾습니다.", method: "indexOf" },
  { description: "문자열의 일부를 복사하여 새로운 문자열을 생성합니다, 배열의 일부를 복사하여 새로운 배열을 생성합니다.", method: "slice" },
  { description: "문자열 내의 검색된 부분 문자열을 대체합니다.", method: "replace" },
  { description: "문자열을 지정한 구분자로 분할하여 배열로 반환합니다.", method: "split" },
  { description: "문자열의 양쪽 공백을 제거합니다.", method: "trim" },
  { description: "배열 끝에 요소를 추가합니다.", method: "push" },
  { description: "배열의 마지막 요소를 제거하고 반환합니다.", method: "pop" },
  { description: "배열의 시작에 요소를 추가합니다.", method: "shift" },
  { description: "배열의 첫 번째 요소를 제거하고 반환합니다.", method: "unshift" },
  { description: "배열에서 요소를 추가, 삭제, 또는 교체합니다.", method: "splice" },
  { description: "배열 요소에 대한 변환 작업을 수행하고 새로운 배열을 반환합니다. 원본 배열을 변경하지 않고, 새로운 배열을 반환한다는 점에서 forEach와 같은 다른 배열 메소드와 구별됩니다.", method: "map" },
  { description: "배열 오소에 대한 반복 작업을 수행합니다.", method: "forEach" },
  { description: "배열을 정렬합니다.", method: "sort" },
  { description: "배열의 요소를 역순으로 정렬합니다.", method: "reverse" },
  { description: "주어진 조건을 만족하는 배열 요소를 필터링하여 새로운 배열을 반환합니다.", method: "filter" },
  { description: "배열 요소 중 하나라도 주어진 조건을 만족하는지 확인합니다.", method: "some" },
  { description: "주어진 조건을 만족하는 첫 번째 배열 요소를 반환합니다.", method: "find" },
  { description: "배열에 주어진 요소가 포함되어 있는지 확인합니다.", method: "includes" },
  { description: "배열의 요소를 문자열로 결합하고 구분자를 사용하여 연결합니다.", method: "join" },
  { description: "배열의 각 요소에 대해 주어진 함수를 적용해 하나의 결과값을 도출하는데 사용됩니다", method: "reduce" },
  { description: "주어진 값이 배열인지 확인합니다.", method: "isArray" },
  { description: "배열과 같은 형태의 객체나 반복 가능한 객체를 배열로 변환하는데 사용됩니다. 유사 배열 객체 또는 이터러블을 배열로 변환합니다.", method: "Array.from" },
];

let life = 3;
let score = 0;
let ranDomIndex;

const feedBack = document.getElementById("feedback");
const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const restartBtn = document.getElementById("restartButton");
const scoreEl = document.getElementById("score");
const lifeEl = document.getElementById("life");

function random() {
  ranDomIndex = Math.floor(Math.random() * questions.length);
  return questions[ranDomIndex];
}

function displayQuestion() {
  const question = random();
  document.getElementById("question").innerText = question.description;
  answer.value = "";
  feedBack.innerText = "";
  scoreEl.innerText = score;
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value;
  const correctAnswer = questions[ranDomIndex].method;

  console.log(userAnswer);
  console.log(correctAnswer);

  if (userAnswer == correctAnswer) {
    score += 30;
    displayQuestion();
  } else {
    feedBack.innerText = "틀렸습니다. 다시 시도해보세요!";
    life--;
    lifeEl.innerText = life;

    console.log(life);
    console.log(score);
    if (life === 0) {
      endGame();
    }
  }
}

function enter(event) {
  if (event.keyCode === 13) {
    checkAnswer();
  }
}

answer.addEventListener("keypress", enter);
btn.addEventListener("click", checkAnswer);

function restartGame() {
  score = 0;
  life = 3;
  displayQuestion();
  answer.addEventListener("keypress", enter);
  btn.addEventListener("click", checkAnswer);

  restartBtn.style.display = "none";
}

function endGame() {
  btn.removeEventListener("click", checkAnswer);
  answer.removeEventListener("keypress", enter);
  feedBack.innerText = "게임 오버!";
  restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", restartGame);

window.onload = displayQuestion;
