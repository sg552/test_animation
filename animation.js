
// 首页的动画函数
start_index_animation = function(){
  if($('#index_animation_is_showing').length > 0) {
    return;
  }
  $('body').append('<div id="index_animation_is_showing"></div>')
  $('.index_wrapper .middle').animate({ opacity: 1.0 , left: "+=10", top: "+=100" }, 1000)
  $('.index_wrapper .left').animate({ opacity: 1.0 , left: "+=500"}, 2000)
  $('.index_wrapper .right').animate({ opacity: 1.0 , left: "-=600"}, 2000, function(){
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
  $('.index_wrapper .middle').css({ opacity: 0 , left: "-=10", top: "-=100" })
  $('.index_wrapper .left').css({ opacity: 0 , left: "-=500"})
  $('.index_wrapper .right').css({ opacity: 0 , left: "+=600"})
  $([1,2,3,4,5]).each(function(i, e){
    $('#text' + i).css({opacity: 0})
  })
  $("#index_animation_is_shown").remove()
}


// 联系我们的动画函数
start_about_us_animation = function(){
  if($('#about_us_animation_is_showing').length > 0) {
    return;
  }
  $('body').append('<div id="about_us_animation_is_showing"></div>')
  $('#about_us_left').animate({ opacity: 1.0, left: '+=500' }, 1000, function(){
    $('#about_us_right').animate({ opacity: 1.0, left: '-=300' }, 1000, function(){
      $('body').append('<div id="about_us_animation_is_shown"></div>')
      $("#about_us_animation_is_showing").remove()
    })
  })
}
cancel_about_us_animation = function(){
  if($('#about_us_animation_is_showing').length > 0) {
    return;
  }
  $('#about_us_left').css({ opacity: 0, left: '-=500' })
  $('#about_us_right').css({ opacity: 0, left: '+=300' })
  $("#about_us_animation_is_shown").remove()
}


//服务的动画函数
start_services_animation = function(){
  if($('#services_animation_is_showing').length > 0) {
    return;
  }
  $('body').append('<div id="services_animation_is_showing"></div>')
  $('#upper_left').animate({ opacity: 1.0, left: "+=400" }, 540, function(){
    $('#upper_left_arrow').animate({ opacity: 1.0})
    $('#upper_right').animate({ opacity: 1.0, left: "-=500" }, 540, function(){
      $('#upper_right_arrow').animate({ opacity: 1.0})
      $('#lower_left').animate({ opacity: 1.0, left: "+=420" }, 540, function(){
        $('#lower_right').animate({ opacity: 1.0, left: "-=470" }, 540, function(){
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



restart_services_animation = function(){
  if($('#services_animation_is_showing').length > 0 || $('#services_animation_is_shown').length < 1) {
    return;
  }
  cancel_services_animation()
  start_services_animation()
}

restart_cases_animation = function(){
  if($('#cases_animation_is_showing').length > 0 || $('#cases_animation_is_shown').length < 1) {
    return;
  }
  cancel_cases_animation()
  start_cases_animation()
}

restart_about_us_animation = function(){
  if($('#about_us_animation_is_showing').length > 0 || $('#about_us_animation_is_shown').length < 1) {
    return;
  }
  cancel_about_us_animation()
  start_about_us_animation()
}
restart_index_animation = function(){
  if($('#index_animation_is_showing').length > 0 || $('#index_animation_is_shown').length < 1) {
    return;
  }

  cancel_index_animation()
  start_index_animation()
}
