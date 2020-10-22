class Story < ApplicationRecord
  belongs_to :plan
  has_many :players

  def set_score
  
    if self.players.empty? 
      self.score = 0
      return self.score
    end

    total_score = self.players.reduce(0){ |sum, player| sum + player.score}
    self.score = (total_score / self.players.length).round
    self.score

  end
end
