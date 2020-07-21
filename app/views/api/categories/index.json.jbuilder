
json.categories do
  @categories.each do |cat|
      json.set! cat.id do
        json.extract! cat, :id, :title, :icon
        lessons = Lesson.all.where category: cat.title
        json.lessonIds lessons.pluck(:id)
       end
    end
end

  json.lessons do 
    Lesson.all.where(published: true).each do |lesson|
        json.set! lesson.id do
          json.partial! "api/lessons/lesson", lesson: lesson 
          json.stepIds lesson.steps.pluck(:id)
          json.author User.find(lesson.author_id).username
        end
    end
  end
