const form = document.querySelector('form');
const s=document.createElement('p');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    s.innerHTML='';
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    if(height===''||height< 0 || isNaN(height)){
        s.appendChild(document.createTextNode(`not valid height ${height}`));
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        s.appendChild(document.createTextNode(`not valid weight ${weight}`));
    }
    else{
        let bmi= (weight/((height*height)/10000)).toFixed(2);
        s.appendChild(document.createTextNode(`BMI is ${bmi}`));
    }
    document.querySelector('#results').appendChild(s);
})