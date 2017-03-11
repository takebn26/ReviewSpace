Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :groups, except: [:index, :show, :destroy]
end
