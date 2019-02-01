module GroupDecorator
  def form_title
    persisted? ? 'チャットグループ編集' : '新規チャットグループ'
  end

  def latest_message
    messages.last.try(:body) || 'まだメッセージはありません'
  end
end
