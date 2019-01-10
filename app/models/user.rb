class User < ApplicationRecord
  scope :not_user, -> (user){where.not(id: user)}
  scope :incremental_search, ->(keyword) { where('name like ?', "#{keyword}%") }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :group_users
  has_many :groups, through: :group_users
  has_many :messages

  validates :name, presence: true, uniqueness: true
end
