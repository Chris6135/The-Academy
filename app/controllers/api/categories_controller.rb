class Api::CategoriesController < ApplicationController 

    def index
        @categories = Category.all 
        render :index
    end

    def show
        @categories = Category.find(params[:id]).lessons
        render "lessons/index"
    end

end
