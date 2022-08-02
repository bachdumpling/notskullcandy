class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :img_url, :average_rating



  def average_rating
    self.average(:rating).to_f
end


end
