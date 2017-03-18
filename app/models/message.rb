class Message < ApplicationRecord

  belongs_to :group
  belongs_to :user

  validates :body, presence: true, unless: 'image.present?'

  mount_uploader :image, ImageUploader
end
