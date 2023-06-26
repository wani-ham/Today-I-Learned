* Date : 2023.06.25

  
### You need...
* [Microsoft Visual Studio](https://visualstudio.microsoft.com/ko/downloads/)
* [GLEW](https://glew.sourceforge.net/)
* [GLFW (Windows pre-compiled binaries)](https://www.glfw.org/download.html)
* [GLM](https://github.com/g-truc/glm/releases/tag/0.9.9.8)

### Setup Procedure
1. Make folder "External Libs" at the same level as my project (home) folder.
2. Put GLEW, GLM, GLFW folder in External Libs
3. Add ```#define GLM_ENABLE_EXPERIMENTAL``` at "glm.hpp" in GLM.
4. Add Additional Include Directory in Visual Studio (Project Properties > C/C++ > General).
   
   ```bash
   $(SolutionDir)\..\..\External Libs\GLM
   $(SolutionDir)\..\..\External Libs\GLEW\include
   $(SolutionDir)\..\..\External Libs\GLFW\include
   ```
   
5. Add Additional Library Paths in Visual Studio (Project Properties > Linker > General).
 
   ```bash
   $(SolutionDir)\..\..\External Libs\GLEW\lib\Release\x64
   $(SolutionDir)\..\..\External Libs\GLFW\\lib-vc2015
   ```

7. Add Additional Libraries in Visual Studio (Project Properties > Linker > Input).
   ```
   opengl32.lib
   glew32.lib
   glfw3.lib
   ```
   
8. Copy ```glew32.dll``` to my Project (Also see the first part of "Error Log" in this page)

### Error Log
* Library directory 등을 다 추가하고 기초 예제를 실행하려고 했는데 0x000007b error가 발생했다. 32bit, 64bit machine 충돌으로 발생할 가능성이 높다. 소스 디렉토리에
  들어가는 glew3.dll을 모두 64bit (or 32bit)로 맞췄는지 확인하고 Linker의 Additional Library Directories에 설정한 GLEW directory가 64bit (or 32bit)로 통일 되었는지
  확인해야 한다. 마지막으로 glew3.dll을 source file과 같은 directory에 넣고 exe file과 같은 directory에도 넣어야 한다. (즉, 총 2개의 glew3.dll file을 넣어야함)

* Visual Studio에서 properties 에서 library directory path를 추가할 때 windows는 parent directory로 갈 때 '..\' 임을 명심해야 한다. 한동안 컴퓨터 아키텍쳐 수업과
  데이터 구조 수업에서 linux 환경에서 작업하다보니 나도 모르게 '../'로 썼다. 이 실수를 잡지 못해서 한동안 헤맸다.
