import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'


// var appkey = "demo13_1545210570249";



// async function fetchAllStudents(){
//     var stus = await fetch("https://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
//     .then(resp=>resp.json()).then(resp=>resp.data)
//     return stus;
// }

let ractDom = <div>
                <App/>
              </div>

function render(){

   // const studs = await fetchAllStudents();
    ReactDOM.render(ractDom, document.getElementById('root'));

}

render();





