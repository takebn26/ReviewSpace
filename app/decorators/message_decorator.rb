module MessageDecorator
  def published_time
    persisted? ? created_at.to_s(:default) : nil
  end
end
