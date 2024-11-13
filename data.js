const productos = [
    { 
        nombre: "Nike R1",
        cantida_disponible: 3,
        precio: "120.000",
        img: " https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/296839a0-9bd6-4c1c-b79b-055476793c29/calzado-air-jordan-1-retro-high-sp-1QS3rN.png" ,
        codigo: "Nk01",
        categoria: "Deportivos",
        
        
    },
    { 
        nombre: "Nike R1",
        cantida_disponible: 1,
        precio: "120.000", 
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/192bd1e3-9fd1-4f94-9f0e-799e443357e9/tenis-air-jordan-1-low-rJrHLw.png",
        codigo: "Nk02",
        categoria: "Clasicas",
    },
    { 
         
        nombre:"Nike R1",
        cantida_disponible: 1,
        precio: "120.000",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85f4973d-4233-45f7-8a74-b6c155f87c06/calzado-grandes-air-jordan-1-mid-H5qqbF.png"  ,
        codigo: "Nk03",
        categoria:"urbanas", 
        
       },
       { 
         
        nombre:"Nike R1",
        cantida_disponible: 1,
        precio: "120.000",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a4e485b4-02bd-4d24-9002-2f5a090e99a9/calzado-grandes-air-jordan-1-high-og-yellow-ochre-Wqf4f4.png",
        codigo: "Nk04",
        categoria:"Deportivos",

       },

       { 
         
        nombre:"Nike R1",
        cantida_disponible: 1 ,
        precio: "120.000",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/312b0732-3206-40fa-b578-7bfb62c0675a/tenis-air-jordan-1-retro-high-og-JHpxkn.png" ,
        codigo: "Nk05",
        categoria:"Deportivos",
       },

       { 
     
        nombre:"Air force 1",
        cantida_disponible: 1,
        precio: "80.000",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdeb34c8-a6bf-4530-9145-b6cfea5dd963/tenis-air-force-1-07-lv8-1-x0bMdL.png",
        codigo: "Ai06",
        categoria:"Clasicas ",
       },

       { 
     
        nombre:"Air force 1",
        cantida_disponible: 1,
        precio: "80.000",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e9f4fa4-1765-4c4d-b480-dd059ebf2f40/force-1-low-easyon-zapatillas-nino-a-pequeno-a-6nbSNZ.png" ,
        codigo: "Ai07",
        categoria:"Clasicas",
       },
    { 
         
        nombre:"Air force 1",
        cantida_disponible: 1,
        precio: "80.000",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/calzado-air-force-1-07-rXkGJX.png",
        codigo: "Ai08",
        categoria:"Clasicas",
       },

       { 
         
        nombre:"Air force 1",
        cantida_disponible: 1 ,
        precio: "80.000",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/tenis-air-force-1-07-easyon-vpmlK3.png"  ,
        codigo: "Ai09",
        categoria:"Clasicas",
       },

       { 
     
        nombre:"Air force 1",
        cantida_disponible: 1,
        precio: "80.000",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d75ffce9-db5f-4364-bd32-e076b84e1487/tenis-air-force-1-07-HDw18d.png" ,
        codigo: "Ai10",
        categoria:"Clasicas",
       },

       { 
     
        nombre:"Nike Borrador",
        cantida_disponible: 1,
        precio: "90.000",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b094e32-b372-4208-b02a-029e3236ae70/tenis-cortez-23-premium-leather-0FZSGV.png"  ,
        codigo: "Nk11",
        categoria:"Clasicas",
       },

       { 
     
        nombre:"Nike Borrador",
        cantida_disponible:1,
        precio: "90.000",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0eba8e75-b5e4-4c02-9110-3b400e693b51/tenis-cortez-txt-6XHS74.png"  ,
        codigo: "Nk12",
        categoria:"Clasicas",
       },

       { 
     
        nombre:"Nike Borrador",
        cantida_disponible:1,
        precio: "90.000",
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/778064b0-bf66-4f4e-b7b9-7435288396ab/tenis-cortez-vintage-suede-nQSpJ7.png",
        codigo: "Nk13",
        categoria:"Clasicas",
        

       },

      
       { 
     
        nombre:"Nike Borrador",
        cantida_disponible:1,
        precio: "90.000",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23c7f6fe-1b94-4064-b779-5117c59347f5/calzado-cortez-mFmNVn.png" ,
        codigo: "Nk14",
        categoria:"Clasicas",

       },

       { 
     
        nombre:"Nike Borrador",
        cantida_disponible:1,
        precio: "90.000",
        img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a66fbbfc-5658-4bfb-a108-44709d903ee3/calzado-cortez-vVqNKk.png"  ,
        codigo: "Nk15",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R5",
        cantida_disponible:1,
        precio: "110.000",
        img:"https://th.bing.com/th/id/OIP.Q0ofrVURkbH2DTP3MXhziQHaHa?pid=ImgDet&w=183&h=183&c=7" ,
        codigo: "Jr16",
        categoria:"Deportivos",
       },
    

       { 
     
        nombre:"Jordan R5",
        cantida_disponible:1,
        precio: "110.000",
        img: "https://th.bing.com/th/id/OIP.xgKG439wNzyKE27Gd09THQAAAA?rs=1&pid=ImgDetMain"  ,
        codigo: "Jr17",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R5",
        cantida_disponible:1,
        precio: "110.000",
        img:"https://zshopp.com/wp-content/uploads/2020/02/71EC9PEubGL._UL1500_.jpg" ,
        codigo: "Jr18",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R4",
        cantida_disponible:1,
        precio: "110.000",
        img: "https://uptowndeluxe.co.jp/upload/save_image/0508064207_64581b2f111e7.png",
        codigo: "Jr19",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R4",
        cantida_disponible: 1, 
        precio: "110.000",
        img: "https://www.calzatesp.com/wp-content/uploads/2022/10/Canyon-Purple-1-600x600.jpg" ,
        codigo: "Jr20",
        categoria:"Deportivos",
       },
    

       { 
     
        nombre:"Jordan R4",
        cantida_disponible:1,
        precio: "110.000",
        img:"https://s3.amazonaws.com/images.kicksfinder.com/products/large/3b2958a4f266bd5d89c3eee17e53852a_1660354362.jpeg" ,
        codigo: "Jr21",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R4 ",
        cantida_disponible:1,
        precio: "110.000",
        img: "https://th.bing.com/th/id/OIP.jYosHkv5b8Sy-YPhJiv51QHaHa?rs=1&pid=ImgDetMain" ,
        codigo: "Jr22",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R4",
        cantida_disponible:1,
        precio: "110.000",
        img:"https://libur.com.co/cdn/shop/files/IMG_2679_e827941e-8892-4f2e-b137-489f448f57f6.jpg" ,
        codigo: "Jr23",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R4",
        cantida_disponible:1,
        precio: "110.000",
        img:"https://libur.com.co/cdn/shop/files/IMG_4007_fc8778e3-443a-4991-a54e-adac055a068d.jpg"  ,
        codigo: "Jr24",
        categoria:"Deportivos",

       },
       
       { 
         
        nombre:"Jordan R13",
        cantida_disponible:1,
        precio: "120.000",
        img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/59052f3b-f867-45a8-93ae-26166af4f68c/fecha-de-lanzamiento-del-air-jordan-13-wheat-414571-171.jpg" ,
        codigo: "Jr25",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R13",
        cantida_disponible:1,
        precio: "120.000",
        img:"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/2ecc27b5-3e3a-4b82-b485-aa237e9ebad4/fecha-de-lanzamiento-del-air-jordan-13-black-royal.jpg"  ,
        codigo: "Jr26",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R13",
        cantida_disponible:1,
        precio: "120.000",
        img:"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/742452de-4a62-41dd-810d-3f4f922ed3ab/fecha-de-lanzamiento-de-las-air-jordan%C2%A013-court-purple-dj5982-015.jpg"  ,
        codigo: "Jr27",
        categoria:"Deportivos",

       },
    

       { 
     
        nombre:"Jordan R13",
        cantida_disponible:1,
        precio: "120.000",
        img: "https://th.bing.com/th/id/OIP.t7xunY1-f7BRyxQxSFb8cAHaHa?rs=1&pid=ImgDetMain"  ,
        codigo: "Jr28",
        categoria:"Deportivos",

       },

       { 
     
        nombre:"Jordan R13",
        cantida_disponible:1,
        precio: "120.000",
        img:"https://cdn.shopify.com/s/files/1/0746/5359/files/414571-164-PHSRH000-2000_480x480.png"  ,
        codigo: "Jr29",
        categoria:"Deportivos",

       },

       { 
     
        nombre:"Jordan R13",
        cantida_disponible:1,
        precio: "120.000",
        img: "https://th.bing.com/th/id/OIP.oSp7E_SQAStGx9vzn0mbXwHaHa?w=700&h=700&rs=1&pid=ImgDetMain",
        codigo: "Jr30",
        categoria:"Deportivos",

       },
       { 
     
        nombre:"Puma bmw",
        cantida_disponible:1,
        precio: "70.000",
        img: "https://th.bing.com/th/id/OIP.H_zeb0p8nuiH3qzXkH8MVAAAAA?pid=ImgDet&w=183&h=183&c=7" ,
        codigo: "Pb31",
        categoria:"Clasicas",

       },
       { 
     
        nombre:"Puma bmw",
        cantida_disponible:1,
        precio: "70.000",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/306869/02/sv01/fnd/EEA/fmt/png" ,
        codigo: "Pb32",
        categoria:"Clasicas",

       },
       { 
     
        nombre:"Puma bmw",
        cantida_disponible:1,
        precio: "70.000",
        img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/9985913c-4522-453a-8beb-98d41ee0e444.1d36c283eeed1297c75eaf3f7342280c.jpeg" ,
        codigo: "Pb33",
        categoria:"Clasicas",

       },
       { 
     
        nombre:"adidas supermax",
        cantida_disponible:1,
        precio: "60.000",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bd8f7ae244774097a60bab0300bea8de_9366/Tenis_Superstar_UNISEX_Negro_EF5394_01_standard.jpg" ,
        codigo: "As34",
        categoria:"Clasicas",

       },
       { 
     
        nombre:"adidas supermax",
        cantida_disponible:1,
        precio: "60.000",
        img: "https://th.bing.com/th/id/OIP.L2WwL2gt7rGPm4bL1Ma29AHaHa?w=500&h=500&rs=1&pid=ImgDetMain" ,
        codigo: "As35",
        categoria:"Clasicas",

       },
       { 
     
        nombre:"Adidas Zamba",
        cantida_disponible:1,
        precio: "90.000",
        img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/4c70105150234ac4b948a8bf01187e0c_9366/Tenis_Samba_OG_Negro_B75807_01_standard.jpg" ,
        codigo: "Az36",
        categoria:"Clasicas",

       },
       { 
         
        nombre:"Adidas Zamba",
        cantida_disponible:1,
        precio: "90.000",
        img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4f828e8d13044c484a0f3e617b1d80f_9366/Tenis_Samba_Premium_Gris_IE4957_01_standard.jpg"  ,
        codigo: "Az37",
        categoria:"Clasicas",

       },
       { 
     
        nombre:"Adidas Zamba",
        cantida_disponible:1,
        precio: "90.000",
        img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb4fe70570824a5993f305aca11473de_9366/Tenis_Samba_Verde_IG1242_01_standard.jpg"  ,
        codigo: "Az38",
        categoria:"Clasicas",

       },

       
       { 
         
        nombre:"Adidas Zamba",
        cantida_disponible:1,
        precio: "90.000",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4a46e180c40643c8b436af9c017a4615_9366/Tenis_Samba_adidas_Originals_Verde_ID2054_01_standard.jpg" ,
        codigo: "Az39",
        categoria:"Clasicas",
       },
       
       { 
         
        nombre:"Adidas Zamba",
        cantida_disponible:1,
        precio: "90.000",
        img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Blanco_B75806_01_standard.jpg"  ,
        codigo: "Az40",
        categoria:"Clasicas",

       }
           

];




let productosFiltrados = productos;
let productosCargados = 40;
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para cargar los productos
function cargarProductos() {
  const contenedor = document.getElementById('productos');
  const nuevosProductos = productosFiltrados.slice(0, productosCargados);

  nuevosProductos.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'producto';
    tarjeta.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}" width="100%">
      <h3>${producto.nombre}</h3>
      <p>Precio: COP ${producto.precio}</p>
      <p>Código: ${producto.codigo}</p>
      <button onclick="verDetalle('${producto.codigo}')">Ver Detalle</button>
    `;
    contenedor.appendChild(tarjeta);
  });
}

// Función para cargar más productos cuando el usuario se desplaza al final de la lista
function cargarMasProductos() {
  const totalProductos = productosFiltrados.length;

  if (productosCargados < totalProductos) {
    productosCargados = Math.min(productosCargados + 15, totalProductos);
    cargarProductos();
  } else {
    alert('No hay más productos disponibles');
  }
}

// Evento de scroll para cargar más productos al llegar al final de la lista
document.getElementById('productos').addEventListener('scroll', (e) => {
  const contenedor = e.target;
  if (contenedor.scrollTop + contenedor.clientHeight >= contenedor.scrollHeight) {
    // Llamar a cargar más productos solo si quedan productos disponibles
    if (productosCargados < productosFiltrados.length) {
      cargarMasProductos;
    }
  }
});

function verDetalle(codigo) {
  const producto = productos.find(p => p.codigo === codigo);
  const detalleInfo = document.getElementById('detalleInfo');
  detalleInfo.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}" width="100%">
    <h3>${producto.nombre}</h3>
    <p>Precio: COP ${producto.precio}</p>
    <p>Código: ${producto.codigo}</p>
    <p>Categoría: ${producto.categoria}</p>
    <p>Cantidad Disponible: ${producto.cantida_disponible}</p>
    <label for="cantidad">Cantidad:</label>
    <input type="number" id="cantidad_${producto.codigo}" min="1" max="${producto.cantida_disponible}" value="">
    <button onclick="agregarAlCarrito('${producto.codigo}')">Agregar al Carrito</button>
  `;
  document.getElementById('verDetalle').style.display = 'block';
}

function agregarAlCarrito(codigo) {
  const producto = productos.find(p => p.codigo === codigo);
  const cantidad = parseInt(document.getElementById(`cantidad_${codigo}`).value);

  if (!cantidad || cantidad <= 0 || cantidad > producto.cantida_disponible) {
    alert('Ingrese una cantidad válida');
    return;
  }

  const productoEnCarrito = carrito.find(p => p.codigo === codigo);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad += cantidad;
  } else {
    carrito.push({ ...producto, cantidad });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert('Producto agregado al carrito');
}

function filtrarProductos() {
  const categoria = document.getElementById('categoria').value;
  const nombreProducto = document.getElementById('nombreProducto').value.toLowerCase();

  productosFiltrados = productos.filter(p => {
    return (
      (categoria === '' || p.categoria.toUpperCase() === categoria.toUpperCase()) &&
      (nombreProducto === '' || p.nombre.toLowerCase().includes(nombreProducto))
    );
  });

  productosCargados = 40;
  document.getElementById('productos').innerHTML = '';
  cargarProductos();
}

function limpiarFiltros() {
  document.getElementById('categoria').value = '';
  document.getElementById('nombreProducto').value = '';
  productosFiltrados = productos;
  productosCargados = 40;
  document.getElementById('productos').innerHTML = '';
  cargarProductos();
}

function cancelarCompra() {
  window.location.href = 'registro.html'; 
}

function completarCompra() {
  window.location.href = 'carrito.html';
}

// Inicializar carga de productos al cargar la página
window.onload = cargarProductos;
