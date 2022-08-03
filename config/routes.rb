Rails.application.routes.draw do
  
  # resources :reviews
  # resources :products
  # resources :users

  get '/users', to: 'users#index'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/products', to: 'products#index'

  get '/products/:id', to: 'products#show'

end
