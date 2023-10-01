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

Verilog is written in top-down method, not bottom-up. It is because describing a hardware in top-down method is much more efficient than describing in bottom-up. 
Detailed parts of the hardware are written after determining the overall structure. For example, in designing 4-bit adder, rather than figuring out how 4-bit adder 
is made up of logic gates, we try to organize the structure in tree structure. In tree structure, the 4-bit adder can be organized into 4-bit adder => full-adder => AND-OR-XOR gates. 
Following the top-down method, we figure out how 4-bit adder is composed of full-adders. Next, we figure out how full-adder is composed of logic gates. 

```verilog
// 4-bit adder
`timescale 1ns / 1ps

module adder_4bit(
    input [3:0] in_a,
    input [3:0] in_b,
    input carry_in,
    output [3:0] out,
    output carry_out
    );
    
    wire carry_1, carry_2, carry_3;
    
    full_adder bit_0 (in_a[0], in_b[0], carry_in, out[0], carry_1);
    full_adder bit_1 (in_a[1], in_b[1], carry_1, out[1], carry_2);
    full_adder bit_2 (in_a[2], in_b[2], carry_2, out[2], carry_3);
    full_adder bit_3 (in_a[3], in_b[3], carry_3, out[3], carry_out);
    
endmodule
```

```verilog
// full-adder
`timescale 1ns / 1ps

module full_adder(
    input in_a,
    input in_b,
    input carry_in,
    output sum,
    output carry_out
    );
    
    wire xor_xor, and_or_1, and_or_2;
    
    // For generating result of summation
    xor_gate xor1 (xor_xor, in_a, in_b);
    xor_gate xor2 (sum, xor_xor, carry_in);
    
    // For generating carry out
    and_gate and1 (and_or_1, xor_xor, carry_in);
    and_gate and2 (and_or_2, in_a, in_b);
    or_gate or1 (carry_out, and_or_1, and_or_2);
    
endmodule
```

```verilog
// AND Gate
`timescale 1ns / 1ps

module and_gate(
    output out,
    input A,
    input B
    );

    assign out = A&B;

endmodule  
```

### Module and Ports
'Module' is the basic unit of Verilog. It is similar with the concept of 'function' in C language but it is a broader concept than 'function'.
Modules can be included in other module or communicate with other module by using 'port'.

There are three ways to model a module: Structural Modeling, Behavioral Modeling, RTL(Register Transfer Level) Modeling

Modules communicate with each other by 'port'. There are three types of port: Input, Output, Inout.

There are two ways to create a port: Wire, Register. 'Wire' indicates wire in digital logic circuits. 
Without any specific declaration, ports are considered as wire in Verilog. 'Register' also indicates register in digital logic circuits. Unlike 'wire', you cannot change the value of 'register'.


### Debugging Methods
There are two types of error: Syntax error, Logical error. Some methods that can figure out whats wrong:
* Check 'Messages' below
* Use 'Divide & Conquer'
* Use 'Breakpoint technique'
