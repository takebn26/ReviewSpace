$(function() {

  var preInput;

  function appendUser(user){
    let html = `<li class='chat-group-user clearfix'>
                  <div class='chat-group-user__name'>${user.name}</div>
                  <div class='chat-group-user__btn chat-group-user__btn--add' data-user-name='${user.name}' data-user-id='${user.id}'>追加</div>
                </li>`;

    $('#user-search-result').append(html);
  }

  function appendMember(userId, userName){
    let html = `<div class='chat-group-user clearfix'>
                  <input type='hidden' value='${userId}' name='group[user_ids][]'>
                  <p class='chat-group-user__name'>
                    ${userName}</p>
                  <div class='chat-group-user__btn chat-group-user__btn--remove'>削除</div>
                </div>`;

    $('#chat-group-users').append(html);
  }

  $('#user-search-result').on('click', '.chat-group-user__btn--add', function(){
    let id = $(this).data('user-id');
    let name = $(this).data('user-name');
    appendMember(id, name);
    $(this).parent().remove();
  });

  $('#chat-group-users').on('click', '.chat-group-user__btn--remove', function(){
    $(this).parent().remove();
  });

  $('#user-search-field').on('keyup', function(e) {
    $('#user-search-result').empty();

    let input = $(this).val();

    if (input.length === 0) {
      return false;
    }

    if (input !== preInput) {
      $.ajax({
        url: '/users/search',
        type: 'get',
        data: {keyword: input},
        dataType: 'json',
      })
      .done(function (data) {
        $.each (data.users, function (_, user) {
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
