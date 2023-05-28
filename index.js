// Выделяю все объекты с классом slider и тэгом img и сохраняю их в массив 
let slides = document.querySelectorAll('.slider img');  
//Индекс текущего слайда
let currentSlide = 0;     
        //Функция переключения слайдера вперед
        function nextSlide() {   
            //Убираем с текущего слайда свойство "Активный"
            slides[currentSlide].classList.remove('active');
            //Переключаемся на следующий слайдер в массиве слайдеров   
            currentSlide = (currentSlide + 1) % slides.length;
            //Активируем слайдер   
            slides[currentSlide].classList.add('active');  
        }     
        //Меняем слайд каждые 5 секунд
        setInterval(nextSlide, 5000); 
        
        let card = document.querySelectorAll(".card"); 
for( let i = 1; i <= card.length; i++ ){ 
    document.documentElement.style.setProperty("--face_height_" + i + "", document.querySelector(".card-container .card:nth-child(" + i + ") .face-2").scrollHeight + "px"); 
}    