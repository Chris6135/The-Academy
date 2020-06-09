json.extract! user, :id, :username, :email, :country, :user_info

json.lessons user.lessons.pluck(:id)