class SessionController < ApplicationController 
    def create
        @user = user.find_by_credentials(params[:user][:username], params[:user][:password])
        
        if login(@user)
            render "api/users/show"
        else
            render json: ["Sorry, we can't find that account, or your password didn't match. Please try again!"], status: 422
        end
    end

    def destroy
        @user = current_usre
        if @user
            logout
            render "api/users/show"
        else
            render json: ["No user logged in"], status: 404
        end
    end
end