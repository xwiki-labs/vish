# This migration comes from open_badges (originally 20130225132003)
class CreateOpenBadgesBadges < ActiveRecord::Migration
  def change
    create_table :open_badges_badges do |t|
      t.string :name
      # t.string :image
      t.string :criteria
      t.text :description

      t.attachment :image
      
      t.timestamps
    end
  end
end
