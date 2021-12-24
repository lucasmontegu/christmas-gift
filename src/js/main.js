// Load Bootstrap JS
import bootstrap from 'bootstrap'

// Load Styles
import '../scss/main.scss';


// App code

const cards = window.document.querySelectorAll('.options');

cards.forEach(btn => {
  btn.addEventListener('click', () => {

    if (btn.attributes["data-option"].value === 'incorrect') {
      Swal.fire({
        title: 'Deberías volver a intentarlo ¿no crees?',
        html: '<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_qwNa14.json"  background="transparent"  speed="0.8"  loop  autoplay></lottie-player>',
        confirmButtonText: 'Volver a intentar 🥲',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    if (btn.attributes["data-option"].value === 'correct') {
      Swal.fire({
        title: 'Felicidades!!! 🎉🎉🎉',
        html: '<lottie-player src="https://assets3.lottiefiles.com/packages/lf20_dr7bgtqy.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>',
        confirmButtonText: 'Reclama tu premio 🎁',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Que emoción!!! 🥳🥳🥳',
            text: 'Abri el enlace',

            confirmButtonText: '<a class="text-decoration-none text-white" target="_blank" href="https://drive.google.com/file/d/1ykJc1W1_so28kt9-mS5jXXH0AMTmwhyX/view?usp=sharing">Yen2</a>',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then({

          })
        }
      })
    }
  })
})