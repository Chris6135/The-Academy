class API::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/user/show"
        else
            render json: @user.errors.full_messages, satus: 422
        end
    end

    def logout 
        current_user.reset_session_token! 
        session[:session_token] = nil
        @current_user = nil
    end

    private
    def user_params
        params.require(:user).permis(:username, :password)
end