## git 使用
机器A
1. git clone `<url>`
增加文件
2. git add "文件名"  或者 git add —A

3. git commit -m "备注"
上传到服务器
4. git push 
-----

机器B 
1. git clone `<url>`
2. git add "文件名"  或者 git add —A

3. git commit -m "备注"
上传到服务器
4. git push 
----

回到机器A
拉代码  
git pull  

----
增加 .gitigonre  文件，作用：忽略掉 某个文件或某个目录
我们 git add -A （添加所有文件的时候不会被添加到）