class Plan < ApplicationRecord
    has_many :stories,  dependent: :destroy
end
