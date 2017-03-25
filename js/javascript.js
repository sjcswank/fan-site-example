$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

$('body').scrollspy({ target: '#nav' })
