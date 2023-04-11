const playHeader = document.querySelector('.box a');
const headerClass = document.querySelector('header');
const aboutMe = document.querySelector('#aboutMe');
let intervalId;
let e = 0;
playHeader.addEventListener('click', function() { 
    const bgBox = document.querySelector('.box'); 
    headerClass.classList.add("anim-header");
    playHeader.textContent = '';
    bgBox.style.backgroundImage = "url(/nik/img/nik.jpg)"; 
    
    function sayHi(id, cls) {
        const hi = document.querySelector(id);
        hi.removeAttribute('hidden');
        hi.classList.add(cls);
    }
    setTimeout(function() { sayHi('#hello', 'anim-hello'); }, 9000);
    setTimeout(function() { sayHi('#myName', 'anim-name'); }, 14000);
    
    function isOps() { 
        // увеличиваем счетчик на 0.1 каждый раз       
        e += 0.3;
        // применяем к стилям элемента
        aboutMe.style.opacity = e;
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
        intervalId = setInterval(isOps, 1000);
      }, 18000);

    
      
})

aboutMe.addEventListener('click', function() {    
const iHidden = document.querySelector('#hello');
const isReplace = document.querySelector('#myName');
    isReplace.innerHTML = isReplace.innerHTML.replace(/^.*Андра/, "Андра");
    isReplace.classList.add("isReplace");
    iHidden.classList.add("isOpacity");
    
    function isOps() { 
        // увеличиваем счетчик на 0.1 каждый раз       
        e -= 1;
        // применяем к стилям элемента
        aboutMe.style.top = e + '%';
        if (e >= 6) {
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
        intervalId = setInterval(isOps, 500);
      }, 20000);

})