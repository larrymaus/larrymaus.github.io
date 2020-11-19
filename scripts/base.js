
//Erstellung der Türchen
for(var i = 1; i<=24; i++){
	$('#tuerchenDiv').append('<div id="tor'+i+'" class="card justify-content-center hoverClass tor ml-4 mb-4 border border-danger" style="width: 14rem;height: 14rem;">'+i+'</div>');
}

//Aktuellen Tag herausfinden
today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
today = Number(dd);

//Veränderung der Türchen durch Hover
$('.hoverClass').hover(hoverOn,hoverOff);

var Frage = '';
var Antwort ='';


function hoverOn(){
    $('#'+this.id).removeClass('tor');
    $('#'+this.id).addClass('torQ');
    $('#'+this.id).empty();

    //Datums Check
    var TorFrage = this.id;
    if(today >= Number(TorFrage.replace('tor',''))){

        //Frage & Antwort
        switch (TorFrage) {
            case "tor1":
                Frage = "Yes, I've been ..., Blue since the day we parted";
                Antwort = 'brokenhearted';
                break;
            case "tor2":
                Frage = 'Liebt das S&uuml;&szlig;e, ist aber kein Hund';
                Antwort = 'Naschkatze';
                break;
            case "tor3":
                Frage = 'Verwandt ist er mit Dany, Brans Bruder ist er allerdings nicht (Vor- und Nachname)';
                Antwort = 'Jon Schnee';
                break;
            case "tor4":
                Frage = 'Wie viele Einwohner hat Neuseeland ca. in Millionen? (als Zahl)';
                Antwort = '5';
                break;
            case "tor5":
                Frage = 'Rote Schlinge im dunklen Schaft von vielen bissigen Soldaten bewacht.';
                Antwort = 'Zunge';
                break;
            case "tor6":
                Frage = 'Er befindet sich an der Hand, der eine hat ihn, der andere nicht, er hilft hoffentlich beim wachsen, doch beim einpflanzen hilft er nicht';
                Antwort = 'gruener Daumen';
                break;
            case "tor7":
                Frage = 'Es ist ein Adjektiv das kann ich dir sagen. Um ehrlich zu sein kann ich es nicht leiden, doch Manche nutzen es, um ihre Calzone zu beschreiben.';
                Antwort = 'pappig';
                break;
            case "tor8":
                Frage = 'Menschen, die mich nutzen sind an Freude reich, doch bin ich nicht nur Auto, sondern Insekt zugleich.';
                Antwort = 'Kaefer';
                break;
            case "tor9":
                Frage = 'Ich habe eine ... getragen.';
                Antwort = 'Wassermelone';
                break;
            case "tor10":
                Frage = 'Ich bin ein Vogel, doch kann nicht fliegen, drum bleib ich h&auml;ufig im Kochtopf liegen.';
                Antwort = 'Huhn';
                break;
            case "tor11":
                Frage = 'Ich schw&ouml;re feierlich, dass ich ein ... bin!';
                Antwort = 'Tunichtgut'
                break;
            case "tor12":
                Frage = 'Es ist ein St&auml;llchen mit wei&szlig;en Gesellchen. Es regnet nicht drein, es schneit nicht hinein, und doch ist alles nass.';
                Antwort = 'Mund';
                break;
            case "tor13":
                Frage = 'Im Winter steht er still und stumm, dort drau&szlig;en ganz in wei&szlig; herum';
                Antwort = 'Schneemann';
                break;
            case "tor14":
                Frage = 'Der sch&ouml;nste Satz von Bubba an Forest (3 W&ouml;rter)';
                Antwort = 'fifty fifty Forest';
                break;
            case "tor15":
                Frage = 'Auch wenn ihm manchmal die Kampferfahrung fehle, so ist er dennoch eine mutige, treue Seele. Klein und mit gro&szlig;en F&uuml;&szlig;en k&ouml;nnte man ihn beschreiben, doch sein Schicksal bis zum Berg ist ein wahres Leiden. (Vorname)';
                Antwort = 'Sam';
                break;
            case "tor16":
                Frage = 'Ruf mich an!';
                Antwort = 'Firecracker';
                break;
            case "tor17":
                Frage = "I'm ..., dabadee dabadei";
                Antwort = 'blue';
                break;
            case "tor18":
                Frage = 'Einer deiner Liebliengsd&uuml;fte, schwebt nicht selten durch die L&uuml;fte, keine leichte Schreibweise, Na ein Gl&uuml;ck bist du weise';
                Antwort = 'Ylang Ylang';
                break;
            case "tor19":
                Frage = 'Oft ist es nur ein Frosch, viele nutzen ihn in der Klausur, obwohl er kein Wissen in den Kopf drosch';
                Antwort = 'Gluecksbringer';
                break;
            case "tor20":
                Frage = 'Wie hei&szlig;t "der blaue" in der Sesamstra&szlig;e?';
                Antwort = 'Kruemelmonster';
                break;
            case "tor21":
                Frage = 'Hochwertig (Synonym)';
                Antwort = 'edel';
                break;
            case "tor22":
                Frage = 'Nicht schwarz, sondern ...';
                Antwort = 'weiss';
                break;
            case "tor23":
                Frage = 'Wo wohnen Luke, Sookie und Paris?';
                Antwort = 'Stars Hollow';
                break;
            case "tor24":
                Frage = 'In Omnia ...';
                Antwort = 'Paratus';
                break;
            default:
                Frage = 'Leider ist etwas schiefgelaufen :(';
                break;
        }

        $('#'+this.id).append(Frage);
        $('#'+this.id).append('<div class="input-group mb-3"><input id="QInput" class="form-control"><div class="input-group-append"><button class="btn btn-danger QAB" id="'+TorFrage+'Button" data-toggle="popover" data-placement="bottom"data-content="Leider Falsch ... Falls du einen Tipp brauchst, dann ruf mich einfach an!">GO!</button></div></div>')


        //Antwort vergleichen

        $('.QAB').click(compare)

        function compare(){
            if($('#QInput').val().toUpperCase() == Antwort.toUpperCase()){

                if($('#'+TorFrage+'Present').length == 0){
                    $('#'+TorFrage).append('<button class="btn btn-danger blink" id="'+TorFrage+'Present">Geschenk Auspacken</button>');
                }

                //Modal Anzeigen

                $('#'+TorFrage+'Present').click(ModalAnzeigen);

                function ModalAnzeigen(){

                    $('#ModHead').empty();
	                $('#ModBody').empty();

                    //Titel Modalfenster
                    $('#ModHead').append('Larrys Adventstor No. ' + TorFrage.replace('tor',''));


                    //Inhalte der Modalfenster
	                var Eingabe = TorFrage;
                    switch (Eingabe) {
                        case "tor1":
                            Content = '<p>Ein Gutschein f&uuml;r einen Filmabend mit ...</p><iframe src="img/MaMaMi2.mp4" allowfullscreen></iframe>';
                            break;
                        case "tor2":
                            Content = '<img class="imgCenter"src="img/schokobaer.jpeg" ></img>'
                            break;
                        case "tor3":
                            Content = '<img class="imgCenter"src="img/snickers.jpeg" ></img>';
                            break;
                        case "tor4":
                            Content = '<img class="imgCenter"src="img/pink.jpeg" ></img>';
                            break;
                        case "tor5":
                            Content = '<img class="imgCenter"src="img/lindor.jpeg" ></img>';
                            break;
                        case "tor6":
                            Content = '<img class="imgCenter"src="img/kaktus.jpeg" ></img>';
                            break;
                        case "tor7":
                            Content = '<img class="imgCenter"src="img/argan.jpeg" ></img>';
                            break;
                        case "tor8":
                            Content = '<img class="imgCenter"src="img/schokokaefer.jpeg" ></img>';
                            break;
                        case "tor9":
                            Content = '<img class="imgCenter"src="img/soap.jpeg" ></img>';
                            break;
                        case "tor10":
                            Content = '<p>Schau mal in den Briefkasten ...</p><img class="imgCenter"src="img/huhn.jpg" ></img>';
                            break;
                        case "tor11":
                            Content = '<img class="imgCenter"src="img/potter.jpeg" ></img>';
                            break;
                        case "tor12":
                            Content = '<img class="imgCenter"src="img/nutella.jpeg" ></img>';
                            break;
                        case "tor13":
                            Content = '<p>Ein Gutschein f&uuml;r einen Filmabend mit ...</p><iframe src="img/frozen.mp4" allowfullscreen></iframe>';
                            break;
                        case "tor14":
                            Content = '<img class="imgCenter"src="img/kaugummi.jpeg" ></img>';
                            break;
                        case "tor15":
                            Content = '<img class="imgCenter"src="img/moringa.jpeg" ></img>';
                            break;
                        case "tor16":
                            Content = '<iframe src="img/firecracker.mp4" allowfullscreen></iframe>';
                            break;
                        case "tor17":
                            Content = '<img class="imgCenter"src="img/blue.jpeg" ></img>';
                            break;
                        case "tor18":
                            Content = '<p>Ein Gutschein f&uuml;r eine ganz pers&ouml;nliche Ylang-Ylang-Massage</p><img class="imgCenter"src="img/massage.jpeg" ></img>';
                            break;
                        case "tor19":
                            Content = '<img class="imgCenter"src="img/lotto.jpg" ></img>';
                            break;
                        case "tor20":
                            Content = '<p>Selbstgebackene Chocolate Chip Cookies</p><img class="imgCenter"src="img/cookies.jpg" ></img>';
                            var rezept ='https://www.kitchenstories.com/de/rezepte/best-big-fat-chewy-chocolate-chip-cookies-35ae'
                            break;
                        case "tor21":
                            Content = '<img class="imgCenter"src="img/tipex.jpeg" ></img>';
                            break;
                        case "tor22":
                            Content = '<img class="imgCenter"src="img/edelweiss.jpg" ></img>';
                            break;
                        case "tor23":
                            Content = '<img class="imgCenter"src="img/schokomann.jpeg" ></img>';
                            break;
                        case "tor24":
                            Content = '<p>Ein Gilmore Girls Poster</p><img class="imgCenter"src="img/LukesDiner.jpg" ></img>';
                            break;
                        default:
                            Content = '<p>Leider ist etwas schiefgelaufen :(</p>';
                            break;
                    }
                    $('#ModBody').append(Content);
	                $('#Modal').modal('show');
                }
            }
            else{
                $('.QAB').popover('show');
                setTimeout(function(){$('.QAB').popover('hide'); }, 3000);

            }
        }
    }
    else{
        var Wartezeit = Number(TorFrage.replace('tor','')) - today;
        if (Wartezeit >= 2){$('#'+this.id).append('<p>Zu fr&uuml;h! Komm in '+Wartezeit+' Tagen nochmal wieder</p>');}
        else{$('#'+this.id).append('<p>Zu fr&uuml;h! Komm morgen nochmal wieder</p>');}
    }
}

function hoverOff(){
    $('.QAB').popover('hide');
    $('#'+this.id).removeClass('torQ');
    $('#'+this.id).addClass('tor');
    $('#'+this.id).text(this.id.replace('tor',''));
}



