@extends('layouts.email')


@section('content')
    <div style="padding:24px; display: flex;flex-direction:column; align-items:center;  background:#f0f0f0; height:100vh; ">
        <img src="{{ asset('images/logo.png') }}" width="60" height="60"
            style="object-fit: :contain;margin-bottom:-12px" />
        <h1 style="letter-spacing: -1px; margin-bottom:-12px; font-weight:900">Le-tranquile</h1>
        <p style="letter-spacing: -1px">Find love with ease.</p>
        <div style="position: relative;  width:65%;">
            <div
                style="z-index:234;margin:3px;overflow:hidden; flex-wrap:wrap; border-radius:12px;position: relative; background: white; padding:24px; display:flex; flex-direction:column; width:100%;">

                <h3 style="letter-spacing:-1px; text-transform:capitalize; font-weight:300;line-height:0px;">
                    {{ $data['name'] }}!
                </h3>

                    {!! $data['message'] !!}
                
                {{-- @if($data['otp'] != null)
                    <p style="text-align: center; letter-spacing:-1px;">Verification Code</p>
                    <h1
                    style="font-weight: 900;font-size:40px; letter-spacing:-1px; text-align:center;margin-top:-14px; color:rgb(7, 7, 143)">
                    {{ $data['otp'] }}</h1>

                @endif --}}
                


                <img src="{{ asset('assets/images/logo.png') }}" width="300" height="300"
                    style="object-fit: :contain;margin-bottom:-12px; position:absolute; right:-34px; top:-34px; opacity:0.1" />

                <div style="  display:flex; flex-direction:row; justify-content:space-between; align-items:center">
                    <div>
                        <p style="line-height: 0px;letter-spacing:-1px">Yours truly,</p>
                        <p style="line-height: 0px; margin-top:2px; letter-spacing:-1px">Le-tranquille</p>
                    </div>
                     
                </div>
            </div>
            <div
                style="  height:100%;border-radius:24px;transform:rotateZ(2deg);z-index:0; background:linear-gradient(#1B234A, blue); position:absolute;top:0; left:5px; right:0;bottom:0 ">
            </div>
        </div>

        <div>
            <p
                style="font-size: 14px; letter-spacing:-1px; text-align:center; color:grey; line-height:2px; margin-top:45px">
                Le-tranquille</p>
            <p style="font-size: 13px; letter-spacing:-1px; text-align:center; color:grey; line-height:2px;">Le-tranquille <a
                    href="#">support@le-tranquille.com</a></p>
            {{-- <p style="font-size: 13px; letter-spacing:-1px; text-align:center; color:grey; line-height:2px;">+2347061641825
                | +2349157655005
            </p> --}}
            <p style="font-size: 13px; letter-spacing:-1px; text-align:center; color:grey; line-height:33px;">Copyright
                {{ date('Y') }}. Le-tranquille, Alrights reserved</p>

        </div>
    </div>
@endsection
