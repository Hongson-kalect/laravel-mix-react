<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;

class TestController extends Controller
{
    //public 
    public function index($id=null){
        if($id==null){
           return Test::get();
        }
        else return Test::find($id);
    }
}
