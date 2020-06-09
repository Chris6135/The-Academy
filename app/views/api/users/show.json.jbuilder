json.partial! "api/users/user", user: @user

json.lessons @user.lessons.pluck(:id)
