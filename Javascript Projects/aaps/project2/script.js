document.querySelector('#addComplaints').addEventListener('click',function(){
    let textBox=document.getElementById('complaints');
    let submitButton=document.getElementById('submit');
    let resetButton=document.getElementById('reset');
    textBox.style.display='block';
    submitButton.style.display='block';
    resetButton.style.display='block';
    resetButton.addEventListener('click',()=>{
        textBox.value='';
    })
})

