@extends('layouts.app')




@section('content')

    <div class="w-full h-full bg-red-600 fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-center items-center">
        <div class="bg-white p-8 flex flex-col gap-3">
            <h1 class="font-bold text-xl">Upload demo data</h1>
        <form method="POST" action="/user-import" enctype="multipart/form-data" id="dataupload">
            @csrf

            <input type="file" name="file" />
            <button type="submit"   class="bg-yellow-600 text-white p-3 px-12 rounded-full">Upload</button>
        </form>

        </div>
    </div>


    <script>
        function upload_data(){
            var percent = $('#progress')
            var bar = $('#bar')

            $('#dataupload').ajaxForm({
                beforeSubmit: function(){
                    document.getElementId('progress').style = "block"
                    var percentVal =  '0%';
                    bar.width(percentVal)
                    percent.html(percentVal)
                },

                uploadProgress: function(event, position, total, percentComplete){
                    var percentVal =  percentComplete + "%";
                    bar.width(percentVal)
                    percent.html(percentVal)
                },
                succcess:function(){
                    var percentVal  "100%";
                    bar.width(percentVal)
                    percent.html(percentVal)
                },
                complete:function(xhr){
                    if(xhr.responseText){
                        alert(xhr.responseText);
                    }
                }
            })
        }


    </script>

@endsection
