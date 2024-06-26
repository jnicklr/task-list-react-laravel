<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('', function () {
    return response()->json([
        'texto' => 'tirar tarefa',
    ]);
});

Route::get('', function () {
    return response()->json([
        'texto' => 'listar tarefas',
    ]);
});

Route::get('', function () {
    return response()->json([
        'texto' => 'criar tarefa',
    ]);
});

Route::get('', function () {
    return response()->json([
        'texto' => 'atualizar tarefa',
    ]);
});

Route::get('', function () {
    return response()->json([
        'texto' => 'deletar tarefa',
    ]);
});