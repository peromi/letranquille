@extends('layouts.logs')

@section('content')
{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
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

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}
<div class="bg-primary d-flex justify-content-left align-items-center vw-100 vh-100 pl-2">
   <div class="float-left ml-3">
    <div class="bg-white radius-24 login-form login-inner-form" >
        <h1 class="text-align-center text-small-28">Welcome</h1>
        <h1 class="text-align-center text-small-28">to start a new Journey!</h1>
        <h1 class="text-align-center mt-1 text-small-24 text-secondary">Sign Up</h1>

        <form  action="#">
            <div class="floating-input">
                <label for="email">Email or Mobile*</label>
                <input type="text" placeholder="Email or Mobile*">
            </div>

            <div class="floating-input mt-2">
                <label for="password">Password*</label>
                <input type="password" placeholder="Password*">
                <button class="eyeview"><i class="fa-regular fa-eye"></i></button>
            </div>
            <div class="floating-input mt-2 mb-3">
                <label for="password">Confirm Password*</label>
                <input type="password" placeholder="Confirm Password*">
                <button class="eyeview"><i class="fa-regular fa-eye"></i></button>
            </div>
            <div class="divider">

                <p>Or Sign Up with</p>

            </div>
            <div class="social">
                <a href="#">
                    <i class="fa-brands fa-google"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="fa-brands fa-facebook-square"></i>
                </a>
            </div>

            <button class="d-flex login-btn">Sign Up</button>
            <div class="create-account">
                <p>Already have an Account?</p>
                <a href="/login">Login</a>
            </div>
        </form>
    </div>

   </div>
</div>


@endsection
