class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    private
    def user_params
<<<<<<< HEAD
        params.require(:user).permit(:username, :password)
=======
        params.require(:user).permit(:username, :password, :email, :country, :user_info)
>>>>>>> auth
    end
end