<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@300;400;500;600;700;800;900&family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  /> --}}
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
 
     
    {{-- <link rel="stylesheet" href="css/frontend.css">  --}}
   
    <title>Le tranquille</title>
   


</head>
<body>
    
   
    <div id="root">
        <div style="background:url({{asset('images/loveback.jpg')}}); background-size:cover; background-position:center; position:fixed; top:0; left:0; right:0; bottom:0">
            <div style="background:rgba(160, 12, 12, 0.6)" class="flex flex-col fixed left-0 top-0 right-0 bottom-0 justify-center items-center font-bold">
                <img class="md:w-[120px] animate__animated animate__pulse animate__infinite	infinite animate__fast" style="filter: brightness(0) invert(1)" src="{{asset('/images/logo.png')}}" />
                <h1 class="text-2xl md:text-4xl font-black tracking-tighter text-white animate__animated animate__pulse animate__infinite	infinite">Le-Tranquille.</h1>
                <p class="text-yellow-400 tracking-tighter">Loading please wait...</p>
   

   <div class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
            </div>
        </div>
        
    </div>

    
    

    <script  src="{{ asset('js/app.js') }}"></script>


    
    <script type="text/javascript" defer>
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>


    
 


</body>
</html>
