@lessons.each do |lesson|
    json.set! lesson.id do
      json.partial! "api/lessons/lesson", lesson: lesson
    end
  end
  