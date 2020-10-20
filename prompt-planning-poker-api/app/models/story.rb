class Story < ApplicationRecord
  belongs_to :plan
  has_many :players

  def set_score
    self.score = self.players.reduce(0){ |sum, player| sum + player.score}
  end
end
