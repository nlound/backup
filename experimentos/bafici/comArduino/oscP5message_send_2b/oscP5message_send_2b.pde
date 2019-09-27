
import oscP5.*;
import netP5.*;
import processing.serial.*;
import cc.arduino.*;


OscP5 oscP5;
NetAddress myRemoteLocation;
Arduino arduino;


float sensor_0=0.0;
int bSensor_0=0;

boolean bFlag_0=false;
boolean lastButtonState=false;
boolean buttonState=false;

int counter=0;

void setup() {
  size(200, 100);
  frameRate(25);
  oscP5 = new OscP5(this, 3000);

  myRemoteLocation = new NetAddress("127.0.0.1", 3000);
  arduino = new Arduino(this, Arduino.list()[COM5], 57600);

  for (int i = 0; i <= 13; i++) {
    arduino.pinMode(i, Arduino.INPUT);
  }
}


void draw() { 
  background(120, 0, 100);
  if (arduino.digitalRead(7) == Arduino.HIGH) {
    buttonState=true;
  }
  else {
    buttonState=false;
  }

  if (buttonState!=lastButtonState) {
    if (buttonState==true) {
    //  println("true:::::::");
    }
    else {
      bFlag_0=false;
      //println("false:::::::");
      counter=0;
    }
  }

  if (buttonState==true) {
    counter++;

    OscMessage myMessage_0 = new OscMessage("/bSensor_0");
    myMessage_0.add(1);
    oscP5.send(myMessage_0, myRemoteLocation);

    OscMessage bmyMessage_0 = new OscMessage("/sensor_0");
    bmyMessage_0.add(counter);
    oscP5.send(bmyMessage_0, myRemoteLocation);
   // println(counter);
  }
  else {
    OscMessage myMessage_0 = new OscMessage("/bSensor_0");
    myMessage_0.add(0);
    oscP5.send(myMessage_0, myRemoteLocation);
  }
  lastButtonState=buttonState;
}

