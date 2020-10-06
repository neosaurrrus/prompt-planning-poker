class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.string :name
      t.string :owner
      t.string :url
      t.boolean :complete, :default => false
      t.timestamps
    end
  end
end
