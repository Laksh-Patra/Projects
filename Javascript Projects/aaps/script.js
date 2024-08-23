const dropZone=document.getElementById('dropZone');
const fileInput=document.getElementById('fileInput');
const fileName=document.getElementById('fileName');


dropZone.addEventListener('click',()=>{
   fileInput.click(); 
});

//The purpose of this code is to execute the handleFiles function whenever the user selects a file through the file input. The handleFiles function is designed to process the selected files, which can include tasks such as displaying the file name, validating the file type, or uploading the file to a server.
fileInput.addEventListener('change',(event)=>{

        handleFiles(event.target.files);


});

dropZone.addEventListener('dragover',(event)=>{
    event.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave',(event)=>{
    event.preventDefault();
    dropZone.classList.add('dragover');
});

