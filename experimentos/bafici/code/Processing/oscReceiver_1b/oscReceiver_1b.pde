/*
Tester de comunicación OSC BAFICI
*/
 
import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

void setup() {
  size(400,400);
  frameRate(25);
  oscP5 = new OscP5(this,3000);
}

void draw() {
  background(115, 50, 100);  
}


void oscEvent(OscMessage theOscMessage) {
  
  if(theOscMessage.checkAddrPattern("/sensor_0")==true) {
      int sensor_0 = theOscMessage.get(0).intValue();  
      println("/sensor_0: "+sensor_0);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/bSensor_0")==true) {
      int bSensor_0 = theOscMessage.get(0).intValue();  
      println("/bSensor_0: "+bSensor_0);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/sensor_1")==true) {
      int sensor_1 = theOscMessage.get(0).intValue();  
      println("/sensor_1: "+sensor_1);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/bSensor_1")==true) {
      int bSensor_1 = theOscMessage.get(0).intValue();  
      println("/bSensor_1: "+bSensor_1);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/sensor_2")==true) {
      int sensor_2 = theOscMessage.get(0).intValue();  
      println("/sensor_2: "+sensor_2);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/bSensor_2")==true) {
      int bSensor_2 = theOscMessage.get(0).intValue();  
      println("/bSensor_2: "+bSensor_2);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/sensor_3")==true) {
      int sensor_3 = theOscMessage.get(0).intValue();  
      println("/sensor_3: "+sensor_3);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/bSensor_3")==true) {
      int bSensor_3 = theOscMessage.get(0).intValue();  
      println("/bSensor_3: "+bSensor_3);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/sensor_4")==true) {
      int sensor_4 = theOscMessage.get(0).intValue();  
      println("/sensor_4: "+sensor_4);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/bSensor_4")==true) {
      int bSensor_4 = theOscMessage.get(0).intValue();  
      println("/bSensor_4: "+bSensor_4);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/sensor_5")==true) {
      int sensor_5 = theOscMessage.get(0).intValue();  
      println("/sensor_5: "+sensor_5);
      return;
  } 
  
  if(theOscMessage.checkAddrPattern("/bSensor_5")==true) {
      int bSensor_5 = theOscMessage.get(0).intValue();  
      println("/bSensor_5: "+bSensor_5);
      return;
  } 

}
