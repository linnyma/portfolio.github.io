let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#145884;">Me encuentro mejorando mi habilidad en desarrollo de sitios web y estoy aprendiendo Python.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
