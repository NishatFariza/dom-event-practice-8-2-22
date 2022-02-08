function makeRed() {
    document.body.style.backgroundColor = "red";
  }


  function makeBlue(){
      document.body.style.backgroundColor ='blue';
  }

  const blueButton = document.getElementById('make-blue-button');
  blueButton.onclick = makeBlue;


  const greenButton =document.getElementById('make-green-button');
  greenButton.onclick =function makeGreen(){
      document.body.style.backgroundColor ='green';
  }
  const goldenRodButton =document.getElementById('make-goldenRod-button');
  goldenRodButton.addEventListener('click',  goldenButton);
  function goldenButton(){
      document.body.style.backgroundColor = 'goldenrod';
  }
  const hotPinkButton =document.getElementById('make-hot-pink-button');
  hotPinkButton.addEventListener('click',  pinkButton);
  function pinkButton(){
      document.body.style.backgroundColor = 'hotpink';
  }


  //direct shortcart
 document.getElementById('make-light-blue-button').addEventListener('click', function (){
    document.body.style.backgroundColor = 'lightblue';
})
 