import Demo1 from "./../images/demo1.png";
import Demo2 from "./../images/demo2.jpg";
function AddImg (){
    console.log('IMG ADD');
    const img =document.createElement('img');
    const img2 =document.createElement('img');
    img.width =500;
    img2.width =300;
    img2.height =300;
    img.height =500;
    img.alt="practice";
    img.src =Demo1;
    img2.src =Demo2;
const body = document.querySelector("body");
body.append(img,img2);
};
export default AddImg;