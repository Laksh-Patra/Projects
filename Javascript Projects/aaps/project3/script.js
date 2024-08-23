document.getElementById('generate-password').addEventListener('click',function(){
    const length=12;//length of th password
    const charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]?";
    let password="";
    
    
    for(let i =0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        password +=charset[randomIndex];
    }
    document.getElementById('password-output').value =password;
    //passwordInput.value = password;

});
document.getElementById('copy-icon').addEventListener('click', function() {
    const passwordInput = document.getElementById('password-output');
    passwordInput.select();
    navigator.clipboard.writeText(passwordInput.value).then(function() {
        alert('Password copied to clipboard!');
    }).catch(function(err) {
        console.error('Failed to copy password: ', err);
    });
});