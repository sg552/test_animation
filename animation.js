// 首页的动画函数
start_index_animation = function(){
  $('.title').animate({ opacity: 1.0, 'margin-top': '+=50' }, 1000)
  $('.top').animate({ opacity: 1.0 }, 1000)
  $('.middle').animate({ opacity: 1.0 , left: "+=10", top: "+=100" }, 1000)
  $('.left').animate({ opacity: 1.0 , left: "+=500"}, 2000)
  $('.right').animate({ opacity: 1.0 , left: "-=600"}, 2000,
    function(){
      $('#text1').animate({opacity: 1.0}, 500, function(){
        $('#text2').animate({opacity: 1.0}, 500, function(){
          $('#text3').animate({opacity: 1.0}, 500, function(){
            $('#text4').animate({opacity: 1.0}, 500, function(){
              $('#text5').animate({opacity: 1.0}, 500)
            })
          })
        })
      })
    });
}

// 联系我们的动画函数
start_about_us_animation = function(){
  $('.top').animate({ opacity: 1.0 }, 1000)
  $('.title').animate({ opacity: 1.0, 'margin-top': '+=50' }, 1000)
  $('#about_us_left').animate({ opacity: 1.0, left: '+=500' }, 1000)
  $('#about_us_right').animate({ opacity: 1.0, left: '-=300' }, 1000)
}


//服务的动画函数
start_services_animation = function(){
  $('.title').animate({ opacity: 1.0, 'margin-top': '+=50' }, 1000)
  $('.top').animate({ opacity: 1.0 }, 1000)
  $('#upper_left').animate({ opacity: 1.0, left: "+=400" }, 540, function(){
    $('#upper_left_arrow').animate({ opacity: 1.0})
    $('#upper_right').animate({ opacity: 1.0, left: "-=500" }, 540, function(){
      $('#upper_right_arrow').animate({ opacity: 1.0})
      $('#lower_left').animate({ opacity: 1.0, left: "+=420" }, 540, function(){
        $('#lower_right').animate({ opacity: 1.0, left: "-=470" }, 540, function(){
          $('#lower_arrows').animate({ opacity: 1.0})
        })
      })
    })
  })
  $('.middle').animate({ opacity: 1.0 }, 1000)
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
                $('#balls').animate({ width: 700}, 100)
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
  $('.top').animate({ opacity: 1.0 }, 1000)
  $('.title').animate({ opacity: 1.0, 'margin-top': '+=50' }, 1000)
  $('#text').animate({opacity: 1.0, top: "+=50"}, 1500, function(){
    show_trees()
    $('#sub_title').animate({opacity: 1.0, top: "+=50"}, 1500, function(){
      show_balls()
    })
  })
}
