const channel = [
    {
      tipo: "TV",
      nombre: "TVN de Chile",
      numero: "25",
      multicast:[
        {adsl: "239.255.2.79"},
        {fca: "239.255.5.79 / Cncp 239.255.3.73 / Tmco 239.255.3.79"},
        {mpeg4: "239.255.3.47"},
      ],
      criticidad: "1",
      bw: 3.5,
      imagen:
        "https://www.anatel.cl/wp-content/uploads/2020/12/tvn-logo_rojo.png",
    },
    {
      tipo: "TV",
      nombre: "Megavision",
      numero: "26",
      multicast:[
        {adsl: "239.255.2.77"},
        {fca: "239.255.3.77"},
        {mpeg4: "239.255.2.145"},
      ],
      criticidad: "1",
      bw: 3.5,
      imagen:
        "https://www.anatel.cl/wp-content/uploads/2017/05/logo_mega_para_anatel.jpg",
    },
    {
      tipo: "TV",
      nombre: "Chilevision",
      numero: "27",
      multicast:[
        {adsl: "239.255.2.76"},
        {fca: "239.255.5.76"},
        {mpeg4: "239.255.3.148"},
      ],
      criticidad: "1",
      bw: 3.5,
      imagen:
        "https://www.anatel.cl/wp-content/uploads/2018/03/logo_chv_2018.png",
    },
    {
      tipo: "TV",
      nombre: "UCTV Canal 13",
      numero: "28",
      multicast:[
        {adsl: "239.255.2.78"},
        {fca: "239.255.5.78"},
        {mpeg4: "239.255.3.155"},
      ],
      criticidad: "1",
      bw: 3.5,
      imagen:
        "https://www.anatel.cl/wp-content/uploads/2017/05/nuevo-logo-canal-13.png",
    },
    {
      tipo:"radio",
      nombre: "ROCKANDPOP",
      numero: "975",
      multicast:[
        {adsl: "239.255.3.136"},
        {fca: "239.255.3.136"},
        {mpeg4: "239.255.3.136"},
      ],
      criticidad: "4",
      bw: 0.4,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Rockandpop.jpg"
    },
    {
      tipo: "radio",
      nombre: "RADIO PLAY FM",
      numero: "976",
      multicast:[
        {adsl: "239.255.3.135"},
        {fca: "239.255.3.135"},
        {mpeg4: "239.255.3.135"},
      ],
      criticidad: "4",
      bw: 0.4,
      imagen:"https://platform-static.cdn.mdstrm.com/player/thumbnail/618d39e1ce63690826c95990.png"
    },
    {
      tipo: "radio",
      nombre: "FM DOS",
      numero: "977",
      multicast:[
        {adsl: "239.255.3.132"},
        {fca: "239.255.3.132"},
        {mpeg4: "239.255.3.132"},
      ],
      criticidad: "4",
      bw: 0.4,
      imagen:"https://envivo.fmdos.cl/build/assets/fmdos/img/logo.png"
    },
    {
      tipo: "radio",
      nombre: "ADN",
      numero: "978",
      multicast:[
        {adsl: "239.255.3.138"},
        {fca: "239.255.3.138"},
        {mpeg4: "239.255.3.61"},
      ],
      criticidad: "4",
      bw: 0.4,
      imagen:"https://envivo.adnradio.cl/build/assets/adncl/images/img/logo-web.png"
    },
    {
      tipo: "radio",
      nombre: "TIEMPO",
      numero: "979",
      multicast:[
        {adsl: "239.255.3.61"},
        {fca: "239.255.3.61"},
        {mpeg4: "239.255.3.61"},
      ],
      criticidad: "4",
      bw: 0.4,
      imagen:"https://top-radio.org/wp-content/uploads/logo/SYuQF5eUPW.jpg"
    },
    {
      tipo: "radio",
      nombre: "BEETHOVEN",
      numero: "980",
      multicast:[
        {adsl: "239.255.3.60"},
        {fca: "239.255.3.60"},
        {mpeg4: "239.255.3.60"},
      ],
      criticidad: "4",
      bw: 0.4,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_Radio_Beethoven_2020.jpg"
    },
    {
      tipo: "radio",
      nombre: "FUTURO",
      numero: "981",
      multicast:[
        {adsl: "239.255.3.59"},
        {fca: "239.255.3.59"},
        {mpeg4: "239.255.3.59"},
      ],
      adsl: "239.255.3.59",
      fca: "239.255.3.59",
      mpeg4: "239.255.3.59",
      criticidad: "4",
      bw: 0.4,
      imagen:"https://recursosweb.prisaradio.com/fotos/original/010003039131.png"
    },
    {
      tipo: "radio",
      nombre: "Bio Bio Nacional",
      numero: "982",
      multicast:[
        {adsl: "239.255.2.139"},
        {fca: "239.255.2.139"},
        {mpeg4: "239.255.2.139"},
      ],
      criticidad: "4",
      bw: 0.4,
      imagen:"https://elfiltrador.com/wp-content/uploads/2019/11/67804366_1291831630998194_7338809927185465344_n.png"
    },
  ];  
  

/* console.log(data) */

const data = channel.map(element=> {
  const main_card = document.querySelector('.principal');
  const card = document.createElement('div');
  card.classList= ('card-principal');
  main_card.appendChild(card);
  const cardHeader = document.createElement('div');
  cardHeader.classList = ('card-header');
/*Cabecera de la tarjeta */
  const titulo = document.createElement('h2');
  titulo.classList = ('titulo__cabecera')
  titulo.textContent = `${element.nombre}`;
  card.appendChild(cardHeader);
  cardHeader.appendChild(titulo)
/*Numero de canal*/
const numero = document.createElement('p');
numero.classList = ('numero__canal')
numero.textContent = `${element.numero}`
card.appendChild(numero)

/*cuerpo de la tarjeta con la imagen*/
  const bodyCard = document.createElement('div');
  bodyCard.classList = ('picture');
  card.appendChild(bodyCard);
/*Se genera la imagen*/
  const imagen = document.createElement('img');
  imagen.src = `${element.imagen}`;
  imagen.alt = `logo ${element.nombre}`;
  bodyCard.appendChild(imagen);
 
/*Card Footer */
const footerCard = document.createElement('div');
footerCard.classList = ('cardFooter');
footerCard.textContent = `Señal de ${element.tipo}`
card.appendChild(footerCard)
})



/*Funciones */

/*Función buscar por numero*/