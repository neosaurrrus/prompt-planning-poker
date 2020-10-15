class Story < ApplicationRecord
  belongs_to :plan
  has_many :players

  def self.random_6 
    Stories.all
  end

end
