<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title  >{{ config('app.name', 'Laravel') }}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">


    <!-- Fonts -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">


    <style type="text/css">
        body {

            font-family: 'Inter', sans-serif;
            padding: 0;
            margin: 0;

          
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #f0f0f0;

          
        }
        table{
            border-spacing: 0;
        }
        td{
            padding: 0;
        }
        img{
            border: 0;
        }

        #main {
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
        
            height: 100vh;
        }

        #title {
            object-fit: contain;
            margin-bottom: -12px
        }

        #title-text {
            letter-spacing: -1px;
            margin-bottom: -12px;
            font-weight: 900;
            color: #6A0DAD
        }

        #main-body {
            position: relative;
            width: 65%;
        }

        #inner-container {
            z-index: 234;
            margin: 3px;
            overflow: hidden;
            flex-wrap: wrap;
            border-radius: 12px;
            position: relative;
            background: white;
            padding: 24px;
            display: flex;
            flex-direction: column;
            width: 100%;
            display: block;
        }

        #name {
            letter-spacing: -1px;
            text-transform: capitalize;
            font-weight: 300;
            line-height: 0px;
        }

        #float-img {
            object-fit: contain;
            margin-bottom: -12px;
            position: absolute;
            right: -34px;
            top: -34px;
            opacity: 0.1
        }

        #backdrop {
            height: 100%;
            border-radius: 24px;
            transform: rotateZ(2deg);
            z-index: 0;
            background: linear-gradient(#6A0DAD, #FF631C);
            position: absolute;
            top: 0;
            left: 5px;
            right: 0;
            bottom: 0
        }
        .wrapper{
            width: 100%;
            table-layout: fixed;
            /* background-color: #f0f0f0; */
            padding-bottom: 60px;
        }
        .main{
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            color:#171a1b;
        }
        .container{
             
            max-width: 600px;
            margin: 0 auto;
            border-spacing: 0;
            color:#171a1b;
            padding: 24px;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;


        }
        a{
            text-decoration: none;
            
        }
    </style>

</head>

<body class="font-sans antialiased">
    @yield('content')
</body>

</html>
