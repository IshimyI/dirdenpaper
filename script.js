const btns = document.querySelectorAll('.cta_btn');
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log('click');
  });
});
