class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :img_url
end
