$(function() {

  var preInput;

  function appendUser(user){
    var html = `<li class='chat-group-user clearfix'>
                  <div class='chat-group-user__name'>${user.name}</div>
                  <div class='chat-group-user__btn chat-group-user__btn--add' data-user-name='${user.name}' data-user-id='${user.id}'>追加</div>
                </li>`;

    $('#user-search-result').append(html);
  }

  function appendMember(userId, userName){
    var html = `<div class='chat-group-user clearfix'>
                  <input type='hidden' value='${userId}' name='group[user_ids][]'>
                  <p class='chat-group-user__name'>
                    ${userName}</p>
                  <div class='chat-group-user__btn chat-group-user__btn--remove'>削除</div>
                </div>`;

    $('#chat-group-users').append(html);
  }

  $('#user-search-result').on('click', '.chat-group-user__btn--add', function(){
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
    appendMember(id, name);
    $(this).parent().remove();
  });

  $('#chat-group-users').on('click', '.chat-group-user__btn--remove', function(){
    $(this).parent().remove();
  });

  $('#user-search-field').on('keyup', function() {

    $('#user-search-result').empty();
    var input = $(this).val();

    if (input !== preInput) {
      $.ajax({
        url: '/users/search',
        type: 'get',
        data: {keyword: input},
        dataType: 'json',
      })
      .done(function (data) {
        $.each (data.users, function (i, user) {
          appendUser(user);
        });
      })
      .fail( function() {
        alert('やり直してください');
      });
      preInput = input;
    }
  });
});
