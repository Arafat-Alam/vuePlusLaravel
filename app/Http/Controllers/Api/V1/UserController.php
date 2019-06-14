<?php

namespace App\Http\Controllers\Api\V1;

use App\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
   
    public function index()
    {
        return Employee::all();
    }

    
    public function store(Request $request)
    {   
        $input = $request->input();
        $valid = Validator::make($input,[
            'name' => 'required',
            'password' => 'required|min:8',
            'email' => 'required|email|unique:employees',
        ]);
        // return 'dsfasd';
        if($valid->fails()){
            return response()->json(['success' => false, 'errors' => $valid->errors()], 200);
        }

        $emp = new Employee();
        $emp->name = $request->name;
        $emp->email = $request->email;
        $emp->password = bcrypt($request->password);
        $emp->gender = $request->gender;
        $emp->religion = $request->religion;
        $emp->education = json_encode($request->education);
        $emp->bio = $request->bio;
        $emp->save();

    }

    public function show($id)
    {
        $data = Employee::findOrFail($id);
        return $ret = [
            'name' => $data->name,
            'email' => $data->email,
            'gender' => $data->gender,
            'education' => json_decode($data->education),
            'religion' => $data->religion,
            'bio' => $data->bio,
        ];
    }

    public function update(Request $request, $id)
    {
        $emp = Employee::findOrFail($id);

        $emp->name = $request->name;
        $emp->email = $request->email;
        // $emp->password = bcrypt($request->password);
        $emp->gender = $request->gender;
        $emp->religion = $request->religion;
        $emp->education = json_encode($request->education);
        $emp->bio = $request->bio;
        $emp->update();
        return $emp;
    }

    public function destroy($id)
    {
        $company = Employee::findOrFail($id);
        $company->delete();
        return '';
    }
}
