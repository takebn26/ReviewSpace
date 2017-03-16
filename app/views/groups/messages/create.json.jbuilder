json.name @message.user.name
json.body @message.body
json.time published_time_for_message(@message)
json.notice flash.now[:notice]
