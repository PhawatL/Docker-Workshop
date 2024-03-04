# Containers with Docker Workshop

## ส่วนที่ 0 ติดตั้ง Docker


1. download docker จาก https://www.docker.com/get-started/
2. เมื่อ download แล้วให้กดติดตั้งโดยที่จะมีหน้าตาแบบนี้ ให้เราทำการติ๊กเครื่องหมายให้ครบทุกช่องแล้วกด ok (ในคอมพิวเตอร์บางเครื่องอาจมีให้ติ๊ก2ช่องให้ติ๊กทั้ง2ช่องเลย)

    ![image](https://cdn.discordapp.com/attachments/1200328562591399937/1213863087137103903/image.png?ex=65f70518&is=65e49018&hm=586a84ac705c86b48143c6951325336a232207361db6f561c2bc09dc57d72fd6&)

3. หลังจากรอติดตั้งประมาณ3-5นาที จะได้หน้าต่างแบบนี้
![image](https://media.discordapp.net/attachments/1200328562591399937/1213863652382220368/image.png?ex=65f7059f&is=65e4909f&hm=1f3fc101e4374dadd0360f74bdd016f720cf3d19fc2e38305e5918a5f80dd2c6&=&format=webp&quality=lossless)

4. เมื่อกดปุ่ม “Close and restart” แล้วคอมพิวเตอร์จะ restart เครื่องเองโดยอัตโนมัติและเมื่อคอมพิวเตอร์เปิดขึ้นมาใหม่ รอประมาณ 30-60 วินาที (ขึ้นอยู่กับความเร็วของคอมพิวเตอร์)จะได้หน้าต่างแบบนี้ขึ้นมา
![image](https://cdn.discordapp.com/attachments/318688893941841920/1213803386642759740/image.png?ex=65f6cd7e&is=65e4587e&hm=f69000b48c80e429506daa598b40867ca6fe4bda6ebd57ffe2609ef85f8f6adf&)

5. ให้กด “Accept”  จากนั้นกดปุ่ม “Finish”
![image](https://cdn.discordapp.com/attachments/318688893941841920/1213803815774588990/image.png?ex=65f6cde5&is=65e458e5&hm=3bcd9b95dd858a718917db35d83c90e5d95435ecc0ab847e2e87c53fcbc9ef49&)

1. ส่วนการ Sign in อยากให้ทุกคน Sign in เพราะจะนำไปใช้ต่อในส่วนที่ 4
![sign in](https://cdn.discordapp.com/attachments/318688893941841920/1213804114107179058/image.png?ex=65f6ce2c&is=65e4592c&hm=c75f4a44d387ac78f8d814b0822e385dc1511b257296154a565f209d2b49594e&6)

1. เมื่อได้หน้าต่างนี้แล้วถือว่าลง Docker สำเร็จแล้ว
   ![](https://media.discordapp.net/attachments/1200328562591399937/1213865337632587837/image.png?ex=65f70731&is=65e49231&hm=6dcd84fd7ab7b49065f2fc61b96f75e2565ef5bfe0b535e2564d27fdd3663f9c&=&format=webp&quality=lossless&width=1215&height=701)



## ส่วนที่ 1 ภาพรวมของ Workshop

เนื่องจากอยากให้เห็นภาพรวมมากขึ้นก่อนว่าเราจะทำอะไรใน Workshop นี้ให้เราเปิด cmd หรือถ้าใช้ mac ให้เปิด terminal แล้ว run คำสั่งนี้
```bash
docker run -d  -p 8000:3000 phawatl/web-demo-for-dockerworkshop:latest
```

หลังจากรอคำสั่งทำงานจนเสร็จสิ้นให้เข้าไปที่ http://localhost:8000

  หากใครเจอ error หน้าตาแบบนี้แสดงว่าเรายังไม่ได้เปิด Docker Desktop ให้เปิด Docker Desktop แล้วลอง run อีกครั้ง

  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1214252648203681963/image.png?ex=65f86fe7&is=65e5fae7&hm=4f29fd2569a17ff7f71757b9bb8d4f0eb09fb737de3fd2df56c8f5e76827aca0&)


## ส่วนที่ 2 ทำความรู้จักกับ Docker Commard เบื้องต้น
0. เปิด cmd ขึ้นมาหากเป็น window ถ้าใช้ mac ให้เปิด terminal
1. `docker pull <image-name:tag>` ใช้สำหรับการ download image มากจาก [Docker Hub](https://hub.docker.com/_/ubuntu) 
  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213809850031669258/image.png?ex=65f6d383&is=65e45e83&hm=93d3cf7b9902467f24a8358a18342fda19c3c83cabed82bdd3d0ad75931b8dff&)

  ตัวอย่างการใช้งาน 
  ```bash
  docker pull ubuntu:20.04
  ```

  ![](https://media.discordapp.net/attachments/1213030615289700355/1214268290244026368/image.png?ex=65f87e78&is=65e60978&hm=aa0bfbec1b779adbcc7c4df9a8c3d05d41bd74bf5d111e0182e2487f2ee50895&=&format=webp&quality=lossless)

2. `docker images` ใช้สำหรับดูว่าเรามี image อะไรบางในเครื่อง

  ตัวอย่างการใช้งาน 

  ![](https://media.discordapp.net/attachments/1213030615289700355/1214268406212333679/image.png?ex=65f87e94&is=65e60994&hm=51cd40ad606aceb1b760af17a3963e172e7bf92607cfac25f6960ce0341c0c2a&=&format=webp&quality=lossless)

3. `docker run <image-name:tag>` ใช้สำหรับสร้าง Container ใหม่ (หากเราไม่มี image ที่ระบุในคำสั่ง Docker จะdownloadให้อัตโนมัติ)
  ```bash
  docker run ubuntu:20.04
  ```

  ![](https://media.discordapp.net/attachments/1213030615289700355/1214268601998123099/image.png?ex=65f87ec2&is=65e609c2&hm=183b8500d46432425beca402f376047c8fee6ff94e46c3da9655ef7fb5c494ee&=&format=webp&quality=lossless)

  โดยที่เราสามารถเติมคำสั่งต่อท้ายไป เพื่อให้เมื่อหลังสร้าง Container แล้ว ให้ Container ทำคำสั่งนั้น

  ตัวอย่างเช่น 
  ```bash
  docker run ubuntu:20.04 ls -la
  ```

  ![](https://media.discordapp.net/attachments/1213030615289700355/1214271035940274256/image.png?ex=65f88107&is=65e60c07&hm=a81d2a5c32bdb67dc3d6b2f1ae73915b1b34e448248e0a290608813d0c03af21&=&format=webp&quality=lossless)

4. หากเข้าต้องการเข้าไปใน Container สามารถทำได้โดยใช้คำสั่ง `docker run -it <image-name:tag> bash`

```
docker run -it ubuntu:20.04 bash
```

![](https://media.discordapp.net/attachments/1213030615289700355/1214268964524265512/image.png?ex=65f87f19&is=65e60a19&hm=b6ba38226bb913aadd8abb743a5f487b397e65d3b64b3381d118b51e7d746718&=&format=webp&quality=lossless)

และสามารถออกจาก Container ด้วยคำสั่ง `exit`


5. `docker ps` ใช้สำหรับตรวจสอบว่ามี Container ไหนบ้างที่ **กำลังทำงาน** อยู่
  ![](https://media.discordapp.net/attachments/1213030615289700355/1214269107101237369/image.png?ex=65f87f3b&is=65e60a3b&hm=53bf3adf2e76862ffbfed782b99304e57d5608e8350fed2d70c050affa7d985a&=&format=webp&quality=lossless)
  
  จะเห็นว่ามีแค่ Container ที่แสดงมีแค่ Container ของ web quiz เท่านั้น เพราะ Container ที่เราสร้างมาก่อนหน้านี้ ไม่มีคำสั่งใดที่ run ค้างไว้อยู่ ดังนั้นหากเราต้องการเห็น Container ทั้งหมดต้องเติม flag `-a` ไปด้วย
  ```bash
  docker ps -a
  ```
  ![](https://media.discordapp.net/attachments/1213030615289700355/1214269582018351124/image.png?ex=65f87fac&is=65e60aac&hm=0584a1a0d616056626e856022f5774318c4e349ab6d7dcdb3f422ff6ba08da50&=&format=webp&quality=lossless&width=1440&height=261 )
  จากรูปจะเห็นว่ามี Container ทั้งหมด 4 ตัวเพราะเราใช้คำสั่ง `docker run` 3+1 ครั้ง (+1 จาก run web quiz)
  

6. `docker rm <container-id>` ใช้สำหรับลบ Container ที่ไม่ต้องการ
![](https://media.discordapp.net/attachments/1213030615289700355/1214273997819215983/image.png?ex=65f883c9&is=65e60ec9&hm=0368c46d02c316ded3b00f6fbe2285a199702265ea009badb4aeba0e0348ecea&=&format=webp&quality=lossless&width=1440&height=278)

7. `docker rmi <image-id>` ใช้สำหรับลบ Image ที่ไม่ต้องการ 

8. `docker stop <container-id>` ใช้สำหรับหยุดการทำงานของ Container
9. `docker start <container-id>` ใช้สำหรับสั่งให้ Container ที่มีอยู่แล้วเริ่มทำงาน

## ส่วนที่ 3 Build Your Own Image With Dockerfile

1. Download ไฟล์จากใน repo นี้โดย git clone หรือจาก link นี้เลยก็ได้ [Download File](https://github.com/PhawatL/Docker-Workshop/archive/refs/heads/main.zip)
2. หลังจาก Download และแตกไฟล์แล้วให้เปิด Folder ผ่าน vscode จะได้หน้าตาดังรูป
   ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213936849152901120/image.png?ex=65f749ca&is=65e4d4ca&hm=0933f7d5fb0962e718ef69ec2ecc3f3be8831e984c04b1a607b2d09c97f03d95&)
3. สร้างไฟล์ใหม่ภายใน Folder ที่ download มาตั้งชื่อไฟล์ว่า Dockerfile 
4. คำสั่งหลังจากนี้เราจะ run ผ่าน terminal ใน vscode ตามรูปด้านล่าง
  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1214178765081542666/image.png?ex=65f82b17&is=65e5b617&hm=39f4eb9457e4a90d7757e1f540f028d5b4c8c859e3734aa93c69b7fd557316ac&)
5. ภายใน Dockerfile จะเป็นเหมือน Blueprint ที่จะเขียนรายละเอียดการสร้าง image ของเรา โดยจะต้องมีรายละเอียดดังนี้
   1. Baseimage โดยเราสามารถเลือก image จาก [Dockerhub](https://hub.docker.com/) โดย Baseimage นี้จะเป็น os และ environment พิ้นฐานให้กับ container ยกตัวอย่างในกรณีนี้เราจะ run application โดยใช้ nodejs เราจึงควรลง image ที่พร้อมสำหรับการ run application ที่ใช้ nodejs โดยบรรทัดแรกของ Dockerfile จะเขียนในรูปแบบนี้ `FROM <baseimage>`
   
   ยกตัวอย่าง
   ```Docker
   FROM node:21-alpine3.18
   ```
   2. กำหนด path เริ่มต้นเมื่อเริ่มใช้งาน Container ด้วย `WORKDIR <path>`
   
   ตัวอย่าง
   ```Docker
   WORKDIR /app
   ```
   3. Copy Application ของเราเข้าไปใส่ใน Container ด้วย `COPY <source> <dest>`
   
   ตัวอย่าง
   ```Docker
   COPY . .
   ```
   4. ติดตั้ง dependencies ด้วย `RUN` หาก Application ของเรามีการใช้ package หรือ dependencies เพิ่มเติม 
   ```Docker
   RUN npm i
   ```
   5. เนื่องจาก App ของเรามีการใช้ port เราจึงต้อง Expose port ด้วย ในกรณีนี้คือ port 3000 (ดูจาก index.js)
   ```Docker
   EXPOSE 3000
   ```
   6. ตั้ง default command ด้วย `CMD` โดยที่ default command จะทำงานทุกครั้งที่เราสั่ง start container ต่างจาก `RUN` ที่จะทำงานเฉพาะตอนสร้าง image เท่านั้น ดังนั้น default command ควรเป็น command สำหรับ run App ของเรา
   ```Docker
   CMD ["node","app.js"]
   ```
  สุดท้ายเราจะได้ Dockerfile หน้าตาแบบนี้

  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1213935731756630146/image.png?ex=65f748c0&is=65e4d3c0&hm=776d22fea9926f57bae01959a02b64160c73420592208671d190cbed4f19bd74&)
  
6. และเมื่อเราเขียน Dockerfile เสร็จแล้วเราก็สามารถ build image ตามที่ Dockerfile เราเขียนได้เลยด้วยคำสั่ง
  ```bash
  docker build -t <your-image-name:tag> .
  ```
  คำสั่งนี้จะ build image ตาม Dockerfile ที่อยู่ใน Directory ปัจจุบันของเรา

  ตัวอย่างผลลัพธ์

  ![](https://cdn.discordapp.com/attachments/1213030615289700355/1214169373653078066/image.png?ex=65f82258&is=65e5ad58&hm=9712dcb117427d8ba36db7e1f6d17d662b16dc926dc912092dcfe35494f68f8f&)

  คำสั่งที่ใช้ในตัวอย่าง

  ```bash
  docker build -t dockerworkshop:1.0 .
  ```
7. หลังจกาที่เรา build image ของเราสามารถตรวจสอบดูได้ผ่าน
```bash
docker images
```

![](https://cdn.discordapp.com/attachments/1213030615289700355/1214171619359203338/image.png?ex=65f82470&is=65e5af70&hm=217408c8e17cb270709c0bf4bc0b6a81b7ecbdf68332948f4e1e775730dae287&)

8. เมื่อเราได้ image ที่ต้องการแล้ว เราลอง run มันด้วยคำสั่ง `docker run` โดยเราจะมีการเพิ่ม flag ไป 2 ตัวคือ `-d` สำหรับให้ container run in background และ `-p` สำหรับ map port ของ host กับ port ของ container
```bash
docker run -d -p host:container <image-name:tag>
```
โดยตัวอย่างนี้จะใช้
```bash
docker run -d -p 8080:3000 dockerworkshop:1.0
```
![](https://cdn.discordapp.com/attachments/1213030615289700355/1214171696530071572/image.png?ex=65f82482&is=65e5af82&hm=353319a1a729f4bb8a8bf6bf4023fb50e3e2e43bb21396dab1f4bf559daff138&)

หลังจาก run คำสั่งแล้วจะได้ ContainerID ออกมา เราสามารถตรวจสอบได้ว่า Container เราทำงานอยู่จริงหรือไม่ ด้วย `docker ps`

![](https://media.discordapp.net/attachments/1213030615289700355/1214184690617946154/image.png?ex=65f8309c&is=65e5bb9c&hm=0b9bd493c1f75168d3cf7e646eaae07abd80c87b0ec60484f42f855ee9239870&=&format=webp&quality=lossless)

จะเห็นว่าตอนนี้ Container ของเรากำลังทำงานและเราสามารถลองเปิด http://localhost:8080

9. หากเราต้องการให้ Container หยุดทำงานสามารถทำได้ผ่านคำสั่ง 
```bash
docker stop <container-id>
```
![](https://cdn.discordapp.com/attachments/1213030615289700355/1214184947477250048/image.png?ex=65f830d9&is=65e5bbd9&hm=89d08f0ba599d72ca0f939693f5e6eb8017b504c4024326d989a1249d36bc285&)

10. และถ้าเราต้องการจะเปิด Container นั้นขึ้นมากใหม่สามารถทำได้โดยใช้คำสั่ง 
```bash
docker start <container-id>
```
![](https://media.discordapp.net/attachments/1213030615289700355/1214185130529263678/image.png?ex=65f83105&is=65e5bc05&hm=f610cca86d95b0aaa22e4526b98646e613d38fb8370913861be8a5b24add9d66&=&format=webp&quality=lossless)


## ส่วนที่ 4 นำ Image ของเราขึ้นไปบน Registry

1. เราจำเป็นต้อง Login ใน Docker Desktop ให้เรียบร้อยก่อน
2. พิมพ์คำสั่ง
   
   ```bash
   docker login
   ```
   ![](https://media.discordapp.net/attachments/1213030615289700355/1214279589279440958/image.png?ex=65f888fe&is=65e613fe&hm=6b184c2d1acb3bad2e88bbd8b6988dfc1829540c6874fc08be9688041314cb18&=&format=webp&quality=lossless)
3. โดยที่ Docker บังคับว่าชื่อ image ของเราจะต้องนำหน้าด้วย username ตามด้วยชื่อ image ของเรา(ส่วนนี้เราจะตั้งอะไรก็ได้) format หน้าตาแบบนี้ `<username>/your-image-name:tag`
4. ฉะนั้นเราจำเป็นต้องเปลี่ยนชื่อ image ของเราให้ตรงตาม format ที่เค้าต้องการก่อนโดยใช้คำสั่ง `docker tag sourceName:tag targetName:tag`
ตัวอย่างการใช้คำสั่ง
```bash
docker tag dockerworkshop:1.0 phawatl/dockerworkshop:1.0
```
![](https://media.discordapp.net/attachments/1213030615289700355/1214283317600452731/image.png?ex=65f88c77&is=65e61777&hm=490ee2e7f0492b9422cd90d5b6141a74f2999fad22250db7b1476a7dc51522bf&=&format=webp&quality=lossless)

5. หลังจากที่เราเปลี่ยนชื่อ image ให้ตรงตาม format เรียบร้อยแล้วเราก็ push โดยใช้คำสั่ง `docker push <image-name:tag>`

```bash
docker push phawatl/dockerworkshop:1.0
```
![](https://media.discordapp.net/attachments/1213030615289700355/1214284782549340180/image.png?ex=65f88dd4&is=65e618d4&hm=c46075ed4a9f9532c8e00d0cc7ff2593331c23ba7c4caca32ea19d846d1cf503&=&format=webp&quality=lossless)


  



