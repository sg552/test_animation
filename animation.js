is_element_in_upper_half_area_in_current_window = function(element){
  element_relative_position_in_current_window = element.offset().top - $(window).scrollTop()
  return (element_relative_position_in_current_window > 0 ) &&
    element_relative_position_in_current_window < $(window).height()/2
}

// 首页的动画函数
start_index_animation = function(){
  if($('#index_animation_is_showing').length > 0) {
    return;
  }
  $('body').append('<div id="index_animation_is_showing"></div>')
  $('.index_wrapper .middle')
    .css('left', '-=10')
    .css('top', '-=100')
    .animate({ opacity: 1.0 , left: "+=10", top: "+=100" }, 1000)
  $('.index_wrapper .left')
    .css('left', '-=500')
    .animate({ opacity: 1.0 , left: "+=500"}, 2000)
  $('.index_wrapper .right')
    .css('left', '+=600')
    .animate({ opacity: 1.0 , left: "-=600"}, 2000, function(){
    $('#text1').animate({opacity: 1.0}, 500, function(){
      $('#text2').animate({opacity: 1.0}, 500, function(){
        $('#text3').animate({opacity: 1.0}, 500, function(){
          $('#text4').animate({opacity: 1.0}, 500, function(){
            $('#text5').animate({opacity: 1.0}, 500,function(){
              $('body').append('<div id="index_animation_is_shown"></div>')
              $("#index_animation_is_showing").remove()
            })
          })
        })
      })
    })
  });
}

cancel_index_animation = function(){
  if($('#index_animation_is_showing').length > 0) {
    return;
  }
  $('.index_wrapper .middle').css({ opacity: 0 })
  $('.index_wrapper .left').css({ opacity: 0})
  $('.index_wrapper .right').css({ opacity: 0})
  $([1,2,3,4,5]).each(function(i, e){
    $('#text' + i).css({opacity: 0})
  })
  $('#text5').css({opacity: 0})
  $("#index_animation_is_shown").remove()
}


// 联系我们的动画函数
start_about_us_animation = function(){
  if($('#about_us_animation_is_showing').length > 0) {
    return;
  }
  $('body').append('<div id="about_us_animation_is_showing"></div>')
  $('#about_us_left')
    .css('left', '-=500')
    .animate({ opacity: 1.0, left: '+=500' }, 1000, function(){
    $('#about_us_right')
      .css('left', '+=300')
      .animate({ opacity: 1.0, left: '-=300' }, 1000, function(){
      $('body').append('<div id="about_us_animation_is_shown"></div>')
      $("#about_us_animation_is_showing").remove()
    })
  })
}
cancel_about_us_animation = function(){
  if($('#about_us_animation_is_showing').length > 0) {
    return;
  }
  $('#about_us_left').css({ opacity: 0 })
  $('#about_us_right').css({ opacity: 0 })
  $("#about_us_animation_is_shown").remove()
}


//服务的动画函数
start_services_animation = function(){
  if($('#services_animation_is_showing').length > 0) {
    return;
  }
  $('body').append('<div id="services_animation_is_showing"></div>')
  $('#upper_left')
    .css('left', '-=400')
    .animate({ opacity: 1.0, left: "+=400" }, 540, function(){
    $('#upper_left_arrow').animate({ opacity: 1.0})
    $('#upper_right')
      .css('left', '+=500')
      .animate({ opacity: 1.0, left: "-=500" }, 540, function(){
      $('#upper_right_arrow').animate({ opacity: 1.0})
      $('#lower_left')
        .css('left', '-=420')
        .animate({ opacity: 1.0, left: "+=420" }, 540, function(){
        $('#lower_right')
          .css('left', '+=470')
          .animate({ opacity: 1.0, left: "-=470" }, 540, function(){
          $('#lower_arrows').animate({ opacity: 1.0}, 540, function(){
            $('body').append('<div id="services_animation_is_shown"></div>')
            $("#services_animation_is_showing").remove()
          })
        })
      })
    })
  })
  $('.middle').animate({ opacity: 1.0 }, 1000)
}
cancel_services_animation = function(){
  if($('#services_animation_is_showing').length > 0) {
    return;
  }
  $("#services_animation_is_shown").remove()
  $('#upper_left').css({ opacity: 0, left: "-=400" })
  $('#upper_left_arrow').css({ opacity: 0})
  $('#upper_right').css({ opacity: 0, left: "+=500" })
  $('#upper_right_arrow').css({ opacity: 0})
  $('#lower_left').css({ opacity: 0, left: "-=420" })
  $('#lower_right').css({ opacity: 0, left: "+=470" })
  $('#lower_arrows').css({ opacity: 0})
  $('.middle').css({ opacity: 0 })
}




//案例展示的动画函数: 显示树
show_trees = function(){
  $('#tree1').animate({ opacity: 1.0, left: "+=550"}, 1000, function(){
    $('#tree2').animate({ opacity: 1.0}, 1000, function(){
      $('#tree3').animate({ opacity: 1.0}, 1000, function(){
        $('#tree4').animate({ opacity: 1.0}, 1000, function(){
          $('#tree5').animate({ opacity: 1.0}, 1000)
        })
      })
    })
  })
}
//案例展示的动画函数: 显示4个小球
show_balls = function(){
  $('#ball_1').animate({ opacity: 1.0, 'margin-left': "-=200"}, 800, function(){
    $('#ball_plus_1').animate({ opacity: 1.0, 'margin-left': "-=200"}, 800, function(){
      $('#ball_2').animate({ opacity: 1.0, 'margin-left': "-=200"}, 800, function(){
        $('#ball_plus_2').animate({ opacity: 1.0, 'margin-left': "-=200"}, 800, function(){
          $('#ball_3').animate({ opacity: 1.0, 'margin-left': "-=200"}, 800, function(){
            $('#ball_plus_3').animate({ opacity: 1.0, 'margin-left': "-=200"}, 800, function(){
              $('#ball_4').animate({ opacity: 1.0, 'margin-left': "-=200"}, 800, function(){
                $('#view_button').animate({opacity: 1.0, top: '-=50'}, 1500)
                $('#balls').animate({ width: 700}, 100, function(){
                  $('body').append('<div id="cases_animation_is_shown"></div>')
                  $("#cases_animation_is_showing").remove()
                })
              })
            })
          })
        })
      })
    })
  })
}

//案例展示的动画函数
start_cases_animation = function() {
  if($('#cases_animation_is_showing').length > 0) {
    return;
  }
  $('body').append('<div id="cases_animation_is_showing"></div>')
  $('#text').animate({opacity: 1.0, top: "+=50"}, 1500, function(){
    show_trees()
    $('#sub_title').animate({opacity: 1.0, top: "+=50"}, 1500, function(){
      show_balls()
    })
  })
}

cancel_cases_animation = function(){
  if($('#cases_animation_is_showing').length > 0) {
    return;
  }
  $('#tree1').css({ opacity: 0, left: "-=550"})
  $('#tree2').css({ opacity: 0})
  $('#tree3').css({ opacity: 0})
  $('#tree4').css({ opacity: 0})
  $('#tree5').css({ opacity: 0})
  $('#ball_1').css({ opacity: 0, 'margin-left': "+=200"})
  $('#ball_plus_1').css({ opacity: 0, 'margin-left': "+=200"})
  $('#ball_2').css({ opacity: 0, 'margin-left': "+=200"})
  $('#ball_plus_2').css({ opacity: 0, 'margin-left': "+=200"})
  $('#ball_3').css({ opacity: 0, 'margin-left': "+=200"})
  $('#ball_plus_3').css({ opacity: 0, 'margin-left': "+=200"})
  $('#ball_4').css({ opacity: 0, 'margin-left': "+=200"})
  $('#view_button').css({opacity: 0, top: '+=50'})
  $('#balls').css({ width: 2000})
  $('#text').css({opacity: 0, top: "-=50"})
  $('#sub_title').css({opacity: 0, top: "-=50"})
  $("#cases_animation_is_shown").remove()
}

// 开发流程的动画函数
start_workflow_animation = function(){
  start_single_workflow_animation('workflow_1', function(){
    start_single_workflow_animation('workflow_2', function(){
      start_single_workflow_animation('workflow_3', function(){
        start_single_workflow_animation('workflow_4', function(){
          start_single_workflow_animation('workflow_5', function(){
            start_single_workflow_animation('workflow_6')
          })
        })
      })
    })
  })
}

// selector: 'workflow_1', 'workflow_2'
start_single_workflow_animation = function(id_selector , after_call_back){
  if($('#' + id_selector + '_animation_is_shown').length >= 1 ) {
    return 'animation has been shown'
  }
  $('#' + id_selector).children('img').first()
    .css('margin-left', '-=100px')
    .animate({ opacity: 1.0, 'margin-left': '+=100' }, 1000, function(){
      $('#' + id_selector + ' .workflow_title')
        .css('margin-top', '-=100px')
        .animate({opacity: 1.0, 'margin-top': '+=100'}, 1000, function(){
          $('#' + id_selector + ' .description')
            .css('margin-top', '-=100px')
            .animate({opacity: 1.0, 'margin-top': '+=100'}, 1000, function(){
              $('#' + id_selector).children('img').last()
                .css('margin-left', '+=50px')
                .animate({ opacity: 1.0, 'margin-left': '-=50' }, 1000, after_call_back )
            })
      })
    })
  $('body').append('<div id="'+ id_selector + '_animation_is_shown"></div>')
}

/* 案例详情页的动画效果*/
start_case_details_animation = function(){
  $('.monitor')
    .css('margin-left', '-=100px')
    .animate({ opacity: 1.0, 'margin-left': '+=100' }, 1000, function(){
      $('.case_description')
        .css('margin-top', '+=100px')
        .animate({ opacity: 1.0, 'margin-top': '-=100' }, 1000, function(){
          $('#screen_shot')
            .css('margin-right', '+=100px')
            .animate({ opacity: 1.0, 'margin-right': '-=100' }, 1000, function(){ })
        })
    })
}

// 每次页面加载完毕，都会自动运行这些方法(显示顶部菜单，和当前页面的标题）
$(function(){
  $('.top').animate({ opacity: 1.0 }, 1000)
  $('.title').animate({ opacity: 1.0, 'margin-top': '+=50' }, 1000)
})


// 这里是动态的方法声明和调用。 声明以下四个方法：
// restart_index_animation()
// restart_services_animation()
// restart_cases_animation()
// restart_about_us_animation()
$(['index', 'services', 'cases', 'about_us']).each(function(i,e){
  window['restart_' + e + '_animation'] = function() {
    high_light_link_on_right_menu( e )
    if($('#' + e + '_animation_is_showing').length > 0 ||
        $('#' + e + '_animation_is_shown').length < 1) {
      return;
    }
    // 动态的方法调用，例如： cancel_services_animation()
    window['cancel_'+e+'_animation']()
    // 动态的方法调用，例如： start_services_animation()
    window['start_' + e + '_animation']()
  }
})

/*
restart_services_animation = function(){
  high_light_link_on_right_menu('services')
  if($('#services_animation_is_showing').length > 0 || $('#services_animation_is_shown').length < 1) {
    return;
  }
  cancel_services_animation()
  start_services_animation()
}

restart_cases_animation = function(){
  high_light_link_on_right_menu('cases')
  if($('#cases_animation_is_showing').length > 0 || $('#cases_animation_is_shown').length < 1) {
    return;
  }
  cancel_cases_animation()
  start_cases_animation()
}

restart_about_us_animation = function(){
  high_light_link_on_right_menu('about_us')
  if($('#about_us_animation_is_showing').length > 0 || $('#about_us_animation_is_shown').length < 1) {
    return;
  }
  cancel_about_us_animation()
  start_about_us_animation()
}
restart_index_animation = function(){
  high_light_link_on_right_menu('index')
  if($('#index_animation_is_showing').length > 0 || $('#index_animation_is_shown').length < 1) {
    return;
  }
  cancel_index_animation()
  start_index_animation()
}
*/


// 用来判断 IE6 。 如果是IE6的话，就把右侧的浮动栏给隐藏掉。
hide_right_menu_if_in_ie_6 = function(){
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  version = null;
  if(msie > 0) {
    version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)))
    if(version == 6){
      $('#right_menu').hide()
    }
  }
}
