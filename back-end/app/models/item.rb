class Item < ActiveRecord::Base
    belongs_to :collection 
    # use has_one rather than belongs_to 
    #   since its going through something
    has_one :user, through: :collection

end