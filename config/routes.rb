Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :messages, only: [:create]
    end
  end
  
  root "events#index"
end
