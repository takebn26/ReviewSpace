$(function(){

  function insertMessage(message){
    var html = `<div class='chat-main__message clearfix'>
                  <div class='chat-main__message-name'>${ message.name }</div>
                  <div class='chat-main__message-time'>${ message.time }</div>
                  <div class='chat-main__message-body'>${ message.body }</div>
                </div>`

    $('.chat-main__body--messages-list').append(html);
  };


  $('#new_message').on('submit', function(e){
    e.preventDefault();

    var input = $('#message_body').val();

    $.ajax({
      url: './messages',
      type: 'post',
      dataType: 'json',
      data: {
        message: {
         body: input }
      },
      context: this
    })
    .done(function(data){
      insertMessage(data);
      this.reset();
    })
    .fail(function(){
      console.log('ddd');
    });
  });
});
