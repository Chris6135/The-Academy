class BetterNamePublish < ActiveRecord::Migration[5.2]
  def change
    create_table :lives do |t|
      t.integer :lesson_id, null: false
      t.integer :category_id, null: false
      t.string :keywords, null: false
      t.timestamps
    end
    add_index :lives, :lesson_id
    add_index :lives, :category_id
  end

end
