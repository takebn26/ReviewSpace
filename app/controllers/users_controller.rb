class UsersController < ApplicationController
  respond_to :json

  def search
    @users = User.not_user(current_user).incremental_search(params[:keyword])
    respond_with @users
  end
end
