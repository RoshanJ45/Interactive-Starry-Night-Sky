        const sky = document.getElementById('sky');


        function createStar(x, y) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${y}px`;
            star.style.left = `${x}px`;
            sky.appendChild(star);


            setTimeout(() => {
                star.remove();
            }, 8000);
        }


        sky.addEventListener('click', (e) => {
            createStar(e.clientX, e.clientY);
        });


        setInterval(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createStar(x, y);
        }, 500);
    