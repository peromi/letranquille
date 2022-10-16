@extends('layouts.app')




@section('content')

    <div class="w-full h-full bg-red-600 fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center">
        <div class="bg-white p-8 flex flex-col gap-3">
            <h1 class="font-bold text-xl">Upload demo data</h1>
        <form method="POST" action="/user-import" enctype="multipart/form-data">
            @csrf

            <input type="file" name="file" />
            <button type="submit" class="bg-yellow-600 text-white p-3 px-12 rounded-full">Upload</button>
        </form>
        </div>
    </div>


@endsection
