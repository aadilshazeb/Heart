const ui = document.getElementById('ui');
    const total = 150; // number of text points

    function createHeart() {
      ui.innerHTML = ''; // Clear previous heart
      const width = ui.offsetWidth;
      const height = ui.offsetHeight;
      const scale = width / 25; // scale heart based on container width
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < total; i++) {
        const span = document.createElement('span');
        span.classList.add('love_word');
        span.textContent = 'I love coding';

        const t = (Math.PI * 2 * i) / total;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        span.style.left = `${centerX + x * scale}px`;
        span.style.top = `${centerY - y * scale}px`;

        ui.appendChild(span);
      }
    }

    createHeart();
    window.addEventListener('resize', createHeart); // adjust on window resize