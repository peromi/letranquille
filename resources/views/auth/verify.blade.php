@extends('layouts.app')

@section('content')

<div class="bg-white p-3 rounded-md shadow-xl">
    <h1 class="font-['Inter-black'] tracking-tighter text-xl">Verify Your Email Address</h1>

    
    @if (session('resent'))
        <div class="bg-green-300 p-2 w-full rounded-md mb-2" role="alert">
            {{ __('A fresh verification link has been sent to your email address.') }}
        </div>
    @endif

    {{ __('Before proceeding, please check your email for a verification link.') }}
    {{ __('If you did not receive the email') }},
    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
        @csrf
        

        <button type="submit" class="hover:bg-yellow-300 w-full p-3 mt-1 bg-red-800 text-white rounded-md">click here to request another</button>
    </form>
</div>
 
@endsection
