# This migration comes from open_badges (originally 20130226075804)
class CreateOpenBadgesBadgeTags < ActiveRecord::Migration
  def change
    create_table :open_badges_badge_tags do |t|
      t.integer :badge_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
