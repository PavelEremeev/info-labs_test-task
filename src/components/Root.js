import React from 'react';
import RootElement from './RootElement';
import './Root.css'

function Root({data}) {
    console.log(data)
    return (
        <aside className='aside'>
            <div className='aside__wrapper'>
            {data.map((elem, i) => <RootElement props={elem} key={i}/>)}
            </div>  
        </aside>
    );
}

export default Root;


// По хорошему здесь нужно делать рекурсию и вызов компонента изнутри для отрисовки, 
// но я не понимаю как это сделать когда вложенные поля все разные.

// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// const items = [
//   {
//     id: 1,
//     name: "Папка 1",
//     values: [
//       {
//         id: 2,
//         name: "Подпапка 1",
//         values: [
//           {
//             id: 3,
//             name: "Подпапка 2"
//           },
//           {
//             id: 4,
//             name: "Подпапка 3",
//             values: []
//           }
//         ]
//       },
//       {
//         id: 5,
//         name: "Папка 2",
//         values: []
//       }
//     ]
//   }
// ];

// function ListItem({ item }) {
//   let children = null;
//   if (item.values && item.values.length) {
//     children = (
//       <ul>
//         {item.values.map(i => (
//           <ListItem item={i} key={i.id} />
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <li>
//       {item.name}
//       {children}
//     </li>
//   );
// }
