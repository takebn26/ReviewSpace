module GroupDecorator
  def form_title
    persisted? ? 'チャットグループ編集' : '新規チャットグループ'
  end
end
