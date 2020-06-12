# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!(
      username:'Demo',
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

Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Cooking')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Cooking')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Cooking')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Cooking')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Cooking')

Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Living')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Living')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Living')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Living')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Living')

Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Crafts')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Crafts')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Crafts')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Crafts')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Crafts')

Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Workshop')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Workshop')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Workshop')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Workshop')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Workshop')

Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Games')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Games')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Games')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Games')
Lesson.create!( title:"Lorem Ipsum", author_id: 1, published: true, category: 'Games')

Step.create!( title:"dolor sit amet", body:"consectetur adipiscing elit. Aenean laoreet, 
     purus ornare pellentesque dignissim, nibh arcu mollis sapien, nec hendrerit odio risus at tortor. 
     Curabitur blandit feugiat nibh eget venenatis. Cras in scelerisque sem, nec condimentum justo. 
     In malesuada rutrum felis, ac scelerisque elit. Nulla porta lacinia erat, eu vehicula ligula sodales ut. 
     Nam non ullamcorper risus. Etiam et mi eget ante placerat pellentesque.", lesson_id: 1)

Step.create!( title:"Duis eu neque nunc.", body:"Nullam quam nunc, pretium eu eleifend eu, tincidunt et mi. 
     Nunc iaculis sapien id lacinia laoreet. Fusce ac tempus nunc. 
     Sed pulvinar nisl dignissim sapien bibendum, et accumsan urna mattis. 
     Aenean ornare pharetra diam, id accumsan risus. Nam sollicitudin, urna mattis pulvinar dictum, 
     lacus ex blandit elit, at euismod lorem lectus a ante. Nam facilisis elit et faucibus sagittis. 
     Phasellus egestas lorem ac justo fermentum, eget vestibulum arcu molestie. Cras nisl tellus, porttitor non fermentum non, 
     congue sed ex.", lesson_id: 1)

Step.create!( title:"Quisque id dui in libero tempor", body:"placerat quis ac diam. Vivamus volutpat dui egestas tellus venenatis, vitae fringilla ante auctor. 
     Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
     per inceptos himenaeos. Aenean molestie tortor eget arcu fringilla, 
     vitae elementum arcu finibus. Sed quam ligula, tempus id condimentum a, 
     pulvinar non lacus. Ut in eros justo. Integer ac faucibus lorem, eleifend efficitur dui. In a fring
     congue sed ex.", lesson_id: 2)

     Step.create!( title:"dolor sit amet", body:"consectetur adipiscing elit. Aenean laoreet, 
          purus ornare pellentesque dignissim, nibh arcu mollis sapien, nec hendrerit odio risus at tortor. 
          Curabitur blandit feugiat nibh eget venenatis. Cras in scelerisque sem, nec condimentum justo. 
          In malesuada rutrum felis, ac scelerisque elit. Nulla porta lacinia erat, eu vehicula ligula sodales ut. 
          Nam non ullamcorper risus. Etiam et mi eget ante placerat pellentesque.", lesson_id: 2)
     
     Step.create!( title:"Duis eu neque nunc.", body:"Nullam quam nunc, pretium eu eleifend eu, tincidunt et mi. 
          Nunc iaculis sapien id lacinia laoreet. Fusce ac tempus nunc. 
          Sed pulvinar nisl dignissim sapien bibendum, et accumsan urna mattis. 
          Aenean ornare pharetra diam, id accumsan risus. Nam sollicitudin, urna mattis pulvinar dictum, 
          lacus ex blandit elit, at euismod lorem lectus a ante. Nam facilisis elit et faucibus sagittis. 
          Phasellus egestas lorem ac justo fermentum, eget vestibulum arcu molestie. Cras nisl tellus, porttitor non fermentum non, 
          congue sed ex.", lesson_id: 2)
     
     Step.create!( title:"Quisque id dui in libero tempor", body:"placerat quis ac diam. Vivamus volutpat dui egestas tellus venenatis, vitae fringilla ante auctor. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Aenean molestie tortor eget arcu fringilla, 
          vitae elementum arcu finibus. Sed quam ligula, tempus id condimentum a, 
          pulvinar non lacus. Ut in eros justo. Integer ac faucibus lorem, eleifend efficitur dui. In a fring
          congue sed ex.", lesson_id: 2)
     










# Step.create!(id: 9999, title: "test", body: "test", lesson_id: 9999)
# Step.create!(id: 10000, title: "test", body: "test", lesson_id: 9999)