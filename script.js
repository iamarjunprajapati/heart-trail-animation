let container = document.querySelector('.body-container');
container.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    let radius = Math.floor(Math.random() * 100+1);
    let speed = Math.floor(Math.random()*4+1);
    let image = document.createElement('img');
    image.style.height = `${radius}px`;
    image.style.width = `${radius}px`;
    image.style.position = 'absolute';
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.src = "https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-512.png";
    image.style.animation = `moveupAnimation ${speed}s linear`;
    
    container.append(image);

    setTimeout(() => {
        image.remove();
    }, speed+'000'-20);

});


