<!DOCTYPE html>
<html dir="ltr">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="author" content="le-tranquille">
    <meta name="description" content="Le tranquille, home of love expression" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/logo.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/logo.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/logo.png') }}">
    {{-- <link rel="manifest" href="{{ asset('app-assets/favicon/site.html') }}"> --}}
    <link rel="mask-icon" href="{{ asset('images/logo.png') }}" color="#0010f7">
    <meta name="msapplication-TileColor" content="#0010f7">
    <meta name="theme-color" content="#ffffff">

    <!-- Plugin -->
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/plugin/swiper-bundle.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/icons/iconly/index.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/icons/remix-icon/index.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/bootstrap.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/colors.css') }}">

    <!-- Base -->
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/base/font-control.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/base/typography.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/base/base.css') }}">

    <!-- Theme -->
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/theme/colors-dark.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/theme/theme-dark.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/custom-rtl.css') }}">

    <!-- Layouts -->
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/layouts/sider.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/layouts/header.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/components.css') }}">
    <!-- Customizer -->
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/layouts/customizer.css') }}">

    <!-- Charts -->
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/plugin/apex-charts.css') }}">

    <!-- Pages -->
    <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/pages/dashboard-ecommerce.css') }}">

    <!-- Custom -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">

    <title>
        Le-tranquille - Dashboard
    </title>
</head>

<body class="collapse-btn-none">
    <main class="hp-bg-color-dark-90 d-flex min-vh-100">
        <div class="hp-sidebar hp-bg-color-black-0 hp-bg-color-dark-100">
            <div class="hp-sidebar-container">
                <div class="hp-sidebar-header-menu">
                    <div class="row justify-content-between align-items-end me-12 ms-24 mt-24">
                        <div class="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-visible">
                            <button type="button" class="btn btn-text btn-icon-only">
                                <i class="ri-menu-unfold-line" style="font-size: 16px;"></i>
                            </button>
                        </div>

                        <div class="w-auto px-0">
                            <div class="hp-header-logo d-flex align-items-end">
                                <a href="index.html">
                                    <img class="hp-logo hp-sidebar-visible" src="{{ asset('images/logt.png') }}" alt="logo">
                                    <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="{{ asset('images/logt.png') }}" alt="logo">
                                    <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="{{ asset('images/logt.png') }}" alt="logo">
                                    <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none" src="{{ asset('images/logt.png') }}" alt="logo">
                                    <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block" src="{{ asset('images/logt.png') }}" alt="logo">
                                </a>

                                <a href="https://hypeople-studio.gitbook.io/yoda/change-log" target="_blank" class="d-flex">
                                    <span class="hp-sidebar-hidden h3 fw-bold hp-text-color-primary-1 mb-6">.</span>
                                    <span class="hp-sidebar-hidden hp-p1-body fw-medium hp-text-color-black-40 mb-16 ms-4" style="letter-spacing: -0.5px;">v.3.0</span>
                                </a>
                            </div>
                        </div>

                        <div class="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden">
                            <button type="button" class="btn btn-text btn-icon-only">
                                <i class="ri-menu-fold-line" style="font-size: 16px;"></i>
                            </button>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <div class="menu-title">MAIN</div>

                            <ul>
                                <li>
                                    <a href="javascript:;" class="submenu-item">
                                        <span>
                                            <i class="iconly-Curved-Home"></i>

                                            <span>Dashboards</span>
                                        </span>


                                    </a>


                                </li>

                                <li>
                                    <a href="javascript:;" class="submenu-item">
                                        <span>
                                            <i class="iconly-Curved-Graph"></i>

                                            <span>Widgets</span>
                                        </span>


                                    </a>


                                </li>

                                <li>
                                    <a href="javascript:;" class="submenu-item">
                                        <span>
                                            <i class="iconly-Curved-Document"></i>

                                            <span>Layouts</span>
                                        </span>

                                    </a>


                                </li>
                            </ul>
                        </li>

                        <li>
                            <div class="menu-title">APPS</div>

                            <ul>
                                <li>
                                    <a href="app-contact.html">
                                        <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Contact" aria-label="Contact"></div>

                                        <span>
                                            <i class="iconly-Curved-People"></i>

                                            <span>Contact</span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a href="javascript:;" class="submenu-item">
                                        <span>
                                            <i class="iconly-Curved-Buy"></i>

                                            <span>Ecommerce</span>
                                        </span>


                                    </a>


                                </li>
                            </ul>
                        </li>



                        <li>
                            <div class="menu-title">COMPONENTS</div>

                            <ul>
                                <li>
                                    <a href="javascript:;" class="submenu-item">
                                        <span>
                                            <i class="iconly-Curved-Category"></i>

                                            <span>General</span>
                                        </span>


                                    </a>


                                </li>




                                <li>
                                    <a href="javascript:;" class="submenu-item">
                                        <span>
                                            <i class="iconly-Curved-TicketStar"></i>

                                            <span>Data Display</span>
                                        </span>


                                    </a>


                                </li>

                                <li>
                                    <a href="javascript:;" class="submenu-item">
                                        <span>
                                            <i class="iconly-Curved-Danger"></i>

                                            <span>Feedback</span>
                                        </span>


                                    </a>

                                    <ul class="submenu-children" data-level="1">
                                        <li>
                                            <a href="component-alert.html">
                                                <span>Alert</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="component-drawer.html">
                                                <span>Drawer</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="component-modal.html">
                                                <span>Modal</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="component-notification.html">
                                                <span>Notification</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="component-progress.html">
                                                <span>Progress</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="component-spinner.html">
                                                <span>Spinner</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="row justify-content-between align-items-center hp-sidebar-footer pb-24 px-24 mx-0 hp-bg-color-dark-100">
                    <div class="divider border-black-20 hp-border-color-dark-70 hp-sidebar-hidden px-0"></div>

                    <div class="col">
                        <div class="row align-items-center">
                            <div class="me-8 w-auto px-0">
                                <div class="avatar-item d-flex align-items-center justify-content-center rounded-circle" style="width: 36px; height: 36px;">
                                    <img src="{{ asset('app-assets/img/memoji/memoji-1.png') }}">
                                </div>
                            </div>

                            <div class="w-auto px-0 hp-sidebar-hidden">
                                <span class="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">Jane Doe</span>
                                <a href="profile-information.html" class="hp-badge-text hp-text-color-dark-30">View Profile</a>
                            </div>
                        </div>
                    </div>

                    <div class="col hp-flex-none w-auto px-0 hp-sidebar-hidden">
                        <a href="profile-information.html">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="remix-icon hp-text-color-black-100 hp-text-color-dark-0" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {{-- Main content --}}
        <div class="hp-main-layout">

            {{-- Header content--}}
            <header>
                <div class="row w-100 m-0">
                    <div class="col ps-18 pe-16 px-sm-24">
                        <div class="row w-100 align-items-center justify-content-between position-relative">
                            <div class="col w-auto hp-flex-none hp-mobile-sidebar-button me-24 px-0" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                                <button type="button" class="btn btn-text btn-icon-only">
                                    <i class="ri-menu-fill hp-text-color-black-80 hp-text-color-dark-30 lh-1" style="font-size: 24px;"></i>
                                </button>
                            </div>

                            <div class="hp-header-text-info col col-lg-14 col-xl-16 hp-header-start-text d-flex align-items-center hp-horizontal-none">
                                <div class="d-flex rounded-3 hp-text-color-primary-1 hp-text-color-dark-0 p-4 hp-bg-color-primary-4 hp-bg-color-dark-70" style="min-width: 18px">
                                    <i class="iconly-Curved-Document"></i>
                                </div>

                                <p class="hp-header-start-text-item hp-input-label hp-text-color-black-100 hp-text-color-dark-0 ms-16 mb-0 lh-1 d-flex align-items-center">
                                    Notify
                                    <span class="fw-light hp-text-color-success-1 ms-12">{{ session('success') }}</span>
                                    <span class="fw-light hp-text-color-danger-3 ms-12">{{ session('error') }}</span>


                                </p>
                            </div>

                            <div class="col hp-flex-none w-auto hp-horizontal-block">
                                <div class="hp-header-logo d-flex align-items-end">
                                    <a href="index.html">
                                        <img class="hp-logo hp-sidebar-visible" src="{{ asset('images/logt.png') }}" alt="logo">
                                        <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="{{ asset('images/logt.png') }}" alt="logo">
                                        <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="{{ asset('images/logt.png') }}" alt="logo">
                                        <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none" src="{{ asset('images/logt.png') }}" alt="logo">
                                        <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block" src="{{ asset('images/logt.png') }}" alt="logo">
                                    </a>

                                    <a href="#" target="_blank" class="d-flex">
                                        <span class="hp-sidebar-hidden h3 fw-bold hp-text-color-primary-1 mb-6">.</span>
                                        <span class="hp-sidebar-hidden hp-p1-body fw-medium hp-text-color-black-40 mb-16 ms-4" style="letter-spacing: -0.5px;">v.3.0</span>
                                    </a>
                                </div>
                            </div>

                            <div class="hp-header-search d-none col">
                                <input type="text" class="form-control" placeholder="Search..." id="header-search" autocomplete="off">
                            </div>

                            <div class="col hp-flex-none w-auto hp-horizontal-block hp-horizontal-menu">
                                <ul class="d-flex flex-wrap align-items-center">
                                    <li class="px-18">
                                        <a href="javascript:;" class="px-24 py-10" data-bs-toggle="dropdown">
                                            <span>Main</span>
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Home"></i>
                                                        <span>Dashboards</span>
                                                    </span>


                                                </a>


                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Graph"></i>
                                                        <span>Widgets</span>
                                                    </span>


                                                </a>


                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Document"></i>
                                                        <span>Layouts</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="divider.html">
                                                            <span>Divider</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="grid-system.html">
                                                            <span>Grid System</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                            <span>Page Layouts</span>

                                                            <i class="ri-arrow-right-s-line"></i>
                                                        </a>
                                                        <ul class="dropdown-menu">

                                                            <li>
                                                                <a href="layout-boxed.html">
                                                                    <span>Boxed Layout</span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="layout-vertical.html">
                                                                    <span>Vertical Layout</span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="layout-horizontal.html">
                                                                    <span>Horizontal Layout</span>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href="layout-full.html">
                                                                    <span>Full Layout</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="px-18">
                                        <a href="javascript:;" class="px-24 py-10" data-bs-toggle="dropdown">
                                            <span>Applications</span>
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="dropend">
                                                <a href="app-contact.html">
                                                    <span>
                                                        <i class="iconly-Curved-People"></i>
                                                        <span>Contact</span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Buy"></i>
                                                        <span>Ecommerce</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="app-ecommerce-shop.html">
                                                            <span>Shop</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="app-ecommerce-wishlist.html">
                                                            <span>Wishlist</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="app-ecommerce-product-detail.html">
                                                            <span>Product Detail</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="app-ecommerce-checkout.html">
                                                            <span>Checkout</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="px-18">
                                        <a href="javascript:;" class="px-24 py-10" data-bs-toggle="dropdown">
                                            <span>Pages</span>
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-CloseSquare"></i>
                                                        <span>Error Pages</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="error-404.html">
                                                            <span>404</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="error-403.html">
                                                            <span>403</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="error-500.html">
                                                            <span>500</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="error-503.html">
                                                            <span>503</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="error-502.html">
                                                            <span>502</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="error-maintenance.html">
                                                            <span>Maintenance</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="error-coming-soon.html">
                                                            <span>Coming Soon</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a href="page-landing.html">
                                                    <span>
                                                        <i class="iconly-Curved-Discovery"></i>
                                                        <span>Landing</span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="dropend">
                                                <a href="page-pricing.html">
                                                    <span>
                                                        <i class="iconly-Curved-Discount"></i>
                                                        <span>Pricing</span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-User"></i>
                                                        <span>Profile</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="profile-information.html">
                                                            <span>Personel Information</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="profile-notifications.html">
                                                            <span>Notifications</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="profile-activity.html">
                                                            <span>Activity Monitor</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="profile-settings.html">
                                                            <span>Security Settings</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="profile-password.html">
                                                            <span>Password Change</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="profile-connect.html">
                                                            <span>Connect with Social</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a href="page-invoice.html">
                                                    <span>
                                                        <i class="iconly-Curved-Paper"></i>
                                                        <span>Invoice</span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Message"></i>
                                                        <span>E-mail Templates</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="../../../../yoda-email-template/hello.html">
                                                            <span>Hello</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="../../../../yoda-email-template/promotional.html">
                                                            <span>Promotional</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="../../../../yoda-email-template/verify.html">
                                                            <span>Verify</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="../../../../yoda-email-template/reset-password.html">
                                                            <span>Reset Password</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="../../../../yoda-email-template/term.html">
                                                            <span>Term</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="../../../../yoda-email-template/deactive-account.html">
                                                            <span>Deactive Account</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a href="page-faq.html">
                                                    <span>
                                                        <i class="iconly-Curved-InfoSquare"></i>
                                                        <span>FAQ</span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Bookmark"></i>
                                                        <span>Knowledge Base</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="page-knowledge-base-1.html">
                                                            <span>Knowledge Base 1</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="page-knowledge-base-2.html">
                                                            <span>Knowledge Base 2</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a href="blank-page.html">
                                                    <span>
                                                        <i class="iconly-Curved-PaperPlus"></i>
                                                        <span>Blank Page</span>
                                                    </span>
                                                </a>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Unlock"></i>
                                                        <span>Authentication</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="auth-login.html">
                                                            <span>Login Page</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="auth-register.html">
                                                            <span>Register Page</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="auth-recover.html">
                                                            <span>Recover Password</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="auth-reset.html">
                                                            <span>Reset Password</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Password"></i>
                                                        <span>Lock Screen</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="lock-welcome.html">
                                                            <span>Welcome</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="lock-password.html">
                                                            <span>Password Is Changed</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="lock-deactivated.html">
                                                            <span>Deactivated</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="lock.html">
                                                            <span>Lock</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="px-18">
                                        <a href="javascript:;" class="px-24 py-10" data-bs-toggle="dropdown">
                                            <span>Components</span>
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Category"></i>
                                                        <span>General</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="general-style-guide.html">
                                                            <span>Style Guide</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="general-buttons.html">
                                                            <span>Buttons</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="general-remix-icons.html">
                                                            <span>Remix Icons</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="general-iconly-icons.html">
                                                            <span>Iconly Icons</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Discovery"></i>
                                                        <span>Navigation</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="component-breadcrumb.html">
                                                            <span>Breadcrumb</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-dropdown.html">
                                                            <span>Dropdown</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-menu.html">
                                                            <span>Menu</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-pagination.html">
                                                            <span>Pagination</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Filter2"></i>
                                                        <span>Data Entry</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="component-checkbox.html">
                                                            <span>Checkbox</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-form.html">
                                                            <span>Form</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-input.html">
                                                            <span>Input</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-input-number.html">
                                                            <span>Input Number</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-radio.html">
                                                            <span>Radio</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-select.html">
                                                            <span>Select</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-slider.html">
                                                            <span>Slider</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-switch.html">
                                                            <span>Switch</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-TicketStar"></i>
                                                        <span>Data Display</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="component-avatar.html">
                                                            <span>Avatar</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-badge.html">
                                                            <span>Badge</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-card.html">
                                                            <span>Card</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-carousel.html">
                                                            <span>Carousel</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-accordion.html">
                                                            <span>Accordion</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-collapse.html">
                                                            <span>Collapse</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-list-group.html">
                                                            <span>List</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-popover.html">
                                                            <span>Popover</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-table.html">
                                                            <span>Table</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-tabs.html">
                                                            <span>Tabs</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-tooltip.html">
                                                            <span>Tooltip</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="dropend">
                                                <a class="dropdown-item" href="javascript:;" data-bs-toggle="dropdown">
                                                    <span>
                                                        <i class="iconly-Curved-Danger"></i>
                                                        <span>Feedback</span>
                                                    </span>

                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li class="dropend">
                                                        <a href="component-alert.html">
                                                            <span>Alert</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-drawer.html">
                                                            <span>Drawer</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-modal.html">
                                                            <span>Modal</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-notification.html">
                                                            <span>Notification</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-progress.html">
                                                            <span>Progress</span>
                                                        </a>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="component-spinner.html">
                                                            <span>Spinner</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div class="col hp-flex-none w-auto pe-0">
                                <div class="row align-items-center justify-content-end">
                                    <div class="w-auto px-0">
                                        <div class="d-flex align-items-center me-4 hp-header-search-button">
                                            <button type="button" class="btn btn-text btn-icon-only">
                                                <i class="iconly-Curved-Search hp-text-color-black-60"></i>
                                                <i class="d-none ri-close-line hp-text-color-black-60" style="font-size: 24px;"></i>
                                            </button>
                                        </div>
                                    </div>



                                    <div class="hover-dropdown-fade w-auto px-0 d-flex align-items-center me-8 me-sm-16 position-relative">
                                        <button type="button" class="btn btn-text btn-icon-only">
                                            <i class="iconly-Curved-Notification hp-text-color-black-60 position-relative">
                                                <span class="position-absolute translate-middle p-2 rounded-circle bg-primary hp-notification-circle" style="width: 6px; height: 6px; top: 4px;"></span>
                                            </i>
                                        </button>

                                        <div class="hp-notification-menu dropdown-fade position-absolute pt-18" style="width: 288px; top: 100%;">
                                            <div class="pt-32 pb-18 px-18 rounded border hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80">
                                                <div class="row justify-content-between align-items-center mb-18">
                                                    <div class="col hp-flex-none w-auto h5 hp-text-color-black-100 hp-text-color-dark-10 hp-text-color-dark-0 me-64 mb-0">Notifications</div>

                                                    <div class="col hp-flex-none w-auto hp-bg-color-primary-1 rounded-pill hp-badge-text hp-text-color-black-0 py-4 px-6 me-12">4 New</div>
                                                </div>

                                                <div class="divider my-4"></div>

                                                <div class="hp-overflow-y-auto px-10" style="max-height: 300px; margin-right: -10px; margin-left: -10px;">
                                                    <div class="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10" style="margin-left: -10px; margin-right: -10px; row-gap: 0px;">
                                                        <div class="w-auto px-0 me-8">
                                                            <div class="avatar-item d-flex align-items-center justify-content-center rounded-circle" style="width: 38px; height: 38px;">
                                                                <img src="../../../app-assets/img/memoji/memoji-5.png" class="w-100">
                                                            </div>
                                                        </div>

                                                        <div class="col w-auto px-0">
                                                            <span class="d-block w-100 mb-4 fw-medium hp-p1-body">New message received 💌</span>
                                                            <span class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">24 unread messages.</span>
                                                        </div>
                                                    </div>

                                                    <div class="divider my-4"></div>

                                                    <div class="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10" style="margin-left: -10px; margin-right: -10px; row-gap: 0px;">
                                                        <div class="w-auto px-0 me-8">
                                                            <div class="avatar-item d-flex align-items-center justify-content-center hp-bg-success-4 rounded-circle" style="width: 38px; height: 38px;">
                                                                <i class="iconly-Curved-TickSquare hp-text-color-success-1"></i>
                                                            </div>
                                                        </div>

                                                        <div class="col w-auto px-0">
                                                            <span class="d-block w-100 mb-4 fw-medium hp-p1-body">Congratulations team 🎉</span>
                                                            <span class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">You have 12 new sales!</span>
                                                        </div>
                                                    </div>

                                                    <div class="divider my-4"></div>

                                                    <div class="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10" style="margin-left: -10px; margin-right: -10px; row-gap: 0px;">
                                                        <div class="w-auto px-0 me-8">
                                                            <div class="avatar-item d-flex align-items-center justify-content-center hp-bg-danger-4 rounded-circle" style="width: 38px; height: 38px;">
                                                                <i class="iconly-Curved-CloseSquare hp-text-color-danger-1"></i>
                                                            </div>
                                                        </div>

                                                        <div class="col w-auto px-0">
                                                            <span class="d-block w-100 mb-4 fw-medium hp-p1-body">Network Error ⛔️</span>
                                                            <span class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">Operation couldn’t be completed</span>
                                                        </div>
                                                    </div>

                                                    <div class="divider my-4"></div>

                                                    <div class="row align-items-center hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 py-8 px-10" style="margin-left: -10px; margin-right: -10px; row-gap: 0px;">
                                                        <div class="w-auto px-0 me-8">
                                                            <div class="avatar-item d-flex align-items-center justify-content-center hp-bg-warning-4 rounded-circle" style="width: 38px; height: 38px;">
                                                                <i class="iconly-Curved-Danger hp-text-color-warning-1"></i>
                                                            </div>
                                                        </div>

                                                        <div class="col w-auto px-0">
                                                            <span class="d-block w-100 mb-4 fw-medium hp-p1-body">Disk Utility 💥</span>
                                                            <span class="d-block hp-badge-text hp-text-color-black-60 hp-text-color-dark-40 fw-normal">You have not enough disk capacity</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="divider my-4"></div>

                                                <div class="mt-8">
                                                    <button type="button" class="btn btn-text w-100 hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-bg-primary-4 hp-hover-bg-dark-primary">
                                                        <span class="row align-items-center mx-0">
                                                            <i class="w-auto px-0 me-8 ri-delete-bin-line"></i>
                                                            <span class="w-auto px-0">Clear all notifications</span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hover-dropdown-fade w-auto px-0 ms-6 position-relative hp-cursor-pointer">
                                        <div class="avatar-item d-flex align-items-center justify-content-center rounded-circle" style="width: 40px; height: 40px;">
                                            <img src="../../../app-assets/img/memoji/memoji-1.png">
                                        </div>

                                        <div class="hp-header-profile-menu dropdown-fade position-absolute pt-18" style="top: 100%; width: 260px;">
                                            <div class="rounded border hp-border-color-black-40 hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 p-24">
                                                <span class="d-block h5 hp-text-color-black-100 hp-text-color-dark-0 mb-6">Profile Settings</span>

                                                <a href="profile-information.html" class="hp-p1-body hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-2">View Profile</a>

                                                <div class="divider my-12"></div>

                                                <div class="row">
                                                    <div class="col-12">
                                                        <a href="app-contact.html" class="d-flex align-items-center hp-p1-body py-4 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded" style="margin-left: -10px; margin-right: -10px;">
                                                            <i class="iconly-Curved-People me-8" style="font-size: 16px;"></i>

                                                            <span class="ml-8">Explore Creators</span>
                                                        </a>
                                                    </div>

                                                    <div class="col-12">
                                                        <a href="page-knowledge-base-1.html" class="d-flex align-items-center hp-p1-body py-4 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded" style="margin-left: -10px; margin-right: -10px;">
                                                            <i class="iconly-Curved-Game me-8" style="font-size: 16px;"></i>

                                                            <span class="hp-ml-8">Help Desk</span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="divider my-12"></div>

                                                <a class="hp-p1-body" href="index.html">Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="offcanvas offcanvas-start hp-mobile-sidebar" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel" style="width: 256px;">
                <div class="offcanvas-header justify-content-between align-items-end me-16 ms-24 mt-16 p-0">
                    <div class="w-auto px-0">
                        <div class="hp-header-logo d-flex align-items-end">
                            <a href="index.html">
                                <img class="hp-logo hp-sidebar-visible" src="../../../app-assets/img/logo/logo-small.svg" alt="logo">
                                <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="../../../app-assets/img/logo/logo.svg" alt="logo">
                                <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="../../../app-assets/img/logo/logo-dark.svg" alt="logo">
                                <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none" src="../../../app-assets/img/logo/logo-rtl.svg" alt="logo">
                                <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block" src="../../../app-assets/img/logo/logo-rtl-dark.svg" alt="logo">
                            </a>

                            <a href="#" target="_blank" class="d-flex">
                                <span class="hp-sidebar-hidden h3 fw-bold hp-text-color-primary-1 mb-6">.</span>
                                <span class="hp-sidebar-hidden hp-p1-body fw-medium hp-text-color-black-40 mb-16 ms-4" style="letter-spacing: -0.5px;">v.3.0</span>
                            </a>
                        </div>
                    </div>

                    <div class="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden" data-bs-dismiss="offcanvas" aria-label="Close">
                        <button type="button" class="btn btn-text btn-icon-only">
                            <i class="ri-close-fill lh-1 hp-text-color-black-80" style="font-size: 24px;"></i>
                        </button>
                    </div>
                </div>

                <div class="hp-sidebar hp-bg-color-black-0 hp-bg-color-dark-100">
                    <div class="hp-sidebar-container">
                        <div class="hp-sidebar-header-menu">
                            <div class="row justify-content-between align-items-end me-12 ms-24 mt-24">
                                <div class="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-visible">
                                    <button type="button" class="btn btn-text btn-icon-only">
                                        <i class="ri-menu-unfold-line" style="font-size: 16px;"></i>
                                    </button>
                                </div>

                                <div class="w-auto px-0">
                                    <div class="hp-header-logo d-flex align-items-end">
                                        <a href="index.html">
                                            <img class="hp-logo hp-sidebar-visible" src="../../../app-assets/img/logo/logo-small.svg" alt="logo">
                                            <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="../../../app-assets/img/logo/logo.svg" alt="logo">
                                            <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="../../../app-assets/img/logo/logo-dark.svg" alt="logo">
                                            <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-none" src="../../../app-assets/img/logo/logo-rtl.svg" alt="logo">
                                            <img class="hp-logo hp-sidebar-hidden hp-dir-block hp-dark-block" src="../../../app-assets/img/logo/logo-rtl-dark.svg" alt="logo">
                                        </a>

                                        <a href="https://hypeople-studio.gitbook.io/yoda/change-log" target="_blank" class="d-flex">
                                            <span class="hp-sidebar-hidden h3 fw-bold hp-text-color-primary-1 mb-6">.</span>
                                            <span class="hp-sidebar-hidden hp-p1-body fw-medium hp-text-color-black-40 mb-16 ms-4" style="letter-spacing: -0.5px;">v.3.0</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden">
                                    <button type="button" class="btn btn-text btn-icon-only">
                                        <i class="ri-menu-fold-line" style="font-size: 16px;"></i>
                                    </button>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    <div class="menu-title">MAIN</div>

                                    <ul>
                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Home"></i>

                                                    <span>Dashboards</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="dashboard-analytics.html">
                                                        <span>Analytics</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="dashboard-ecommerce.html">
                                                        <span>Ecommerce</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Graph"></i>

                                                    <span>Widgets</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="javascript:;" class="submenu-item">
                                                        <span>Yoda Card</span>

                                                        <div class="menu-arrow"></div>
                                                    </a>

                                                    <ul class="submenu-children" data-level="2">
                                                        <li>
                                                            <a href="cards-advance.html">
                                                                <span>Advance</span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="cards-statistics.html">
                                                                <span>Statistics</span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="cards-analytic.html">
                                                                <span>Analytics</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="charts.html">
                                                        <span>Charts</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="widgets-selectbox.html">
                                                        <span>SelectBox</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="widgets-illustration-set.html">
                                                        <span>Illustration Set</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="widgets-crypto-icons.html">
                                                        <span>Crypto Icons</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="widgets-user-icons.html">
                                                        <span>User Icons</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="widgets-flags.html">
                                                        <span>Flags</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Document"></i>

                                                    <span>Layouts</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="divider.html">
                                                        <span>Divider</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="grid-system.html">
                                                        <span>Grid System</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="javascript:;" class="submenu-item">
                                                        <span>Page Layouts</span>

                                                        <div class="menu-arrow"></div>
                                                    </a>

                                                    <ul class="submenu-children" data-level="2">
                                                        <li>
                                                            <a href="layout-boxed.html">
                                                                <span>Boxed Layout</span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="layout-vertical.html">
                                                                <span>Vertical Layout</span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="layout-horizontal.html">
                                                                <span>Horizontal Layout</span>
                                                            </a>
                                                        </li>

                                                        <li>
                                                            <a href="layout-full.html">
                                                                <span>Full Layout</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="menu-title">APPS</div>

                                    <ul>
                                        <li>
                                            <a href="app-contact.html">
                                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Contact" aria-label="Contact"></div>

                                                <span>
                                                    <i class="iconly-Curved-People"></i>

                                                    <span>Contact</span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Buy"></i>

                                                    <span>Ecommerce</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="app-ecommerce-shop.html">
                                                        <span>Shop</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="app-ecommerce-wishlist.html">
                                                        <span>Wishlist</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="app-ecommerce-product-detail.html">
                                                        <span>Product Detail</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="app-ecommerce-checkout.html">
                                                        <span>Checkout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="menu-title">PAGES</div>

                                    <ul>
                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-CloseSquare"></i>

                                                    <span>Error Pages</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="error-404.html">
                                                        <span>404</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="error-403.html">
                                                        <span>403</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="error-500.html">
                                                        <span>500</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="error-503.html">
                                                        <span>503</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="error-502.html">
                                                        <span>502</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="error-maintenance.html">
                                                        <span>Maintenance</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="error-coming-soon.html">
                                                        <span>Coming Soon</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="page-landing.html">
                                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Landing" aria-label="Landing"></div>

                                                <span>
                                                    <i class="iconly-Curved-Discovery"></i>

                                                    <span>Landing</span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="page-pricing.html">
                                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Pricing" aria-label="Pricing"></div>

                                                <span>
                                                    <i class="iconly-Curved-Discount"></i>

                                                    <span>Pricing</span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-User"></i>

                                                    <span>Profile</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="profile-information.html">
                                                        <span>Personel Information</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="profile-notifications.html">
                                                        <span>Notifications</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="profile-activity.html">
                                                        <span>Activity Monitor</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="profile-settings.html">
                                                        <span>Security Settings</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="profile-password.html">
                                                        <span>Password Change</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="profile-connect.html">
                                                        <span>Connect with Social</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="page-invoice.html">
                                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Invoice" aria-label="Invoice"></div>

                                                <span>
                                                    <i class="iconly-Curved-Paper"></i>

                                                    <span>Invoice</span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Message"></i>

                                                    <span>E-mail Templates</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="../../../../yoda-email-template/hello.html" target="_blank">
                                                        <span>Hello</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="../../../../yoda-email-template/promotional.html" target="_blank">
                                                        <span>Promotional</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="../../../../yoda-email-template/verify.html" target="_blank">
                                                        <span>Verify</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="../../../../yoda-email-template/reset-password.html" target="_blank">
                                                        <span>Reset Password</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="../../../../yoda-email-template/term.html" target="_blank">
                                                        <span>Term</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="../../../../yoda-email-template/deactive-account.html" target="_blank">
                                                        <span>Deactive Account</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="page-faq.html">
                                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="FAQ" aria-label="FAQ"></div>

                                                <span>
                                                    <i class="iconly-Curved-InfoSquare"></i>

                                                    <span>FAQ</span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Bookmark"></i>

                                                    <span>Knowledge Base</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="page-knowledge-base-1.html">
                                                        <span>Knowledge Base 1</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="page-knowledge-base-2.html">
                                                        <span>Knowledge Base 2</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="blank-page.html">
                                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Blank Page" aria-label="Blank Page"></div>

                                                <span>
                                                    <i class="iconly-Curved-PaperPlus"></i>

                                                    <span>Blank Page</span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Unlock"></i>

                                                    <span>Authentication</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="auth-login.html">
                                                        <span>Login Page</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="auth-register.html">
                                                        <span>Register Page</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="auth-recover.html">
                                                        <span>Recover Password</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="auth-reset.html">
                                                        <span>Reset Password</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Password"></i>

                                                    <span>Lock Screen</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="lock-welcome.html">
                                                        <span>Welcome</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="lock-password.html">
                                                        <span>Password Is Changed</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="lock-deactivated.html">
                                                        <span>Deactivated</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="lock.html">
                                                        <span>Lock</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <div class="menu-title">COMPONENTS</div>

                                    <ul>
                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Category"></i>

                                                    <span>General</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children active" data-level="1">

                                                <li>
                                                    <a href="general-style-guide.html">
                                                        <span>Style Guide</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="general-buttons.html">
                                                        <span>Buttons</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="general-remix-icons.html">
                                                        <span>Remix Icons</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="general-iconly-icons.html">
                                                        <span>Iconly Icons</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Discovery"></i>

                                                    <span>Navigation</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="component-breadcrumb.html">
                                                        <span>Breadcrumb</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-dropdown.html">
                                                        <span>Dropdown</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-menu.html">
                                                        <span>Menu</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-pagination.html">
                                                        <span>Pagination</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Filter2"></i>

                                                    <span>Data Entry</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="component-checkbox.html">
                                                        <span>Checkbox</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-form.html">
                                                        <span>Form</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-input.html">
                                                        <span>Input</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-input-number.html">
                                                        <span>Input Number</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-radio.html">
                                                        <span>Radio</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-select.html">
                                                        <span>Select</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-slider.html">
                                                        <span>Slider</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-switch.html">
                                                        <span>Switch</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-TicketStar"></i>

                                                    <span>Data Display</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="component-avatar.html">
                                                        <span>Avatar</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-badge.html">
                                                        <span>Badge</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-card.html">
                                                        <span>Card</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-carousel.html">
                                                        <span>Carousel</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-accordion.html">
                                                        <span>Accordion</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-collapse.html">
                                                        <span>Collapse</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-list-group.html">
                                                        <span>List</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-popover.html">
                                                        <span>Popover</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-table.html">
                                                        <span>Table</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-tabs.html">
                                                        <span>Tabs</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-tooltip.html">
                                                        <span>Tooltip</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript:;" class="submenu-item">
                                                <span>
                                                    <i class="iconly-Curved-Danger"></i>

                                                    <span>Feedback</span>
                                                </span>

                                                <div class="menu-arrow"></div>
                                            </a>

                                            <ul class="submenu-children" data-level="1">
                                                <li>
                                                    <a href="component-alert.html">
                                                        <span>Alert</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-drawer.html">
                                                        <span>Drawer</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-modal.html">
                                                        <span>Modal</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-notification.html">
                                                        <span>Notification</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-progress.html">
                                                        <span>Progress</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="component-spinner.html">
                                                        <span>Spinner</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="row justify-content-between align-items-center hp-sidebar-footer pb-24 px-24 mx-0 hp-bg-color-dark-100">
                            <div class="divider border-black-20 hp-border-color-dark-70 hp-sidebar-hidden px-0"></div>

                            <div class="col">
                                <div class="row align-items-center">
                                    <div class="me-8 w-auto px-0">
                                        <div class="avatar-item d-flex align-items-center justify-content-center rounded-circle" style="width: 36px; height: 36px;">
                                            <img src="../../../app-assets/img/memoji/memoji-1.png">
                                        </div>
                                    </div>

                                    <div class="w-auto px-0 hp-sidebar-hidden">
                                        <span class="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">Jane Doe</span>
                                        <a href="profile-information.html" class="hp-badge-text hp-text-color-dark-30">View Profile</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col hp-flex-none w-auto px-0 hp-sidebar-hidden">
                                <a href="profile-information.html">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="remix-icon hp-text-color-black-100 hp-text-color-dark-0" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Main COntainer --}}

            @yield('content')

            {{-- Main COntainer end --}}

            <footer class="w-100 py-18 px-16 py-sm-24 px-sm-32 hp-bg-color-black-10 hp-bg-color-dark-100">
                <div class="row align-items-center">
                    <div class="col-12 col-sm-6">
                        <p class="hp-badge-text mb-0 text-center text-sm-start hp-text-color-dark-30">COPYRIGHT ©2021 Hypeople, All rights Reserved</p>
                    </div>

                    <div class="col-12 col-sm-6 mt-8 mt-sm-0 text-center text-sm-end">
                        <a href="https://hypeople-studio.gitbook.io/yoda/change-log" target="_blank" class="hp-badge-text hp-text-color-dark-30">🥁 Version: 3.0</a>
                    </div>
                </div>
            </footer>
        </div>
    </main>

    <div class="hp-theme-customizer">
        <div class="hp-theme-customizer-button">
            <div class="hp-theme-customizer-button-bg">
                <svg width="48" height="121" viewBox="0 0 48 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.6313 21.7613C46.5046 11.6029 47.6987 2.40985 48 0V61H0C1.03187 53.7789 1.67112 44.3597 13.2122 37.7607C22.0261 32.721 32.4115 29.7862 38.6313 21.7613Z" fill="white"></path>
                    <path d="M38.6058 99.5632C46.502 109.568 47.6984 118.627 48 121V61H0C1.03532 68.1265 1.67539 77.4295 13.3283 83.9234C22.1048 88.8143 32.3812 91.6764 38.6058 99.5632Z" fill="white"></path>
                </svg>
            </div>

            <div class="hp-theme-customizer-button-icon">
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM5.67 3.5C5.67 3.09 6.01 2.75 6.42 2.75C6.83 2.75 7.17 3.09 7.17 3.5V7.4C7.17 7.81 6.83 8.15 6.42 8.15C6.01 8.15 5.67 7.81 5.67 7.4V3.5ZM7.52282 14.4313C7.31938 14.5216 7.17 14.7132 7.17 14.9358V16.5C7.17 16.91 6.83 17.25 6.42 17.25C6.01 17.25 5.67 16.91 5.67 16.5V14.9358C5.67 14.7132 5.5206 14.5216 5.31723 14.4311C4.36275 14.0064 3.7 13.058 3.7 11.95C3.7 10.45 4.92 9.22 6.42 9.22C7.92 9.22 9.15 10.44 9.15 11.95C9.15 13.0582 8.47913 14.0066 7.52282 14.4313ZM14.33 16.5C14.33 16.91 13.99 17.25 13.58 17.25C13.17 17.25 12.83 16.91 12.83 16.5V12.6C12.83 12.19 13.17 11.85 13.58 11.85C13.99 11.85 14.33 12.19 14.33 12.6V16.5ZM13.58 10.77C12.08 10.77 10.85 9.55 10.85 8.04C10.85 6.93185 11.5209 5.98342 12.4772 5.55873C12.6806 5.46839 12.83 5.27681 12.83 5.05421V3.5C12.83 3.09 13.17 2.75 13.58 2.75C13.99 2.75 14.33 3.09 14.33 3.5V5.06421C14.33 5.28681 14.4794 5.47835 14.6828 5.56885C15.6372 5.9936 16.3 6.94195 16.3 8.05C16.3 9.55 15.08 10.77 13.58 10.77Z" fill="#0010F7"></path>
                </svg>
            </div>
        </div>

        <div class="hp-theme-customizer-container bg-black-0 hp-bg-dark-90">
            <div class="hp-theme-customizer-container-header bg-black-10 hp-bg-dark-85 py-16 px-24">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="h5 mb-0 d-block text-black-80 hp-text-color-dark-0">Customise your Theme</span>
                        <span class="hp-caption fw-medium d-block text-black-60">Look and feel</span>
                    </div>

                    <div>
                        <button type="button" class="btn btn-text hp-bg-dark-85">
                            <i class="ri-close-fill text-black-80 hp-text-color-dark-0" style="font-size: 16px;"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="hp-theme-customizer-container-body pb-md-96 pb-mb-0 py-24 px-24">
                <div class="row mx-0 hp-theme-customizer-container-body-item">
                    <div class="col-12 px-0 mb-16">
                        <span class="d-block hp-caption text-black-60">THEME</span>
                        <span class="d-block h5 mb-0 text-black-100 hp-text-color-dark-0">Dark &amp; Light</span>
                    </div>

                    <div class="col-12 px-0">
                        <div class="row g-24">
                            <div class="col-12 col-md-6">
                                <div class="hp-theme-customizer-container-body-item-svg active" data-theme="light">
                                    <svg width="244" height="150" viewBox="0 0 244 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="242" height="148" fill="white"></rect>
                                        <rect width="37" height="138" transform="translate(6 6)" fill="#DFE6E9"></rect>
                                        <path d="M33.7528 18.2807C32.9591 18.059 32.6126 18.0257 32.6126 18.0257C32.4785 18.0036 31.9531 17.9149 31.2377 17.8928C30.6676 17.8041 30.0751 17.6489 29.6839 17.3275C29.2591 16.9728 28.5437 16.3632 28.2642 16.2192C28.2531 16.2081 28.2419 16.2081 28.2307 16.2081C27.1576 15.4433 25.8497 15 24.4413 15C22.8316 15 21.3672 15.5653 20.227 16.5073C19.9029 16.7512 19.5116 17.0837 19.2434 17.3164C18.8521 17.6489 18.2597 17.793 17.6896 17.8817C16.9742 17.9038 16.4488 18.0036 16.3146 18.0147C16.3146 18.0147 16.0017 18.0479 15.2639 18.2474C14.9397 18.3361 14.9062 18.7794 15.208 18.9235C15.208 18.9235 15.2192 18.9235 15.2192 18.9346C15.6998 19.1673 16.1581 19.5442 16.7282 20.4419C17.4101 21.5059 17.5331 22.182 17.969 23.2017C18.6733 26.1277 21.3002 28.3 24.4301 28.3C27.4482 28.3 29.9969 26.2828 30.8129 23.5231C31.3718 22.315 31.4501 21.6167 32.199 20.4419C32.7691 19.5442 33.2274 19.1673 33.7081 18.9346C33.7416 18.9235 33.7751 18.9013 33.8087 18.8902C34.0881 18.7683 34.0546 18.3582 33.7528 18.2807ZM21.8814 23.4012C20.9872 23.1573 20.4283 22.3372 20.4283 22.3372C20.4283 22.3372 21.3896 21.6389 22.2839 21.8827C23.1781 22.1266 23.67 23.2127 23.67 23.2127C23.67 23.2127 22.7757 23.645 21.8814 23.4012ZM27.2023 23.4012C26.308 23.645 25.4138 23.2017 25.4138 23.2017C25.4138 23.2017 25.8944 22.1155 26.7999 21.8717C27.6942 21.6278 28.6555 22.3261 28.6555 22.3261C28.6555 22.3261 28.0966 23.1684 27.2023 23.4012Z" fill="#B2BEC3"></path>
                                        <rect width="191" height="13" transform="translate(47 6)" fill="#DFE6E9"></rect>
                                        <rect width="191" height="122" transform="translate(47 22)" fill="#DFE6E9"></rect>
                                        <rect x="1" y="1" width="242" height="148" stroke="white" stroke-width="2"></rect>
                                    </svg>

                                    <div class="hp-theme-customizer-container-body-item-svg-check">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.9987" cy="17.0007" r="14.1667" fill="white"></circle>
                                            <path d="M16.9987 2.83398C9.1872 2.83398 2.83203 9.18915 2.83203 17.0007C2.83203 24.8122 9.1872 31.1673 16.9987 31.1673C24.8102 31.1673 31.1654 24.8122 31.1654 17.0007C31.1654 9.18915 24.8102 2.83398 16.9987 2.83398ZM16.9987 28.334C10.7498 28.334 5.66536 23.2496 5.66536 17.0007C5.66536 10.7517 10.7498 5.66732 16.9987 5.66732C23.2476 5.66732 28.332 10.7517 28.332 17.0007C28.332 23.2496 23.2476 28.334 16.9987 28.334Z" fill="#2D3436"></path>
                                            <path d="M14.1674 19.2479L10.9105 15.9966L8.91016 18.0026L14.1702 23.2514L23.6704 13.7512L21.6672 11.748L14.1674 19.2479Z" fill="#2D3436"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="hp-theme-customizer-container-body-item-svg" data-theme="dark">
                                    <svg width="244" height="150" viewBox="0 0 244 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="244" height="150" fill="#111314"></rect>
                                        <rect width="37" height="138" transform="translate(6 6)" fill="#2D3436"></rect>
                                        <path d="M33.7528 18.2807C32.9591 18.059 32.6126 18.0257 32.6126 18.0257C32.4785 18.0036 31.9531 17.9149 31.2377 17.8928C30.6676 17.8041 30.0751 17.6489 29.6839 17.3275C29.2591 16.9728 28.5437 16.3633 28.2642 16.2192C28.2531 16.2081 28.2419 16.2081 28.2307 16.2081C27.1576 15.4433 25.8497 15 24.4413 15C22.8316 15 21.3672 15.5653 20.227 16.5073C19.9029 16.7512 19.5116 17.0837 19.2434 17.3164C18.8521 17.6489 18.2597 17.793 17.6896 17.8817C16.9742 17.9038 16.4488 18.0036 16.3146 18.0147C16.3146 18.0147 16.0017 18.0479 15.2639 18.2474C14.9397 18.3361 14.9062 18.7794 15.208 18.9235C15.208 18.9235 15.2192 18.9235 15.2192 18.9346C15.6998 19.1673 16.1581 19.5442 16.7282 20.4419C17.4101 21.5059 17.5331 22.182 17.969 23.2017C18.6733 26.1277 21.3002 28.3 24.4301 28.3C27.4482 28.3 29.9969 26.2828 30.8129 23.5231C31.3718 22.315 31.4501 21.6167 32.199 20.4419C32.7691 19.5442 33.2274 19.1673 33.7081 18.9346C33.7416 18.9235 33.7751 18.9013 33.8087 18.8902C34.0881 18.7683 34.0546 18.3582 33.7528 18.2807ZM21.8814 23.4012C20.9872 23.1573 20.4283 22.3372 20.4283 22.3372C20.4283 22.3372 21.3896 21.6389 22.2839 21.8827C23.1781 22.1266 23.67 23.2127 23.67 23.2127C23.67 23.2127 22.7757 23.645 21.8814 23.4012ZM27.2023 23.4012C26.308 23.645 25.4138 23.2017 25.4138 23.2017C25.4138 23.2017 25.8944 22.1155 26.7999 21.8717C27.6942 21.6278 28.6555 22.3261 28.6555 22.3261C28.6555 22.3261 28.0966 23.1684 27.2023 23.4012Z" fill="#F7FAFC"></path>
                                        <rect width="191" height="13" transform="translate(47 6)" fill="#2D3436"></rect>
                                        <rect width="191" height="122" transform="translate(47 22)" fill="#2D3436"></rect>
                                        <rect width="244" height="150" stroke="#DFE6E9"></rect>
                                    </svg>

                                    <div class="hp-theme-customizer-container-body-item-svg-check">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.9987" cy="17.0007" r="14.1667" fill="white"></circle>
                                            <path d="M16.9987 2.83398C9.1872 2.83398 2.83203 9.18915 2.83203 17.0007C2.83203 24.8122 9.1872 31.1673 16.9987 31.1673C24.8102 31.1673 31.1654 24.8122 31.1654 17.0007C31.1654 9.18915 24.8102 2.83398 16.9987 2.83398ZM16.9987 28.334C10.7498 28.334 5.66536 23.2496 5.66536 17.0007C5.66536 10.7517 10.7498 5.66732 16.9987 5.66732C23.2476 5.66732 28.332 10.7517 28.332 17.0007C28.332 23.2496 23.2476 28.334 16.9987 28.334Z" fill="#2D3436"></path>
                                            <path d="M14.1674 19.2479L10.9105 15.9966L8.91016 18.0026L14.1702 23.2514L23.6704 13.7512L21.6672 11.748L14.1674 19.2479Z" fill="#2D3436"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mx-0 hp-theme-customizer-container-body-item">
                    <div class="col-12 mb-16 px-0">
                        <span class="d-block hp-caption text-black-60">CONTENT WIDTH</span>
                        <span class="d-block h5 mb-0 text-black-100 hp-text-color-dark-0">FULL Width &amp; Boxed</span>
                    </div>

                    <div class="col-12 px-0">
                        <div class="row g-24">
                            <div class="col-12 col-md-6">
                                <div class="hp-theme-customizer-container-body-item-svg active" data-content="full">
                                    <svg width="244" height="150" viewBox="0 0 244 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="242" height="148" fill="white"></rect>
                                        <rect width="37" height="138" transform="translate(6 6)" fill="#DFE6E9"></rect>
                                        <path d="M33.7528 18.2807C32.9591 18.059 32.6126 18.0257 32.6126 18.0257C32.4785 18.0036 31.9531 17.9149 31.2377 17.8928C30.6676 17.8041 30.0751 17.6489 29.6839 17.3275C29.2591 16.9728 28.5437 16.3632 28.2642 16.2192C28.2531 16.2081 28.2419 16.2081 28.2307 16.2081C27.1576 15.4433 25.8497 15 24.4413 15C22.8316 15 21.3672 15.5653 20.227 16.5073C19.9029 16.7512 19.5116 17.0837 19.2434 17.3164C18.8521 17.6489 18.2597 17.793 17.6896 17.8817C16.9742 17.9038 16.4488 18.0036 16.3146 18.0147C16.3146 18.0147 16.0017 18.0479 15.2639 18.2474C14.9397 18.3361 14.9062 18.7794 15.208 18.9235C15.208 18.9235 15.2192 18.9235 15.2192 18.9346C15.6998 19.1673 16.1581 19.5442 16.7282 20.4419C17.4101 21.5059 17.5331 22.182 17.969 23.2017C18.6733 26.1277 21.3002 28.3 24.4301 28.3C27.4482 28.3 29.9969 26.2828 30.8129 23.5231C31.3718 22.315 31.4501 21.6167 32.199 20.4419C32.7691 19.5442 33.2274 19.1673 33.7081 18.9346C33.7416 18.9235 33.7751 18.9013 33.8087 18.8902C34.0881 18.7683 34.0546 18.3582 33.7528 18.2807ZM21.8814 23.4012C20.9872 23.1573 20.4283 22.3372 20.4283 22.3372C20.4283 22.3372 21.3896 21.6389 22.2839 21.8827C23.1781 22.1266 23.67 23.2127 23.67 23.2127C23.67 23.2127 22.7757 23.645 21.8814 23.4012ZM27.2023 23.4012C26.308 23.645 25.4138 23.2017 25.4138 23.2017C25.4138 23.2017 25.8944 22.1155 26.7999 21.8717C27.6942 21.6278 28.6555 22.3261 28.6555 22.3261C28.6555 22.3261 28.0966 23.1684 27.2023 23.4012Z" fill="#B2BEC3"></path>
                                        <rect width="191" height="13" transform="translate(47 6)" fill="#DFE6E9"></rect>
                                        <rect width="191" height="122" transform="translate(47 22)" fill="#DFE6E9"></rect>
                                        <rect x="1" y="1" width="242" height="148" stroke="white" stroke-width="2"></rect>
                                    </svg>

                                    <div class="hp-theme-customizer-container-body-item-svg-check">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.9987" cy="17.0007" r="14.1667" fill="white"></circle>
                                            <path d="M16.9987 2.83398C9.1872 2.83398 2.83203 9.18915 2.83203 17.0007C2.83203 24.8122 9.1872 31.1673 16.9987 31.1673C24.8102 31.1673 31.1654 24.8122 31.1654 17.0007C31.1654 9.18915 24.8102 2.83398 16.9987 2.83398ZM16.9987 28.334C10.7498 28.334 5.66536 23.2496 5.66536 17.0007C5.66536 10.7517 10.7498 5.66732 16.9987 5.66732C23.2476 5.66732 28.332 10.7517 28.332 17.0007C28.332 23.2496 23.2476 28.334 16.9987 28.334Z" fill="#2D3436"></path>
                                            <path d="M14.1674 19.2479L10.9105 15.9966L8.91016 18.0026L14.1702 23.2514L23.6704 13.7512L21.6672 11.748L14.1674 19.2479Z" fill="#2D3436"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="hp-theme-customizer-container-body-item-svg" data-content="boxed">
                                    <svg width="244" height="150" viewBox="0 0 244 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="244" height="150" fill="white"></rect>
                                        <rect width="37" height="138" transform="translate(6 6)" fill="#DFE6E9"></rect>
                                        <path d="M33.7528 18.2807C32.9591 18.059 32.6126 18.0257 32.6126 18.0257C32.4785 18.0036 31.9531 17.9149 31.2377 17.8928C30.6676 17.8041 30.0751 17.6489 29.6839 17.3275C29.2591 16.9728 28.5437 16.3633 28.2642 16.2192C28.2531 16.2081 28.2419 16.2081 28.2307 16.2081C27.1576 15.4433 25.8497 15 24.4413 15C22.8316 15 21.3672 15.5653 20.227 16.5073C19.9029 16.7512 19.5116 17.0837 19.2434 17.3164C18.8521 17.6489 18.2597 17.793 17.6896 17.8817C16.9742 17.9038 16.4488 18.0036 16.3146 18.0147C16.3146 18.0147 16.0017 18.0479 15.2639 18.2474C14.9397 18.3361 14.9062 18.7794 15.208 18.9235C15.208 18.9235 15.2192 18.9235 15.2192 18.9346C15.6998 19.1673 16.1581 19.5442 16.7282 20.4419C17.4101 21.5059 17.5331 22.182 17.969 23.2017C18.6733 26.1277 21.3002 28.3 24.4301 28.3C27.4482 28.3 29.9969 26.2828 30.8129 23.5231C31.3718 22.315 31.4501 21.6167 32.199 20.4419C32.7691 19.5442 33.2274 19.1673 33.7081 18.9346C33.7416 18.9235 33.7751 18.9013 33.8087 18.8902C34.0881 18.7683 34.0546 18.3582 33.7528 18.2807ZM21.8814 23.4012C20.9872 23.1573 20.4283 22.3372 20.4283 22.3372C20.4283 22.3372 21.3896 21.6389 22.2839 21.8827C23.1781 22.1266 23.67 23.2127 23.67 23.2127C23.67 23.2127 22.7757 23.645 21.8814 23.4012ZM27.2023 23.4012C26.308 23.645 25.4138 23.2017 25.4138 23.2017C25.4138 23.2017 25.8944 22.1155 26.7999 21.8717C27.6942 21.6278 28.6555 22.3261 28.6555 22.3261C28.6555 22.3261 28.0966 23.1684 27.2023 23.4012Z" fill="#B2BEC3"></path>
                                        <g clip-path="url(#clip0_5050:104461)">
                                            <rect width="133" height="13" transform="translate(76 6)" fill="#DFE6E9"></rect>
                                        </g>
                                        <rect width="133" height="122" transform="translate(76 22)" fill="#DFE6E9"></rect>
                                        <rect width="244" height="150" stroke="#DFE6E9"></rect>
                                        <defs>
                                            <clipPath id="clip0_5050:104461">
                                                <rect width="133" height="13" fill="white" transform="translate(76 6)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div class="hp-theme-customizer-container-body-item-svg-check">
                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.9987" cy="17.0007" r="14.1667" fill="white"></circle>
                                            <path d="M16.9987 2.83398C9.1872 2.83398 2.83203 9.18915 2.83203 17.0007C2.83203 24.8122 9.1872 31.1673 16.9987 31.1673C24.8102 31.1673 31.1654 24.8122 31.1654 17.0007C31.1654 9.18915 24.8102 2.83398 16.9987 2.83398ZM16.9987 28.334C10.7498 28.334 5.66536 23.2496 5.66536 17.0007C5.66536 10.7517 10.7498 5.66732 16.9987 5.66732C23.2476 5.66732 28.332 10.7517 28.332 17.0007C28.332 23.2496 23.2476 28.334 16.9987 28.334Z" fill="#2D3436"></path>
                                            <path d="M14.1674 19.2479L10.9105 15.9966L8.91016 18.0026L14.1702 23.2514L23.6704 13.7512L21.6672 11.748L14.1674 19.2479Z" fill="#2D3436"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


{{-- Scroll to top --}}
    <div class="scroll-to-top">
        <button type="button" class="btn btn-primary btn-icon-only rounded-circle hp-primary-shadow">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"></path>
                </g>
            </svg>
        </button>
    </div>

    <!-- Plugin -->
    <script src="{{ asset('app-assets/js/plugin/jquery.min.js') }}"></script>
    <script src="{{ asset('app-assets/js/plugin/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('app-assets/js/plugin/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('app-assets/js/plugin/jquery.mask.min.js') }}"></script>
    <script src="{{ asset('app-assets/js/plugin/autocomplete.min.js') }}"></script>
    <script src="{{ asset('app-assets/js/plugin/moment.min.js') }}"></script>

    <!-- Layouts -->
    <script src="{{ asset('app-assets/js/layouts/header-search.js') }}"></script>
    <script src="{{ asset('app-assets/js/layouts/sider.js') }}"></script>
    <script src="{{ asset('app-assets/js/components/input-number.js') }}"></script>

    <!-- Base -->
    <script src="{{ asset('app-assets/js/base/index.js') }}"></script>
    <!-- Customizer -->
    <script src="{{ asset('app-assets/js/customizer.js') }}"></script>

    <!-- Charts -->
    <script src="{{ asset('app-assets/js/plugin/apexcharts.min.js') }}"></script>
    <script src="{{ asset('app-assets/js/charts/apex-chart.js') }}"></script>

    <!-- Cards -->
    <script src="{{ asset('app-assets/js/cards/card-advance.js') }}"></script>
    <script src="{{ asset('app-assets/js/cards/card-analytic.js') }}"></script>
    <script src="{{ asset('app-assets/js/cards/card-statistic.js') }}"></script>

    <!-- Pages -->
    <script src="{{ asset('app-assets/js/pages/dashboard-ecommerce.js') }}"></script>

    <!-- Custom -->
    <script src="{{ asset('assets/js/main.js') }}"></script>
</body>


<!-- Mirrored from yoda.hypeople.studio/yoda-admin-template/html/ltr/vertical-collapse/dashboard-ecommerce.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jul 2022 15:18:01 GMT -->
</html>
