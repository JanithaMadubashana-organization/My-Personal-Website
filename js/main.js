
if(window.matchMedia('(max-width:992px)').matches){
    $("#main-picture p").removeClass("animate__bounceInDown");
    $("#main-picture p").addClass("animate__heartBeat");
}

const typed = document.querySelector('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

// skills
let skilsContent = $('.skills-content');
if (skilsContent) {
  new Waypoint({
    element: skilsContent,
    offset: '80%',
    handler: function(direction) {
      let progress = Array.from( $('.progress .progress-bar'));
      progress.forEach((el) => {
        el.style.width = el.getAttribute('aria-valuenow') + '%'
      });
    }
  })
}
$('#x').on('click',()=>{
    $('#x').preventDefault()
});


const frontEndSkillsLink= $(".skills li:nth-child(1)");
const backEndSkillsLink= $(".skills li:nth-child(2)");
const deskTopAppSkillsLink= $(".skills li:nth-child(3)");
const dataBaseSkillsLink= $(".skills li:nth-child(4)");
const otherSkillsLink= $(".skills li:nth-child(5)");

const frontEndSkills=$("#front-end");
const backEndSkills=$("#back-end");
const desktopAppSkills=$("#desktop-app");
const databaseSkills=$("#database");
const otherSkills=$("#others");
backEndSkillsLink.on('click',()=>{
    $( `.skill-type`).addClass("d-none")
    backEndSkills.removeClass("d-none");
});
frontEndSkillsLink.on('click',()=>{
    $( `.skill-type`).addClass("d-none")
    frontEndSkills.removeClass("d-none");
});
deskTopAppSkillsLink.on('click',()=>{
    $( `.skill-type`).addClass("d-none")
    desktopAppSkills.removeClass("d-none");
});
dataBaseSkillsLink.on('click',()=>{
    $( `.skill-type`).addClass("d-none")
    databaseSkills.removeClass("d-none");
});
otherSkillsLink.on('click',()=>{
    $( `.skill-type`).addClass("d-none")
    otherSkills.removeClass("d-none");
})