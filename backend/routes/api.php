<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(TaskController::class)->group(function () {
    Route::get('/tasks', 'index')->name('tasks.list');
    Route::get('/tasks/{id}', 'show')->where('id', '[0-9]+')->name('tasks.show');
    Route::post('/tasks', 'store')->name('tasks.store');
    Route::put('/tasks/{id}', 'update')->where('id', '[0-9]+')->name('tasks.update');
    Route::delete('/tasks/{id}', 'destroy')->where('id', '[0-9]+')->name('tasks.destroy');
});