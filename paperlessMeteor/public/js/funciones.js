angular.module('app', [])

.controller('validarForm', ['$scope', function($scope) {
    $scope.tab = 1;
	$scope.titTramite = "Tipo de trámite";
	$(".titSec1").css("display","none");

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
		if(newTab===3){
			$scope.titTramite = "Completa el expediente biométrico del trabajador";
			$(".btnTramite").addClass("desac");
			$(".titSec1").css("display","none");
		};
		if(newTab===4){
			$scope.titTramite = "Acuse de expediente biométrico";
			$(".titSec1").css("display","none");
		};
		
		if(newTab===5){
			$scope.titTramite = "Captura de huellas para solicitud del sello";
			$(".titSec1").css("display","none");
		};
		if(newTab===6){
			$(".divInfo").css("display","flex");
			$(".titSec1").css("display","none");
			$scope.titTramite = "";
		};
		if(newTab===7){
			$(".divInfo").css("display","none");
			$(".titSec1").css("display","block");
			$scope.titTramite1 = "Imprimir Certificado de Derecho";
		};
		if(newTab===8){
			$(".divInfo").css("display","none");
			$(".titSec1").css("display","block");
			$scope.titTramite1 = "Grabación de audio";
		};
		if(newTab===9){
			$(".divInfo").css("display","none");
			$(".titSec1").css("display","block");
			$scope.titTramite1 = "Selección del retiro";
		};
		if(newTab===10){
			$(".divInfo").css("display","flex");
			$(".titSec1").css("display","none");
			$scope.titTramite = "Válida y completa el expediente de servicio del trabajador";
		};
		if(newTab===11){
			$(".divInfo").css("display","none");
			$(".titSec1").css("display","block");
			$scope.titTramite1 = "Forma de pago";
		};
		if(newTab===12){
			$(".divInfo").css("display","none");
			$(".titSec1").css("display","block");
			$scope.titTramite1 = "Confirmación del trámite";
		};
		if(newTab===13){
			$(".divInfo").css("display","none");
			$(".titSec1").css("display","block");
			$scope.titTramite1 = "";
		};
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
	
	$scope.funcInst = function() {
		$(".divOperaciones").show();	
		$scope.tab = parseInt(($scope.tab) +1);
		$scope.titTramite = "Captura de huellas para consulta de expediente biométrico";
		$(".titSec1").css("display","none");
	};
	
  }])
.controller('tabs', ['$scope', function($scope) {
    $scope.tab1 = 1;

    $scope.setTab1 = function(newTab1){
      $scope.tab1 = newTab1;
    };

    $scope.isSet1 = function(tabNum1){
      return $scope.tab1 === tabNum1;
    };
	
  }]);


//Calendario
	$.datepicker.regional['es'] = {
		 closeText: 'Cerrar',
		 prevText: '',
		 nextText: ' ',
		 currentText: 'Hoy',
		 monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		 monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		 dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		 dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		 dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		 weekHeader: 'Sm',
		 dateFormat: 'dd/mm/yy',
		 firstDay: 1,
		 isRTL: false,
		 showMonthAfterYear: false,
		 yearSuffix: ''
	 };
	$.datepicker.setDefaults($.datepicker.regional['es']);
	$(function() {
		$( "#datepicker" ).datepicker({
			firstDay: 1 
		});
	});

$(document).ready(function() {
	$(".divOperaciones").hide();

	
	
	//Modal resolución
	$('.modalHuella_view').click(function (e) {
		$('#modalHuella').modal();
		return false;
	})
	
	$('#modalHuella1_view').click(function(e) {
		setTimeout(function() {
			$('#modalHuella1').modal({
			});
			return false;
		}, 1);
	})
	$('#modalHuella2_view').click(function(e) {
		setTimeout(function() {
			$('#modalHuella2').modal({
			});
			return false;
		}, 1);
	})
	
	$('.modalFoto1_view').click(function (e) {
		$('#modalFoto1').modal();
		return false;
	})
	
	$('#modalFoto2_view').click(function(e) {
		setTimeout(function() {
			$('#modalFoto2').modal({
			});
			return false;
		}, 1);
	})
	
	$('#modalFoto3_view').click(function(e) {
		setTimeout(function() {
			$('#modalFoto1').modal({
			});
			return false;
		}, 1);
	})
	
	$('.modalFirma1_view').click(function (e) {
		$('#modalFirma1').modal();
		return false;
	})
	$('.modalTomaFotografica_view').click(function (e) {
		setTimeout(function() {
		$('#modalTomaFotografica').modal({
		});
		return false;
		}, 1);
	})
	
	$('.btnHuella1').click(function(e) {
		$(".btnTramite").removeClass("desac");
		$(".btnCaptura").addClass("txtV");
		$(".ok1").attr("src","img/ok.svg");
	})
	
	$('.btnGuardarFoto').click(function(e) {
		$(".imgFoto1").attr("src","img/foto2.jpg");
		$(".btnCapturaFoto").addClass("txtV");
		$(".ok2").attr("src","img/ok.svg");
	})
	
	
	$('.btnGuardarFirma').click(function(e) {
		$(".imgFirma1").attr("src","img/firma1.jpg");
		$(".imgFirma2").attr("src","img/firma2.jpg");
		$(".btnCapturaFirma").addClass("txtV");
		$(".ok3").attr("src","img/ok.svg");
	})

	$(".divMonto2").hide();

	$('#radio01').on( "change", function() {
		$('.divMonto1').show();
		$('.divMonto2').hide();
		return false;
	});
	$('#radio02').on( "change", function() {
		$('.divMonto1').hide();
		$('.divMonto2').show();
		return false;
	});
	// Menu hambuergesa
	$("#effect").toggle(false);
	$("#hamburger").click(function (event) {
		event.stopPropagation();
		 $( "#effect" ).toggle( "slide"); 
		 $( ".sobresombra" ).toggle( "quitar"); 
	});

	$(document).click(function() {
		$("#effect").toggle(false);
	});
	$("#effect").click (function (event){
		event.stopPropagation();
	}); 
	
	

	/*Menu User*/
	$(".MenuUser, .MenuUser1").hide();
	$('.imgShowMenuUser').click(function() {
		$(".MenuUser, .MenuUser1").toggle("ver");
	});

	$(".divRC").hide();
	$('#radioResCivil').on( "change", function() {
				$(".divRC").show();
			});
	$('#radioEmpre').on( "change", function() {
		$(".divRC").hide();
	});
	
	// Menu seguimiento
	$("#seguimiento").toggle(true);
	
	$(".hamburgerSeg").click(function (event) {
		event.stopPropagation();
		 $( ".seguimiento" ).toggle( "slide"); 
	});

	$(document).click(function() {
		$(".seguimiento").toggle(false);
	});
	$(".seguimiento").click (function (event){
		event.stopPropagation();
	});
	/********Para selects*******************/
	$( "select").dropkick({
		mobile: true
	});	

});

$(document).ready(function() {
	// Menu hambuergesa 
	$(".sobresombra").click(function (event) {  
		 $( ".sobresombra" ).toggle( "quitar"); 
	});
 
});
//Validacion login
$(".txtRojo").hide();
function validaLogin(f) {
	if(f.txtUsuario.value == "")  
  	{	
	  $(".txtRojo").html('Por favor ingrese su usuario');
	  return false;
  	}else
	if(f.txtLlave.value == "" )
  	{
	  $(".txtRojo").html('Por favor ingrese su contraseña');
	  return false;
  	}else
	{
		location.href="index.html";
		return false;}
}
/*Valida buscador del menu de hamburgesa*/
function valida(f) {
	if (f.busca.value == "")  {
		alert("Es necesario que introduzca un valor");
	}else { 
		return false;
	}
}
/*Detecta resolucion de pantalla*/
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 780px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
function WidthChange(mq) {
	if (mq.matches) {
	  	$("#menu ul").addClass("normal");
	  	$("#menu ul li").removeClass("in");
		$('ul.nivel1 >li > ul').slideUp();
		$('ul.nivel2 >li > ul').slideUp();
		$('ul.nivel1>li').off("click");
		$('ul.nivel2>li').off("click");
	} else {
	   $("#menu ul").removeClass("normal");

		$('ul.nivel1>li').on('click', function(event) {
			event.stopPropagation();
			
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.nivel2').slideUp();

				$(this).removeClass("in");
				$('.flecha').removeClass("rotar");
			}else {
			  	$('ul.nivel1 > li').removeClass("in");
				$('ul.nivel2').slideUp();
				$('ul.nivel3').slideUp();
				$('ul.nivel2>li').removeClass("in");
				$(this).addClass("in");
			  	$target.slideDown();
				$('ul.nivel1 > li > a .flecha').addClass("rotar");
				
			}
		});
		$('ul.nivel2>li').on('click', function(event) {
			event.stopPropagation();
		
			$target = $(this).children();

			if ($(this).hasClass("in"))  {
			    $('ul.nivel3').slideUp();
				$(this).removeClass("in");
				$('ul.nivel2 > li > a .flecha').removeClass("rotar");
			}else {
			  	$('ul.nivel2 > li').removeClass("in");
				$('ul.nivel3').slideUp();
				$(this).addClass("in");
			  	$target.slideDown();
				$('ul.nivel2 > li > a .flecha').addClass("rotar");
			}
		});
		$('ul.nivel3>li').on('click', function(event) {
			event.stopPropagation();
		});
	}
}
var allPanels = $('.accordion > dd').hide();

	jQuery('.accordion > dt').on('click', function() {
		$this = $(this);
		//the target panel content
		$target = $this.next();

		jQuery('.accordion > dt').removeClass('accordion-active');
		if ($target.hasClass("in")) {
		  $this.removeClass('accordion-active');
		  $target.slideUp();
		  $target.removeClass("in");

		} else {
		  $this.addClass('accordion-active');
		  jQuery('.accordion > dd').removeClass("in");
		  $target.addClass("in");
			$(".subSeccion").show();

		  jQuery('.accordion > dd').slideUp();
		  $target.slideDown();
		}
	});
	
	var allPanels = $('.accordionM > dd').hide();

	jQuery('.accordionM > dt').on('click', function() {
		$this = $(this);
		//the target panel content
		$target = $this.next();

		jQuery('.accordionM > dt').removeClass('accordion-active');
		if ($target.hasClass("in")) {
		  $this.removeClass('accordion-active');
		  $target.slideUp();
		  $target.removeClass("in");

		} else {
		  $this.addClass('accordion-active');
		  jQuery('.accordionM > dd').removeClass("in");
		  $target.addClass("in");
			$(".subSeccion").show();

		  jQuery('.accordionM > dd').slideUp();
		  $target.slideDown();
		}
	});



	

