Rails.application.routes.draw do
  
  resources :reviews, only: [:index, :show, :create, :update, :update, :destroy]
  # resources :products
  # resources :users
  resources :reviews

  get '/users', to: 'users#index'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/products', to: 'products#index'

  get '/products/:id', to: 'products#show'

  delete '/reviewdelete', to: 'reviews#destroy'

end
