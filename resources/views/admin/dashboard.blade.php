@extends('layouts.admin')


@section('content')

<div class="hp-main-layout-content">

    <div class="row mb-32 gy-32">
        <div class="col-12">
            <div class="row align-items-center justify-content-between g-24">
                <div class="col-12 col-md-6">
                    <h3>Welcome back, Admin</h3>
                    <p class="hp-p1-body mb-0">Your current status and analytics are here</p>
                </div>

                <div class="col hp-flex-none w-auto">
                    <select class="form-select">
                        <option selected value="1">This Month</option>
                        <option value="2">This Week</option>
                        <option value="3">This Year</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="row g-32 mb-32">
                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-16">
                                <div class="col-6 hp-flex-none w-auto">
                                    <div class="avatar-item d-flex align-items-center justify-content-center avatar-lg bg-primary-4 hp-bg-color-dark-primary rounded-circle">
                                        <i class="iconly-Light-People text-primary hp-text-color-dark-primary-2" style="font-size: 24px;"></i>
                                    </div>
                                </div>

                                <div class="col">
                                    <h3 class="mb-4 mt-8">243<span class="hp-badge-text ms-8 text-primary hp-text-color-dark-primary-2"></span></h3>
                                    <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-16">
                                <div class="col-6 hp-flex-none w-auto">
                                    <div class="avatar-item d-flex align-items-center justify-content-center avatar-lg bg-secondary-4 hp-bg-color-dark-secondary rounded-circle">
                                        <i class="iconly-Light-Buy text-secondary" style="font-size: 24px;"></i>
                                    </div>
                                </div>

                                <div class="col">
                                    <h3 class="mb-4 mt-8">1,243<span class="hp-badge-text ms-8 text-secondary"></span></h3>
                                    <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">Membership</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-16">
                                <div class="col-6 hp-flex-none w-auto">
                                    <div class="avatar-item d-flex align-items-center justify-content-center avatar-lg bg-warning-4 hp-bg-color-dark-warning rounded-circle">
                                        <i class="iconly-Light-Ticket text-warning" style="font-size: 24px;"></i>
                                    </div>
                                </div>

                                <div class="col">
                                    <h3 class="mb-4 mt-8">323<span class="hp-badge-text ms-8 text-warning"></span></h3>
                                    <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">Premium</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-xl-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row g-16">
                                <div class="col-6 hp-flex-none w-auto">
                                    <div class="avatar-item d-flex align-items-center justify-content-center avatar-lg bg-danger-4 hp-bg-color-dark-danger rounded-circle">
                                        <i class="iconly-Light-Discount text-danger" style="font-size: 24px;"></i>
                                    </div>
                                </div>

                                <div class="col">
                                    <h3 class="mb-4 mt-8">132<span class="hp-badge-text ms-8 text-danger"></span></h3>
                                    <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-30">Coins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row  ">

                <div class="col-12">
                    <div class="card hp-project-ecommerce-table-card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="d-flex align-items-center justify-content-between mb-32">
                                        <h5 class="mb-0">Latest Orders</h5>
                                        <p class="hp-p1-body mb-0 fw-medium text-black-100 hp-text-color-dark-0">View all orders</p>
                                    </div>

                                    <div class="table-responsive">
                                        <table class="table align-middle mb-0">
                                            <thead>
                                                <tr>
                                                    <th style="min-width: 110px;">
                                                        <span class="hp-badge-size d-block pb-16 fw-normal text-black-60 hp-text-color-dark-50 text-uppercase">Date</span>
                                                    </th>
                                                    <th style="min-width: 180px;">
                                                        <span class="hp-badge-size d-block pb-16 fw-normal text-black-60 hp-text-color-dark-50 text-uppercase">Billing Name</span>
                                                    </th>
                                                    <th>
                                                        <span class="hp-badge-size d-block pb-16 fw-normal text-black-60 hp-text-color-dark-50 text-uppercase">Amount</span>
                                                    </th>
                                                    <th>
                                                        <span class="hp-badge-size d-block pb-16 fw-normal text-black-60 hp-text-color-dark-50 text-uppercase">Status</span>
                                                    </th>
                                                    <th class="text-center">
                                                        <span class="hp-badge-size d-block pb-16 fw-normal text-black-60 hp-text-color-dark-50 text-uppercase">Invoice</span>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td class="ps-0">
                                                        <span class="mb-0 fw-medium text-black-100 hp-text-color-dark-0">June 9, 2020</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">Elon Musk</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">$1,322.45</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-success-4 hp-bg-dark-success text-success border-success">Paid</span>
                                                    </td>
                                                    <td>
                                                        <span class="d-block text-black-60 hp-text-color-dark-50 text-center">
                                                            <i class="iconly-Light-Download"></i>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="ps-0">
                                                        <span class="mb-0 fw-medium text-black-100 hp-text-color-dark-0">June 9, 2020</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">Christiano Ronaldo</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">$733.32</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-success-4 hp-bg-dark-success text-success border-success">Paid</span>
                                                    </td>
                                                    <td>
                                                        <span class="d-block text-black-60 hp-text-color-dark-50 text-center">
                                                            <i class="iconly-Light-Download"></i>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="ps-0">
                                                        <span class="mb-0 fw-medium text-black-100 hp-text-color-dark-0">June 10, 2020</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">Jeff Bezos</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">$1,923.32</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-warning-4 hp-bg-dark-warning text-warning border-warning">Refund</span>
                                                    </td>
                                                    <td>
                                                        <span class="d-block text-black-60 hp-text-color-dark-50 text-center">
                                                            <i class="iconly-Light-Download"></i>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="ps-0">
                                                        <span class="mb-0 fw-medium text-black-100 hp-text-color-dark-0">June 9, 2020</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">Richard Hamilton</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">$922.12</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-success-4 hp-bg-dark-success text-success border-success">Paid</span>
                                                    </td>
                                                    <td>
                                                        <span class="d-block text-black-60 hp-text-color-dark-50 text-center">
                                                            <i class="iconly-Light-Download"></i>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="ps-0">
                                                        <span class="mb-0 fw-medium text-black-100 hp-text-color-dark-0">June 10, 2020</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">Lebron James</span>
                                                    </td>
                                                    <td>
                                                        <span class="mb-0 text-black-80 hp-text-color-dark-30">$323.98</span>
                                                    </td>
                                                    <td>
                                                        <span class="badge bg-danger-4 hp-bg-dark-danger text-danger border-danger">Charge Back</span>
                                                    </td>
                                                    <td>
                                                        <span class="d-block text-black-60 hp-text-color-dark-50 text-center">
                                                            <i class="iconly-Light-Download"></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>

</div>

@endsection
