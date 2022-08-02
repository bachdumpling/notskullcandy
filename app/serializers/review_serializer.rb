class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :product_id


  #   def average_rating
  #     self.object.rating
  #   end


  # def review_sum
  #   self.object.rating
  # end

end
