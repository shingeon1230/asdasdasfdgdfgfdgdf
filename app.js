/**
 * 신건 님의 인터랙티브 포트폴리오 로직
 */

// 1. 인사 알림 기능
function showAlert() {
    alert("안녕하세요! 신건의 포트폴리오에 오신 것을 환영합니다.");
}

// 2. 배경색 변경 기능 (랜덤 색상)
function changeBgColor() {
    const colors = ['#f9f9f9', '#dfe6e9', '#ffeaa7', '#fab1a0', '#dff9fb', '#e8f4fd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// 3. 로그인 시스템 로직
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
    const loginArea = document.getElementById('login-area');
    const welcomeArea = document.getElementById('welcome-area');
    const nameInput = document.getElementById('username');

    loginArea.classList.remove('hidden');
    welcomeArea.classList.add('hidden');
    nameInput.value = "";
}

// 4. 댓글 작성 및 목록 표시 로직
function addComment() {
    const input = document.getElementById('comment-input');
    const list = document.getElementById('comment-list');

    if (input.value.trim() === "") {
        alert("내용을 입력해주세요.");
        return;
    }

    // 새로운 리스트 아이템(li) 생성
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${input.value}</span>
        <button onclick="this.parentElement.remove()" style="margin-left:10px; padding:2px 5px; background:#ff7675;">삭제</button>
    `;
    
    // 목록에 추가
    list.appendChild(li);
    
    // 입력창 비우기
    input.value = "";
}

// (추가 팁) 엔터 키로 댓글 등록하기
document.getElementById('comment-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addComment();
    }
});