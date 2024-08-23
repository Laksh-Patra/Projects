 const xhr= new XMLHttpRequest();

 xhr.addEventListener('load',()=>{
    console.log(xhr.response);
 });

xhr.addEventListener('Load',()=>{
    console.log(xhr.response);
});

 xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');
 xhr.send();
 

