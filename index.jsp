<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCAvenue Docs (Beta)</title>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">

    <!-- SLICK -->
    <link rel="stylesheet" href="plugins/slick/slick.css" />
    <link rel="stylesheet" href="plugins/slick/slick-theme.css" />

    <!-- MCUSTOMSCROLLBAR -->
    <link rel="stylesheet" href="plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.css" />

    <!-- AOS -->
    <link rel="stylesheet" href="plugins/aos-master/aos.css" />

    <!-- STYLES -->
    <link rel="stylesheet" href="css/styles.css" />

</head>

<body>
    <!-- SVG ASSETS -->
    <jsp:include page="includes/svg-assets.jsp" />

    <!-- HEADER -->
    <jsp:include page="includes/header.jsp" />

    <!-- MAIN -->
    <main class="wrapper">

        <!-- INTRO -->
        <section class="intro">
            <div class="container gx-0">
                <h1 class="head">Documentation</h1>
                <div class="search open-search-modal"><i class="far fa-search"></i> Search the docs
                </div>
                <p class="desc">Explore our guides and examples to integrate CCAvenue</p>
            </div>
        </section>

        <!-- STARTED -->
        <section class="statred">
            <div class="container gx-0">
                <div class="data">
                    <div class="content">
                        <div class="desc">
                            <p>CCAvenue is an end-to-end PCI-DSS Compliant payment-processing solution provider,
                                catering to nearly 3 million merchants across all payments businesses. With its
                                path-breaking technology in the Fintech space, CCAvenue is committed to redefine user
                                experience, improve transaction success rates and increase the earning potential of web
                                merchants exponentially.</p>
                            <p>Digital onboarding in CCAvenue is a streamlined process that allows merchants to set up
                                and integrate payment solutions into their businesses quickly and efficiently. This
                                process involves several key steps and is designed to be user-friendly and secure.
                                Here's a breakdown of the typical steps involved in digital onboarding:</p>
                        </div>
                        <div class="points">
                            <ul class="list">
                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link"> Registration </a>
                                </li>

                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link"> Business Verification</a>
                                </li>

                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link">Know Your Customer (KYC)</a>
                                </li>

                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link">Integration Setup</a>
                                </li>
                            </ul>
                            <ul class="list">
                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link">Testing</a>
                                </li>

                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link">Go Live</a>
                                </li>

                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link">Support</a>
                                </li>

                                <li class="list-item">
                                    <i class="fas fa-play"></i>
                                    <a href="javascript:void(0)" class="list-link">Compliance and Security</a>
                                </li>
                            </ul>
                        </div>
                        <a href="documentation.jsp" class="button button-primary btn-started">Get Started
                            <span class="arrow">
                                <i class="far fa-angle-right"></i>
                                <i class="far fa-dash"></i>
                            </span>
                        </a>
                    </div>
                    <div class="artwork">
                        <div class="artwork-slide">
                            <jsp:include page="includes/artwork-art/artwork-1.jsp" />
                            <jsp:include page="includes/artwork-art/artwork-1.jsp" />
                            <jsp:include page="includes/artwork-art/artwork-1.jsp" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULES -->
        <section class="modules">
            <div class="container gx-0">

                <div class="module" data-aos="fade-up">
                    <h2 class="title">Payments</h2>
                    <ul class="list">
                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Payment Gateway
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Accept payments on your website or app</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        LinkPay
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Create & share link via email, SMS or Whatsapp to collect money</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        QRPay
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Collect QR code payments using UPI QR or Bharat QR</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        TapPay
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Collect payments with just a tap on your NFC Android smartphone</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        IVRPay
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                                        laboriosam!</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Invoices
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Create and send itemised invoices to collect online payments</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        FormPay
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Collect payments with custom branded Payment form</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Payment Button
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
                                        ipsa.</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Recurring Payments
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Collect recurring subscription payments</p>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Marketing Tools
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                    <p class="desc">Offer discounts & run promotions across payment modes</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="module" data-aos="fade-up">
                    <h2 class="title">Settlements</h2>
                    <ul class="list">
                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Single Payout
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Split Payout
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="module" data-aos="fade-up">
                    <h2 class="title">Web Integration</h2>
                    <ul class="list">
                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Seamless Integration
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Non-Seamless Integration
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Additional Integration
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="module" data-aos="fade-up">
                    <h2 class="title">Mobile Integration</h2>
                    <ul class="list">
                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Server Side Implementation
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        iOS SDK
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Android SDK
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="module" data-aos="fade-up">
                    <h2 class="title">Shopping Cart</h2>
                    <ul class="list">
                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Single Payout
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>

                        <li class="list-item">
                            <a href="javascript:void(0)" class="list-link">
                                <div class="ico">
                                    <svg class="ico-svg" viewBox="0 0 512 512">
                                        <use xlink:href="#ico-shield"></use>
                                    </svg>
                                </div>
                                <div class="data">
                                    <h3 class="name">
                                        Split Payout
                                        <span class="arrow">
                                            <i class="far fa-angle-right"></i>
                                            <i class="far fa-dash"></i>
                                        </span>
                                    </h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <jsp:include page="includes/footer.jsp" />

    <!-- SEARCH -->
    <jsp:include page="includes/search.jsp" />

    <!-- LOADER -->
    <jsp:include page="includes/loader.jsp" />

    <!-- JQUERY -->
    <script src="plugins/jquery/jquery.min.js"></script>

    <!-- MCUSTOMSCROLLBAR -->
    <script src="plugins/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js"></script>

    <!-- TYPEAHEAD -->
    <script src="plugins/typeahead/typeahead.bundle.js"></script>

    <!-- SLICK -->
    <script src="plugins/slick/slick.min.js"></script>

    <!-- AOS -->
    <script src="plugins/aos-master/aos.js"></script>

    <!-- SCRIPTS -->
    <script src="js/search.js"></script>
    <script src="js/scripts.js"></script>

</body>

</html>