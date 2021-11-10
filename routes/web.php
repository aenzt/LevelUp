<?php

use App\Http\Controllers\HistoryController;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\SubmitController;
use App\Http\Controllers\LeaderboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'name' => 'Data send from Laravel',
        'title' => 'Home',
        'users' => User::orderByDesc('score')->get(),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index', [
        'title' => 'Dashboard'
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

Route::get('/leaderboard', [LeaderboardController::class, 'index'])->name('leaderboard');

Route::get('/submit', [SubmitController::class, 'index'])->middleware(['auth', 'verified'])->name('submit');
Route::post('/submit', [SubmitController::class, 'store'])->middleware(['auth', 'verified'])->name('submit-store');

Route::get(
    '/dashboard/user',
    [UsersController::class, 'index']
    )->middleware(['auth', 'verified'])->name('user');

Route::get('/dashboard/post', [PostController::class, 'index'])->middleware(['auth', 'verified'])->name('post');
Route::get('/dashboard/post/{post}', [PostController::class, 'show'])->middleware(['auth', 'verified'])->name('post-individual');
Route::get('/dashboard/post/edit/{post}', [PostController::class, 'edit'])->middleware(['auth', 'verified'])->name('post-edit');
Route::delete('/dashboard/post/{post}', [PostController::class, 'destroy'])->middleware(['auth', 'verified'])->name('post-delete');
Route::get('/dashboard/post/create', [PostController::class, 'create'])->middleware(['auth', 'verified'])->name('post-create');
Route::post('/dashboard/post', [PostController::class, 'store'])->middleware(['auth', 'verified'])->name('post-store');

Route::get('/history', [HistoryController::class, 'index'])->middleware(['auth', 'verified'])->name('history');
