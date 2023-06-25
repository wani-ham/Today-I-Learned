
### Error Handling
* Library directory 등을 다 추가하고 기초 예제를 실행하려고 했는데 0x000007b error가 발생했다. 32bit, 64bit machine 충돌으로 발생할 가능성이 높다. 소스 디렉토리에
  들어가는 glew3.dll을 모두 64bit (or 32bit)로 맞췄는지 확인하고 Linker의 Additional Library Directories에 설정한 GLEW directory가 64bit (or 32bit)로 통일 되었는지
  확인해야 한다. 마지막으로 glew3.dll을 source file과 같은 directory에 넣고 exe file과 같은 directory에도 넣어야 한다. (즉, 총 2개의 glew3.dll file을 넣어야함)

* Visual Studio에서 properties 에서 library directory path를 추가할 때 windows는 parent directory로 갈 때 '..\' 임을 명심해야 한다. 한동안 컴퓨터 아키텍쳐 수업과
  데이터 구조 수업에서 linux 환경에서 작업하다보니 나도 모르게 '../'로 썼다. 이 실수를 잡지 못해서 한동안 헤맸다.
