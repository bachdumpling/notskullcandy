class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true

    has_many :reviews
    has_many :products, through: :reviews

end
