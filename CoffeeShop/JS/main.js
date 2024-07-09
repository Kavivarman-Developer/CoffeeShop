// Time Function

const button = document.getElementById('bttn');

button.addEventListener('click' , timeFunction);

function timeFunction () {
    document.getElementById('demo').innerHTML = Date();
}

// nav bar function

let btn = document.querySelector('.arrow'),
    links = document.querySelector('.nav-links');

    btn.addEventListener('click' , () => {

        links.classList.toggle('display')

        btn.children[0].classList.toggle('toggle1');
        btn.children[1].classList.toggle('toggle2');
        btn.children[2].classList.toggle('toggle3');
    })


    //image chaning

 let myImage = document.getElementById('change');

     myImage.onclick = function() {
          
        myImage.classList.toggle("mbg");

    };
        
       
    


  