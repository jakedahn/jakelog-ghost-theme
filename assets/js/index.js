(function ($) {
    $(function () {

        $('.post').each(function () {
            var post_type,
                tag_blocks = $(this).find('.tags a');
            if (tag_blocks.length > 0) {
                tag_blocks.each(function () {
                    var $tag = $(this).text();
                    if ($tag === "tweet") { post_type = "fa fa-twitter"; }
                    if ($tag === "insta") { post_type = "fa fa-instagram"; }
                    if ($tag === "blog") { post_type = "fa fa-bookmark"; }
                });
            } else {
                post_type = "fa fa-bookmark";
            }
            $(this).find('h1.post-type').addClass(post_type);
        });

    });
})(jQuery);