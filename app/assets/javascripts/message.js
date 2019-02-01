$(function(){
  let messageList = $('.chat-main__body--messages-list');

  function insertMessage(message){
    let insertImage = message.image ? `<img class="chat-main__message-body-image" src="${message.image}" alt="image">` : '';

    let html = `<div class='chat-main__message clearfix' data-id=${ message.id }>
                  <div class='chat-main__message-name'>${ message.name }</div>
                  <div class='chat-main__message-time'>${ message.time }</div>
                  <div class='chat-main__message-body'>
                    ${ message.body }
                    ${ insertImage } 
                  </div>
                </div>`;

    messageList.append(html);
  }

  function insertNotification(flash){
    let $html = $(`<div class="notice">${flash}</div>`);
    $('.notification').append($html);
    $html.delay(3000).fadeOut('slow');
  }

  function scrollToBottom() {
    $('.chat-main__body').animate({
      scrollTop: messageList.height()
    }, 'slow', 'swing');
  }

  $('#message_image').on('change', function(){
    $('#new_message').submit();
  });

  $('#new_message').on('submit', function(e){
    e.preventDefault();

    let messageData = new FormData(this);

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
