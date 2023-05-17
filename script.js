
const btn = document.querySelector('#btn');
 const s = document.querySelector('#potolok')
 const sbb = document.querySelector('#floor')
 const sc = document.querySelector('#furniture')
        const sb = document.querySelector('#framework') 
        btn.onclick = (event) =>{ 
            event.preventDefault();   
          
i=(sb.selectedIndex);

i1=(sbb.selectedIndex)

i2=(s.selectedIndex)

i3=(sc.selectedIndex)

if((i==1)&&(i1==1) &&(i2==1)&&(i3==1)){document.images['pic'].src="img_tools\start_img\start_0000.png"}
// все в бетоне без мебели

if((i==1)&&(i1==1)&&(i2==1)&&(i3==2)&&(document.images['pic'].src=="img_tools\start_img\start_0000.png")){document.images['pic'].src="img_tools\start_img\start_0001.png"}
// все в бетоне с мебелью

if((i==2)&&(i1==1)&&(i2==1)&&(i3==1)&&(document.images['pic'].src=="img_tools\start_img\start_0000.png")){document.images['pic'].src="img_tools\bricks\pol-beton_potolok 0\kirpich_000.png"}
// кирпичная стена остальное бетон без мебели

if((i==2)&&(i1==1)&&(i2==1)&&(i3==1)&&(document.images['pic'].src=="img_tools\start_img\start_0000.png")){document.images['pic'].src="img_tools\bricks\pol-beton potolok 0\kirpich_0001.png"}
// кирпичная стена все бетон мебель есть
        }

