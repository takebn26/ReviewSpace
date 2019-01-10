module MessageDecorator
  def published_time
    created_at.to_s(:default)
  end
end
