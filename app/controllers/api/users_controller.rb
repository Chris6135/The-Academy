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

    
end