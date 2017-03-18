$(function(){
  var currentPath = window.location
                          .pathname
                          .split('/')
                          .pop();


  function insertMessage(message){
    var insertImage = message.image ? `<img class="chat-main__message-body-image" src="${message.image}">` : '';

    var html = `<div class='chat-main__message clearfix' data-id=${message.id}>
                  <div class='chat-main__message-name'>${message.name}</div>
                  <div class='chat-main__message-time'>${message.time}</div>
                  <div class='chat-main__message-body'>${message.body} ${insertImage}</div>
                </div>`

    $('.chat-main__body--messages-list').append(html);
  }

  function insertNotification(flash){
    var $html = $(`<div class="notice">${flash}</div>`);
    $('.notification').append($html);
    $html.delay(3000).fadeOut('slow');
  }

  function scrollToBottom() {
    var pos = $('.chat-main__body--messages-list').height();
    $('.chat-main__body').animate({
      scrollTop: pos
    }, 'slow', 'swing');
  }

  function fetchDiff() {
    lastId = $('.chat-main__message').last().data('id') || 0;
    $.ajax({
      url: './messages',
      method: 'GET',
      data: {
        last_id: lastId,
      },
      dataType: 'json'
    }).done(function(data) {
      if (data.length != 0) {
        $.each(data.messages, function(i, message) {
          insertMessage(message);
        });
      }
    });
  }

  function reloadMessage() {
    if (currentPath == 'messages') {
      setInterval(fetchDiff, 5000);
    }
  }
  reloadMessage();

  $('#message_image').on('change', function(){
    $('#new_message').submit();
  });

  $('#new_message').on('submit', function(e){
    e.preventDefault();

    var input = $('#message_body').val();
    var messageData = new FormData($(this).get(0));

    $.ajax({
      url: './messages',
      type: 'post',
      dataType: 'json',
      data: messageData,
      context: this,
      processData: false,
      contentType: false
    })
    .done(function(data){
      insertMessage(data);
      insertNotification(data.notice);
      scrollToBottom();
      this.reset();
    })
    .fail(function(){
      alert('メッセージ送信失敗');
    });
    return false;
  });
});
