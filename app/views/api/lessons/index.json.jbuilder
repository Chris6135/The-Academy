@lessons.each do |lesson|
    json.set! bench.id do
      json.partial! "api/lessons/lessson", lesson: lesson
    end
  end
  