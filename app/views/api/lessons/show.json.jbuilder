json.lesson do
    json.partial! "api/lessons/lesson", lesson: @lesson
    json.stepIds @lesson.steps.pluck(:id)
end

json.steps do
    @lesson.steps.each do |step|
        json.set! step.id do
            json.partial! 'api/steps/steps', step:step
        end
    end
end

# json.user json.partial! 'api/user/user', user: @lesson.author