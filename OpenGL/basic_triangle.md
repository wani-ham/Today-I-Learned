* Date: 2023.06.26

### Code

필요한 헤더파일들을 추가한다. glew와 glfw를 추가해줘야 한다.

```Cpp
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <iostream>
```

```framebuffer_size_callback()``` 은 window가 resize 되었을 때 호출 된다. ```processInput```은 rendering loop에서 input이 들어와있는지 체크한다. 이 프로그램에서는 ESC키가 input으로 사용된다.

```Cpp
void framebuffer_size_callback(GLFWwindow* window, int width, int height) {
    // make sure the viewport matches the new window dimensions; note that width and
    // height will be significantly larger than specified on retina displays.
    glViewport(0, 0, width, height);
    SCR_WIDTH = width;
    SCR_HEIGHT = height;
}

void processInput(GLFWwindow *window) {
    if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
        glfwSetWindowShouldClose(window, true);
}
```

Global variable로 window의 가로와 세로를 정의한다. 
```cpp
// settings
unsigned int SCR_WIDTH = 800;
unsigned int SCR_HEIGHT = 600;
```

아래부터는 main function에 들어가는 것들이다. 우선, glfw를 initialize 한다.
```glfwInit()```은 glfw가 제대로 install이 안되어 있거나 graphic card에 문제가 있을때 0을 return 한다.
```GLFW_CONTEXT_VERSION```은 우리가 사용할 OpenGL version이 3.3이라는 것을 알려주는 것이다. 
```GLFW_OPENGL_PROFILE```을 ```GLFW_OPENGL_CORE_PROFILE```로 정의해서 OpenGL 3.3의 모든 기능을 사용할 수 있도록 한다.
```GLFW_OPENGL_FORWARD_COMPAT```을 ```GL_TRUE```로 정의해서 OpenGL 3.3이상의 version을 사용하더라도 수용할 수 있도록 해준다.

```Cpp
if (!glfwInit())
{
      printf("GLFW initialisation failed!");
      glfwTerminate();
      return 1;
}

glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
```

```glfwCreateWindow()```로 window를 만들어준다. 마지막 두 개의 parameter는 ```GLFWmonitor```와 ```GLFWwindow```인데 무시해준다. window가 제대로 만들어지지 않았을 경우도
고려해준다. 

window가 여러개일 수가 있는데, ```glfwMakeContextCurrent()```는 어떤 window에 그릴지 지정해준다.
```glfwSetFramebufferSizeCallback()```는 window가 resize될 때 사용할 함수(```framebuffer_size_callback```)를 알려준다.

```cpp
GLFWwindow* window = glfwCreateWindow(SCR_WIDTH, SCR_HEIGHT, "HelloWindow", NULL, NULL);
if (window == NULL)
{
    std::cout << "Failed to create GLFW window" << std::endl;
    glfwTerminate();
    return -1;
}
glfwMakeContextCurrent(window);
glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);

```glewExperimental```을 ```GL_TRUE```로 설정해줘서 modern opengl의 기능을 사용할 수 있도록 한다.
```glewInit()```은 
```cpp
    // Allow modern extension features
    glewExperimental = GL_TRUE;
    
    if (glewInit() != GLEW_OK)
    {
        printf("GLEW initialisation failed!");
        glfwDestroyWindow(window);
        glfwTerminate();
        return 1;
    }
    
    // render loop
    // -----------
    while (!glfwWindowShouldClose(window))
    {
        // input
        processInput(window);
        
        // render
        glClearColor(0.2f, 0.3f, 0.3f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);
        
        // glfw: swap buffers and poll IO events (keys pressed/released, mouse moved etc.)
        glfwSwapBuffers(window);
        glfwPollEvents();
    }
    
    // glfw: terminate, clearing all previously allocated GLFW resources.
    glfwTerminate();
    return 0;
}

// process all input: query GLFW whether relevant keys are pressed/released this frame and react accordingly
void processInput(GLFWwindow *window)
{
    if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
        glfwSetWindowShouldClose(window, true);
}

// glfw: whenever the window size changed (by OS or user resize) this callback function executes
void framebuffer_size_callback(GLFWwindow* window, int width, int height)
{
    // make sure the viewport matches the new window dimensions; note that width and
    // height will be significantly larger than specified on retina displays.
    glViewport(0, 0, width, height);
    SCR_WIDTH = width;
    SCR_HEIGHT = height;
}
```
