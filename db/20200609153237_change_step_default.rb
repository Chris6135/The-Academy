class ChangeStepDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:steps, :title, "")
    change_column_default(:steps, :body, "")
  end

end
