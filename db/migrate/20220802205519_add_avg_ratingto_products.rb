class AddAvgRatingtoProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :avg_rating, :integer
  end
end
