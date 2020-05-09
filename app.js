document.querySelector('.get-jokes').addEventListener('click',getjokes);
function getjokes(e){
    
    const number=document.querySelector('input[type="number"]').value;
    
    const xhr=new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload=function(){
        if(this.status===200){
            const response=JSON.parse(this.responseText);
            let output='';
            if(response.type==="success"){
                response.value.forEach(function(joke)
                {
                    output=output+`<li>${joke.joke}</li>`
                });
            }
            else {
                `<li>Something went wrong!!</li>`
            };
            document.querySelector('.jokes').innerHTML=output;
        }

    };
    xhr.send();

    
    
    
    e.preventDefault();
}