# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!(id: 8,
     username: 'Demo',
      email:'Demo@guest.guest',
       user_info: 'Possible Employer', 
       country: 'United States', 
       password_digest: '$2a$12$yEDByIza09ah2SIVwXY67uhuwduSNQOUch9pfVnCI55DtA54TqPGy', 
       session_token: 'dummy', 
       created_at: DateTime.new(1992,6,12,2),
       updated_at: DateTime.new(2020,6,4,17)
)

Category.create!(id: 1, title: 'Cooking', icon:'fas fa-hamburger')
Category.create!(id: 2, title: 'Living', icon:'fas fa-home')
Category.create!(id: 3, title: 'Crafts', icon:'fas fa-palette')
Category.create!(id: 4, title: 'Workshop', icon:'fas fa-hammer')
Category.create!(id: 5, title: 'Games', icon:'fas fa-gamepad')

Lesson.create!(id: 9999, title:"test", author_id: 8)

Step.create!(id: 9999, title: "test", body: "test", lesson_id: 9999)
Step.create!(id: 10000, title: "test", body: "test", lesson_id: 9999)