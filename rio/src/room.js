import room1_2 from './images/room1-2.jpg'
import room1_3 from './images/bath.webp'
import room1_4 from './images/towel3.jpg'
import room1_5 from './images/room1-5.jpg'
import room1_6 from './images/100.jpg'
import room1_7 from './images/101.jpg'
import room1_8 from './images/102.jpg'
import room1_9 from './images/103.jpg'
import room1_10 from './images/104.jpg'


import room2 from './images/room2.jpg'
import room3 from './images/1.webp'
import room4 from './images/2.jpg'
import room4_2 from './images/3.jpg'
import room4_3 from './images/4.jpg'
import room4_4 from './images/5.jpg'
import room4_5 from './images/6.jpg'
import room4_6 from './images/777.jpg'
import room4_7 from './images/88.jpg'
import room5 from './images/room5.jpg'

import room6 from './images/room7.jpg'
import room7 from './images/room10.jpg'
import room8 from './images/7.jpg'
import room9 from './images/300.jpg'
import room9_1 from './images/301.jpg'
import room9_2 from './images/302.jpg'
import room9_3 from './images/303.jpg'
import room9_4 from './images/304.jpg'
import room9_5 from './images/305.jpg'


import room11 from './images/bathroom-01.jpg'
import room12 from './images/towel.jpeg'
import room13 from './images/200.jpg'
import room14 from './images/201.jpg'
import room15 from './images/202.jpg'
import room16 from './images/203.jpg'
import room17 from './images/204.jpg'
import room18 from './images/205.jpg'
import room19 from './images/206.jpg'


const data=[room1_2,room1_5,room1_4,room1_3,room1_6,room1_7,room1_8,room1_9,room1_10];
const images2=[room4_2,room4_3,room4_5,room2,room3,room4,room5,room4_4,room4_6,room4_7]
const images3=[room6,room7,room8,room9,room9_1,room9_2,room9_3,room9_4,room9_5]
const images4=[room11,room12,room13,room14,room15,room16,room17,room18,room19]

 export default[
    {
        suite:'Junior Suite',
        parag:'Our Junior Suites offer breathtaking views of the city skyline.',
        size:'260 sq ft',
        bed:'2',
        price:'350',
        src:room1_2,
        img:data,
        id:"1",
        accommodates: 2,
        paragraph:'Affordable luxury. Our Junior Suites are the perfect option if you’re looking for a little extra luxury. With an open 400 square foot floor plan, the Junior Suites offer the extra space you need to spread out and enjoy the breathtaking views of the city skyline.'
    },
    {
        suite:'Standart Room',
        parag:'Our Standard Rooms are combination of function and comfort.',
        size:'230 sq ft',
        bed:'1',
        price:'250',
        src:room2,
        img:images2,
        id:"2",
        accommodates: 2,
        icon:<i class="fa-solid fa-spa"></i>,
        icontitle:'Spa',
        paragraph:'Functional and comfortable. Sit back and enjoy one of our brand new 280 square foot Standard Rooms. Complete with courtyard views, stylish decor and natural light, our Standard Rooms are the perfect combination of function and comfort. Ideally suited for today’s business or leisure travelers.'
    },
    {
        suite:'Superior Room',
        parag:'Our Superior Rooms are comfortable, roomy and elegant.',
        size:'270 sq ft',
        bed:'1',
        price:'550',
        src:room6,
        img:images3,
        id:"3",
        accommodates: 2,
        glass:<i class="fa-solid fa-wine-glass"></i>,
        glasstitle:'glass',
        icon:<i class="fa-solid fa-spa"></i>,
        icontitle:'Spa',
        paragraph:'Elegant simplicity. Our Superior Rooms give you the space and privacy you need to work or play on the road. The spacious 380 square foot rooms include an intimate lounge area, business workstation and views of the courtyard. Complete with all the regular amenities, our Superior Rooms also include a daily newspaper and water bottles.'
    },
    {
        suite:'Standart Room',
        parag:'Our Standart Rooms are comfortable, roomy and elegant.',
        size:'280 sq ft',
        bed:'2',
        price:'250',
        src:room13,
        img:images4,
        id:"4",
        accommodates: 2,
        paragraph:' Complete with courtyard views, stylish decor and natural light. Our Superior Rooms give you the space and privacy you need to work or play on the road. The spacious 380 square foot rooms include an intimate lounge area, business workstation and views of the courtyard. Complete with all the regular amenities, our Superior Rooms also include a daily newspaper and water bottles.'
    }
]
