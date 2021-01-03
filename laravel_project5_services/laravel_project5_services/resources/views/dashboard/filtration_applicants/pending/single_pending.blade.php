@extends('layouts.master')

@section('main')

    <div class="col-md-8">
        <div class="card card-user">
            <div class="author text-center"  style="background-image:url('/main/images/BG.png');">
                <a>
                    <img class="img-circle" src="{{asset("pending_images/$single_pending->pending_education_img")}}" width="200" height="200"   alt="...">
                </a>
            </div>
            <div class="contact-form text-center">
                <h2>{{$single_pending->pending_name}}</h2>
                <h4>{{$single_pending->pending_email}}</h4>
                <h4>{{$single_pending->pending_mobile}}</h4>
                <h4>{{$single_pending->pending_city}}</h4>
                <h4>{{$single_pending->category_id}}</h4>
                <a><img src='{{asset("pending_images/$single_pending->pending_image")}}'  alt=""  width="500px" height="500px"></a>
                <h4><p class="card-text">{{$single_pending->pending_desc}}</p></h4>
            </div>
            <td>
                {{-- Store this value in database in applicant table --}}
                <a href="/Add_to_applicant_fromSinglePage/{{$single_pending->id}}">
                    <button class="btn btn-primary" value="" > Accept </button>
                </a>
            </td>
            <td>
                <a href="/Add_to_rejected_fromSinglePage/{{$single_pending->id}}">
                    <button class="btn btn-danger" value="" > Reject </button>
                </a>
            </td>
        </div>
    </div>

@endsection
