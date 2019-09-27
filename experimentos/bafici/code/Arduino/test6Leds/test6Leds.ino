/*
 Fading
 
 This example shows how to fade an LED using the analogWrite() function.
 
 The circuit:
 * LED attached from digital pin 9 to ground.
 
 Created 1 Nov 2008
 By David A. Mellis
 modified 30 Aug 2011
 By Tom Igoe
 
 http://arduino.cc/en/Tutorial/Fading
 
 This example code is in the public domain.
 
 */

#define ARRAY_SIZE 6
int fadeVal=0;
int ledPin[]={
  7, 6, 5, 4, 3, 2};
  
void setup()  { 
   for(int i=0; i<ARRAY_SIZE; i++){
    pinMode(ledPin[i], OUTPUT);

  }
  // nothing happens in setup 
} 

void loop()  { 
  for(int i=0;i<ARRAY_SIZE;i++){
    fadeVal++;
  analogWrite(ledPin[i], fadeVal);
  delay(10);
  if(fadeVal>255){
    fadeVal=0;
  }
  /*
  // fade in from min to max in increments of 5 points:
  for(int fadeValue = 0 ; fadeValue <= 255; fadeValue +=5) { 
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);         
    // wait for 30 milliseconds to see the dimming effect    
    delay(30);                            
  } 

  // fade out from max to min in increments of 5 points:
  for(int fadeValue = 255 ; fadeValue >= 0; fadeValue -=5) { 
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);         
    // wait for 30 milliseconds to see the dimming effect    
    delay(30);                            
  } 
  */
  }
}


