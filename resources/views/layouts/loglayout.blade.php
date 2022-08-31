
<!DOCTYPE html>
<html dir="ltr">


<!-- Mirrored from yoda.hypeople.studio/yoda-admin-template/html/ltr/vertical-collapse/auth-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jul 2022 15:18:09 GMT -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="author" content="Hypeople">
    <meta name="description" content="Responsive, Highly Customizable Dashboard Template" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('app-assets/favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('app-assets/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('app-assets/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('app-assets/favicon/site.html') }}">
    <link rel="mask-icon" href="{{ asset('app-assets/favicon/safari-pinned-tab.svg') }}" color="#0010f7">
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
     <link rel="stylesheet" type="text/css" href="{{ asset('app-assets/css/pages/authentication.css') }}">
    <!-- Pages -->

    <!-- Custom -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">

    <title>Login - Yoda Admin Html Template</title>

    <script>
        ! function(t, h, e, j, s, n) {
            t.hj = t.hj || function() {
                    (t.hj.q = t.hj.q || []).push(arguments)
                },
                t._hjSettings = {
                    hjid: 2628580,
                    hjsv: 6
                },
                s = h.getElementsByTagName("head")[0],
                (n = h.createElement("script")).async = 1,
                n.src = "https://static.hotjar.com/c/hotjar-" + t._hjSettings.hjid + ".js?sv=" + t._hjSettings.hjsv,
                s.appendChild(n)
        }(window, document)
    </script>
</head>

<body>
    <div class="row hp-authentication-page">
        <div class="col-12 col-lg-6 bg-primary-4 hp-bg-color-dark-90 position-relative">
            <div class="row hp-image-row h-100 px-8 px-sm-16 px-md-0 pb-32 pb-sm-0 pt-32 pt-md-0">
                <div class="col-12 hp-logo-item m-16 m-sm-32 m-md-64 w-auto px-0">
                    <img class="hp-dark-none" src="{{ asset('app-assets/img/logo/logo-vector-blue.svg') }}" alt="Logo">
                    <img class="hp-dark-block" src="{{ asset('app-assets/img/logo/logo-vector-blue.svg') }}" alt="Logo">
                </div>

                <div class="col-12">
                    <div class="row align-items-center justify-content-center h-100">
                        <div class="col-12 col-md-10 hp-bg-item text-center mb-32 mb-md-0">
                            <img class="hp-dark-none m-auto" src="{{ asset('app-assets/img/pages/authentication/authentication-bg.svg') }}" alt="Background Image">
                            <img class="hp-dark-block m-auto" src="{{ asset('app-assets/img/pages/authentication/authentication-bg-dark.svg') }}" alt="Background Image">
                        </div>

                        <div class="col-12 col-md-11 col-lg-9 hp-text-item text-center">
                            <h2 class="text-primary-1 hp-text-color-dark-0 mx-16 mx-lg-0 mb-16">Very good works are waiting for you 🤞</h2>
                            <p class="mb-0 text-black-80 hp-text-color-dark-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-6 py-sm-64 py-lg-0">
            <div class="row align-items-center justify-content-center h-100 mx-4 mx-sm-n32">
                <div class="col-12 col-md-9 col-xl-7 col-xxxl-5 px-8 px-sm-0 pt-24 pb-48">
                    <h1 class="mb-0 mb-sm-24">Login</h1>
                    <p class="mt-sm-8 mt-sm-0 text-black-60">Welcome back, please login to your account.</p>

                    <form class="mt-16 mt-sm-32 mb-8" action="/login" method="post">
                        @csrf
                        <div class="mb-16">
                            <label for="loginUsername" class="form-label">Email :</label>
                            <input type="text" class="form-control" name="email" id="loginUsername">
                        </div>

                        <div class="mb-16">
                            <label for="loginPassword" class="form-label">Password :</label>
                            <input type="password" name="password" class="form-control" id="loginPassword">
                        </div>

                        <div class="row align-items-center justify-content-between mb-16">
                            <div class="col hp-flex-none w-auto">
                                <div class="form-check">
                                    <input type="checkbox" name="remember" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label ps-4"  for="exampleCheck1">Remember me</label>
                                </div>
                            </div>

                            <div class="col hp-flex-none w-auto">
                                <a class="hp-button text-black-80 hp-text-color-dark-40" href="#">Forgot Password?</a>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">
                            Sign in
                        </button>
                    </form>

                    <div class="col-12 hp-form-info">
                        <span class="text-black-80 hp-text-color-dark-40 hp-caption me-4">Don’t you have an account?</span>
                        <a class="text-primary-1 hp-text-color-dark-primary-2 hp-caption" href="auth-register.html">Create an account</a>
                    </div>

                    <div class="col-12 hp-or-line text-center mt-32">
                        <span class="hp-caption text-black-80 hp-text-color-dark-30 px-16 bg-black-0 hp-bg-color-dark-100">Or</span>
                    </div>

                    <div class="col-12 hp-account-buttons mt-32">
                        <button type="button" class="btn w-100">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="remix-icon">
                                <path d="M3.28826 8.39085L2.82415 10.1235L1.12782 10.1593C0.620865 9.21906 0.333313 8.14325 0.333313 7.00002C0.333313 5.89453 0.602167 4.85202 1.07873 3.93408H1.07909L2.5893 4.21096L3.25086 5.7121C3.1124 6.11578 3.03693 6.54911 3.03693 7.00002C3.03698 7.4894 3.12563 7.95828 3.28826 8.39085Z" fill="#FBBB00"></path>
                                <path d="M13.5502 5.75455C13.6267 6.15783 13.6667 6.57431 13.6667 6.99996C13.6667 7.47726 13.6165 7.94283 13.5209 8.39192C13.1963 9.92012 12.3483 11.2545 11.1736 12.1989L11.1733 12.1985L9.27108 12.1014L9.00186 10.4208C9.78134 9.96371 10.3905 9.24832 10.7114 8.39192H7.14655V5.75455H10.7634H13.5502Z" fill="#518EF8"></path>
                                <path d="M11.1732 12.1986L11.1736 12.1989C10.0311 13.1172 8.57981 13.6667 6.99997 13.6667C4.46114 13.6667 2.25382 12.2476 1.12781 10.1594L3.28825 8.39087C3.85124 9.89342 5.3007 10.963 6.99997 10.963C7.73036 10.963 8.41463 10.7656 9.00179 10.4209L11.1732 12.1986Z" fill="#28B446"></path>
                                <path d="M11.2553 1.86812L9.09558 3.63624C8.4879 3.2564 7.76957 3.03697 6.99999 3.03697C5.26225 3.03697 3.78569 4.15565 3.2509 5.71208L1.0791 3.93406H1.07874C2.18827 1.79486 4.42342 0.333328 6.99999 0.333328C8.61756 0.333328 10.1007 0.909526 11.2553 1.86812Z" fill="#F14336"></path>
                            </svg>
                            <span>Continue with Google account</span>
                        </button>

                        <button type="button" class="btn w-100 mt-16">
                            <i class="ri-facebook-fill remix-icon text-primary"></i>
                            <span>Continue with Facebook account</span>
                        </button>
                    </div>

                    <div class="col-12 hp-other-links mt-24">
                        <a href="javascript:;" class="text-black-80 hp-text-color-dark-40">Privacy Policy</a>
                        <a href="javascript:;" class="text-black-80 hp-text-color-dark-40">Term of use</a>
                    </div>
                </div>
            </div>
        </div>
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


<!-- Mirrored from yoda.hypeople.studio/yoda-admin-template/html/ltr/vertical-collapse/auth-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jul 2022 15:18:09 GMT -->
</html>
