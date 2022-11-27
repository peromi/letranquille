@extends('layouts.app')

@section('content')
    <div class="bg-white p-3 rounded-md shadow-xl">
        <h1 class="font-['Inter-black'] tracking-tighter text-xl">Reset Your Password</h1>

        @if (session('status'))
            <div class="bg-green-300 p-2 w-full rounded-md mb-2" role="alert">
                {{ session('status') }}
            </div>
        @endif
        <form method="POST" action="{{ route('password.email') }}">
            @csrf
            <input type="email" name="email" placeholder="Your Email Address"
                class="ring-1 p-3 bg-zinc-50 w-full px-12 ring-slate-900/5 outline-0" />

            @error('email')
                <span class="bg-red-300 p-2 w-full rounded-md mb-2" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror

            <button type="submit" class="hover:bg-yellow-300 w-full p-3 mt-1 bg-red-800 text-white rounded-md">Send
                Password Reset Link</button>
        </form>
    </div>
@endsection
{{-- @if (session('status'))
<div class="alert alert-success" role="alert">
    {{ session('status') }}
</div>
@endif

<form method="POST" action="{{ route('password.email') }}">
@csrf

<div class="row mb-3">
    <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

    <div class="col-md-6">
        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
    </div>
</div>

<div class="row mb-0">
    <div class="col-md-6 offset-md-4">
        <button type="submit" class="btn btn-primary">
            {{ __('Send Password Reset Link') }}
        </button>
    </div>
</div>
</form> --}}
