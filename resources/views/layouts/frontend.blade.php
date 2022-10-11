<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">



    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"  />
    <link rel="stylesheet" href="css/uicons-regular-rounded.css">
    <link rel="stylesheet" href="css/uicons-bold-rounded.css">
    <link rel="stylesheet" href="css/uicons-solid-rounded.css">
    <link rel="stylesheet" href="css/uicons-brands.css">
    <link rel="stylesheet" href="css/master.css">
    {{-- <link rel="stylesheet" href="css/frontend.css">  --}}
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <title>Le tranquille</title>
    <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="3c341ec2-dbcb-4edd-a640-c5bb8dd39176";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
</head>
<body>

    <div id="root">
        {{-- <div style="background-color: #E5EFF1" class="flex flex-col fixed left-0 top-0 right-0 bottom-0 justify-center items-center font-bold">
            <img src="{{asset('/images/logo.png')}}" />
            <h1 class="text-2xl">Welcome to Le-Tranquille.</h1>
            <img src="{{asset('/images/giphy.gif')}}" width="120px" />
        </div> --}}
    </div>


    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
</html>
