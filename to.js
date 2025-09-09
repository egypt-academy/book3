
function validateCode(event) {
    event.preventDefault();
    const code = prompt("ادخل كود الاشتراك");
    const validCode = "172018";

    if (code === validCode) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://drive.google.com/drive/folders/1D8Ij-Q_exWqaugeI09WNqluZL_Otrmp7';
    } else {
        alert('كود غير صحيح');
    }
    return false;
}

