---
layout: post
title: "6 things I learn from my beginner Raspberry Pi projects"
date:  2018-04-19 12:00:00 +0800
categories:
  - "Technology"
banner: "/blog/2018/04/Raspberry_Pi.jpg"
tags: [computer, Raspberry Pi, lists, hardware]
description: "The start of a journey in dabbling and exploring the possibilities of Raspberry Pi."
---
<div style="float: left;" class="pr-sm-4">
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BhktvOJgf5b/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); display: inline-block; margin: 1px; max-width:450px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BhktvOJgf5b/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">The LED fizz buzz test. Lame stuff. 😂😂 #raspberrypi #fizzbuzz #programming #girlswhocode #femalecoders #thegeekwing #geektoy #geekgeekgeek #python</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/wing_puah/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Wing Puah</a> (@wing_puah) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-04-15T02:06:24+00:00">Apr 14, 2018 at 7:06pm PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>
</div>

_This is not a technical writeup. Rather, it is just my ramblings of the Raspberry Pi._

Raspberry Pi (Raspi), the mini, credit card size, 1GB RAM computer. Portable, light-weight and functional. When I bought my Raspi, my aim was to dabble in robotics. Ultimately, my goal is to create a self-driving toy car that will shoot  darts when it senses any unsuspecting passer-by. Okay, it is one of the lame project ideas that I thought it will be funny to create.  

Right now, I'm far from that stage. In fact, all I ever did accomplish with my Raspi is to integrate Google AI API and light up some LED as you can see from the instagram posts. While setting up, writing and running the Fizzbuzz test on LED lights, I make some wonderful discovery in this world of electronics. Here are 7 things that I learn from running my beginner Raspi projects.

## 6. Some RPi buzzword: General-purpose input/output (GPIO)
<img src="https://res.cloudinary.com/thegeekwing/image/upload/blog/2018/04/GPIO_layout.jpg" style="width:20%; float: right;"/> I first come across GPIO during a developer meetup. The developer is presenting his embedded system operating on Node.js. I can't exactly remember what he is doing, other than the fact that there is some temperature sensors somewhere. Although I don't understand most of the presentation, it is fascinating. Raspi has a 40-pin GPIO header and it is used for controlling logic, either as an input or ouput.

## 5. GPIO numbers have a weird sequence
Speaking of GPIO, the numbering of GPIO seems to be random. Though, I'm pretty sure nothing in computer hardware is random. For example, GPIO5 is nowhere close to GPIO4. And the "last" GPIO pin is not labeled with the "last" GPIO numerical value.

## 4. Secure Shell (SSH) and Virtual Network Computing (VNC) viewer
In order to control the Raspi, you can connect a keyboard, a mouse and a monitor to the USB ports and HDMI port on the Raspi. But I find it much easier to work from a laptop. Enter SSH and VNC viewer. SSH allows me to program and copy files to the Raspi from my laptop. With VNC viewer, I could easily display the screen of the Raspi on my laptop.

## 3. Jumper
Time to connect the breadboard, LED and Raspi.I bought a kit of jumpers, breadboard, resistors and a bunch of hardware stuff which I don't know about for less than 20 dollars. We described the end of the jumper as female and male for obvious reasons. Male connector is a protrusion that plugs in and a female connector is a receptor that receives. Put more crudely and in more visual terms, male has a sticking out "pin" while female has a "hole".

## 2. Circuits, breadboard, power, voltage and current
<img src="https://res.cloudinary.com/thegeekwing/image/upload/blog/2018/04/raspberry-pi-connection.jpg" style="height: 300px; float: left;" class="pr-sm-4"/>
Now comes the fun part: Hardware. Plugging things in and testing. This is where I realise how important my secondary school physics is: Ohm's law. Ohm's law is a formula used to calculate the relationship between voltage, current and resistance in an electrical circuit.
<blockquote>
<strong>Ohm's Law</strong>
Voltage: The difference in charge between two points<br/>
Current: The rate at which charge is flowing<br/>
Resistance: A material's tendency to resist the flow of charge (current)<br/>
Current(I) = Voltage (V) / Resistance (R)<br/>
</blockquote>

If there is too much current, the LED will burn. Hence, a resistor is added into the circuit to make sure the LED works correctly.

## 1. Python
At the soul of any hardware is the software. Python is a general-purpose programming language. You can use it for data science, scrapping website, build apps, home automation and of course to power Raspberry Pi. Python code is generally easier to read and supports various programming paradigms. Together with a few other open source library, writing the python code for Raspberry Pi is a breeze. You can view the LED telegram-bot controller at [Github](https://github.com/wing-puah/raspi-LED-beginner){:target="_blank"}.   

Here are the 6 basic things that I learn from my Raspberry Pi project. I just order a smart robot car chasis kit, it only costs me about $10! Stay tune for more of my tinkers.
