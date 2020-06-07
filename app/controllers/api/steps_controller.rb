class Api::StepsController < ApplicationController 
    def show
        @step = Step.find(params[:id])
        render :show
    end

    def create
        @step = Step.new()
        @step.lesson_id = params[:lesson_id] #dont think we need to render anything here
        #as long as the step is added to the lesson's setps array then the 
        #comonent should be able to handle grabbing the lesson info.
        @step.save
    end

    def update
        @step = Step.find(params[:id])
        if @step.update(step_params)
          render :show
        else
          render json: @step.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @step=Step.find(params[:id])
        @step.destroy
    end

    private

    def steps_params
        params.require(:step).permit(:title, :body)
    end

end
