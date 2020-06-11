Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    
    resources :users, only: [:create, :show] do
      resources :lessons, only: [:index]
    end
    
    resources :lessons, only: [:index, :show, :create, :destroy, :update] do 
      resources :steps, only: [ :index, :create]
    end

    resources :steps, only: [:show, :destroy, :update] 

    resources :splash, only: [:index]
    resources :categories, only: [:index] do
      resources :lessons, only:[:index]
     end
  end
  root "static_pages#root"

end
