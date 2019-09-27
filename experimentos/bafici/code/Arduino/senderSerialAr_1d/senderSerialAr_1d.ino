/*
Arduino Mega
 Compatible con receiverSerialP5_2d
 24/3/14
 
 TODO
 dimming de leds con alguna clase.
 */

#define ARRAY_SIZE 6
#define ledOn 255
#define ledOff 0

int ledPin[]={
  0, 1, 2, 3, 4, 5};
int sensorPin[]= {
  30, 32, 34, 36, 38, 40};

int value[ARRAY_SIZE];


void setup(){
  Serial.begin(115200);

  for(int i=0; i<ARRAY_SIZE; i++){
    pinMode(sensorPin[i], INPUT);
    pinMode(ledPin[i], OUTPUT);
    value[i]=0;
  }
}


void loop(){
  for(int i=0; i<ARRAY_SIZE; i++){
    value[i]=digitalRead(sensorPin[i]);

    if(value[i]==HIGH){
      analogWrite(ledPin[i], ledOn);
    }
    else{
      analogWrite(ledPin[i], ledOff);
    }
  }

  Serial.print(value[0], DEC);
  Serial.print(",");
  Serial.print(value[1], DEC);
  Serial.print(",");
  Serial.print(value[2], DEC);
  Serial.print(",");
  Serial.print(value[3], DEC);
  Serial.print(",");
  Serial.print(value[4], DEC);
  Serial.print(",");
  Serial.print(value[5], DEC);
  Serial.print(",");
  Serial.println();
  delay(50);
}







