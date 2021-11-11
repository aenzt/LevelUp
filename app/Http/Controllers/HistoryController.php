<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Home/History', [
            'title' => 'History',
            'posts' => Post::where('userId', auth()->user()->id)->orderBy('created_at', 'desc')->get()
        ]);
    }
}
