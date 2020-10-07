class Story < ApplicationRecord
  belongs_to :plan

  def self.random_6 
    Stories.all
  end

end
