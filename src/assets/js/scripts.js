import $ from 'jquery';
import Hammer from 'hammerjs';

$( document ).ready(function() {
    const text = `
            Hi, I’m a passionate Full-Stack Web Developer. I build scalable 
            and dynamic web applications using the latest technologies to solve 
            real-world problems.
        `;
        // Whether it's the front-end, back-end, or everything in between, I turn ideas into interactive 
        // and user-friendly digital experiences.
    const typedTextElement = document.getElementById("typedText");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    $('.side-nav li, .outer-nav li').click(function(){
      if (!($(this).hasClass('is-active'))) {
        var $this = $(this),
        curActive = $this.parent().find('.is-active'),
        curPos = $this.parent().children().index(curActive),
        nextPos = $this.parent().children().index($this),
        lastItem = $(this).parent().children().length - 1;
        $('#cur_tab').text($this.text());
  
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    });
  
    $('.cta').click(function(){
        var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = lastItem;

        var $this = $(this);
        $('#cur_tab').text($this.text());
  
        updateNavs(lastItem);
        updateContent(curPos, nextPos, lastItem);
  
    });
  
    // swipe support for touch devices
    var targetElement = document.getElementById('viewport'),
        mc = new Hammer(targetElement);
        mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        mc.on('swipeup swipedown', function(e) {
        updateHelper(e);

    });
  
    $(document).keyup(function(e){
      if (!($('.outer-nav').hasClass('is-vis'))) {
        e.preventDefault();
        updateHelper(e);
      }
    });
  
    // determine scroll, swipe, and arrow key direction
    function updateHelper(param) {
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 1,
          nextPos = 0;
  
      if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
        if (curPos !== lastItem) {
          nextPos = curPos + 1;
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
        else {
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
      }
      else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
        if (curPos !== 0){
          nextPos = curPos - 1;
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
        else {
          nextPos = lastItem;
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
      }
    }
  
    // sync side and outer navigations
    function updateNavs(nextPos) {
        $('.side-nav, .outer-nav').children().removeClass('is-active');
        $('.side-nav').children().eq(nextPos).addClass('is-active');
        $('.outer-nav').children().eq(nextPos).addClass('is-active');

        let cur_tab;
        switch (nextPos) {
        case 0:
            cur_tab = "Home";
            break;
        case 1:
            cur_tab = "Skills";
            break;
        case 2:
            cur_tab = "Projects";
            break;
        case 3:
            cur_tab = "Resume";
            break;
        case 4:
            cur_tab = "Hire me";
            break;
        default:
            cur_tab = "Home";
        }
        $('#cur_tab').text(cur_tab);

    }
  
    // update main content area
    function updateContent(curPos, nextPos, lastItem) {
      $('.main-content').children().removeClass('section--is-active');
      $('.main-content').children().eq(nextPos).addClass('section--is-active');
      $('.main-content .section').children().removeClass('section--next section--prev');
  
      if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
        $('.main-content .section').children().removeClass('section--next section--prev');
      }
      else if (curPos < nextPos) {
        $('.main-content').children().eq(curPos).children().addClass('section--next');
      }
      else {
        $('.main-content').children().eq(curPos).children().addClass('section--prev');
      }
  
      if (nextPos !== 0 && nextPos !== lastItem) {
        $('.header--cta').addClass('is-active');
      }
      else {
        $('.header--cta').removeClass('is-active');
      }
    }
  
    function outerNav() {
      $('.header--nav-toggle').click(function(){
  
        $('.perspective').addClass('perspective--modalview');
        setTimeout(function(){
          $('.perspective').addClass('effect-rotate-left--animate');
        }, 25);
        $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');
  
      });
  
      $('.outer-nav--return, .outer-nav li').click(function(){
  
        $('.perspective').removeClass('effect-rotate-left--animate');
        setTimeout(function(){
          $('.perspective').removeClass('perspective--modalview');
        }, 400);
        $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');
  
      });
  
    }
  
    function workSlider() {
        $('.slider--prev, .slider--prev2, .slider--next, .slider--next2').click(function() {
      
            var $this = $(this),
                curLeft = $('.slider').find('.slider--item-left'),
                curLeftPos = $('.slider').children().index(curLeft),
                curCenter = $('.slider').find('.slider--item-center'),
                curCenterPos = $('.slider').children().index(curCenter),
                curRight = $('.slider').find('.slider--item-right'),
                curRightPos = $('.slider').children().index(curRight),
                totalWorks = $('.slider').children().length,
                $left = $('.slider--item-left'),
                $center = $('.slider--item-center'),
                $right = $('.slider--item-right'),
                $item = $('.slider--item'),
                currentIndex = curCenterPos + 1;
      
            $('.slider-indicator').text(currentIndex + '/' + totalWorks);
      
            $('.slider--item-left').stop().animate({ scale: 0.7 }, 400);
            $('.slider--item-center').stop().animate({ scale: 0.7 }, 400);
            $('.slider--item-right').stop().animate({ scale: 0.7 }, 400);
      
            // Next slide logic
            if ($this.hasClass('slider--next') || $this.hasClass('slider--next2')) {
                setTimeout(function() {
                    if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
                        $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                    }
                    else {
                        if (curLeftPos === totalWorks - 1) {
                            $item.removeClass('slider--item-left').first().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                        }
                        else if (curCenterPos === totalWorks - 1) {
                            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                            $item.removeClass('slider--item-center').first().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                        }
                        else {
                            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                            $item.removeClass('slider--item-right').first().addClass('slider--item-right');
                        }
                    }
      
                    $('.slider--item-center').stop().animate({ scale: 1 }, 400);
                    $('.slider--item-left').stop().animate({ scale: 1 }, 400);
                    $('.slider--item-right').stop().animate({ scale: 1 }, 400);
                }, 400);
            }
      
            // Previous slide logic
            else {
                setTimeout(function() {
                    if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
                        $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                    }
                    else {
                        if (curLeftPos === 0) {
                            $item.removeClass('slider--item-left').last().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                        }
                        else if (curCenterPos === 0) {
                            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                            $item.removeClass('slider--item-center').last().addClass('slider--item-center');
                            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                        }
                        else {
                            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                            $item.removeClass('slider--item-right').last().addClass('slider--item-right');
                        }
                    }
      
                    $('.slider--item-center').stop().animate({ scale: 1 }, 400);
                    $('.slider--item-left').stop().animate({ scale: 1 }, 400);
                    $('.slider--item-right').stop().animate({ scale: 1 }, 400);
                }, 400); 
            }
        });
    }
    
    function transitionLabels() {
      $('.work-request--information input').focusout(function(){
  
        var textVal = $(this).val();
  
        if (textVal === "") {
          $(this).removeClass('has-value');
        }
        else {
          $(this).addClass('has-value');
        }
  
        // correct mobile device window position
        window.scrollTo(0, 0);
  
      });
  
    }
  
    outerNav();
    workSlider();
    transitionLabels();
  });
  