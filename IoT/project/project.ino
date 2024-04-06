
#include <LiquidCrystal.h>
#include <stdio.h>
LiquidCrystal lcd(2, 3, 4, 5, 6, 7);

#include <Wire.h>
#include "dht.h"

#define dht_apin 10
dht DHT;


unsigned char rcv,gchr; 
char pastnumber[11];
int cntlmk=0;

int tx1 = 0;
int rx1 = 1;

int tx2 = 8;
int rx2 = 9;


int ir1 = 11;
int ir2 = 12;
int mic = 13;

int bulb   = 16;
int fan    = 17;

int buzzer   = 22;


int hbtc=0,hbtc1=0,rtrl=0;
int hbv=0,hbv1=0;

int i=0,k=0,lop=0;
int  gps_status=0;
float latitude=0; 
float logitude=0;                       
String Speed="";
String gpsString="";
char *test="$GPRMC";

unsigned char gv=0,msg1[10],msg2[11];
float lati=0,longi=0;
unsigned int lati1=0,longi1=0;
unsigned char flat[5],flong[5];
char finallat[8],finallong[9];
int ii=0,rchkr=0;


float tempc=0,humc=0;
int lvlv=0;
char rains[5]="OFF\0",moss[5]="Dry\0";

char res[300];

void serial1Flush()
{
  while(Serial1.available() > 0) 
  {
    char t = Serial1.read();
  }
} 

char check(char* ex,int timeout)
{
  int i=0;
  int j = 0,k=0;
  while (1)
  {
    sl:
    if(Serial1.available() > 0)
    {
      res[i] = Serial1.read();
      if(res[i] == 0x0a || res[i]=='>' || i == 100)
      {
        i++;
        res[i] = 0;break;
      }
      i++;
    }
    j++;
    if(j == 30000)
    {
      k++;
     // Serial2.println("kk");
      j = 0;  
    }
    if(k > timeout)
    {
      //Serial2.println("timeout");
      return 1;
     }
  }//while 1
  if(!strncmp(ex,res,strlen(ex)))
  {
   // Serial2.println("ok..");
    return 0;
   }
  else
  {
   // Serial2.print("Wrong  ");
   // Serial2.println(res);
    i=0;
    goto sl;
   }
} 


int sti=0; 
String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete

int sti1=0; 
String inputString1 = "";         // a string to hold incoming data
boolean stringComplete1 = false;  // whether the string is complete

void beep()
{
  digitalWrite(buzzer,HIGH);delay(2000);digitalWrite(buzzer,LOW);
}

void okcheck1()
{
  unsigned char rcr;
  do{
      rcr = Serial1.read();
    }while(rcr != 'K');
}

char buff[300];
void upload(const char *s1,const char *s2,int s3,int s4,int s5,int s6,int s7);
char readserver(void);
void clearserver(void);

const char* ssid = "iotserver";
const char* password = "iotserver123";

void lcdbasic()
{  
   lcd.clear();
   lcd.setCursor(0,0);
   lcd.print("T:");//2-3-4,0   
   lcd.setCursor(6,0);
   lcd.print("H:");//8-9-10,0
}
void setup() 
{
  Serial1.setRX(rx1);
  Serial1.setTX(tx1);
  Serial1.begin(9600);

  Serial2.setRX(rx2);
  Serial2.setTX(tx2);
  Serial2.begin(9600);

  
  pinMode(ir1, INPUT); // Sets the echoPin as an Input 
  pinMode(ir2, INPUT);
  pinMode(mic, INPUT);
  pinMode(bulb, OUTPUT); pinMode(fan, OUTPUT); 
  pinMode(buzzer, OUTPUT); 

  digitalWrite(bulb, LOW);  digitalWrite(fan, LOW);
  digitalWrite(buzzer, LOW);

  
  lcd.begin(16, 2);lcd.cursor();
  lcd.print("   Library ");
      delay(2000);
              
  wifiinit();
      delay(2500);
 
  Serial2.println("Pico");
  
   lcd.clear();
   lcd.setCursor(0,0);
   lcd.print("T:");//2-3-4,0   
   lcd.setCursor(6,0);
   lcd.print("H:");//8-9-10,0
  
}

char bf3[50];
int g=0,f=0,count=0,lc=0;

char noise_string[10];
char room1_string[10];
char room2_string[10];
char book_string[30];

void loop() 
{   
   DHT.read11(dht_apin);

      tempc = DHT.temperature;
      humc  = DHT.humidity;

    lcd.setCursor(2,0);convertl(tempc);
    lcd.setCursor(8,0);convertl(humc);

    if(tempc > 38)
      {  
        digitalWrite(fan, HIGH);
        beep();
        upload(tempc,humc,noise_string,room1_string,room2_string,book_string);
      }
    else
      {
        digitalWrite(fan, LOW);     
      }
      
    if(humc > 85)
      {
        digitalWrite(bulb, HIGH);
        beep();
        upload(tempc,humc,noise_string,room1_string,room2_string,book_string);
      }
    else
      {
        digitalWrite(bulb, LOW);  
      }

    memset(noise_string,'\0',strlen(noise_string));
    if(digitalRead(mic) == HIGH)
      {
        strcpy(noise_string,"Noise");
        lcd.setCursor(11,0);lcd.print("Noise");
        upload(tempc,humc,noise_string,room1_string,room2_string,book_string);
      }
    if(digitalRead(mic) == LOW)
      {
        strcpy(noise_string,"-");
        lcd.setCursor(11,0);lcd.print("  -  ");
      }
      
    memset(room1_string,'\0',strlen(room1_string));
    if(digitalRead(ir1) == LOW)
      {
        strcpy(room1_string,"Full");
        lcd.setCursor(0,1);lcd.print("R1_Full");
      }
    if(digitalRead(ir1) == HIGH)
      {
        strcpy(room1_string,"-");
        lcd.setCursor(0,1);lcd.print("   -   ");
      }

    memset(room2_string,'\0',strlen(room2_string));
    if(digitalRead(ir2) == LOW)
      {
        strcpy(room2_string,"Full");
        lcd.setCursor(8,1);lcd.print("R2_Full");
      }
    if(digitalRead(ir2) == HIGH)
      {
        strcpy(room2_string,"-");
        lcd.setCursor(8,1);lcd.print("   -   ");
      }

    //delay(10);
    //cntlmk++;
    if(cntlmk >= 800)
      {cntlmk=0;
        upload(tempc,humc,noise_string,room1_string,room2_string,book_string);
      }

  while(Serial2.available() > 0)
       {
        char chrt1 = (char)Serial2.read();
  //      Serial2.write(chrt1);
        if(chrt1 == '*')
          {
            sti1=1;
          }
        if(sti1 == 1)
          {    
             inputString1 += chrt1;
          }
        if(chrt1 == '#')
          {
            sti1=0;  
            stringComplete1 = true;
        }
       }
       
   
   if(stringComplete1)
     {
      lcd.clear();lcd.print(inputString1);
//      Serial2.println(inputString1);
      
      memset(book_string,'\0',strlen(book_string));
      if(inputString1[1] == '1')
        {
         lcd.clear();       lcd.print("ECE Book");
         lcd.setCursor(0,1);lcd.print("Nexttime AI Book");          
         strcpy(book_string,"ECE_Book_Next_Time_AI_Book");
         upload(tempc,humc,noise_string,room1_string,room2_string,book_string);
        }              
      if(inputString1[1] == '2')
        {
         lcd.clear();       lcd.print("EEE Book");
         lcd.setCursor(0,1);lcd.print("Nexttime ML Book");          
         strcpy(book_string,"EEE_Book_Next_Time_ML_Book");
         upload(tempc,humc,noise_string,room1_string,room2_string,book_string);
        }                      
      inputString1 = "";
      stringComplete1 = false;              
      delay(3000);
      
      lcdbasic();
     }    

}

char bf2[50];
void upload(unsigned int s1,unsigned int s2,const char *s3,const char *s4,const char *s5,const char *s6)
{
  delay(2000);
  lcd.setCursor(15, 1);lcd.print("U");
  serial1Flush();
  Serial1.println("AT+CIPSTART=4,\"TCP\",\"projectsfactoryserver.in\",80");
    
  //http://projectsfactoryserver.in/storedata.php?name=pf5&s1=25&s2=35
  //sprintf(buff,"GET http://embeddedspot.top/iot/storedata.php?name=iot139&s1=%u&s2=%u&s3=%u\r\n\r\n",s1,s2);
  
      delay(8000);
  //https://projectsfactoryserver.in/storedata.php?name=iotgps&lat=17.167898&lan=79.785643   
      memset(buff,0,strlen(buff));
      sprintf(buff,"GET http://projectsfactoryserver.in/storedata.php?name=iot640&s1=%u&s2=%u&s3=%s&s4=%s&s5=%s&s6=%s\r\n\r\n",s1,s2,s3,s4,s5,s6);
      
//      memset(buff,0,strlen(buff));   
  //    sprintf(buff,"GET http://projectsfactoryserver.in/storedata.php?name=iot4&s1=%s\r\n\r\n",s1);
         
      serial1Flush();
      sprintf(bf2,"AT+CIPSEND=4,%u",strlen(buff));
      Serial1.println(bf2);
      
         delay(5000);
          
          
          serial1Flush();
          Serial1.print(buff);
         
              delay(2000);
              
          Serial1.println("AT+CIPCLOSE");
       lcd.setCursor(15, 1);lcd.print(" ");  
}

char readserver(void)
{
  char t;
  delay(2000);
  lcd.setCursor(15, 1);lcd.print("R");
  serial1Flush();
  Serial1.println("AT+CIPSTART=4,\"TCP\",\"projectsfactoryserver.in\",80");

  //http://projectsfactoryserver.in/last.php?name=amvi001L

      delay(8000);
      memset(buff,0,strlen(buff));
      sprintf(buff,"GET http://projectsfactoryserver.in/last.php?name=iot4L\r\n\r\n");
      serial1Flush();
      sprintf(bf2,"AT+CIPSEND=4,%u",strlen(buff));
      Serial1.println(bf2);
      
         delay(5000);
          
          
          serial1Flush();
          Serial1.print(buff);
          
       //read status
        while(1)
        {
           while(!Serial1.available());
            t = Serial1.read();
           // Serial2.print(t);
            if(t == '*' || t == '#')
            {
              if(t == '#')return 0;
              while(!Serial1.available());
               t = Serial1.read();
             //  Serial.print(t);
               delay(1000);
                serial1Flush();
               return t;
            }
        }
              delay(2000);
              
       Serial1.println("AT+CIPCLOSE");
       lcd.setCursor(15, 1);lcd.print(" "); 
       delay(2000);  
return t;
}

void clearserver(void)
{
  delay(2000);
  lcd.setCursor(15, 1);lcd.print("C");
  serial1Flush();
  Serial1.println("AT+CIPSTART=4,\"TCP\",\"projectsfactoryserver.in\",80");

  //sprintf(buff,"GET http://projectsfactoryserver.in/storedata.php?name=iot1&s10=0\r\n\r\n");
      delay(8000);
      memset(buff,0,strlen(buff));
      sprintf(buff,"GET http://projectsfactoryserver.in/storedata.php?name=iot4&s10=0\r\n\r\n");
      serial1Flush();
      sprintf(bf2,"AT+CIPSEND=4,%u",strlen(buff));
      Serial1.println(bf2);
      
         delay(5000);
          
          
          serial1Flush();
          Serial1.print(buff);
          
          delay(2000);
          serial1Flush();
      
              
              
       Serial1.println("AT+CIPCLOSE");
       lcd.setCursor(15, 1);lcd.print(" "); 
       delay(2000);  
}


void wifiinit()
{
 char ret;  
  st:
  Serial1.println("ATE0");
  ret  = check((char*)"OK",50);
  Serial1.println("AT");
  ret  = check((char*)"OK",50);
  if(ret != 0)
  {
    delay(1000);
   goto st; 
  }
  
     lcd.clear();lcd.setCursor(0, 0);lcd.print("CONNECTING");  
  Serial1.println("AT+CWMODE=1");
   ret  = check((char*)"OK",50);
 cagain:
    
  serial1Flush();
  Serial1.print("AT+CWJAP=\"");
  Serial1.print(ssid);
  Serial1.print("\",\"");
  Serial1.print(password);
  Serial1.println("\"");
  if(check((char*)"OK",300))goto cagain;    
  Serial1.println("AT+CIPMUX=1");
  delay(1000);
 

  lcd.clear();lcd.setCursor(0, 0);lcd.print("WIFI READY"); 
}

void converts(unsigned int value)
{
  unsigned int a,b,c,d,e,f,g,h;

      a=value/10000;
      b=value%10000;
      c=b/1000;
      d=b%1000;
      e=d/100;
      f=d%100;
      g=f/10;
      h=f%10;


      a=a|0x30;               
      c=c|0x30;
      e=e|0x30; 
      g=g|0x30;              
      h=h|0x30;
     
//   Serial1.write(a);
   Serial1.write(c);
   Serial1.write(e); 
   Serial1.write(g);
   Serial1.write(h);
}

void convertl(unsigned int value)
{
  unsigned int a,b,c,d,e,f,g,h;

      a=value/10000;
      b=value%10000;
      c=b/1000;
      d=b%1000;
      e=d/100;
      f=d%100;
      g=f/10;
      h=f%10;


      a=a|0x30;               
      c=c|0x30;
      e=e|0x30; 
      g=g|0x30;              
      h=h|0x30;
         
  // lcd.write(a);
  // lcd.write(c);
   lcd.write(e); 
   lcd.write(g);
   lcd.write(h);
}
void convertl1(unsigned int value)
{
  unsigned int a,b,c,d,e,f,g,h;

      a=value/10000;
      b=value%10000;
      c=b/1000;
      d=b%1000;
      e=d/100;
      f=d%100;
      g=f/10;
      h=f%10;


      a=a|0x30;               
      c=c|0x30;
      e=e|0x30; 
      g=g|0x30;              
      h=h|0x30;
         
   lcd.write(a);
   lcd.write(c);
   lcd.write(e); 
   lcd.write(g);
   lcd.write(h);
}
