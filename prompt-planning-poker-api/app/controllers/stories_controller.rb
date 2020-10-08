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
        plan = Plan.find_by(url:params[:url])
        story = plan.stories.build(story_params)
        story.save
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
        params.require(:story).permit(:as_a, :want_to, :i_can, :url, :plan, :complete)
    end

end




