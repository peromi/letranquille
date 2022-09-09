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

</head>
<body>

    <div id="root"></div>


    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
</html>
