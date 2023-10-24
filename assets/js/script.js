
$(document).ready (function() {

  const currentDate = new Date();
  $('.current-date').text(currentDate.toLocaleDateString());
  const currentHour = new Date().getHours();
    $('.time-block').each(function() {
      const hourId = parseInt($(this).attr('id').split('-')[1]);
      if (hourId < currentHour) {
          $(this).removeClass('present future').addClass('past');
      } else if (hourId === currentHour) {
          $(this).removeClass('past future').addClass('present');
      } else {
          $(this).removeClass('past present').addClass('future');
      }
        const $saveBtn = $(this).find('.saveBtn');
        $saveBtn.on('click', function() {
            const description = $(this).siblings('.description').val();
            const localStorageKey = `hour-${hourId}-description`;
            localStorage.setItem(localStorageKey, description);
        });
        const localStorageKey = `hour-${hourId}-description`;
        const savedDescription = localStorage.getItem(localStorageKey);
        if (savedDescription !== null) {
            $(this).find('.description').val(savedDescription);
      }

  });
    
});

