json.lesson do
    json.partial! "api/lessons/lesson", lesson: @lesson
    json.author User.find(@lesson.author_id).username

end



json.steps do
    @lesson.steps.each do |step|
        json.set! step.id do
            json.partial! 'api/steps/steps', step:step
        end
    end
end

json.author do
    json.partial! 'api/users/user', user: @lesson.author
end
    

# json.user json.partial! 'api/user/user', user: @lesson.author