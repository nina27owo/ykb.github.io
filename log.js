function logon() {
    let a = document.getElementById('duname').value
    let b = document.getElementById('dpwd').value
    let spwd = localStorage.getItem(a)

    if (spwd && spwd === b) {
        window.location.href = 'kb.html'
    } else {
        alert('用户名或密码错误，请重试。')
    }
}
function login() {
    const submitButton = document.querySelector('input[type="submit"]')
    const username = document.getElementById('uname').value
    const password = document.getElementById('pwd').value
    if (username && password) {
        localStorage.setItem(username, password)
        alert('注册成功！')
    } else {
        alert('请输入用户名和密码。')
    }

}