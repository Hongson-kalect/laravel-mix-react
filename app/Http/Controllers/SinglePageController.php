<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageController extends Controller
{
    public function __invoke()
    {
        return view('single-page-application');
    }
}