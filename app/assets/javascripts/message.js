$(function(){
  let messageList = $('.chat-main__body--messages-list');
  let messageForm = $('#new_message');

  function appendMessage(message){
    let insertImage = message.image ? `<img class="chat-main__message-body-image" src="${ message.image }" alt="image">` : '';

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

  function insertNotice() {
    appendNotification($('<div class="notice">メッセージ送信成功</div>'));
  }

  function insertAlert() {
    appendNotification($(`<div class="alert">メッセージ送信失敗</div>`));
  }

  function appendNotification($html) {
    $('.notification').append($html);
    $html.delay(3000).fadeOut('slow');
  }


  function scrollToBottom() {
    $('.chat-main__body').animate({
      scrollTop: messageList.height()
    }, 'slow', 'swing');
  }

  $('#message_image').on('change', function(){
    messageForm.submit();
  });

  messageForm.on('submit', function(e){
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
      appendMessage(data);
      insertNotice();
      scrollToBottom();
      this.reset();
    })
    .fail(function(){
      insertAlert()
    });

    return false;
  });
});
