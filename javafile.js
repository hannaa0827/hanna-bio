function headers(index){
  var msg = "";
  if (index == 1){
    msg = ("A question frequently asked by everyone, “Who are you? Who am I?”. We start off with our names, my name being Hanna Nguyen. I come from vietnamese descent, however, am a first generation vietnamese-american in my home, alongside my brother. I am 15 years old, turning 16 on August 27. I have many things I like to do and have many different subjects I enjoy at school.");
  }
  else if (index == 2) {
    msg = ("One of the things I enjoy most to do is playing the piano, ukulele, and singing. Music has been a part of my life since birth. Starting the piano at age 6, I notice that music is a long-lasting friend of mine throughout my life. I started playing the ukulele when I was around the age of 10 and am recently teaching myself the guitar. I also have been singing for a very long time. My whole family is musically involved for my dad plays the piano and guitar, my brother playing the piano, and my mother who sings. Music is something I enjoy and am very passionate about. Also, check out my youtube channel hehe :P. You should definitely subscribe :)");
  }
  else if (index == 3){
    msg = ("Ambition is something that also runs in the family other than music. I believe knowing someone’s goals tells so much about the person. Knowledge of someone’s goals gives the ability to tell whether they are passionate, ambitious, and have true qualities that make them unique. My goals are simple: to graduate with at least a masters, and be financially stable in order to provide for myself and my parents. Along the long road I have ahead in my life, perhaps my goals will change, or even better, I will have new goals to add onto my list. But for now, I hope to achieve a good future and maintain happiness.");
  }
  document.getElementById("headers").innerHTML = msg;
}
