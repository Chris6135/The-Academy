class Api::LessonsController < ApplicationController 
    def index 
        if params[:user_id]
            @lessons = Lesson.find(params[:user_id])

        elsif params[:category_id]
            category = Category.find(params[:cateogry_id])
            @lessons = Lesson.all.where category: category
        else
            @lessons = []
             Category.all.each do |category|
                @lessons << category.lessons
        end 
        @lessons.flatten
        render :index   
        end
    end

    def show
        @lesson = Lesson.find(params[:id])
        render :show
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
        if @lesson.update(lessons_params)
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
        params.require(:lesson).permit(:title, :category, :published)
    end
end