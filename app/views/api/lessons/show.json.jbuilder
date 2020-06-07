json.partial! "api/lessons/lessson", lesson: @lesson

.json.stepIds @lesson.steps.pluck(:id)