class StoriesController < ApplicationController
    before_action :get_plan, only: [:index]
    before_action :set_story, only: [:show, :edit, :update, :destroy]


    def index
        plan = Plan.find_by(params[:url])
        stories = plan.stories
        render json: stories
    end
    def show
        story = Story.find(params[:id])
        render json: story
    end

    def create 
        story = plan.stories.build(story_params)
        render json: story
    end

    def update
        story.update(story_params)
        render json: story
    end

    def destroy
        story.delete
        render json: Story.all
    end

    private

  
  def get_plan
   
     plan = Plan.find_by(url:params[:url])
  end

  def set_story

    plan = Plan.find_by!(url:params[:plan_id])
    
    story = plan.stories.find(params[:id])
  end

    def story_params
        params.require(:story).permit(:id, :name, :owner, :url, :complete)
    end

end




