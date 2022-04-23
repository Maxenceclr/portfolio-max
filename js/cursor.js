
(function () {

const links = document.querySelectorAll('.hover-this');
const cursor = document.querySelector('.cursor');

const animateit = function (e) {
      const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,
            move = 35,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

      

      this.style.transform = `translate(${xMove}px, ${yMove}px)`;
      
      if (e.type === 'mouseleave') this.style.transform = '';
};

const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
};

      links.forEach(b => {
            b.addEventListener('mousemove', animateit)
            b.addEventListener('mousemove', ()=>cursor.classList.add('tall'));
      })
      links.forEach(b => {
            b.addEventListener('mouseleave', animateit)
            b.addEventListener('mouseleave', ()=>cursor.classList.remove('tall'))
      })
window.addEventListener('mousemove', editCursor);

})();