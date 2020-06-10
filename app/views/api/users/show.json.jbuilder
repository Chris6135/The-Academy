json.user do
    json.partial! "api/users/user", user: @user
end



json.lessons do
    @user.lessons.each do |lesson|
        json.set! lesson.id do
            json.partial! 'api/lessons/lesson', lesson: lesson 
        end
    end
end




