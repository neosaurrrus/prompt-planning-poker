class PlayersController < ApplicationController
    def index
        story = Story.find_by(id:params[:story_id])
        players = story.players
        render json: players
    end
    def show
        story = Story.find_by(id:params[:story_id])
        players = story.players
        player = players.find(params[:id])
        render json: players
    end

    def create 
        
        story = Story.find(params[:story_id])

        if story.players.find_by(name: params[:player][:name])
            story.players.find_by(name: params[:player][:name]).delete
        end
  
        player = story.players.build(player_params)
    
        story.save
    
        render json: {}
    end

    def update
        story = Story.find(params[:id])
        story.update(story_params)
        render json: story
    end

    def destroy
        story = Story.find(params[:id])
        story.delete
        plan = Plan.find_by(url:params[:plan_id])
        stories = plan.stories
        render json: story.plan
    end

    private

  
  def get_plan
     plan = Plan.find_by(url:params[:url])
  end

  def set_story

    plan = Plan.find_by!(url:params[:plan_id])
    
    story = plan.stories.find(params[:id])
  end

    def player_params
        params.require(:player).permit(:name, :score, :story, :plan_id, :story_id)
    end

end




