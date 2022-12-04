@extends('errors::minimal')

@section('title', __('Page Expired'))
@section('code', '419')
@section('message')


<div class="text-white flex flex-col justify-center items-center">
    <h1 class="font-['FredokaOne'] text-2xl tracking-tighter">Page Expired</h1>
    <p class="text-sm tracking-tighter">Check to see if you are on the correct page.</p>
    <a href="/" class="text-yellow-500 mt-2">Go Home</a>
</div>


@endsection
