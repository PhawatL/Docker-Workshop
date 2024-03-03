# Containers with Docker Workshop

## ส่วนที่ 1 ติดตั้ง Docker


1. download docker จาก https://www.docker.com/get-started/
2. เมื่อ download แล้วให้กดติดตั้งโดยที่จะมีหน้าตาแบบนี้ ให้เราทำการติ๊กเครื่องหมายให้ครบทุกช่องแล้วกด ok (ในคอมพิวเตอร์บางเครื่องอาจมีให้ติ๊ก2ช่องให้ติ๊กทั้ง2ช่องเลย)

    ![image](https://cdn.discordapp.com/attachments/1200328562591399937/1213863087137103903/image.png?ex=65f70518&is=65e49018&hm=586a84ac705c86b48143c6951325336a232207361db6f561c2bc09dc57d72fd6&)

3. หลังจากรอติดตั้งประมาณ3-5นาที จะได้หน้าต่างแบบนี้
![image](https://media.discordapp.net/attachments/1200328562591399937/1213863652382220368/image.png?ex=65f7059f&is=65e4909f&hm=1f3fc101e4374dadd0360f74bdd016f720cf3d19fc2e38305e5918a5f80dd2c6&=&format=webp&quality=lossless)

4. เมื่อกดปุ่ม “Close and restart” แล้ว คอมพิวเตอร์จะ restart เครื่องเองโดยอัตโนมัติและเมื่อคอมพิวเตอร์เปิดขึ้นมาใหม่ รอประมาณ 30 วินาที(ขึ้นอยู่กับความเร็วของคอมพิวเตอร์)จะได้หน้าต่างแบบนี้ขึ้นมา
![image](https://cdn.discordapp.com/attachments/318688893941841920/1213803386642759740/image.png?ex=65f6cd7e&is=65e4587e&hm=f69000b48c80e429506daa598b40867ca6fe4bda6ebd57ffe2609ef85f8f6adf&)

5. ให้กด “Accept”  จากนั้นกดปุ่ม “Finish”
![image](https://cdn.discordapp.com/attachments/318688893941841920/1213803815774588990/image.png?ex=65f6cde5&is=65e458e5&hm=3bcd9b95dd858a718917db35d83c90e5d95435ecc0ab847e2e87c53fcbc9ef49&)

6. ส่วนการ Sign in ส่วนนี้แล้วแล้วแต่เลยอยากจะ Sign in หรือไม่ก็ได้
![sign in](https://cdn.discordapp.com/attachments/318688893941841920/1213804114107179058/image.png?ex=65f6ce2c&is=65e4592c&hm=c75f4a44d387ac78f8d814b0822e385dc1511b257296154a565f209d2b49594e&6)

7. เมื่อได้หน้าต่างนี้แล้วถือว่าลง Docker สำเร็จแล้ว
   ![](https://media.discordapp.net/attachments/1200328562591399937/1213865337632587837/image.png?ex=65f70731&is=65e49231&hm=6dcd84fd7ab7b49065f2fc61b96f75e2565ef5bfe0b535e2564d27fdd3663f9c&=&format=webp&quality=lossless&width=1215&height=701)


## ส่วนที่ 2 ทำความรู้จักกับ Docker Commard เบื้องต้น
0. เปิด cmd ขึ้นมาหากเป็น window ถ้าใช้ mac ให้เปิด terminal
1. `docker pull <image-name:tag>` ใช้สำหรับการ download image มากจาก [Docker Hub](https://hub.docker.com/_/ubuntu) 
  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213809850031669258/image.png?ex=65f6d383&is=65e45e83&hm=93d3cf7b9902467f24a8358a18342fda19c3c83cabed82bdd3d0ad75931b8dff&)

  ตัวอย่างการใช้งาน `docker pull ubuntu:20.04`

  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213807951584694303/image.png?ex=65f6d1bf&is=65e45cbf&hm=4e711afed9a3c2b5ee99b7e3152d7e1694042dac1b1b82def4ab16da9ed9e4d4&)
  

2. `docker images` ใช้สำหรับดูว่าเรามี image อะไรบางในเครื่อง

  ตัวอย่างการใช้งาน 

  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213808377218465824/image.png?ex=65f6d224&is=65e45d24&hm=1abbbb19becca93a963b244b43aa12483bfe60121cd45f3329e6734f6e261b19&)

3. `docker run <image-name:tag>` ใช้สำหรับสร้าง Container ใหม่ (หากเราไม่มี image ที่ระบุในคำสั่ง Docker จะdownloadให้อัตโนมัติ)

  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213812600169701427/image.png?ex=65f6d613&is=65e46113&hm=47c5c3e85f8457cdeca909c566de2431f178683df5785210820c6c2ff80bd92c&)

  โดยที่เราสามารถเติมคำสั่งต่อท้ายไป เพื่อให้เมื่อหลังสร้าง Container แล้ว ให้ Container ทำคำสั่งนั้น

  ตัวอย่างเช่น `docker run ubuntu:20.04 ls -la`

  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213811755176955934/image.png?ex=65f6d549&is=65e46049&hm=fa2c7bb44da3464cb651433564ed07a60c3cdbf6d86986a0689dfd65256e8af0&)

4. `docker ps` ใช้สำหรับตรวจสอบว่ามี Container ไหนบ้างที่ **กำลังทำงาน** อยู่
  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213813976752853002/image.png?ex=65f6d75b&is=65e4625b&hm=0cc867a9e75454af9aa92f43f3aee1faff9587b5d48c8c81516eee5fb3b5f7b6&)
  
  จะเห็นว่าไม่มี Container ไหนทำงานอยู่เลย เพราะ Container ที่เราสร้างมาก่อนหน้านี้ ไม่มีคำสั่งใดที่ run ค้างไว้อยู่ ดังนั้นหากเราต้องการเห็น Container ทั้งหมดต้องเติม flag `-a` ไปด้วย
  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213815272029425704/image.png?ex=65f6d890&is=65e46390&hm=376734d24a37f4b1b24bf2a30c6d77da5958b11bb78b79365f8493ff24f875d1&)
  จากรูปจะเห็นว่ามี Container ทั้งหมด 2 ตัวเพราะเราใช้คำสั่ง `docker run` 2 ครั้ง
  
5. `docker rm <container-id>` ใช้สำหรับลบ Container ที่ไม่ต้องการ
  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213817297878253569/image.png?ex=65f6da73&is=65e46573&hm=dda1615e148cb6bef738adebb103ca09c9a239a29f5504e769ca3a97615f930a&)
6. `docker rmi <image-id>` ใช้สำหรับลบ Image ที่ไม่ต้องการ 

## ส่วนที่ 3 Build Your Own Image With Dockerfile