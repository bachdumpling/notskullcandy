class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :handle_baddata



  def index
    render json: User.all 
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password)
  end

  
private

def handle_baddata(invalid)
render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

def render_not_found
    render json: { error: "NOT FOUND"}, status: :not_found
end

end