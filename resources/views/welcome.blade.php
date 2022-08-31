@extends("layouts.frontend")


@section("content")
<div class="container__navigation">
    <nav>
        <div class="logo">
            <h1>La Transquille</h1>
        </div>
        <div class="main__navigation">
            <ul>

                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Stories</a>
                </li>
                <li>
                    <a href="#">Membership</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
        <div class="login__navigation">
            <a href="#">Sign Up</a><a href="{{ route('login') }}">Login</a>
        </div>
    </nav>
    <div class="nav__intro">
        <div class="nav__inner">
            <div class="nav__inner__left">
                <h1>
                    Make the First move and find the love of your life
                </h1>
                <p>Start meeting new People wih matching personalities around you with <span>Letransquille Dating</span></p>
                <a class="button" href="#">Start your Lovely Journey now <span class="fi-rr-user-add"></span></a>
            </div>
            <div class="nav__inner__right">
                <ul>
                    <li>
                        <img src="./images/avatar/1.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/2.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/3.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/4.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/5.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/6.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/7.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/8.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/9.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/10.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/11.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>
                        </div>

                    </li>
                    <li>
                        <img src="./images/avatar/12.jpg" alt="">
                        <div class="nav__inner__top">
                            <span class=" fi-rr-cross-small"></span>
                            <span class=" fi-rr-heart"></span>

                            <span class="fi-rr-check"></span>

                        </div>

                    </li>

                </ul>
            </div>
        </div>

    </div>
    <div class="nav__social__icons">
        <p>Follow us on</p>
        <ul>
            <li>
                <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa-brands fa-facebook-square"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fa-brands fa-twitter-square"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="home__match_container">
    <div class="home__first_description_layer">
        <div>
            <h1>Find your <span>Match</span> Near you</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam velit consequatur explicabo necessitatibus similique voluptate excepturi eius dolorum quibusdam! Accusamus consequuntur eveniet dolorem aliquid mollitia neque eius non nobis.</p>
            <a href="#">Join Now</a>

        </div>

        <div>
            <h1>Image</h1>
        </div>
    </div>
    <div class="home__second_description_layer">
        <div>
            <h1>Image</h1>
        </div>
        <div>
            <h1><span>Chat</span> with Matches</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam velit consequatur explicabo necessitatibus similique voluptate excepturi eius dolorum quibusdam! Accusamus consequuntur eveniet dolorem aliquid mollitia neque eius non nobis.</p>
            <a href="#">Join Now</a>

        </div>


    </div>
</div>
{{-- Discovery --}}
<div class="home__discovery__container">
    <div class="home__discovery__left">
        <h1>
            <span>Discover</span> the best Match According to your Passion and Hobbies
        </h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur perspiciatis, corporis explicabo voluptatibus debitis ea voluptas facere nobis fugiat! Neque commodi sapiente quidem saepe temporibus. Ipsum cumque sit dolorem expedita.
        </p>
    </div>
    <div class="home__discovery__right">
        <div class="pusher">
            <ul>
                <li>Gaming</li>
                <li>Cooking</li>
                <li>Fitness</li>
                <li>Tv shows and Movies</li>
            </ul>
            <ul>
                <li>Painting & Drawing</li>
                <li>Hiking</li>
                <li>Vegan</li>
                <li>Dancing</li>
                <li>Climbing</li>
            </ul>
            <ul>
                <li>K-Pop</li>
                <li>Road Trips</li>
                <li>Volunteering</li>
                <li>Shopping</li>
                <li>Food</li>
                <li></li>
            </ul>
            <ul>
                <li>Music</li>
                <li>Photography</li>
                <li>Comedy</li>
                <li>Athlete</li>
                <li>Sushi</li>
            </ul>
            <ul>
                <li>Yoga</li>
                <li>Hollywood</li>
                <li>Marvel Movies</li>
                <li>Netflix & Chill</li>
            </ul>
        </div>

    </div>
</div>
<div class="success__stories">
    <h1>Success Stories</h1>
    <ul class="success__carousel">
        <li>
            <div class="img__container">
                <img src="./images/slides/slide1.jpg" alt="">
                <div class="img__title">
                    <h1>Mercy & Wisdom</h1>
                </div>
            </div>


        </li>
        <li>
            <div class="img__container">
                <img src="./images/slides/slide2.jpg" alt="">
                <div class="img__title">
                    <h1>Mercy & Wisdom</h1>
                </div>
            </div>


        </li>
        <li>
            <div class="img__container">
                <img src="./images/slides/slide3.jpg" alt="">
                <div class="img__title">
                    <h1>Mercy & Wisdom</h1>
                </div>
            </div>


        </li>

    </ul>
    <p class="success__comment__active">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, suscipit. Iusto aspernatur repudiandae ea amet nulla! Reiciendis error nulla alias laudantium architecto eligendi, fuga veniam mollitia nihil, laborum ex ipsa.
    </p>
    <div class="success__carousel__button">
        <button>
            <span class="fi-rr-angle-small-left"></span>
        </button>
        <button>
            <span class="fi-rr-angle-small-right"></span>
        </button>
    </div>
</div>
<div class="home__free__subscription">
    <div class="home__subscription">
        <h1 class="free">Free</h1>

        <div class="home__free__container">
            <h1>Free<br/>Subscription</h1>
            <h1 class="home__free__title">nil</h1>
            <div class="divider"></div>
            <ul>
                <li>
                    45 Swipes per day
                </li>
                <li>
                    Unlimited video calling
                </li>
                <li>Higher Match Rate</li>
            </ul>
            <a href="#">Try it for free</a>
        </div>

    </div>
    <div class="home__free__description">
        <h1>Letransquille Dating Membership</h1>
        <p>Find your partner more easily without any limitations with our best Plan</p>
        <h1 class="try">Try our Free '7 days' Subscription Plan with 45 Swipes per day, Unlimited calling on your new Registration</h1>
        <a href="#">Offer valid Till April 29, 2022</a>
    </div>
</div>
<footer>
    <div>
       <ul>
        <h1>Le Transquille</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil dolore, praesentium dolores amet reprehenderit temporibus sequi reiciendis, consectetur maxime ea accusamus quasi corrupti est? Aliquid quia quas eos? Doloremque.</p>

       </ul>
       <ul>
           <h1>Company</h1>
           <li>
               <a href="#">Support</a>
           </li>
           <li>
            <a href="#">Contact</a>
        </li>
        <li>
            <a href="#">About Us</a>
        </li>
       </ul>
       <ul>
           <h1>Product</h1>
           <li>
            <a href="#">Plans</a>
        </li>
        <li>
            <a href="#">Blog</a>
        </li>
       </ul>

    </div>
    <div>
        <p>&copy; {{ date('Y') }}. All rights reserved for Le transquille</p>

        <div class="social__holder">
            <p>Follow us on</p>
            <div class="footer__social">
                <li>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-brands fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa-brands fa-twitter-square"></i>
                    </a>
                </li>

        </div>
    </div>
</footer>
@endsection
