source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'mysql2', '>= 0.3.18', '< 0.5'
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
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'erb2haml'
end

