Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :groups, except: [:index, :show, :destroy] do
    scope module: :groups do
      resources :messages, only: [:index, :create]
    end
  end
end
