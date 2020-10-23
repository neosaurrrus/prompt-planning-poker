class StoriesController < ApplicationController
    before_action :get_plan, only: [:index]
    # before_action :set_story, only: [:show, :edit, :update, :destroy]


    def index
        plan = Plan.find_by(url:params[:plan_id])
        stories = plan.stories
        render json: stories
    end
    def show
        story = Story.find_by(id:params[:story_id])
        render json: story, include: :players
    end

    def create 
        plan = Plan.find_by(url:params[:url])
        story = plan.stories.build(story_params)
        
       
        plan.save
        if !plan.selectedStory.present?
           
            plan.selectedStory =  story.id
            plan.save
        end
       
        render json: story
    end

    def update
        story = Story.find(params[:id])
        story.players.delete_all
        story.update(story_params)
        story.set_score
        story.save
        render json: story
    end

    def destroy
        story = Story.find(params[:id])
        story.delete
        plan = Plan.find_by(url:params[:plan_id])
        stories = plan.stories
        if !plan.selectedStory.present?
            plan.selectedStory =  stories[0].id
            plan.save
        end
        render json: stories
    end

    private
  
  def get_plan
     plan = Plan.find_by(url:params[:url])
  end


    def story_params
        params.require(:story).permit(:as_a, :want_to, :i_can, :url, :plan, :plan_id, :id, :score, :created_at, :updated_at, :complete)
    end

    

end




