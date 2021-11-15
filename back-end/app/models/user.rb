class User < ActiveRecord::Base
    has_many :collections
    has_many :items, through: :collections

end