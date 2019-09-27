/**
 * oscP5message by andreas schlegel
 * example shows how to create osc messages.
 * oscP5 website at http://www.sojamo.de/oscP5
 */
 
import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

void setup() {
  size(200, 200);
  frameRate(25);
  /* start oscP5, listening for incoming messages at port 12000 */
  oscP5 = new OscP5(this,3000);
}

void draw() {
  background(0);  
}

/* incoming osc message are forwarded to the oscEvent method. */
void oscEvent(OscMessage theOscMessage) {
 /* check if theOscMessage has the address pattern we are looking for. */
  
  if(theOscMessage.checkAddrPattern("/sensor_0")==true) {
    /* check if the typetag is the right one. */
      /* parse theOscMessage and extract the values from the osc message arguments. */
      float sensor_0 = theOscMessage.get(0).floatValue();  
      println("/sensor_0: "+sensor_0);
      return;
  } 
  if(theOscMessage.checkAddrPattern("/sensor_1")==true) {
    /* check if the typetag is the right one. */
      /* parse theOscMessage and extract the values from the osc message arguments. */
      float sensor_1 = theOscMessage.get(0).floatValue();  
      println("/sensor_1: "+sensor_1);
      return;
  } 
//  println("###"+());

}
