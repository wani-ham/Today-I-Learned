* Date: 2023.06.30

## Texture
* Texture Coordinate
  * (0,0) ~ (1,1) 의 좌표로 표현함
* Texture map image와 screen의 pixel 수의 차이는 aliasing 문제를 일으킨다. (신호 및 시스템 수업에서도 언급된 내용)
* 이 문제를 해결하기 위해서는 texel의 color를 평균내는 filtering 방법, texel을 잘게 쪼개는 oversampling 방법이 있다.

## Filtering
* Nearest filter
  * pixel의 중심이 속해있는 texel의 color를 그대로 사용한다.
    
![Nearest Filter](https://learnopengl.com/img/getting-started/filter_nearest.png)

* Linear (Bilinear) filter
  * pixel의 중심이 속해있는 texel의 주변 texel color를 linear하게 평균낸다. Polygon의 pixel center와 가까울수록 그 비중이 높아지는 방식으로 평균 color가 구해진다.
   
![Linear Filter](https://learnopengl.com/img/getting-started/filter_linear.png)

## MipMap
* MipMap은 screen pixel과 texel의 크기를 비슷하게 유지하기 위해서 미리 다른 크기의 texture image를 준비하는 것이다.
* OpenGL에는 자동으로 MipMap을 만들어주는 기능을 가지고 있다.
  
