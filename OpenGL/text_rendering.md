* Date: 2023.07.04

## Text Rendering
* OpenGL에는 text에 대한 support가 없으므로 별도의 방법을 이용하여 text를 render해야함.

### Bitmap Fonts
* 각 문자들이 큰 texture image에 저장되었다가 texture coordinate로 문자를 불러옴.
* Pro: 구현하기 쉽고 효율적임.
* Con: 저장할 수 있는 문자의 개수에 한계가 있고 확대하면 깨져보일 수 있음.

### Free Type
* 각 문자를 이미지로 저장하는 것이 아니라 수식으로 저장함.
* 확대해도 깨져보이지 않음.
* 대부분의 OS에서 사용하고 있는 library임.