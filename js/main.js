let allValutes = {};
let state = {
  sum: false,
  email: false
};

$(function(){
  $('#currency').on('change', ()=>{conversionSum( $('#currency').val() )})
  $('#sum').on('input', (e)=>{
    conversionSum( $('#currency').val() );
    sumlValidation(e);
  })
  $('#email').on('blur', emailValidation);
  $('#email').on('input', emailValidationChanche)
})


function CBR_XML_Daily_Ru(rates) {
  allValutes = {...rates.Valute}
  let valutes = rates.Valute;

  for (let valute in valutes){
    $('#currency').append(`<option value="${valutes[valute].CharCode}">${valutes[valute].Name}</option>`)
  }
  conversionSum($('#currency').val());
}

// итог конвертации рубдей в валюту
function conversionSum(code){
  let conversion = $('#sum').val() / allValutes[code].Value;
  $('#total').val(conversion.toFixed(2));
}

// Валидация почты
function emailValidation(e){
  let value = e.target.value;
  if(value.match(/.+@.+\..+/i) === null){
    state.email = false;
    $(`#email`).siblings('.error').show();
    inputCheck();
  }else{
    state.email = true;
    $(`#email`).siblings('.error').hide();
    inputCheck();
  }
}
// Валидация почты
function emailValidationChanche(e){
  let value = e.target.value;
  if(value.match(/.+@.+\..+/i) !== null){
    state.email = true;
    $(`#email`).siblings('.error').hide();
    inputCheck();
  }else{
    state.email = false;
    inputCheck();
  }
}
// Валидация суммы
function sumlValidation(e){
  let value = e.target.value;
  if(value>0){
    state.sum = true;
    $(`#sum`).siblings('.error').hide();
    inputCheck();
  }else{
    state.sum = false;
    $(`#sum`).siblings('.error').show();
    inputCheck();
  }
}

//активация кнопки отправить, если все поля верны
function inputCheck() {
  if(state.sum && state.email){
    $('#sendSubmit').prop('disabled', false);
  }else{
    $('#sendSubmit').prop('disabled', true);
  }
}

