
function validateCode(event) {
    event.preventDefault();
    const code = prompt("ادخل كود الاشتراك");
    const validCode = "20062000";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://drive.google.com/drive/folders/1SWKnnhJY0w-lkTyvScTCYTvLo6cM5X87';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}
