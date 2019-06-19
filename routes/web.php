<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

// Route::get('/companies', 'CompaniesController@index');
    // Route::get('/companies', 'CompaniesController@index');

// Route::group(['middleware' => ['auth'], 'prefix' => '', 'as' => 'admin.'], function () {
//     Route::get('/companies', 'CompaniesController@index')->name('companies.index');
// });

Route::get( '/{vue_route?}', 'HomeController@index' )->where( 'vue_route', '(.*)' );