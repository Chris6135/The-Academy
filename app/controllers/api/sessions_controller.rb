class Api::SessionsController < ApplicationController 
    def create
<<<<<<< HEAD:app/controllers/api/session_controller.rb
        @user = user.find_by_credentials(params[:user][:username], params[:user][:password])
        
        if login(@user)
            render "api/users/show"
=======
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password])

        if @user
            login(@user)
            render"api/users/show"
>>>>>>> auth:app/controllers/api/sessions_controller.rb
        else
            render json: ["Sorry, we can't find that account, or your password didn't match. Please try again!"], status: 422
        end
    end

    def destroy
        @user = current_user
        if @user
<<<<<<< HEAD:app/controllers/api/session_controller.rb
            logout
            render "api/users/show"
=======
            logout 
            render"api/users/show"
>>>>>>> auth:app/controllers/api/sessions_controller.rb
        else
            render json: ["No user logged in"], status: 404
        end
    end
end