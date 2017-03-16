class Group < ApplicationRecord

  has_many :group_users
  has_many :users, through: :group_users
  has_many :messages

  validates :name, presence: true

  def latest_message
    messages.last.try(:body) || 'まだメッセージはありません'
  end
end
