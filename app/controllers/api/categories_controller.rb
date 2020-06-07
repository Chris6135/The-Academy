class Api::CategoriesController < ApplicationController 
    def show
        @categories = Category.find(params[:id]).lessons
        render "lessons/index"
    end

end
