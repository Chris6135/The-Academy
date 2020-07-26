json.extract! user, :id, :username, :email, :country, :user_info

json.lessons user.lessons.pluck(:id)

json.photo_url url_for(user.photo) if user.photo.attached?