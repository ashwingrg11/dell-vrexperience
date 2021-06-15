// prev and next actions
$('.form-content-div .action-div .button-action .next').click(function() {
  $(this).parents('.form-boxes').fadeOut('fast');
  $(this).parents('.form-boxes').next().fadeIn('fast');
});
$('.form-content-div .action-div .button-action .previous').click(function() {
  $(this).parents('.form-boxes').fadeOut('fast');
  $(this).parents('.form-boxes').prev().fadeIn('fast');
});
