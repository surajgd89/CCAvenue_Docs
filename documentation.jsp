<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CCAvenue Docs (Beta)</title>
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />

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

        <!-- SIDEBAR -->
        <jsp:include page="includes/sidebar.jsp" />

        <!-- MAIN -->
        <main class="wrapper">
            <!-- INTRO -->
            <jsp:include page="includes/intro.jsp" />
            <section class="docs-content"></section>
        </main>

        <!-- SCROLL TO TOP -->
        <button class="scroll-to-btn"><i class="fal fa-arrow-up"></i></button>

        <!-- LOADER -->
        <jsp:include page="includes/loader.jsp" />

        <!-- SEARCH -->
        <jsp:include page="includes/search.jsp" />

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
        <script src="js/ajax.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
