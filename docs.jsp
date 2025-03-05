<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CCAvenue Docs (Beta)</title>
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />

        <!--FONT-->
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />

        <!--FONT AWESOME-->
        <link rel="stylesheet" href="plugins/fontawesome/css/all.css" />

        <!-- MCUSTOMSCROLLBAR -->
        <link rel="stylesheet" href="plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.css" />

        <!-- AOS -->
        <link rel="stylesheet" href="plugins/aos-master/aos.css" />

        <!-- PRISM -->
        <link rel="stylesheet" href="plugins/prism/prism.css" />

        <!-- STYLES -->
        <link rel="stylesheet" href="css/styles.css" />
    </head>

    <body class="docs-body">
        <!-- LOADER -->
        <jsp:include page="includes/loader.jsp" />

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
            <!-- DOCS CONTENT -->
            <section class="docs-content"></section>
        </main>

        <!-- FOOTER -->
        <div class="footer-wrapper">
            <jsp:include page="includes/footer.jsp" />
        </div>

        <!-- IMAGE MODAL -->
        <div class="image-modal">
            <span class="image-modal-close" id="closeBtn"><i class="fal fa-times"></i></span>
            <img class="image-modal-content" id="imgModal" onclick="closeImageModal()" />
        </div>

        <!-- SCROLL TO TOP -->
        <button class="scroll-to-btn"><i class="fal fa-arrow-up"></i></button>

        <!-- SEARCH -->
        <jsp:include page="includes/search.jsp" />

        <!-- JQUERY -->
        <script src="plugins/jquery/jquery.min.js"></script>

        <!-- MCUSTOMSCROLLBAR -->
        <script src="plugins/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js"></script>

        <!-- TYPEAHEAD -->
        <script src="plugins/typeahead/typeahead.bundle.js"></script>

        <!-- PRISM -->
        <script src="plugins/prism/prism.js"></script>

        <!-- AOS -->
        <script src="plugins/aos-master/aos.js"></script>

        <!-- SCRIPTS -->
        <script src="js/sidebar.js"></script>
        <script src="js/search.js"></script>
        <script src="js/scripts.js"></script>
        <script src="js/ajax.js"></script>
    </body>
</html>
