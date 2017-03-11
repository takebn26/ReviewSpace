require 'rails_helper'

describe User do
  it 'is valid with name, email, password, password_confirmation' do
    user = build(:user)
    expect(user).to be_valid
  end

  it 'is invalid with name for blank' do
    user = build(:user, name: '')
    user.valid?
    expect(user.errors.messages[:name]).to include("を入力してください")
  end

  it 'is invalid with name for already exist' do
    user = create(:user)
    another_user = build(:user, name: user.name)
    another_user.valid?
    expect(another_user.errors.messages[:name]).to include('はすでに存在します')
  end

  it 'is invalid with email for blank' do
    user = build(:user, email: '')
    user.valid?
    expect(user.errors.messages[:email]).to include("を入力してください")
  end

  it 'is invalid with email for already exist' do
    user = create(:user)
    another_user = build(:user, email: user.email)
    another_user.valid?
    expect(another_user.errors.messages[:email]).to include('はすでに存在します')
  end

  it 'is invalid with password for blank' do
    user = build(:user, password: '')
    user.valid?
    expect(user.errors.messages[:password]).to include("を入力してください")
  end

  it 'is invalid password for defference of password_confirmation' do
    user = build(:user, password: 'aaaaaaaa')
    user.valid?
    expect(user.errors.messages[:password_confirmation]).to include("とPasswordの入力が一致しません")
  end

  it 'is invalid password for lower characters' do
    user = build(:user, password: 'aaaaa', password_confirmation: 'aaaaa')
    user.valid?
    expect(user.errors.messages[:password]).to include('は8文字以上で入力してください')
  end
end
