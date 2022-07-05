

function AgreeLogOut() {
    document.getElementById("log-out-form").style.display = "none";
    document.getElementById("Login").style.display = "block";
}

function DisagreeLogOut() {
    alert('Bạn là thất bại của tạo hóa, Trái Đất không chào đón bạn 😏');
}

function ForgetPass(){
    alert('Đúng là thất bại của tạo hóa mà, có cái mật khẩu cũng quên thì làm ăn được cái trò trống giề');
}

function genderChanged(obj) {
    var value = obj.value;
    if(value ==='earth'){
        document.body.style.backgroundImage  = "url('Pic/earth.jpg')" ;
        document.body.style.backgroundImage.style.width=100;
        document.body.style.backgroundImage.style.height=auto;
    }
    if(value ==='heaven'){
        document.body.style.backgroundImage  = "url('Pic/heaven.jpg')" ;
        document.body.style.backgroundImage.style.width=100;
        document.body.style.backgroundImage.style.height=auto;
    }
    if(value ==='hell'){
        document.body.style.backgroundImage  = "url('Pic/hell.jpg')" ;
        document.body.style.backgroundImage.style.width=100;
        document.body.style.backgroundImage.style.height=auto;
    }
    if(value ==='mars'){
        document.body.style.backgroundImage  = "url('Pic/mars.png')" ;
        document.body.style.backgroundImage.style.width=100;
        document.body.style.backgroundImage.style.height=auto;
    }
}