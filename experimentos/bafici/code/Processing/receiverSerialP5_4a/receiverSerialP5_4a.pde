/*

 Compatible con senderSerialAr_1g y oscReceiver_1b
 1/4/14
 Pines del 20 al 32 digital.
 
 */

import oscP5.*;
import netP5.*;
import processing.serial.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

int end=10;
String serial;
Serial port;

boolean buttonState_0=false;
boolean lastButtonState_0=false;

boolean[] flags=new boolean[6];
MessageOSC[] m= new MessageOSC[6];

int minCounter=1;
int maxCounter=50;
float incrementVal=0.5;

color on= color(100, 210, 120);
color off= color(255, 50, 100);

PrintWriter output;
int mes=month();
int d=day();
int h=hour();
int min=minute();
int s=second();

int start;
int elapsedTime=15000;//120000; //120000; //120k 2 minutos


void setup() {
  size(600, 400);
  println(Serial.list());
  port=new Serial(this, Serial.list()[10], 115200 );
  port.clear();
  serial=port.readStringUntil(end);
  serial=null;

  for (int i=0; i<flags.length;i++) {
    flags[i]=false;
  }

  //Creo objeto... 
  //MessageOSC(int index, int minVal, int maxVal, int increment);
  for (int i=0;i<m.length;i++) {
    m[i]= new MessageOSC(i, minCounter, maxCounter, incrementVal);
  }

  output=createWriter("data/databafici_"+d+"-"+mes+"/"+d+"_"+mes+"_"+h+"-"+min+"-"+s+".txt");
  
  start=millis();
  
  oscP5 = new OscP5(this, 3000);
  myRemoteLocation = new NetAddress("127.0.0.1", 3000);
}

void draw() {
  background(100, 80, 200);

  while (port.available ()>0) {
    serial=port.readStringUntil(end);
  }
  if (serial != null) {
    String[]arduino=split(serial, ',');

    for (int i=0;i<flags.length;i++) {
      if (arduino[i].equals("1")) {
        flags[i]=true;
        fill(on);
        //sensor  valor  day  hour  minute  second
      //  output.println(i + "\t" + "+ "\t" + );
      }
      else {
        flags[i]=false;
        fill(off);
      }
      rect(20+60*i, height-(height*.25), 50, 50);
    }

    for (int i=0;i<m.length;i++) {
      m[i].sendOSC(flags[i]);
    }

    lastButtonState_0=buttonState_0;
    
    if(millis()-start >= elapsedTime){
    start=millis();
    output.flush(); 
    }
  }

  if (key=='e') {
    output.flush(); 
    output.close(); 
    exit();
  }
}



