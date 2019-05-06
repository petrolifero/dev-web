$(function () {
   $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });

   $('[data-toggle="popover"]').popover();

   document.querySelector("#id-form").addEventListener("submit", validaCamposFunction, false);

   function validaCamposFunction(e) {
      e.preventDefault();
      let nomeValido = validaNomeFunction();
      let sexoValido = validaSexoFunction();
      let passeioValido = validaPasseioFunction();
      let excursaoValido = validaExcursaoFunction();

      if(nomeValido && sexoValido && passeioValido && excursaoValido) {
      }
      else {
      }
   }

   function validaPasseioFunction() {
 	let passeio=document.querySelector("#passeio1");
	let passeioFeedback=document.querySelector("#feedkback-passeio");
	let indice=passeio.selectedIndex;
      if(indice === 1) {
         passeio.classList.add("is-valid");
         passeio.classList.remove("is-invalid");

         passeioFeedback.classList.add("d-nome");
         passeioFeedback.classList.remove("d-block");

         return true;
      }
      else {
	 passeio.classList.add("is-invalid");
         passeio.classList.remove("is-valid");

         passeioFeedback.classList.add("d-block");
         passeioFeedback.classList.remove("d-none");

         return false;
      
      }
   }

   function validaExcursaoFunction() {
         return true;
   }

   function validaSexoFunction() {
      let sexo_masc = document.querySelector("#sexo-masc");
      let sexo_fem = document.querySelector("#sexo-fem");
      
      let feedback_sexo = document.querySelector("#feedback-sexo");

      let botoes = document.querySelectorAll("input[name='sexo']:checked");
      let valor = botoes.length > 0 ? botoes[0].value : null;

      if(valor) {
         sexo_masc.classList.add("is-valid");
         sexo_masc.classList.remove("is-invalid");
         sexo_fem.classList.add("is-valid");
         sexo_fem.classList.remove("is-invalid");

         feedback_sexo.classList.add("d-nome");
         feedback_sexo.classList.remove("d-block");

         return true;
      }
      else {
         sexo_masc.classList.add("is-invalid");
         sexo_masc.classList.remove("is-valid");
         sexo_fem.classList.add("is-invalid");
         sexo_fem.classList.remove("is-valid");

         feedback_sexo.classList.remove("d-nome");
         feedback_sexo.classList.add("d-block");

         return false;
      }
   }

   function validaNomeFunction() {
      let nome = document.querySelector("#nome");

      if(nome.value === '') {
         nome.classList.add("is-invalid");
         nome.classList.remove("is-valid");
         return false;
      }
      else {
         nome.classList.add("is-valid");
         nome.classList.remove("is-invalid");
         return true;
      }
   }

   // $('a.nav-link.nav-item').mouseenter(function() {
   //    $('a.nav-link.nav-item').removeClass('active');
   //    $(this).addClass('active');
   // });

   // $('a.nav-link.nav-item').not(".dropdown-toggle").click(function() {
   //    $('div.collapse.navbar-collapse').removeClass('show');
   // });

   // $('a.dropdown-item').click(function() {
   //    $('div.collapse.navbar-collapse').removeClass('show');
   // });

   /* $('a.nav-link.nav-item').mouseleave(function() {
         $(this).removeClass('active');
      }); */
});
