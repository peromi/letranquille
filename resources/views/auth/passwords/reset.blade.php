@extends('layouts.app')

@section('content')

<div class="bg-white p-3 rounded-md shadow-xl">
    <h1 class="font-['Inter-black'] tracking-tighter text-xl">Confirm Password</h1>
    <p class="my-1 font-bold tracking-tighter">Please confirm your password before continuing.</p>

    @if (session('status'))
        <div class="bg-green-300 p-2 w-full rounded-md mb-2" role="alert">
            {{ session('status') }}
        </div>
    @endif
    <form method="POST" action="{{ route('password.update') }}">
        @csrf

        <input type="hidden" name="token" value="{{ $token }}">
        <input type="email" name="email" required placeholder="Your current password"
            class="ring-1 p-3 bg-zinc-50 w-full px-12 ring-slate-900/5 outline-0" />

        @error('email')
            <span class="bg-red-300 p-2 w-full rounded-md mb-2" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        <input type="password" name="password" required placeholder="Your password"
            class="ring-1 p-3 bg-zinc-50 w-full px-12 ring-slate-900/5 outline-0" />

        @error('password')
            <span class="bg-red-300 p-2 w-full rounded-md mb-2" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        <input type="password" name="password_confirmation"  required placeholder="Confirm Your password"
            class="ring-1 p-3 bg-zinc-50 w-full px-12 ring-slate-900/5 outline-0" />

   

        <button type="submit" class="hover:bg-yellow-300 w-full p-3 mt-1 bg-red-800 text-white rounded-md">Reset Password</button>

        
    </form>
</div>
         
@endsection
