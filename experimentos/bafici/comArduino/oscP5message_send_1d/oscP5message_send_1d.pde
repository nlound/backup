
import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

float sensor_0=0.0;
float sensor_1=0.0;
float sensor_2=0.0;
float sensor_3=0.0;
float sensor_4=0.0;
float sensor_5=0.0;
int randomMax = 10;


void setup() {
  
  size(200, 200);
  frameRate(25);
  oscP5 = new OscP5(this, 3000);

  myRemoteLocation = new NetAddress("127.0.0.1", 3000);
}


void draw() {
  background(0, 255, 0);
}

void mousePressed() {
  background(255, 0, 0);
  sensor_0=random(1, randomMax);
  int mapVal_0=int(constrain(sensor_0, 1, randomMax));
  OscMessage myMessage_0 = new OscMessage("/sensor_0");
  myMessage_0.add(mapVal_0);
  oscP5.send(myMessage_0, myRemoteLocation);
  
  sensor_1=random(1, randomMax);
  int mapVal_1=int(constrain(sensor_1, 1, randomMax));
  OscMessage myMessage_1 = new OscMessage("/sensor_1");
  myMessage_1.add(mapVal_1);
  oscP5.send(myMessage_1, myRemoteLocation);
  
  sensor_2=random(1, randomMax);
  int mapVal_2=int(constrain(sensor_2, 1, randomMax));
  OscMessage myMessage_2 = new OscMessage("/sensor_2");
  myMessage_2.add(mapVal_2);
  oscP5.send(myMessage_2, myRemoteLocation);
  
  sensor_3=random(1, randomMax);
  int mapVal_3=int(constrain(sensor_3, 1, randomMax));
  OscMessage myMessage_3 = new OscMessage("/sensor_3");
  myMessage_3.add(mapVal_3);
  oscP5.send(myMessage_3, myRemoteLocation);
  
  sensor_4=random(1, randomMax);
  int mapVal_4=int(constrain(sensor_4, 1, randomMax));
  OscMessage myMessage_4 = new OscMessage("/sensor_4");
  myMessage_4.add(mapVal_4);
  oscP5.send(myMessage_4, myRemoteLocation);
  
  sensor_5=random(1, randomMax);
  int mapVal_5=int(constrain(sensor_5, 1, randomMax));
  OscMessage myMessage_5 = new OscMessage("/sensor_5");
  myMessage_5.add(mapVal_5);
  oscP5.send(myMessage_5, myRemoteLocation);
  
  println(mapVal_0 +"  "+mapVal_1+"  "+mapVal_2+"  "+mapVal_3+"  "+mapVal_4+"  "+mapVal_5);
}

