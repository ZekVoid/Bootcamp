<?php

use App\Models\StudentModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('Student', function (Request $request) {
    $StudentDetails = StudentModel::all();
    return response()->json($StudentDetails);
});

Route::post('Student', function (Request $request) {
    $rules = [
        'FirstName' => 'required|string|max:255',
        'LastName' => 'required|string|max:255',
        'Birthday' => 'required|date',
        'Address' => 'required|string|max:255',
    ];

    $validator = Validator::make($request->all(), $rules);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $studentDetails = [
        'first_name' => $request->FirstName,
        'last_name' => $request->LastName,
        'birthday' => $request->Birthday,
        'address' => $request->Address
    ];

    StudentModel::create($studentDetails);
    return response()->json(['message' => 'Student created successfully'], 201);
});

Route::delete('Student/{id}', function ($id) {
    $student = StudentModel::find($id);
    
    if ($student) {
        $student->delete();
        
        return response()->json(['message' => 'Student deleted successfully'], 200);
    } else {
        return response()->json(['error' => 'Student not found'], 404);
    }

});

Route::get('Student/view/{id}', function ($id) {
    $student = StudentModel::find($id);
    
    if ($student) {
        return response()->json(compact('student'), 200);
    } else {
        return response()->json(['error' => 'Student not found'], 404);
    }

});

Route::put('Student/{id}', function ($id, Request $request) {
    $student = StudentModel::findOrFail($id);
    
    $student->update([
        'first_name' => $request->input('first_name'),
        'last_name' => $request->input('last_name'),
        'birthday' => $request->input('birthday'),
        'address' => $request->input('address')
    ]);
    
    return response()->json(['message' => 'Student updated successfully', 'data' => $student], 200);
});