let autoReloadInterval;

$(function() {
  function insertMessage(message){
    let insertImage = message.image ? `<img class="chat-main__message-body-image" src="${ message.image }" alt="image">` : '';

    let html = `<div class='chat-main__message clearfix' data-id=${ message.id }>
                  <div class='chat-main__message-name'>${ message.name }</div>
                  <div class='chat-main__message-time'>${ message.time }</div>
                  <div class='chat-main__message-body'>
                    ${ message.body }
                    ${ insertImage }
                  </div>
                </div>`;

    $('.chat-main__body--messages-list').append(html);
  }

  function fetchDiff() {
    let lastId = $('.chat-main__message').last().data('id') || 0;
    $.ajax({
      url: './messages',
      method: 'GET',
      data: {
        last_id: lastId,
      },
      dataType: 'json'
    }).done(function(data) {
      if (data.length !== 0) {
        $.each(data, function(_, message) {
          insertMessage(message);
        });
      }
    });
  }

  function reloadMessage() {
    autoReloadInterval = setInterval(fetchDiff, 5000);
  }

  reloadMessage();

  $(window).on('beforeunload', function() {
    clearInterval(autoReloadInterval)
  })
});
