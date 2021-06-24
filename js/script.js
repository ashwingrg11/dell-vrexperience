$('#next1').click(function () {
  var f_name = $('#f_name').val();
  var l_name = $('#l_name').val();
  var email = $('#email').val();
  var company = $('#company').val();

  if (f_name.length == "") {
    $('#f_name_error').text('please enter your first name');
    $('#f_name').focus();
    return false;
  }
  else if (l_name.length == "") {
    $('#l_name_error').text('please enter your last name');
    $('#l_name').focus();
    return false;
  }
  else if (email.length == "") {
    $('#email_error').text('please enter your valid email');
    $('#email').focus();
    return false;
  }
  else if (company.length == "") {
    $('#company_error').text('please enter your company name');
    $('#company').focus();
    return false;
  }
  else{
    // prev and next actions
    $(this).parents('.form-boxes').fadeOut('fast');
    $(this).parents('.form-boxes').next().fadeIn('fast');
    $('.custom-error').text('');
  }
});

$('#next2').click(function () {
  var street = $('#street').val();
  var city = $('#city').val();
  var postal = $('#postal').val();
  var country = $('#country').val();

  if (street.length == "") {
    $('#street_error').text('please enter your street name');
    $('#street').focus();
    return false;
  }
  else if (city.length == "") {
    $('#city_error').text('please enter your city name');
    $('#city').focus();
    return false;
  }
  else if (postal.length == "") {
    $('#postal_error').text('please enter your country postal code');
    $('#postal').focus();
    return false;
  }
  else if (country.length == "") {
    $('#company_error').text('please enter your company name');
    $('#company').focus();
    return false;
  }
  else{
    // prev and next actions
    $(this).parents('.form-boxes').fadeOut('fast');
    $(this).parents('.form-boxes').next().fadeIn('fast');
    $('.custom-error-2').text('');
  }
})

$('.form-content-div .action-div .button-action .previous').click(function() {
  $(this).parents('.form-boxes').fadeOut('fast');
  $(this).parents('.form-boxes').prev().fadeIn('fast');
});