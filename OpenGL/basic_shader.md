* Date: 2023.06.26

## Shader
* Graphics pipeline은 두개의 stage(3D좌표 > 2D 좌표로 변환, 2D 좌표 > pixel로 변환)로 이루어져있다.
* Shader는 후자의 단계인 vertex 정보들을 화면에 보여질수 있도록 변환하는 작업을 하는 명령어의 집합이다.
* Shader는 C언어와 문법이 유사한 OpenGL Shading Language (GLSL)로 작성되었다.

### Shader pipeline stage
![Shader pipeline stages](https://learnopengl.com/img/getting-started/pipeline.png)

(Source: https://learnopengl.com/Getting-started/Hello-Triangle)

* 회색 단계들은 GPU에 hardwired 되어 있다.
* Geometry Shader는
* Rasterization은 조립된 primitive에 해당하는 pixel들로 매핑하고 clipping(Camera 위치 등에 의해 어떤 pixel들이 보이는지 결정) 단계이다.
* Fragment shader는 light, 그림자 등을 고려하여 pixel에 칠해질 color를 결정한다. 일반적으로 Fragment는 pixel과 같은 개념이라고 생각하면 된다.
* Tests and Blending에서는 fragment의 해당 깊이 값을 기반으로 다른 object의 앞이나 뒤에 있는지 확인하여 그에 따라 살리던지 무시하던지 한다. 또한, 알파 값(object의 불투명도)을 확인하고 그에 따라 object를 blend 한다.
