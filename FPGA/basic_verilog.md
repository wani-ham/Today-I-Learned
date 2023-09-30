* Date : 2023.09.21

## Basic Verilog (About Verilog HDL)

### About HDL

HDL stands for 'Hardware Description Language'. It is designed to describe hardware, especially digital logic circuits. 
It has similar grammar to C language, but it shows differences as HDL contains 'time'. 'VHDL' and 'Verilog' are two major
languages in HDL, and in this document we use 'Verilog'. 

### Operators used in Verilog

<div align="center">

|<img src="https://github.com/wani-ham/Today-I-Learned/blob/main/FPGA/img/verilog_operators.png" alt="Operators used in Verilog" width="400"/>|
|:-:|
|**Operators used in Verilog** ([ECE , University of Washington](https://class.ece.uw.edu/cadta/verilog/))|

</div>


### Design Methodology

Verilog is written in top-down method, not bottom-up. It is because describing a hardware in top-down method is much more efficient than bottom-up. 
Detailed parts of the hardware are written after determining the overall structure. For example, in designing 4-bit adder, rather than figuring out how 4-bit adder 
is made up of logic gates, we try to organize the structure in tree. Then, the 4-bit adder can be organized into 4-bit adder => full-adder => AND-OR-XOR gates. 
Following the top-down method, we figure out how 4-bit adder is composed of full-adders. Next, we figure out how full-adder is composed of logic gates. 

### Module and Ports


### Debugging Methods
