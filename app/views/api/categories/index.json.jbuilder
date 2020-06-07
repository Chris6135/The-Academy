@categories.each do |cat|
    json.set! cat.id do
      json.extract! cat, :id, :title, :icon
    end
  end
