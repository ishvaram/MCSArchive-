
            $(function() {
                var d=300;
                $('#navigation a').each(function(){
                    $(this).stop().animate({
                        'marginTop':'-75px'
                    },d+=150);
                });

                $('#navigation > li').hover(
                function () {
                    $('a',$(this)).stop().animate({
                        'marginTop':'0px'
                    },200);
                },
                function () {
                    $('a',$(this)).stop().animate({
                        'marginTop':'-75px'
                    },200);
                }
            );
            });

