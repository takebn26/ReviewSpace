require 'faker'

FactoryGirl.define do
  password = Faker::Lorem.characters(8)
  factory :user do
    name                  Faker::Name.name
    email                 Faker::Internet.email
    password              password
    password_confirmation password
  end
end
