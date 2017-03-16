module ApplicationHelper
  def group_form_title
    current_page?('new') ? '新規チャットグループ' : 'チャットグループ編集'
  end
end
