class ProductReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :img_url, :product_img, :avg_rating


  has_many :reviews
end
