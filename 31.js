      document.addEventListener('click', function (e) {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.className = 'heart';

            heart.style.left = (e.pageX - 10) + 'px';
            heart.style.top = (e.pageY - 10) + 'px';

            const colors = ['#5409DA', '#F564A9', '#9B7EBD', '#F49BAB', '#D50B8B'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            heart.style.color = randomColor;

            const animations = ['flyUp', 'flyLeft', 'flyRight', 'scaleUpFade'];
            const randomRotate = Math.random() * 30 - 15;
            heart.style.transform = `rotate(${randomRotate}deg)`;

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1000);
        });