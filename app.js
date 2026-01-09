// 1. 인사 알림
function showAlert() {
    alert("안녕하세요, 신건의 포트폴리오를 방문해주셔서 감사합니다!");
}

// 2. 배경색 변경 (부드러운 색상 위주)
function changeBgColor() {
    const colors = ['#f4f7f6', '#dfe6e9', '#ffeaa7', '#fab1a0', '#dff9fb', '#f1f2f6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// 3. 로그인 시스템
function login() {
    const nameInput = document.getElementById('username');
    const loginArea = document.getElementById('login-area');
    const welcomeArea = document.getElementById('welcome-area');
    const userInfo = document.getElementById('user-info');

    if (nameInput.value.trim() === "") {
        alert("이름을 입력해주세요!");
        return;
    }

    userInfo.innerText = nameInput.value;
    loginArea.classList.add('hidden');
    welcomeArea.classList.remove('hidden');
}

function logout() {
    document.getElementById('login-area').classList.remove('hidden');
    document.getElementById('welcome-area').classList.add('hidden');
    document.getElementById('username').value = "";
}

// 4. 댓글 작성 및 삭제
function addComment() {
    const input = document.getElementById('comment-input');
    const list = document.getElementById('comment-list');

    if (input.value.trim() === "") {
        alert("메시지를 입력해주세요.");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${input.value}</span>
        <button onclick="this.parentElement.remove()" style="background:#e74c3c; padding:5px 10px; font-size:12px;">삭제</button>
    `;
    
    list.appendChild(li);
    input.value = "";
}

// 엔터 키 입력 시 댓글 등록 이벤트
document.getElementById('comment-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addComment();
    }
});