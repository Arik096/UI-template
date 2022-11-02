/* ---------------------------------------------------------------------
Setting panel open button
-----------------------------------------------------------------------*/
function openNav() {
  const html = document.querySelector("html");
  var dir = html.getAttribute('dir', 'ltr');
  if(dir == "ltr")
  {
    ltractive();
  }
  else{
    rtlactive();
  }
    var a = window.innerWidth;
    if (a <= 360) {
      document.getElementById("mySidenav").style.width = "360px";
    }
    else {
      document.getElementById("mySidenav").style.width = "450px";
    }
    
  }
  /* ---------------------------------------------------------------------
  Setting panel close button
  -----------------------------------------------------------------------*/
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

    /* ---------------------------------------------------------------------
 mode
-----------------------------------------------------------------------*/
  function Mode(click_id) {
    const html = document.querySelector("html");
    if (click_id == "dark") {
      html.classList.add('dark');
    }
    else if (click_id == "auto") {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark')
      }
      else {
        html.classList.remove('dark');
    }
  }
    else {
      html.classList.remove('dark');
  }
  }

  /* ---------------------------------------------------------------------
RTL and LTR direction
-----------------------------------------------------------------------*/
function Direction(dir_id) {
    const html = document.querySelector("html");
    if (dir_id == "ltr") {
      html.setAttribute('dir', 'ltr');
      ltractive()
    }
    else {
      html.setAttribute('dir', 'rtl');
      rtlactive()
    }
  }
 
  function ltractive(){
    document.getElementById("ltr-light").classList.add("border-2");
    document.getElementById("ltr-dark").classList.add("border-2");
    document.getElementById("rtl-light").classList.remove("border-2");
    document.getElementById("rtl-dark").classList.remove("border-2");
  }
   function rtlactive(){
    document.getElementById("ltr-light").classList.remove("border-2");
    document.getElementById("ltr-dark").classList.remove("border-2");
    document.getElementById("rtl-light").classList.add("border-2");
    document.getElementById("rtl-dark").classList.add("border-2");
   }
  



  