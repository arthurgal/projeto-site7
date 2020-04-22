$(document).ready(function()
                        {
                            $("#slider7").tinycarousel({ interval: true });

                            var slider7 = $("#slider7").data("plugin_tinycarousel");

                            //The tinycarousel_move method you can use to make a anchor to a certain slide.
                            $("#gotoslide4").click(function()
                            {
                                slider7.move(4);

                                return false;
                            });

                            //The tinycarousel_start method starts the interval.
                            $('#startslider').click(function()
                            {
                                slider7.start();

                                return false;
                            });

                            //The tinycarousel_stop method stops the interval.
                            $('#stopslider').click(function()
                            {
                                slider7.stop();

                                return false;
                            });
                        });