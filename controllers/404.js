exports.getErrorPage = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: ":/", 
        pageNotFound: "We were unable to load the page as we can't find it.",
        path: ""
    } );
}