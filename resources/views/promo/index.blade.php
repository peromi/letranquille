@extends("layouts.app")



@section("content")

<div class="bg-white p-3 rounded-md shadow-xl">
    <h1 class="font-['Inter-black'] tracking-tighter text-xl">Promo Admission</h1>

    @if (session('success'))
        <div class="bg-green-300 p-2 w-full rounded-md mb-2" role="alert">
            {{ session('success') }}
        </div>
    @endif
    <form method="POST" action="{{ route('promo-api.store') }}">
        @csrf
        <input type="text" name="coupon" placeholder="Enter Coupon"
            class="ring-1 p-3 bg-zinc-50 w-full px-12 ring-slate-900/5 outline-0" />

        @error('coupon')
            <span class="bg-red-300 p-2 w-full rounded-md mb-2" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror
        <input type="number" name="duration" placeholder="Duration in days"
            class="ring-1 p-3 bg-zinc-50 w-full px-12 ring-slate-900/5 outline-0" />

        @error('duration')
            <span class="bg-red-300 p-2 w-full rounded-md mb-2" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <button type="submit" class="hover:bg-yellow-300 w-full p-3 mt-1 bg-red-800 text-white rounded-md">Save</button>
    </form>
</div>



@endsection