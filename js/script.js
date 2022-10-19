var counter = 0;
var PositionNO = 0;

function next() {
  $('#ResetButton').html('Avanti!');
  counter++;
  if (counter == 1) {
    $('#QuestionsBox').prepend('<p id="Question' + counter + '" class="text-primary fs-3">' + counter + '). Per la tua prima domanda chiedi a Giorgia!</p>')
  }
  if (counter == 2) {
    var id = '#Question' + (counter - 1);
    console.log(id)
    $(id).after('<p id="Question' + counter + '" class="text-primary fs-3">' + counter + '). Per la tua seconda domanda chiedi ad Andrea!</p>')
  }
  if (counter == 3) {
    id = '#Question' + (counter - 1);
    console.log(id)
    $(id).after('<p id="Question' + counter + '" class="text-primary fs-3">' + counter + '). Per la tua terza domanda chiedi a Sara! </p>')
  }
  if (counter == 4) {
    id = '#Question' + (counter - 1);
    console.log(id)
    $(id).after('<p id="Question' + counter + '" class="text-primary fs-3">' + counter + '). Per la tua quarta domanda chiedi a Paola!</p>')
  }
  if (counter == 5) {
    id = '#Question' + (counter - 1);
    console.log(id)
    $(id).after('<p id="Question' + counter + '" class="text-primary fs-3">' + counter + '). Per la tua quinta domanda chiedi ad Eni!</p>')
  }
  if (counter == 6) {
    id = '#Question' + (counter - 1);
    console.log(id)
    $(id).after(`<p class="text-primary fs-3">`+counter+`). Sei un Dottore Del Buco Del Cul?</p>
    <button type="button" class='btn btn-primary mb-2' onclick="NoButtons()" id="NO0" name="button"> NO </button>
    <button type="button" class='btn btn-primary mb-2' name="button" id="SI" onclick="SiButton()"> SI </button>`)
    $('#ResetButton').attr('class', 'd-none')
  }
}


function NoButtons(){
  $('#NO'+PositionNO+'').addClass('d-none')
  PositionNO = (PositionNO+1)%5;
  $('#NO'+(PositionNO)+'').removeClass('d-none')
}

function SiButton(){
  $('#SI').after('<p class="text-primary fs-3"> E allora bisogna cantarla!')
}
