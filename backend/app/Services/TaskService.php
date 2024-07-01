<?php

namespace App\Services;

use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;

class TaskService 
{
    public function list(): Collection{
        return Task::all();
    }

    public function get(int $id): ?Task{
        $task = Task::find($id);
        if (!$task){
            throw new ModelNotFoundException("Task with Id {$id} not found");
        }
        
        return $task;
    }

    public function store(array $data): Task{
        return Task::create($data);
    }

    public function update(array $data, int $id): bool{
        $task = Task::find($id);
        if (!$task){
            throw new ModelNotFoundException("Task with Id {$id} not found");
        }
        return $task->update($data);
    }

    public function delete(int $id): bool{
        $task = Task::find($id);
        if (!$task){
            throw new ModelNotFoundException("Task with Id {$id} not found");
        }
        return $task->delete();
    }
}