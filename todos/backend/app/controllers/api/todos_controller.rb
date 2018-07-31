# require '/Users/appacademy/Desktop/w7d1/todos/backend/app/controllers/application_controller.rb'

class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index

    render json: Todo.all

  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render json: @todo

  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body)
  end
end
