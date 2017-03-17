module ApplicationHelper
  def group_form_title
    current_page?(action: :new) ? '新規チャットグループ' : 'チャットグループ編集'
  end

  def published_time_for_message(message)
    message.created_at.to_s(:default)
  end
end
