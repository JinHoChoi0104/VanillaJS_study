const toDo_form = document.getElementById("todo-form");
const toDo_input = toDo_form.querySelector("input");
const toDo_list = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringfy: 데이터를 string으로 저장하고 싶을 때 사용

}

function deleteToDo(event){ //event는 어떤 버튼이 클릭 됬는지 알려준다
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(new_todo){
    const li = document.createElement("li"); 
    /* 
    "li"는 li여야만 한다
    변수 li는 이름 뭐여도 상관 없다!
    */
    const span = document.createElement("span");
    span.innerText = new_todo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDo_list.appendChild(li);
}

function handleToDoSumbmit(event){
    event.preventDefault();
    const new_todo = toDo_input.value;
    toDo_input.value = "";
    toDos.push(new_todo);
    paintToDo(new_todo);
    saveToDos();
}

toDo_form.addEventListener("submit", handleToDoSumbmit);



const save_toDos = localStorage.getItem(TODOS_KEY);

if(save_toDos != null){ //이미 입력 된 데이터가 존재한다면
    const parsed_toDos = JSON.parse(save_toDos); //array 생성
    toDos = parsed_toDos; //기존에 있던 데이터들도 복제해서 넣어준다
    parsed_toDos.forEach(paintToDo); //기존 데이터들 출력
    //forEach(): 각각의 원소들에 대하여 함수를 실행 할 수 있게 해준다.
    //(item) => console.log("this is", item) //arrow function
}


