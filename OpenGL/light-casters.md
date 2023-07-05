* Date: 2023.07.04

## Light Casters

물체에 빛을 비추는 광원을 "Light Caster"라고 하며 세가지 종류가 있다. 

### 1. Directional Light
* source가 무한히 멀리있다고 가정하여 light ray들이 모두 평행함.
* Fragment shader를 코딩할 때 position은 없고 direction만 있음.

### 2. Point Light
* Directional Light과는 달리 source가 멀리 있지 않음.
* 따라서, light ray들이 평행하지 않기 때문에 attenuation이 있음. (가우스 법칙이 연상됨)

### 3. Spot Light
