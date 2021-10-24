const { NONAME } = require("dns");

/* global bootstrap: false */
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })();



  // gasp animation
  gsap.from("#box", {y: 200, scale:.5, duration: 1});

  // gsap end

  // project form popup

  function close_project_form(){

    let overLayNewProject = document.querySelector('.overLay_NewProject');
    let projectFormCont = document.querySelector('.project-form-cont');


     
      overLayNewProject.classList.remove("show_overlay");
      projectFormCont.classList.remove("show_overlay");

  }
  function open_project_form(){

    let overLayNewProject = document.querySelector('.overLay_NewProject');
    let projectFormCont = document.querySelector('.project-form-cont');
   
    overLayNewProject.classList.add("show_overlay");
    projectFormCont.classList.add("show_overlay");

}

/* 
close qoute */

function closeQoute(){

    let smessage = document.querySelector('.smessage');
    let fmessage = document.querySelector('.fmessage')
    // closeQoute.style.visibility = "hidden"

    fmessage.style.display = "inline-block";
    let tl = gsap.timeline();

    gsap.to(smessage, {opacity: 0});
    

    setTimeout(function(){

      tl.from(fmessage, {opacity: 1}).to(fmessage, {x: -500}).to(smessage, {y: 1000});

  }, 2000);


}