<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="css/uicons-regular-rounded.css">
    <link rel="stylesheet" href="css/uicons-bold-rounded.css">
    <link rel="stylesheet" href="css/uicons-solid-rounded.css"> 
    <link href="{{ asset('css/master.css') }}" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>


        <main class="py-4 bg-red-600 fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center">
            @yield('content')
        </main>
    </div>

    <script src="{{ asset('js/jquery-3.6.0.min.js')}}">

    </script>
</body>
</html>
