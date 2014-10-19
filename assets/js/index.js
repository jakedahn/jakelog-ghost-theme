(function ($) {
    $(function () {

        $('.post').each(function () {
            var post_type,
                tag_blocks = $(this).find('.tags a');
            if (tag_blocks.length > 0) {
                tag_blocks.each(function () {
                    var $tag = $(this).text();
                    if ($tag === "tweet") {
                        post_type = {
                            icons: "fa fa-twitter",
                            parent: "twitter"
                        };
                    }
                    if ($tag === "insta") {
                        post_type = {
                            icons: "fa fa-instagram",
                            parent: "instagram"
                        };
                    }
                    if ($tag === "blog") {
                        post_type = {
                            icons: "fa fa-bookmark",
                            parent: "bookmark"
                        };
                    }
                });
            } else {
                post_type = {
                    icons: "fa fa-bookmark",
                    parent: "bookmark"
                };
            }
            if (post_type) {
                $(this).find('.post-type').addClass(post_type.parent);
                $(this).find('.post-type').append("<i class='" + post_type.icons + "'></i>");
            }
        });

    });

    hljs.initHighlightingOnLoad();
})(jQuery);
