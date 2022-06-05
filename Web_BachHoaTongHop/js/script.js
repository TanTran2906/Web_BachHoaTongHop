//tạo csdl

/* quy ước
sp_thit_... -> các sản phẩm thuộc thịt, trứng cá, hải sản
sp_rau_... -> các sản phẩm thuộc rau củ
sp_sua_... -> các sản phẩm thuộc sữa thức ăn cho trẻ
sp_banh_... -> các sản phẩm thuộc bánh, kẹo
sp_nuoc_... -> các sản phẩm thuộc nước uống
sp_mi_... -> các sản phẩm thuộc thực phẩm ăn liền, gia vị
sp_trai_... -> các sản phẩm thuộc trái cây
sp_nhu_... -> các sản phẩm thuộc nhu yếu phẩm
*/
var itemList={	"sp_thit_01":{"name":"Đùi bò nhập khẩu khây","price":96000,"photo":"img/data/product/thịt, trứng, cá, hải sản/dui-bo-nhap-khau-dong-lanh-khay-500g-202203121756406544.jpg"},
				"sp_thit_02":{"name":"Sườn heo","price":87000,"photo":"img/data/product/thịt, trứng, cá, hải sản/suon-non-heo-g-khay-300g-2-4-mieng-202203141046307009_300x300.jpg"},
				"sp_thit_03":{"name":"Vịt nguyên con","price":195000,"photo":"img/data/product/thịt, trứng, cá, hải sản/vit-nguyen-con-vietswan-tui-24kg-202201270947331908_300x300.jpg"},
				"sp_thit_04":{"name":"Cánh gà","price":48500,"photo":"img/data/product/thịt, trứng, cá, hải sản/canh-ga-cp-khay-500g-3-5-canh-202203141122405545_300x300.jpg"},
				"sp_thit_05":{"name":"Mực","price":128000,"photo":"img/data/product/thịt, trứng, cá, hải sản/mực.jpg"},
				"sp_thit_06":{"name":"Bạch tuộc","price":128000,"photo":"img/data/product/thịt, trứng, cá, hải sản/bạch tuộc.jpg"},
				"sp_thit_07":{"name":"Tôm càng","price":150000,"photo":"img/data/product/thịt, trứng, cá, hải sản/tôm càng.jpg"},
				"sp_thit_08":{"name":"Hộp 12 trứng gà","price":32000,"photo":"img/data/product/thịt, trứng, cá, hải sản/trứng gà.jpg"},
				"sp_rau_01":{"name":"Rau cần tây","price":9000,"photo":"img/data/product/rau, củ/cần tây.jpg"},
				"sp_rau_02":{"name":"Cải ngọt 1 bó","price":9000,"photo":"img/data/product/rau, củ/cải ngọt.jpg"},
				"sp_rau_03":{"name":"Cà chua","price":28000,"photo":"img/data/product/rau, củ/cà chua.jpeg"},
				"sp_rau_04":{"name":"Cà rốt","price":10600,"photo":"img/data/product/rau, củ/cà rốt.jpg"},
				"sp_rau_05":{"name":"Bột ăn dặm NutiFood","price":71000,"photo":"img/data/product/sữa, thức ăn cho trẻ/bot-an-dam-nutifood-nuti-iq-gao-sua-hop-200g-6-24-thang-202103031015462198_300x300.jpg"},
				"sp_rau_06":{"name":"Rau muống 1 bó","price":11000,"photo":"img/data/product/rau, củ/rau muống.jpg"},
				"sp_rau_07":{"name":"Bầu","price":20000,"photo":"img/data/product/rau, củ/bầu.jpg"},
				"sp_rau_08":{"name":"Bí đỏ","price":10000,"photo":"img/data/product/rau, củ/bí đỏ.jpg"},
				"sp_sua_01":{"name":"Thùng sữa tươi tuyệt rùng","price":369000,"photo":"img/data/product/sữa, thức ăn cho trẻ/thung-48-hop-sua-tuoi-tiet-trung-it-duong-dalat-milk.jpg"},
				"sp_sua_02":{"name":"Lóc 4 hộc sữa chua nutikul","price":32000,"photo":"img/data/product/sữa, thức ăn cho trẻ/loc-4-hop-sua-chua-an-nutimilk.jpg"},
				"sp_sua_03":{"name":"Lóc 3 hộp sữa tươi","price":31000,"photo":"img/data/product/sữa, thức ăn cho trẻ/loc-3-hop-sua-tuoi-nguyen-kem-khong-duong.jpg"},
				"sp_sua_04":{"name":"Phô mai con bò","price":54000,"photo":"img/data/product/sữa, thức ăn cho trẻ/pho-mai-vi-vani-con-bo-cuoi.jpeg"},
				"sp_sua_05":{"name":"Bột ăn dặm NutiFood","price":71000,"photo":"img/data/product/sữa, thức ăn cho trẻ/bot-an-dam-nutifood-nuti-iq-gao-sua-hop-200g-6-24-thang-202103031015462198_300x300.jpg"},
				"sp_sua_06":{"name":"Sữa bột cho be abbott","price":560000,"photo":"img/data/product/sữa, thức ăn cho trẻ/sua-bot-abbott-grow-4-lon-17kg-202112241645368080_300x300.jpg"},
				"sp_sua_07":{"name":"Thùng sữa đậu nành Fami","price":160000,"photo":"img/data/product/sữa, thức ăn cho trẻ/thung-36-hop-sua-dau-nanh-fami-sua-dua-200ml-202105281318118663_300x300.jpg"},
				"sp_sua_08":{"name":"Sữa uống lên men","price":21000,"photo":"img/data/product/sữa, thức ăn cho trẻ/sua-uong-len-men-huong-dau-betagen.jpg"},
				"sp_banh_01":{"name":"Bánh cá vị gà","price":12000,"photo":"img/data/product/bánh, kẹo/banh-an-sang-soi-thit-ga.jpg"},
				"sp_banh_02":{"name":"Bánh quy Sôcla","price":49000,"photo":"img/data/product/bánh, kẹo/banh-quy-socola.jpg"},
				"sp_banh_03":{"name":"Bánh quy hình nơ Sanrio","price":55000,"photo":"img/data/product/bánh, kẹo/banh-qui-no-sanrio-goi-50g-2-org.jpg"},
				"sp_banh_04":{"name":"Bánh quế vị phô mai","price":36600,"photo":"img/data/product/bánh, kẹo/banh-que-vi-pho-mai-wasuka-cigarku-hop-240g-202101142037287675.jpg"},
				"sp_banh_05":{"name":"Kẹo dẻo hình cây kem","price":22000,"photo":"img/data/product/bánh, kẹo/keo-deo-hinh-cay-kem-vidal-ice-cream-softies-goi-100g-202007271442358616.jpg"},
				"sp_banh_06":{"name":"Kẹo daeo hình xúc xích","price":20000,"photo":"img/data/product/bánh, kẹo/keo-deo-hinh-xuc-xich-play-more-goi-36g-202203290801325904.jpg"},
				"sp_banh_07":{"name":"Kẻo dẻo vị cam chanh","price":22000,"photo":"img/data/product/bánh, kẹo/keo-deo-vi-cam-chanh-play-more-goi-48g-202005091506447768.jpg"},
				"sp_banh_08":{"name":"Kẻo sữa Want Want","price":19000,"photo":"img/data/product/bánh, kẹo/keo-sua-want-want-goi-126g-202201070805294772.jpg"},
				"sp_nuoc_01":{"name":"Lóc 6 chai nước ngọt coca","price":25000,"photo":"img/data/product/nước uống/6-chai-nuoc-ngot-coca-cola.jpg"},
				"sp_nuoc_02":{"name":"cafe đen đá","price":39000,"photo":"img/data/product/nước uống/ca-phe-den-da-g7-2-in-1.jpg"},
				"sp_nuoc_03":{"name":"Nước ngọt mirinda vị kem","price":10000,"photo":"img/data/product/nước uống/nuoc-ngot-mirinda-vi-soda-kem-15-lit.jpg"},
				"sp_nuoc_04":{"name":"Lóc 6 lon soda","price":35400,"photo":"img/data/product/nước uống/6-lon-soda-schwepper.jpg"},
				"sp_mi_01":{"name":"Dầu đậu nành nguyên chất","price":68000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/dau-dau-nanh-nguyen-chat-simply.jpg"},
				"sp_mi_02":{"name":"Bột ngọt Ajinomoto","price":57000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/bot-canh-vifon.jpg"},
				"sp_mi_03":{"name":"Muối IOT","price":129000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/muối iot.jpg"},
				"sp_mi_04":{"name":"Nước mắm chisu","price":50000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/nước mắn chinsu.jpg"},
				"sp_mi_05":{"name":"Mì gấu đỏ","price":70000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/mì gấu đỏ.jpg"},
				"sp_mi_06":{"name":"Hủ tiếu Nam Vang","price":150000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/hủ tiếu nam vang.jpg"},
				"sp_mi_07":{"name":"Cháo gấu đỏ","price":60000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/cháo gấu đỏ.jpg"},
				"sp_mi_08":{"name":"Phở cung đình","price":15000,"photo":"img/data/product/thực phẩm ăn liền, gia vị/phở cung đình.jpg"},
				"sp_trai_01":{"name":"Bưởi","price":68000,"photo":"img/data/product/trái cây/bưởi.jpg"},
				"sp_trai_02":{"name":"Xoài cát hoài lộc túi 1kg","price":57000,"photo":"img/data/product/trái cây/xoài cát.jpg"},
				"sp_trai_03":{"name":"Dưa lưới 1kg","price":30000,"photo":"img/data/product/trái cây/dưa lưới.jpg"},
				"sp_trai_04":{"name":"Ổi 1 vỉ","price":20300,"photo":"img/data/product/trái cây/ổi.jpg"},
				"sp_trai_05":{"name":"Cam sành túi 1kg","price":39000,"photo":"img/data/product/trái cây/cam sành.jpg"},
				"sp_trai_06":{"name":"Chuối nải 1kg","price":30000,"photo":"img/data/product/trái cây/chuối.jpg"},
				"sp_trai_07":{"name":"Dưa hấu","price":30000,"photo":"img/data/product/trái cây/dưa hấu đỏ.jpg"},
				"sp_trai_08":{"name":"Thanh long túi 1.5kg","price":27000,"photo":"img/data/product/trái cây/thanh long.jpg"},
				"sp_nhu_01":{"name":"Dầu xả Petene","price":104000,"photo":"img/data/product/nhu yếu phẩm/dau-xa-pantene-ngan-rung-toc-650ml-202103021616001980_300x300.jpg"},
				"sp_nhu_02":{"name":"Sữa tắm nước hoa GOTA","price":51000,"photo":"img/data/product/nhu yếu phẩm/sua-tam-nuoc-hoa-nam-gota-iconic-chai-420ml-202202260947469152_300x300.jpg"},
				"sp_nhu_03":{"name":"Dầu gội Head & Shoulders","price":120000,"photo":"img/data/product/nhu yếu phẩm/dau-goi-head-shoulders-lam-sach-gau-cho-da-dau-ngua-1800ml-202204071100572143_300x300.jpg"},
				"sp_nhu_04":{"name":"Kem đánh răng","price":32000,"photo":"img/data/product/nhu yếu phẩm/kem-danh-rang-p-s-bao-ve-123-tra-xanh-thanh-nhiet-240g-202105251528157799_300x300.jpg"},
				"sp_nhu_05":{"name":"Xà phòng PELICAN","price":59000,"photo":"img/data/product/nhu yếu phẩm/xa-phong-pelican-chiet-xuat-tu-tra-uji-80g-202112171003461611_300x300.jpg"},
				"sp_nhu_06":{"name":"Dầu gội ROMANO CLASSIC","price":170000,"photo":"img/data/product/nhu yếu phẩm/dau-goi-huong-nuoc-hoa-romano-classic-toc-chac-khoe-650g-202103021456422349_300x300.jpg"},
				"sp_nhu_07":{"name":"Dầu gội Dove","price":120000,"photo":"img/data/product/nhu yếu phẩm/dau-goi-dove-phuc-hoi-hu-ton-874ml-202103021511011938_300x300.jpg"},
				"sp_nhu_08":{"name":"Sữa tắm cho bé","price":190000,"photo":"img/data/product/nhu yếu phẩm/sua-tam-cho-be-pigeon-liquid-soap-chiet-xuat-jojoba-700ml-202104141714397242_300x300.jpg"},
				"sp_ct_01":{"name":"Chuối Mỹ Organic","price":25000,"photo":"images/product-1.png"},
				"sp_ct_02":{"name":"Cà Chua","price":15000,"photo":"images/product-2.png"},
				"sp_ct_03":{"name":"Cam Ogranic Mỹ","price":30000,"photo":"images/product-3.png"},
				"sp_ct_04":{"name":"Sữa Tươi","price":13000,"photo":"images/product-4.png"},
				"sp_ct_05":{"name":"Nho Mỹ","price":100000,"photo":"images/product-5.png"},
				"sp_ct_06":{"name":"Bánh Cream Cheese","price":100000,"photo":"img/data/product/bánh/banh-cream-cheese.jpg"}
			   };

/*Hàm thêm sản phẩm vào Giỏ hàng**/
function addCart(code){
	var number=parseInt(document.getElementById(code).value);
	var name=itemList[code].name;
	if(number==0)return;
	if(typeof localStorage[code] === "undefined"){
		window.localStorage.setItem(code,number);
		alert("Đã cập nhật sản phẩm "+name+" với số lượng "+number+" vào giỏ hàng. Số lượng sản phẩm "+name+" đã đặt là "+parseInt(window.localStorage.getItem(code))+".");	
	}else{
	   var current=parseInt(window.localStorage.getItem(code));		   
		window.localStorage.setItem(code,current+number);	   
		alert("Đã cập nhật sản phẩm "+name+" với số lượng "+number+" vào giỏ hàng. Số lượng sản phẩm "+name+" đã đặt là "+parseInt(window.localStorage.getItem(code))+".");	
	}
}
/*Hàm mở trang Giỏ hàng**/
function openCart()
{
	window.location.href = "donhang.html";
}

//hàm hiển thị nội dung giỏ hàng
function showCart()
{
	var container=document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
	container.innerHTML="";

	var sum=0;//tổng mỗi mặt hàng
	var sum_all=0; //tổng tất cả mặt hàng
	for(var i=0;i<window.localStorage.length;i++)
	{
	 if(typeof itemList[localStorage.key(i)] === "undefined")
		continue;		
	 var tr=document.createElement("tr");
	 var photoCell=document.createElement("td");
	 var nameCell=document.createElement("td");
	 var priceCell=document.createElement("td");
	 var numberCell=document.createElement("td");
	 var sumCell=document.createElement("td");
	 var removeCell=document.createElement("td");
	 var removeLink=document.createElement("a");
	 
	 var item=itemList[localStorage.key(i)];
	 var number=localStorage.getItem(localStorage.key(i));
	 
	 photoCell.innerHTML="<img src='"+item.photo+"' class='round-figure' width='100px'/>";
	 
	 nameCell.innerHTML=item.name;
	 priceCell.innerHTML=item.price + "<sub>đ</sub>";
	 
	 numberCell.innerHTML=number;
	 
	 sum=sum+number*item.price;	 
	 sumCell.innerHTML=sum + "<sub>đ</sub>";
	 
	 removeLink.innerHTML="<i class='fa fa-trash icon-pink' style='color: red;'></i>";
	 
	 removeLink.setAttribute("href","#");
	 removeLink.setAttribute("data-code",localStorage.key(i));
	 removeLink.onclick=function(){
		removeCart(this.dataset.code);
		 };
	 removeCell.appendChild(removeLink);
	 
	 tr.appendChild(photoCell);
	 tr.appendChild(nameCell);
	 tr.appendChild(numberCell);
	 tr.appendChild(priceCell);	 
	 tr.appendChild(sumCell);
	 tr.appendChild(removeCell);
	 container.appendChild(tr);
	 sum_all=sum_all+sum;
	}
	var tax = 0;
	if (sum_all > 0)
	{
		tax = 8;
	}
	document.getElementById("cost").innerHTML=sum_all + "<sub>đ</sub>";
	document.getElementById("tax").innerHTML=tax + "%";
	var pay = sum_all + 0.08 * sum_all;
	document.getElementById("pay").innerHTML=pay + "<sub>đ</sub>";
}
/*Hàm xóa sản phẩm khỏi đơn hàng**/
function removeCart(code)
{		
	if(typeof window.localStorage[code] !== "undefined")
		{
		window.localStorage.removeItem(code);
		document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
		showCart();
		}	
}

//Cập nhật trang chi tiết đơn hàng khi cập nhật số lượng sản phẩm
window.onstorage = () => {
  showCart();
};

function buy(){
	window.localStorage.clear();
	alert('Đơn hàng đã được đặt');
	showCart();
}

function removeAll(){
	window.localStorage.clear();
	showCart();
}