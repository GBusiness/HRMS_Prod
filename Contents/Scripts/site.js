

$(document).ready(function () {

    //Adding custom font to the fonts list
    DevExpress.Designer.fontInfoFake.filter(function (value) { return value.displayName === "Century Gothic"; })[0].values["CenturyGothic"] = "CenturyGothic";


    window.setTimeout(checkForChanges, 100)

    function checkForChanges() {
        var size = $('.ErrorMessage').height();
        if (size != null) {
            window.animateScrollTo(0, 0);
            setTimeout(checkForChanges, 900000);
        }
        else {
            setTimeout(checkForChanges, 200);
        }
    };

    // !!! DevExpress DontRemove important for Autocollapse to work !!!
    $('.dxnb-headerCollapsed').click(function () {
        $(".dxnb-content .dxnb-tmpl div div ul li ul").css("display", "none");
    });


    //var link = document.createElement('link');
    //link.setAttribute("rel", "stylesheet");
    //link.setAttribute("type", "text/css");
    ////link.onload = function () { CSSDone(); }
    //link.setAttribute("href", 'Contents/Styles/site.css');
    //document.getElementsByTagName("head")[0].appendChild(link);

    $('#Vertical_UPNC').on('mousewheel DOMMouseScroll', function (e) {

        var e0 = e.originalEvent;
        var delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });

    //$('.swipeRight').click(function () {
    //    event.preventDefault();
    //    $('.ListViewItem').animate({
    //        scrollLeft: "+=300px"
    //    }, "fast");

    //    $('.dxgvtbl').animate({
    //        scrollLeft: "+=300px"
    //    }, "fast");

    //    $('#gridContainer').animate({
    //        scrollLeft: "+=300px"
    //    }, "fast");

    //});

    //$('.swipeLeft').click(function () {
    //    event.preventDefault();
    //    $('.ListViewItem').animate({
    //        scrollLeft: "-=300px"
    //    }, "fast");

    //    $('.dxgvtbl').animate({
    //        scrollLeft: "-=300px"
    //    }, "fast");

    //    $('#gridContainer').animate({
    //        scrollLeft: "-=300px"
    //    }, "fast");
    //});

    //$(document).keydown(function (e) {
    //    switch (e.which) {
    //        case 37: // left
    //            $('.ListViewItem').animate({
    //                scrollLeft: "-=300px"
    //            }, "fast");

    //            $('.dxgvtbl').animate({
    //                scrollLeft: "-=300px"
    //            }, "fast");

    //            $('#gridContainer').animate({
    //                scrollLeft: "-=300px"
    //            }, "fast");
    //            break;

    //        case 38: // up
    //            break;

    //        case 39: // right
    //            $('.ListViewItem').animate({
    //                scrollLeft: "+=300px"
    //            }, "fast");

    //            $('.dxgvtbl').animate({
    //                scrollLeft: "+=300px"
    //            }, "fast");

    //            $('#gridContainer').animate({
    //                scrollLeft: "+=300px"
    //            }, "fast");
    //            break;

    //        case 40: // down
    //            break;

    //        default: return; // exit this handler for other keys
    //    }
    //    e.preventDefault(); // prevent the default action (scroll / move caret)
    //});



    $(function () {
        var WindowSize = document.body.offsetWidth;
        if (WindowSize > 1000) {
            // Stick the #nav to the top of the window
            var nav = $('#Vertical_navigation');
            var navHomeY = nav.offset().top;
            var $w = $(window);
            $w.scroll(function () {
                var scrollTop = $w.scrollTop();
                var shouldBeFixed = scrollTop > navHomeY;
                if (shouldBeFixed) {
                    nav.css({
                        position: 'relative',
                        top: scrollTop + 12,
                        transition: '0.3s linear all'

                    });
                }
                else {
                    nav.css({
                        position: 'relative',
                        top: 0,
                        transition: '0.3s linear all'
                    });
                }
            });

        }


        //var errormessage = $('#Vertical_ErrorInfo');
        //if (errormessage.length) {
        //    $('#Vertical_ErrorInfo').animate({ scrollTop: $('#Vertical_ErrorInfo').offset().top }, 'slow');
        //}

        //$("body").on('DOMSubtreeModified', "#Vertical_ErrorInfo", function () {
        //    alert('changed');
        //});



































        (function () {
            'use strict';

            // desiredOffset - page offset to scroll to
            // speed - duration of the scroll per 1000px
            function __ANIMATE_SCROLL_TO(desiredOffset) {
                var userOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                if (desiredOffset instanceof HTMLElement) {
                    if (userOptions.element && userOptions.element instanceof HTMLElement) {
                        desiredOffset = (desiredOffset.getBoundingClientRect().top + userOptions.element.scrollTop)
                          - userOptions.element.getBoundingClientRect().top;
                    } else {
                        var scrollTop = window.scrollY || document.documentElement.scrollTop;
                        desiredOffset = scrollTop + desiredOffset.getBoundingClientRect().top;
                    }
                }

                var options = {
                    speed: 500,
                    minDuration: 250,
                    maxDuration: 1500,
                    cancelOnUserAction: true,
                    element: window,
                    onComplete: undefined,
                };

                var optionsKeys = Object.keys(options);

                // Override default options
                for (var i = 0; i < optionsKeys.length; i++) {
                    var key = optionsKeys[i];

                    if (typeof userOptions[key] !== 'undefined') {
                        options[key] = userOptions[key];
                    }
                }

                options.isWindow = options.element === window;

                var initialScrollPosition = null;
                var maxScroll = null;

                if (options.isWindow) {
                    // get cross browser scroll position
                    initialScrollPosition = window.scrollY || document.documentElement.scrollTop;
                    // cross browser document height minus window height
                    maxScroll = Math.max(
                      document.body.scrollHeight, document.documentElement.scrollHeight,
                      document.body.offsetHeight, document.documentElement.offsetHeight,
                      document.body.clientHeight, document.documentElement.clientHeight
                    ) - window.innerHeight;
                } else {
                    // DOM element
                    initialScrollPosition = options.element.scrollTop;
                    maxScroll = options.element.scrollHeight - options.element.clientHeight;
                }

                // If the scroll position is greater than maximum available scroll
                if (desiredOffset > maxScroll) {
                    desiredOffset = maxScroll;
                }

                // Calculate diff to scroll
                var diff = desiredOffset - initialScrollPosition;

                // Do nothing if the page is already there
                if (diff === 0) {
                    // Execute callback if there is any
                    if (options.onComplete && typeof options.onComplete === 'function') {
                        options.onComplete()
                    }

                    return;
                }

                // Calculate duration of the scroll
                var duration = Math.abs(Math.round((diff / 1000) * options.speed));

                // Set minimum and maximum duration
                if (duration < options.minDuration) {
                    duration = options.minDuration;
                } else if (duration > options.maxDuration) {
                    duration = options.maxDuration;
                }

                var startingTime = Date.now();

                // Request animation frame ID
                var requestID = null;

                // Method handler
                var handleUserEvent = null;

                if (options.cancelOnUserAction) {
                    // Set handler to cancel scroll on user action
                    handleUserEvent = function () {
                        removeListeners();
                        cancelAnimationFrame(requestID);
                    };
                    window.addEventListener('keydown', handleUserEvent);
                    window.addEventListener('mousedown', handleUserEvent);
                } else {
                    // Set handler to prevent user actions while scroll is active
                    handleUserEvent = function (e) { e.preventDefault(); };
                    window.addEventListener('scroll', handleUserEvent);
                }

                window.addEventListener('wheel', handleUserEvent);
                window.addEventListener('touchstart', handleUserEvent);

                var removeListeners = function () {
                    window.removeEventListener('wheel', handleUserEvent);
                    window.removeEventListener('touchstart', handleUserEvent);

                    if (options.cancelOnUserAction) {
                        window.removeEventListener('keydown', handleUserEvent);
                        window.removeEventListener('mousedown', handleUserEvent);
                    } else {
                        window.removeEventListener('scroll', handleUserEvent);
                    }
                };

                var step = function () {
                    var timeDiff = Date.now() - startingTime;
                    var t = (timeDiff / duration) - 1;
                    var easing = t * t * t + 1;
                    var scrollPosition = Math.round(initialScrollPosition + (diff * easing));

                    if (timeDiff < duration && scrollPosition !== desiredOffset) {
                        // If scroll didn't reach desired offset or time is not elapsed
                        // Scroll to a new position
                        // And request a new step

                        if (options.isWindow) {
                            options.element.scrollTo(0, scrollPosition);
                        } else {
                            options.element.scrollTop = scrollPosition;
                        }

                        requestID = requestAnimationFrame(step);
                    } else {
                        // If the time elapsed or we reached the desired offset
                        // Set scroll to the desired offset (when rounding made it to be off a pixel or two)
                        // Clear animation frame to be sure
                        if (options.isWindow) {
                            options.element.scrollTo(0, desiredOffset);
                        } else {
                            options.element.scrollTop = desiredOffset;
                        }
                        cancelAnimationFrame(requestID);

                        // Remove listeners
                        removeListeners();

                        // Animation is complete, execute callback if there is any
                        if (options.onComplete && typeof options.onComplete === 'function') {
                            options.onComplete()
                        }
                    }
                };

                // Start animating scroll
                requestID = requestAnimationFrame(step);
            }

            if (typeof exports !== 'undefined') {
                if (typeof module !== 'undefined' && module.exports) {
                    module.exports = __ANIMATE_SCROLL_TO;
                    exports = module.exports;
                }
                exports.default = __ANIMATE_SCROLL_TO;
            } else if (window) {
                window.animateScrollTo = __ANIMATE_SCROLL_TO;
            }
        }).call(this);

    });
});