
import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

float sensor_0=0.0;
float sensor_1=0.0;

void setup() {
  size(200, 200);
  frameRate(25);
  oscP5 = new OscP5(this, 3000);

  myRemoteLocation = new NetAddress("127.0.0.1", 3000);
}


void draw() {
  background(0,255, 0);
}

void mousePressed() {
background(255, 0, 0);
sensor_0=random(1, 50);
 int mapVal_0=int(constrain(sensor_0, 0, 50));
 OscMessage myMessage_0 = new OscMessage("/sensor_0");
 myMessage_0.add(mapVal_0);
 oscP5.send(myMessage_0, myRemoteLocation);
 println(mapVal_0);
}

