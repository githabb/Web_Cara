const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};



let MainImgOne = document.getElementById("MainImgOne");
let smallimg1 = document.getElementsByClassName("small-img-o");

smallimg1[0].onclick = function () {
  MainImgOne.src = smallimg1[0].src;
};
smallimg1[1].onclick = function () {
  MainImgOne.src = smallimg1[1].src;
};
smallimg1[2].onclick = function () {
  MainImgOne.src = smallimg1[2].src;
};
smallimg1[3].onclick = function () {
  MainImgOne.src = smallimg1[3].src;
};



function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
     return re.test(String(phone));
}
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const INPUT = document.querySelector('input');

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}


function updateInput() {
  if (isEmailValid(INPUT.value)) INPUT.style.borderColor = 'green';
  else INPUT.style.borderColor = 'red';
}

INPUT.addEventListener('input', updateInput);

const form = document.querySelector('form');
  const textarea = form.elements.textarea;

  form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const value = textarea.value;

    if (!value.trim()) {
      alert('Error!');
      return;
    }

    if (/\n.*\n.*\n/.test(value)) {
      alert('Error!');
      return;
    }

    form.submit();
  });





  


// const cards = document.querySelectorAll('.card'); 

// for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     card.addEventListener('mousemove', startRotate);
//     card.addEventListener('mouseout', stopRotate);
// }


// function startRotate(event) {
//   const cardItem = this.querySelector('.card-item');
//   const halfHeight = cardItem.offsetHeight / 2;

//   cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 3 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 3 + 'deg)';
// }


// function stopRotate(event) {
//     const cardItem = this.querySelector('.card-item');
    
//     cardItem.style.transform = 'rotate(0)';
// }



// let count = 0;
// // если пользователь нажал на кнопку "В корзину"
// $(".cart1-btn").on("click", function () {
//   let cart = $(".cart1-nav");
//   // находим картинку той карточки, на кнопку которой нажимает пользователь
//   let imgtodrag = $(this)
//     .parent(".buttons")
//     .parent(".content")
//     .parent(".card1")
//     .find("img")
//     .eq(0);
//   if (imgtodrag) {
//     // дублируем картинку
//     var imgclone = imgtodrag
//       .clone()
//       .offset({
//         top: imgtodrag.offset().top,
//         left: imgtodrag.offset().left
//       })
//       .css({
//         opacity: "0.8",
//         position: "absolute",
//         height: "150px",
//         width: "150px",
//         objectFit: "cover",
//         "z-index": "100"
//       })
//       .appendTo($("body"))
//       .animate(
//         {
//           top: cart.offset().top + 20,
//           left: cart.offset().left + 30,
//           width: 75,
//           height: 75
//         },
//         1000,
//         "easeInOutExpo"
//       );

//     setTimeout(function () {
//       count++;
//       $(".cart1-nav .item-count").text(count);
//     }, 1500);

//     imgclone.animate(
//       {
//         width: 0,
//         height: 0
//       },
//       function () {
//         $(this).detach();
//       }
//     );
//   }
// });
