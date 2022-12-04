<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        <!-- Styles -->
        <link rel="shortcut icon" href="{{ asset('images/logo.png')}}" type="image/x-icon">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  />
        <link rel="stylesheet" href="css/uicons-regular-rounded.css">
        <link rel="stylesheet" href="css/uicons-bold-rounded.css">
        <link rel="stylesheet" href="css/uicons-solid-rounded.css">
        <link rel="stylesheet" href="css/uicons-brands.css">
        <link rel="stylesheet" href="css/master.css">
        {{-- <link rel="stylesheet" href="css/frontend.css">  --}}
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div style="background:url({{asset('images/loveback.jpg')}}); background-size:cover; background-position:center; position:fixed; top:0; left:0; right:0; bottom:0">
            <div style="background:rgba(160, 12, 12, 0.6)" class="flex flex-col fixed left-0 top-0 right-0 bottom-0 justify-center items-center font-bold">
                <img class="md:w-[90px] animate__animated animate__pulse animate__infinite	infinite animate__fast" style="filter: brightness(0) invert(1)" src="{{asset('/images/logo.png')}}" />
                <h1 class="text-2xl md:text-4xl font-['FredokaOne'] text-white animate__animated animate__pulse animate__infinite	infinite">Le-Tranquille.</h1>
                @yield("message")        
            </div>

        </div>
    

    </body>
</html>
