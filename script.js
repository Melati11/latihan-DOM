let count = 0;
let imageDisplayed = false;
    
  function increment(){
    if (count < 7) {
        count++;
        document.getElementById('count').innerText = count;
    
    // document.getElementById('count').innerText++;

       if (count === 7) {
        displayImage();
        disableButton();
     }
   }
}
    // if (document.getElementById('count').innerText == 7) {
    function displayImage() {
        imageDisplayed = true;
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    }


  function welcome(){
    alert('Sim salabim muncul lah elemen-elemen HTML');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
    document.getElementById('incrementButton').disabled = false; 
  }
//   document.getElementById('incrementButton').onclick = increment;
   function disableButton() {
    document.getElementById('incrementButton').disabled = true
   }
   window.addEventListener('load', welcome);
   document.getElementById('incrementButton').addEventListener('click', increment);
//   document.body.onload = welcome