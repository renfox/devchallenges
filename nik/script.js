const playHeader = document.querySelector('.box a');
const headerClass = document.querySelector('header');
const aboutMe = document.querySelector('#aboutMe');
let intervalId;
let e = 0;
let b = 0;

function sayHi(id, cls) {
    const ids = document.querySelector(id);
    ids.removeAttribute('hidden');
    ids.classList.add(cls);
}

function OpsMinus(elem,interval = 10, times) {
    function isOps() { 
        // увеличиваем счетчик на 0.1 каждый раз       
        e -= 0.1;
        // применяем к стилям элемента
        elem.style.opacity = e;
        if (e <= 0) {
          // Останавливаем анимацию, очистив интервал
          clearInterval(intervalId);
        }        
      }
      // оборачиваем в setTimeout чтобы функция запустилась после нужной задержки
      setTimeout(function() {
        // Останавливаем анимацию, если она уже запущена
        clearInterval(intervalId);
        // Сбрасываем положение счетчика
        e = 1;
        // Вызываем функции isOps() каждую 1 секунду и сохраняем идентификатор интервала в переменной
        intervalId = setInterval(isOps, interval );
        return intervalId;
      }, times);
}

function OpsPlus(elem, interval, times) {
    function isOps() { 
        elem.removeAttribute('hidden');
        // увеличиваем счетчик на 0.1 каждый раз       
        e += 0.1;
        // применяем к стилям элемента
        elem.style.opacity = e;
        if (e >= 1) {
          // Останавливаем анимацию, очистив интервал
          clearInterval(intervalId);
        }
      }
      // оборачиваем в setTimeout чтобы функция запустилась после нужной задержки
      setTimeout(function startAnimation() {
        // Останавливаем анимацию, если она уже запущена
        clearInterval(intervalId);
        // Сбрасываем положение счетчика
        e = 0;
        // Вызываем функции isOps() каждую 1 секунду и сохраняем идентификатор интервала в переменной
        intervalId = setInterval(isOps, interval);
      }, times);
}

playHeader.addEventListener('click', function() { 
    const bgBox = document.querySelector('.box'); 
    headerClass.classList.add("anim-header");
    playHeader.textContent = '';
    bgBox.style.backgroundImage = "url(/nik/img/nik.jpg)"; 
    
    
    setTimeout(function() { sayHi('#hello', 'anim-text'); }, 9000);
    setTimeout(function() { sayHi('#myName', 'anim-text'); }, 14000);
    
    OpsPlus(aboutMe, 10, 18000);    
      
})

aboutMe.addEventListener('click', function() {    
const hello = document.querySelector('#hello');
const myName = document.querySelector('#myName');
    myName.innerHTML = myName.innerHTML.replace(/^.*Андра/, "Андра");
    myName.classList.add("isReplace");
    hello.classList.add("isOpacity");
    
    function isTop() { 
        // увеличиваем счетчик на 0.1 каждый раз       
        e -= 1;
        // применяем к стилям элемента
        myName.style.top = e + '%';
        if (e <= 6) {
          // Останавливаем анимацию, очистив интервал
          clearInterval(intervalId);
        }
      }
      // оборачиваем в setTimeout чтобы функция запустилась после нужной задержки
      setTimeout(function startAnimation() {
        // Останавливаем анимацию, если она уже запущена
        clearInterval(intervalId);
        // Сбрасываем положение счетчика
        e = 12;
        // Вызываем функции isOps() каждую 1 секунду и сохраняем идентификатор интервала в переменной
        intervalId = setInterval(isTop, 10);
        return intervalId;
      }, 4000);

      OpsMinus(aboutMe, 10,  6000)

    /*  function isOps() { 
        const likeCoffee = document.querySelector('.likeCoffee')
        // увеличиваем счетчик на 0.1 каждый раз       
        e += 1;
        // применяем к стилям элемента
        likeCoffee.style.opacity = e;
        if (e >= 1 ) {
          // Останавливаем анимацию, очистив интервал
          clearInterval(intervalId);
        }               
      }
      // оборачиваем в setTimeout чтобы функция запустилась после нужной задержки
      setTimeout(function() {
        // Останавливаем анимацию, если она уже запущена
        clearInterval(intervalId);
        // Сбрасываем положение счетчика
        e = 0;
        // Вызываем функции isOps() каждую 1 секунду и сохраняем идентификатор интервала в переменной
        intervalId = setInterval(isOps, 30);
        return intervalId;
      }, 6000); */
      setTimeout(function() { sayHi('#likeCoffee', 'anim-text'); }, 8000);
      setTimeout(function() { sayHi('#likeCoffee', 'anim-text30'); }, 8000);
      setTimeout(function(){
        document.querySelector('#likeCoffee').classList.add("trCoffee");
      }, 13000);

      const bgCofee = document.querySelector('.coffee');
      OpsPlus(bgCofee, 100, 19000)

      setTimeout(function() { sayHi('#likeAnime', 'anim-text'); }, 24000);
      setTimeout(function() { sayHi('#likeAnime', 'anim-text20'); }, 24000);
      setTimeout(function(){
        document.querySelector('#likeAnime').classList.add("trAnime");
      }, 26000);
      const bgAnime = document.querySelector('.anime');
      OpsPlus(bgAnime, 100, 31000)

      setTimeout(function() { sayHi('#likePers', 'anim-text'); }, 37000);
      setTimeout(function() { sayHi('#likePers', 'anim-text30'); }, 37000);
      setTimeout(function(){
        document.querySelector('#likePers').classList.add("trPerson");
      }, 40000);
      const bgPerson = document.querySelector('.person');
      OpsPlus(bgPerson, 100, 45000);

      OpsPlus(aboutMeTwo, 20, 51000); 
});

const aboutMeTwo = document.querySelector('#aboutMe2')
aboutMeTwo.addEventListener('click', function() {
    aboutMeTwo.removeAttribute('hidden');
    OpsMinus(aboutMeTwo, 10,  2000);
    setTimeout(function() { sayHi('#desc1', 'anim-text'); }, 5000);
    setTimeout(function() { sayHi('#desc1', 'anim-text50'); }, 5000);
    setTimeout(function() { sayHi('#desc2', 'anim-text'); }, 9000);
    setTimeout(function() { sayHi('#desc2', 'anim-text50'); }, 9000);
    
    
      setTimeout(function(){
        document.querySelector('.desc2').classList.add("trDesc2");
      }, 13000);
      const bgDesc2 = document.querySelector('.desc2-block');
      OpsPlus(bgDesc2, 100, 15000);

      const desc1 = document.querySelector('#desc1');
      OpsMinus(desc1, 10,  17000);

      setTimeout(function() { sayHi('#likesewing', 'anim-text'); }, 21000);
    setTimeout(function() { sayHi('#likesewing', 'anim-text20'); }, 21000);
    setTimeout(function() { sayHi('#likesewing', 'trSewing'); }, 23000);
    const bntModal = document.querySelector('.btnModal');
    bntModal.removeAttribute('hidden');
    OpsPlus(bntModal, 10, 27500); 
  });

document.getElementById('open-modal').addEventListener('click', function () {
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');

  modal.style.display = 'block';
  OpsPlus(modal, 100, 1000); 
  setTimeout(() => {
      modalContent.style.transform = 'translateY(-50%) rotateY(0deg)';
  }, 100);

  modal.addEventListener('click', function (event) {
      if (event.target === modal) {
          modalContent.style.transform = 'translateY(-50%) rotateY(-180deg)';
          setTimeout(() => {
              modal.style.display = 'none';
          }, 1000);
      }
  });
});


