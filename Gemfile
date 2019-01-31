source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'mysql2', '0.5.2'
gem 'puma', '~> 3.0'

# テンプレートエンジン
gem 'haml-rails'

# ユーザー管理
gem 'devise'

# view関連
gem 'font-awesome-rails'
gem 'sass-rails', '~> 5.0'

# js関連
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'

# 画像編集
gem 'carrierwave'
gem 'rmagick'

# ストレージ
gem 'fog'

# 環境変数管理
gem 'dotenv-rails'

# view_model層
gem 'active_decorator'

group :production do
  gem 'rails_12factor'
  gem 'pg'
end

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'pry-rails'
  gem 'rspec-rails'
  gem 'faker'
  gem 'factory_bot'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'erb2haml'
end

