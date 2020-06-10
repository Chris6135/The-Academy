json.extract! lesson, :id, :title, :author_id, :published, :category, :created_at, :updated_at
json.stepIds lesson.steps.pluck(:id)