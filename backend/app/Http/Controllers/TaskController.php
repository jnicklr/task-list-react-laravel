<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Services\TaskService;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Exception;

class TaskController extends Controller
{
    protected ?TaskService $taskService = null;

    public function __construct(TaskService $taskService){
        $this->taskService = $taskService;
    }

    public function index(){
        try {
            $tasks = $this->taskService->list();
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
        return response()->json($tasks, 200);
    }

    public function show(int $id){
        try {
            $task = $this->taskService->get($id);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to retrieve a task.'], 400);
        }
        return response()->json($task, 200);
    }

    public function store(TaskRequest $request){
        try {
            $task = $this->taskService->store($request->validated());
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to create a task.'], 400);
        }
        return response()->json($task, 201);
    }

    public function update(TaskRequest $request, int $id){
        try {
            $task = $this->taskService->update($request->validated(), $id);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to update a task.'], 400);
        }
        return response()->json($task, 200);
    }

    public function destroy(int $id){
        try {
            $task = $this->taskService->delete($id);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (Exception $e) {
            return response()->json(['error' => 'Failed to delete a task.'], 400);
        }
        return response()->json($task, 200);
    }
}
