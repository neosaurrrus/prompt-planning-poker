class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :as_a
      t.string :want_to
      t.string :i_can
      t.integer :score
      t.boolean :complete, :default => false
      t.references :plan, null: false, foreign_key: true

      t.timestamps
    end
  end
end
