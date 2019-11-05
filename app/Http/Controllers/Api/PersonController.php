<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Person;

class PersonController extends Controller
{
    public function index()
    {
        return Person::query()
            ->with('image')
            ->orderBy('name', 'asc')
            ->limit(15)
            ->get();
    }
}
