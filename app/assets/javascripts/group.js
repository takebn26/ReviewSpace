$(function() {

  var preInput;

  function appendUser(user){
    var html = `<li class='chat-group-user clearfix'>
                  <div class='chat-group-user__name'>${user.name}</div>
                  <div class='chat-group-user__btn chat-group-user__btn--add'>追加</div>
                </li>`;

    $('#user-search-result').append(html);
  }

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
