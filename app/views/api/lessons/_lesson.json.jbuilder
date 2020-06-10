json.extract! lesson, :id, :title, :author_id, :published, :created_at, :updated_at
json.stepIds lesson.steps.pluck(:id)