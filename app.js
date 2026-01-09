function showAlert() {
    alert("반갑습니다, 신건입니다!");
}

function changeBgColor() {
    const colors = ['#dfe6e9', '#ffeaa7', '#fab1a0', '#dff9fb', '#f9f9f9'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function login() {
    const name = document.getElementById('username').value;
    if (!name) return alert("이름을 입력하세요!");
    document.getElementById('user-info').innerText = name;
    document.getElementById('login-area').classList.add('hidden');
    document.getElementById('welcome-area').classList.remove('hidden');
}

function logout() {
    document.getElementById('login-area').classList.remove('hidden');
    document.getElementById('welcome-area').classList.add('hidden');
}

function addComment() {
    const input = document.getElementById('comment-input');
    if (!input.value) return;
    const li = document.createElement('li');
    li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">X</button>`;
    document.getElementById('comment-list').appendChild(li);
    input.value = "";
}