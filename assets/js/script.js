$(function () {
   $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });

   $('[data-toggle="popover"]').popover();

   // document.querySelector("#nome").addEventListener("blur", function(e) { validaCamposFunction(e) }, false);
   document.querySelector("#id-form").addEventListener("submit", function(e) { validaCamposFunction(e) }, false);
   alert("Passou 1");

   function validaCamposFunction(e) {
      e.preventDefault();
      let nomeValido = validaNomeFunction();
      let sexoValido = validaSexoFunction();

      alert("validaCampos");

      if(nomeValido && sexoValido) {
         alert("Ok!");
      }
      else {
         alert('Deu erro!');
      }
   }

   function validaSexoFunction() {
      let sexo_masc = document.querySelector("#sexo-masc");
      let sexo_fem = document.querySelector("#sexo-fem");
      
      let feedback_sexo = document.querySelector("#feedback-sexo");

      let botoes = document.querySelectorAll("input[name='sexo']:checked");
      let valor = botoes.length > 0 ? botoes[0].value : null;
      alert("validaSexo");

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
      alert("validaNome");

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
