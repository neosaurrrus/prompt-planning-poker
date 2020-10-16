class Story < ApplicationRecord
  belongs_to :plan
  has_many :players
end
