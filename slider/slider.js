$(function () {
  let current = 0;
  let timer;
  let indicators=[];
  const imgs = $("img");
  
    // 인디케이터 생성
    for (let i = 0; i < imgs.length; i++){
      indicators = `<a href="#" value="${i}"></a>`
      console.log(indicators);
      $('.indicator').append(indicators);
    }

  // 슬라이드 실행 함수
  function slider(eq) {
    $(".img-box").animate({
      left: -100 * eq + "%"
    }, 400);
    current = eq;
    $(".indicator").find("a").removeClass("active");
    $(".indicator").find("a").eq(current).addClass("active");
    // $(".indicator").find("a").eq(0).trigger("active");
  }


  // 자동 실행 함수
  function autoPlay() {
    timer=setInterval(() => {
      let slideIdx = (current + 1) % imgs.length;
      slider(slideIdx);
    }, 3000);
    $(".indicator").find("a").eq(0).addClass("active");
  }

  // 슬라이드 멈춤 함수
  function stopSlider() {
    clearInterval(timer);
  }

  // .......
  
  // 클릭 시 슬라이드 이동
  $("button").click(() => {
    if ($(this).hasClass("prev")) {
      if (current == 0) {
        return false;
      } else {
        slider(current - 1);
      }
    } else {
      if (current >= imgs.length-1) {
        return false
      } else {
        slider(current + 1);
      }
    }
  });

  // 이미지에 마우스 오버 시 자동 슬라이드 멈춤
  $(".img-box").on("mouseenter", () => {
    stopSlider();
  });

  // 이미지에 마우스 아웃 시 자동 슬라이드 시작
  $(".img-box").on("mouseleave", () => {
    autoPlay();
  });

  $(".indicator a").click(function () {
    let indicatorIdx = $(this).attr("value");
    slider(indicatorIdx);

  });

  autoPlay();
  // slider(0)
});