<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Http\Requests\Person\UpadateRequest;
use App\Models\Person;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    public function __invoke(UpadateRequest $request, Person $person)
    {
        $data = $request->validated();
        $person->update($data);

        return $person;
    }
}
