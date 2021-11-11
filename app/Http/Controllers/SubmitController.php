<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SubmitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Home/Submit', [
            'title' => 'Submit'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $points = ($request->plasticType + $request->metalType + $request->paperType + $request->glassType);
        $validatedData = $request->validate([
            'firstName' =>  'required|max:255',
            'lastName' =>  'required|max:255',
            'email' => 'required|max:255',
            'trashImage' => 'image|file|max:2048|mimes:jpg,jpeg,png',
            'receiptImage' => 'image|file|max:2048|mimes:jpg,jpeg,png',
            'plasticType' => 'required|integer',
            'metalType' => 'required|integer',
            'paperType'=> 'required|integer',
            'glassType'=> 'required|integer',
            'streetAddress'=> 'required',
            'province'=> 'required',
            'city'=> 'required',
            'postalCode'=> 'required|integer',
            'userId'=> 'required'
        ], [
            'plasticType.integer' => 'The :attribute must be a number',
            'paperType.integer' => 'The :attribute must be a number',
            'metalType.integer' => 'The :attribute must be a number',
            'glassType.integer' => 'The :attribute must be a number',
            'postalCode.integer' => 'The :attribute must be a number',
        ]);

        $validatedData['trashImage'] = $request->file('trashImage')->store('post-images');
        $validatedData['receiptImage'] = $request->file('receiptImage')->store('post-images');
        Post::create($validatedData);

        $user = User::find(auth()->user()->id);
        $user->score = $points + $user->score;
        $user->save();

        return Redirect::route('submit')->with('success', 'Submited Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
