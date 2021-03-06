class PlansController < ApplicationController

    def index
        plans = Plan.all
        render json: plans.to_json(include: {stories: {:include => :players}})
    end
    def show
        plan = Plan.find_by(url:params[:id])
        render json: plan.to_json(include: {stories: {:include => :players}})
    end

    def create 
        plan = Plan.create!(plan_params)
        render json: plan
    end

    def update
        plan = Plan.find_by(url:params[:id])
        plan.update(plan_params)
      
        render json: plan
    end

    def destroy
        plan = Plan.find_by(id:params[:id])
        plan.delete
        render json: Plan.all
    end

    private
    def plan_params
        params.require(:plan).permit(:id, :name, :pin, :url, :complete, :selectedStory)
    end

end
