const data = {
  status: "success",
  items: [
    {
      id: 1,
      titulo: "Placa de video GTX 1660 SUPER",
      price: 190000,
      imagen: "https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-nvidia-geforce-gtx-1660-super-gaming-oc-6gb-gddr6-192-bit-gv-n166sgaming-oc-6gd-open-box_99069.png",
      categoria: "Placa de video Gigabyte",
      cantidad: 1,
      descripcion:"Esta placa es utilizada para los mejores videosjuegos de la actualidad"
    },
    {
      id: 2,
      titulo: "Placa de video GTX 3060TI",
      price: 200000,
      imagen: "https://th.bing.com/th/id/OIP.jZV2qDEvHfvQ77AYYPl1vAHaHa?pid=ImgDet&rs=1",
      categoria: "EVGA GTX 3060TI",
    
      cantidad: 1,
      descripcion:"Esta placa es utilizada para los mejores videosjuegos de la actualidad"
    },
    {
      id: 3,
      titulo: "Placa de video GTX 3070TI",
      price: 300000,
      imagen: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-6015288.jpg",
      categoria: "PLACA GTX 3070TI",
      cantidad: 1,
      descripcion:"Esta placa es utilizada para los mejores videosjuegos de la actualidad"
    },
    {
      id: 4,
      titulo: "Placa de Video Asrock RX 570 8GB GDDR5",
      price: 66000,
      imagen: "https://th.bing.com/th/id/R.a866eae2ebd60ef5133b86fe3a0d898b?rik=KMr%2fTsUwyEqD0Q&pid=ImgRaw&r=0",
      categoria: "Asrock RX 570",
      cantidad: 1,
      descripcion:"AMD posee una gama de entrada y media muy potente de gráficas en relación prestaciones/precio. La reina de su catálogo actualmente si no quieres gastar mucho dinero es la Radeon RX 580, aunque hay muchas versiones diferentes y los precios varían en muy poco tiempo. Si la puedes encontrar por menos de 150 euros, es la mejor opción por ese precio"
    },
    {
      id: 5,
      titulo: "Placa de Video XFX Radeon RX 6600 XT 8GB",
      price: 79000,
      imagen: "https://th.bing.com/th/id/OIP.haWbfjclTWs9mcueWc9_LAHaHa?pid=ImgDet&rs=1",
      categoria: "RX 6600 XT",
      cantidad: 1,
      descripcion:"Bajo el paraguas de AMD también hay una solución gráfica de nueva generación para los que buscan lo último de la compañía hardware. Esta Radeon RX 5500 XT, aunque con un consumo algo mayor, ofrece unas prestaciones a la par que la solución anterior de Nvidia. Se trata de la solución más potente de esta gráfica, con 8 GB de memoria GDDR6, perfecta para quienes aspiran a jugar a 1080p con tasas de 60 fps."
    },
    {
      id: 6,
      titulo: "Placa de Video Asrock Radeon RX 6700 XT 12GB GDDR6",
      price: 80285,
      imagen: "https://th.bing.com/th/id/R.d17cac3c094a2e167c2ca2dbb3f781d7?rik=LVaJN5OiZUadBA&pid=ImgRaw&r=0",
      categoria: "RX 6700 XT",
      cantidad: 1,
      descripcion:"Esta placa es utilizada para los mejores videosjuegos de la actualidad"
    },
    {
      id: 7,
      titulo: "Placa de Video XFX Radeon RX 6650 XT 8GB GDDR6",
      price: 111360,
      imagen: "https://th.bing.com/th/id/OIP.6mw0i4hso0GovfA3c1uO7gHaHa?pid=ImgDet&rs=1",
      categoria: "RX 6650 XT",
    
      cantidad: 1,
      descripcion:"Esta placa es utilizada para los mejores videosjuegos de la actualidad"
    },
    {
      id: 8,
      titulo: "Placa de Video MSI GeForce RTX 3090 24GB GDDR6X",
      price: 410000,
      imagen: "https://img.terabyteshop.com.br/produto/g/placa-de-video-msi-geforce-rtx-3090-ventus-3x-24gb-gddr6x-384bit-geforce-rtx-3090-ventus-3x_110666.png",
      categoria: "3090",
      
      cantidad: 1,
      descripcion:"Esta placa es utilizada para los mejores videosjuegos de la actualidad"
    },
    {
      id: 9,
      titulo: "Placa de Video XFX Radeon RX 6700 XT BLACK 12GB",
      price: 410000,
      imagen: "https://th.bing.com/th/id/OIP.Mrd0NA3k0P5WoECTiaGWygHaHa?pid=ImgDet&rs=1",
      categoria: "6700",
      cantidad: 1,
      descripcion:"En el margen de precios por debajo de los 600 euros, la Radeon RX 5700 XT ha demostrado en los benchmarks que, si no aspiramos a sacar todo el partido ahora mismo al Ray Tracing, su rendimiento está a la par en general que las RTX 2060 y 2070 SUPER, pero con un precio sensiblemente inferior, como es el caso de esta versión Sapphire Nitro+ Radeon RX 5700 XT con la que podremos llegar a juegar en 4K superando los 40-50 fps en muchos títulos actuales y exigentes"
    },
    {
      id: 10,
      titulo: "PLACA DE VIDEO GTX 1060TI",
      price: 50000,
      imagen: "https://th.bing.com/th/id/OIP.S4og3N8yviJIUCDWt56qpAHaGi?pid=ImgDet&rs=1",
      categoria: "1060",
      
      cantidad: 1,
      descripcion:"Esta placa es utilizada para los mejores videosjuegos de la actualidad"
    },
    {
      id: 11,
      titulo: "PLACA DE VIDEO GTX 1650 SUPER",
      price: 70000,
      imagen: "https://th.bing.com/th/id/R.983c8e8dbc507a92304cce43826c5127?rik=TFyhfoNSZZkOfQ&riu=http%3a%2f%2fwww.fusionstore.com.ar%2fuploads%2fimages%2f19162_GTX_1650_SUPER_4GB_Gigabyte_OC_1.png&ehk=CdMOSc%2bGM28Z0phALA1PZW5nUlCAbBPtxmMUKqQytZ4%3d&risl=&pid=ImgRaw&r=0",
      categoria: "1650",
      cantidad: 1,
      descripcion:"Si puedes estirar algo más el presupuesto, la anterior tarjeta gráfica de Nvidia tiene una evolución muy bien equilibrada por solo un poco más de desembolso. La Gigabyte GeForce GTX 1650 SUPER Windforce OC con 4 GB de memoria GDDR6 es una gráfica bien refrigerada y con la que sacar partido a las mejoras de la arquitectura Turing sin pasarse de precio. Necesita una fuente de al menos 350 W y usa alimentación de 6 pines."
    },
  ],
};

export default data;