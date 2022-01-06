function consultaCep() {
    $(".barra-progresso").show(); // inicia ao clicar no botão
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep)
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#titulo_cep").html("CEP " + response.cep); //Jquery
            $("#logradouro").html(response.logradouro); //Jquery
            $("#bairro").html(response.bairro); //Jquery
            $("#localidade").html(response.localidade); //Jquery
            $("#uf").html(response.uf); //Jquery
            $(".cep").show(); //injetando função e alterando estado
            $(".barra-progresso").hide(); // altera o estado apos carregar os elementos


        }
    })
}

$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
});


