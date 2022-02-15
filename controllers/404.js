exports.getErrorPage = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: ":/", 
        pageNotFound: "We were unable to find what you're looking.",
        path: ""
    } );
}