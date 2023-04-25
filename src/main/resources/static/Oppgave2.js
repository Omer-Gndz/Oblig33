function reg() {

    let errorcount = 0;
    let innfilmnavn = $("#select").val();
    if ((innfilmnavn === "") || (innfilmnavn === "Velg en film")) {
        errorcount++;
        $("#div1").html("Velg en film")
        alert("Velg en film");
    }

    let innAntall = $("#antall").val();
    if ((innAntall === 0) || (innAntall === "")) {
        errorcount++;
        alert("Skriv inn antallbillett")
    }
    let innNavn = $("#fornavn").val();
    if (innNavn === "") {
        errorcount++;
        alert("Skriv inn fornavn")
    }

    let innEtterNavn = $("#etternavn").val();
    if (innEtterNavn === "") {
        errorcount++;
        alert("Skriv inn etternavn")
    }

    let innEpost = $("#epost").val();
    if (innEpost === "") {
        errorcount++;
        alert("Skriv inn epost")
    }

    if (errorcount === 0) {
        const ticket = {
            filmnavn: innfilmnavn,
            antall: innAntall,
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefon: $("#telefon").val(),
            epost: innEpost
        };

        /* $.post("/save", function (data, status) {
           console.log(status);
           if (status === "success") {
             alert("Ticket is saved")
           } else {
             alert("Something is wrong with the server")
           }
         });*/

        $.post("/save", ticket, function () {
            hentAlle();
        });
        alert("Ticket is saved")
        cleaner();
    }

}

function hentAlle() {
    $.get("/show", function (data) {
        formater(data)
    });
}

function formater(tickets) {

    let ut = "<table class = 'table table-striped mt-4' style='background: #00b2ff; color: white'>" +
        "<tr>" +
        "<th>Id</th>" +
        "<th>Film Navn</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefon Nummer</th>" +
        "<th>E-post</th>" +
        "</tr>";


    for (let t of tickets) {
        ut +=
            "<tr>" +
            "<td>" + t.id + "</td>" +
            "<td>" + t.filmnavn + "</td>" +
            "<td>" + t.antall + "</td>" +
            "<td>" + t.fornavn + "</td>" +
            "<td>" + t.etternavn + "</td>" +
            "<td>" + t.telefon + "</td>" +
            "<td>" + t.epost + "</td>" +
            "</tr>"
    }
    ut += "</table>"
    $("#skriv").html(ut);
}
function slett() {
    $.get("/slett", function () {
        hentAlle();
    });
}

function cleaner() {
    $("#select").val("Velg en film")
    $("#antall").val("")
    $("#fornavn").val("")
    $("#etternavn").val("")
    $("#telefon").val("")
    $("#epost").val("")

}
