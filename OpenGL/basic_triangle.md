* Date: 2023.06.26

## VBO
* VBO는 GPU내의 메모리 공간이다. Vertex에 대한 정보를 저장한다.

### 만드는 과정
1. Buffer를 만든다. 여기서 Buffer의 id를 얻는다.
```CPP
void glGenBuffers(int n, unsigned int *ids)
```

2. Buffer에 어떤 종류의 데이터를 넣을지 지정한다. 여기서는 `GL_ARRAY_BUFFER`의 형태일지, `GL_ELEMENT_ARRAY_BUFFER`를 형태일지 결정한다.
   이 정보는 ```target```에 넣는다. id는 glGenBuffer에서 얻은 id 값이다.
```cpp
void glBindBuffer(GLenum target, GLuint id)
```

3. CPU에서 GPU로 데이터를 넘긴다. 
```cpp
void glBufferData(GLenum target, GLsizei size, const void* data, GLenum usage)
```

### Implementation
```cpp
    float vertices[] = {
        -0.5f, -0.5f, 0.0f, // left  
         0.5f, -0.5f, 0.0f, // right 
         0.0f,  0.5f, 0.0f  // top   
    }; 

    unsigned int VBO, VAO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);
    // bind the Vertex Array Object first, then bind and set vertex buffer(s), and then configure vertex attributes(s).
    glBindVertexArray(VAO);

    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
```

## Shader

* Vertex Shader는 vertex의 position 등에 대한 정보를 갖고 있다.
* Fragment Shader는 color에 대한 정보를 갖고 있다.
* Vertex Shader와 Fragment Shader 코드 내용을 string으로 작성한 다음 프로그램 내에서 각각 shader program object로 만든다. 그리고 이를 linking한다.
```cpp
    int shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);
    
    // check for linking errors
    glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);
    if (!success) {
        glGetProgramInfoLog(shaderProgram, 512, NULL, infoLog);
        std::cout << "ERROR::SHADER::PROGRAM::LINKING_FAILED\n" << infoLog << std::endl;
    }
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);
```

## Primitives

* `GL_POINTS`, `GL_LINES`, `GL_LINE_LOOP`, `GL_LINE_STRIP`
* `GL_TRIANGLES`, `GL_TRIANGLE_STRIP`, `GL_TRIANGLE_FAN`


