var dtst=["https://m.media-amazon.com/images/I/614q47uoPNL._AC_UF1000,1000_QL80_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLVKIRN79syxp5HmnNNgogV28P4YnB6Py-A&usqp=CAU","https://5.imimg.com/data5/SELLER/Default/2021/2/JE/ZR/GF/29912274/fashion-cool-for-huawei-honor-8c-case-cover-6-26-silicone-soft-tpu-3d-back-cover-jpg-q50-500x500.jpg","https://m.media-amazon.com/images/I/31QZOukWxZL._SX300_SY300_QL70_FMwebp_.jpg"]
var a=document.getElementById("imdl");
var i=0;
setInterval(function () {
   for (i = 0; i < dtst.length; i++) {
    a.src=dtst[i];
    
    
   }
},500);