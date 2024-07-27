<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke()
    {
        $person = [
                [
                    'id' => 1,
                    'name' => 'Vika',
                    'age' => 20,
                    'job' => 'lawyer',
                ],
                [
                    'id' => 2,
                    'name' => 'Vitya',
                    'age' => 24,
                    'job' => 'rest',
                ]
            ];
         return $person;
    }
}
