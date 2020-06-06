class Api::SessionsController < ApplicationController 
    def index 
        if params[:user_id]
            @lessons = Lesson.find(params[:user_id])
        else
            @lessons = Lesson.all 
        render :index
    end

    def show
        @lesson = Lesson.find(params[:id])
    end

    def create
        @lesson = Lesson.new(lessons_params)
        @lesson.author_id = current_user.id
        if @lesson.save!
            render :show
        else
            render json: @lesson.errors.full_messages, status: 422
        end

    end

    def update
        @lesson = Lesson.find(params[:id])
        if @Lesson.update(lessons_params)
          render :show
        else
          render json: @lesson.errors.full_messages, status: 422
        end
      end


    def destroy
        @lesson = Lesson.find(params[:id])
        @lesson.destroy
    end



    private

    def lessons_params
        params.require(:lesson).permit(  
            :title,
          ))
end