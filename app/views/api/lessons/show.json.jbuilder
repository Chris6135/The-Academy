json.partial! "api/lessons/lesson", lesson: @lesson

json.stepIds @lesson.steps.pluck(:id)