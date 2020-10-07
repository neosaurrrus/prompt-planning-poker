class StoriesController < ApplicationController
    before_action :get_plan
    before_action :set_story, only: [:show, :edit, :update, :destroy]


    def index
        stories = plan.stories
        render json: stories
    end
    def show
        story = Story.find(params[:id])
        render json: story
    end

    def create 
        story = plan.story.build!(story_params)
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

    private
  def get_plan
     plan = Plan.find(params[:plan_id])
  end

  def set_story
    story = Plan.stories.find(params[:id])
  end

    def story_params
        params.require(:story).permit(:id, :name, :owner, :url, :complete)
    end

end




