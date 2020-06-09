json.step do
    json.partial! "api/steps/steps", step: @step
end

json.lesson do
    json.partial! "api/lessons/lesson", lesson: @step.lesson_id
end