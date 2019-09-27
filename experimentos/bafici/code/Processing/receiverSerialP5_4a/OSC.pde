//podría pasar un solo flag y q el objeto haga todo el resto y el else

class MessageOSC {

  int index;
  boolean bFlag;
  int minCounter;
  int maxCounter;
  float incrementVal;
  float counter;
  int temp;
  boolean bPrinter=false;

  MessageOSC(int cindex, int cminCounter, int cmaxCounter, float cincrementVal) {

    index=cindex;
    minCounter=cminCounter;
    maxCounter=cmaxCounter;
    incrementVal=cincrementVal;
  }

  void sendOSC(boolean cbFlag) {
    int trueVal=1;
    int falseVal=0;
    bFlag=cbFlag;

    String sensorValue= "/sensor_";
    String bSensor="/bSensor_";

    String[] bMessage= new String [2];
    bMessage[0]=bSensor;
    bMessage[1]=nf(index, 1);
    String tagFlag= join(bMessage, "");

    String[] valMessage= new String [2];
    valMessage[0]=sensorValue;
    valMessage[1]=nf(index, 1);
    String tagSensorValue= join(valMessage, "");

    if (bFlag) {
      counter+=incrementVal;

      int cCounter= int(constrain(counter, minCounter, maxCounter));
      OscMessage myMessage = new OscMessage(tagFlag);
      myMessage.add(trueVal);
      oscP5.send(myMessage, myRemoteLocation);

      OscMessage valueMessage= new OscMessage(tagSensorValue);
      valueMessage.add(cCounter);
      oscP5.send(valueMessage, myRemoteLocation);

      temp=int(constrain(counter, minCounter, maxCounter));
      bPrinter=true;
      
    }
    else {
      if (bPrinter) {
        output.println(hour()+":"+minute()+":"+second()+","+tagFlag+"," + temp);
        bPrinter=false;
      }
      counter=0;
      OscMessage myMessage = new OscMessage(tagFlag);
      myMessage.add(falseVal);
      oscP5.send(myMessage, myRemoteLocation);
    }
  }
}

