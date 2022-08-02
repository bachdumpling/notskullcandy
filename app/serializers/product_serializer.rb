class ProductSerializer < ActiveModel::Serializer
    attributes :id, :name, :price, :img_url, :product_img, :description
end
