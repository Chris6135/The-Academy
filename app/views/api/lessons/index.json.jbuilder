@lessons.each do |lesson|
    json.set! lesson.id do
      json.partial! "api/lessons/lesson", lesson: lesson
      json.author User.find(lesson.author_id).username

    end
  end
  