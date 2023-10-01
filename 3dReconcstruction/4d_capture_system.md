* Date: 2023.09.05

## 4D Capture System

### RGB Capture System
#### 3D Sensing Techniques
* Passive Stereo
  * Right/Left Camera
  * Cannot detect accurate depth if different depths have the same color
* Active Stereo
  * Right/Left Camera + Projector
  * Shoots pattern(i.e checkerboard pattern) to the object in Infrared
* Structured Light
  * Camera + Projector
  * Shoots pattern to the surface of the object and detect distortion
  * Not suitable for muti-camera system because of occlusion issue
* Time of Flight
  * Camera + Infrared Laser Source
  * More simple than other methods
  * Noise issue due to the wave collision of lasers

#### Audio-based Synchronization
* Synchronize multi-cameras by matching its sound wave recorded by each digital cameras. 

#### Camera Calibration
* Detect feature points of the object -> Estimate the positions of each cameras
* To increase the accuracy, use white&black checkerboard while camera calibration

#### Limitations of RGB Capture System
* Highly dependent on the lighting system + slow reconstruction process

### IR Capture System
#### Synchronization

#### Active Stereo Analysis

#### 3D Reconstruction

### RGB-based Optimization
#### 3D surface optimization

### High resolution Capture system
