class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.string :name
      t.string :pin
      t.string :url
      t.boolean :complete, :default => false
      t.integer :selectedStory
      t.timestamps
    end
  end
end
