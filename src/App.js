import './App.css';

import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
const alldata=[
  {
    sname:"Farm to Foreign Exports Entrepreneur Development Multi State Cooperative Society Ltd",
    sadd:"H.No. 6-9, Gundugolanu(P.O), Bhimadole (Mandal), Andhra Pradesh-534427",
    state:"ANDHRA PRADESH",
    dist:"WEST GODAVARI",
    dor:"1/16/2020",
    aoo:"Haryana, UttarPradesh, Himachal, Punjab",
    stype:"Agro"
},
{
  sname:"Dharitri Jute and Eco Friendly Products Multi State Cooperative Society Ltd",
  sadd:"D.No.12-2-42111, Alapati Nagar, Gudimalkapur, Hyderabad-500028, Telangana",
  state:"TELANGANA",
  dist:"ADILABAD",
  dor:"12/12/2019",
  aoo:"Bihar, West bengal, Odisha",
  stype:"Agro"
},
{
  sname:"The Malabar Multi State Agro Cooperative Society Limited",
  sadd:"1st Floor, Aiswarya Complex, Thavakkara, Kannur, Kerala- 670002",
  state:"KERALA",
  dist:"KANNUR",
  dor:"10/20/2019",
  aoo:"Haryana, Punajb",
  stype:"Agro"
}
,
{
  sname:"Sai Raam Multi State Agri Cooperative Society Ltd",
  sadd:"No.6. (D-18), 6th Cross West Extension, Thillai Nagar, Trichy, Tamil Nadu-620008",
  state:"TAMIL NADU",
  dist:"DHARMAPURI",
  dor:"10/20/2019",
  aoo:"Manipur, Meghalaya",
  stype:"Agro"
}
,
{
  sname:"Prabhavana Multi State Womens’ Jute and Allied Fibre Products Cooperative Society Ltd",
  sadd:"House. No 2-2-647/G/18/1, Near Shivam Road, DD Colony, Hyderabad, Telangana 500013",
  state:"TELANGANA",
  dist:"ADILABAD",
  dor:"10/20/2019",
  aoo:"Haryana, Punajb",
  stype:"Agro"
}
,
{
  sname:"The Gayatri Cooperative Urban Bank Ltd",
  sadd:"1st Floor, Aiswarya Complex, Thavakkara, Kannur, Kerala- 670002",
  state:"UTTAR PRADESH",
  dist:"KANNUR",
  dor:"10/20/2019",
  aoo:"Haryana, Punajb",
  stype:"Agro"
}
,

]
let state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Delhi"
]

const options=[
  {
    label:"Andhra Pradesh",
    value:"Andhra Pradesh"
  },
  {
    label:"Arunachal Pradesh",
    value:"Arunachal Pradesh"
  },
  {
    label:"Assam",
    value:"Assam"
  },
  {
    label:"Bihar",
    value:"Bihar"
  },
  {
    label:"Chhattisgarh",
    value:"Chhattisgarh"
  },
  {
    label:"Goa",
    value:"Goa"
  },
  {
    label:"Gujarat",
    value:"Gujarat"
  },
  {
    label:"Haryana",
    value:"Haryana"
  },
  {
    label:"Himachal Pradesh",
    value:"Himachal Pradesh"
  },
  {
    label:"Jammu and Kashmir",
    value:"Jammu and Kashmir"
  },
  {
    label:"Jharkhand",
    value:"Jharkhand"
  },
  {
    label:"Karnataka",
    value:"Karnataka"
  },
  {
    label:"Kerala",
    value:"Kerala"
  },
  {
    label:"Madhya Pradesh",
    value:"Madhya Pradesh"
  },
  {
    label:"Maharashtra",
    value:"Maharashtra"
  },
  {
    label:"Manipur",
    value:"Manipur"
  },
  {
    label:"Meghalaya",
    value:"Meghalaya"
  },
  {
    label:"Mizoram",
    value:"Mizoram"
  },
  {
    label:"Nagaland",
    value:"Nagaland"
  },
  {
    label:"Odisha",
    value:"Odisha"
  },
  {
    label:"Punjab",
    value:"Punjab"
  },
  {
    label:"Rajasthan",
    value:"Rajasthan"
  },

  {
    label:"Sikkim",
    value:"Sikkim"
  },
  {
    label:"Tamil Nadu",
    value:"Tamil Nadu"
  },
  {
    label:"Telangana",
    value:"Telangana"
  },
  {
    label:"Tripura",
    value:"Tripura"
  },
  {
    label:"Uttarakhand",
    value:"Uttarakhand"
  },
  {
    label:"Uttar Pradesh",
    value:"Uttar Pradesh"
  },
  {
    label:"West Bengal",
    value:"West Bengal"
  },
  {
    label:"Delhi",
    value:"Delhi"
  }
]
function App(){
  const [freq,setfreq]=useState([]);
  const heading=["SOCIETY NAME",'SOCIETY ADDRESS',"STATE","DISTRICT","DATE OF REGISTRATION","AREA OF OPERATION","SECTOR TYPE"];
  const [Data,setdata]=useState(alldata);
  const [selstate,setselst]=useState([]);
  useEffect(()=>{
    state.map((a)=>{
      let x=a.toUpperCase();
      localStorage.setItem(JSON.stringify(x),'flase');
    })
  },[])
  const [curdata,setcurdata]=useState({
    sname:"",
    sadd:"",
    state:"",
    dist:"",
    dor:"",
    aoo:"",
    stype:""
  })
  
  const selectstate=(e)=>{
       const val=e.target.value;
       let x=val.toUpperCase();
      if(localStorage.getItem(JSON.stringify(x))==='true'){
          localStorage.setItem(JSON.stringify(x),'false')
      }
      else{
        localStorage.setItem(JSON.stringify(x),'true');
      }
  }
  const checkdata=()=>{
       
       let x= new Promise((resolve,err)=>{
        let arr=[]
        state.map((a)=>{
          let x1=a.toUpperCase();
          if(localStorage.getItem(JSON.stringify(x1))==='true'){
            //console.log(a,localStorage.getItem(JSON.stringify(a+"fre")))
            arr.push(x1);
          }
         })
         resolve(arr);
       })
       x.then((resolve)=>{
            setselst(resolve);
       })
       let fre=new Promise((resolve,err)=>{
          let arr=[];
          state.map((a)=>{
            let x=a.toUpperCase();
            if(localStorage.getItem(JSON.stringify(x))==='true'){
            return arr.push(JSON.parse(localStorage.getItem(JSON.stringify(x+"fre"))));
            }
           })
           resolve(arr);
       })
       fre.then((resolve)=>{
        setfreq(resolve);
       })
  }

 
  useEffect(()=>{
    state.map((a)=>{
      let x=a.toUpperCase();
      localStorage.setItem(JSON.stringify(x+"fre"),'0');
    })
    Data.map((a)=>{
      let val=a.state;
      let x=val.toUpperCase();
     let ans= JSON.parse(localStorage.getItem(JSON.stringify(x+"fre")));
     ans++;
    // console.log(ans,"freq");
     localStorage.setItem(JSON.stringify(x+"fre"),JSON.stringify(ans));
   })
   let arr=new Promise ((resolve,err)=>{
    let y=[]
    state.map((a)=>{
      let x=a.toUpperCase();
         if(localStorage.getItem(JSON.stringify(x))==='true'){
        y.push(JSON.parse(localStorage.getItem(JSON.stringify(x+"fre"))));
         }
     })
     resolve(y)
   })
   arr.then((resolve)=>{
      console.log(resolve);
      setfreq(resolve);
     })
  },[Data])
  const handleinput=(e)=>{
       const naam=e.target.name;
       const val=e.target.value;
       //console.log(naam ,val);
       let x={...curdata};
       if(naam==="sname"){
          x.sname=val;
           setcurdata(x);
           //console.log(curdata);
       }
       else if(naam==='sadd'){
        x.sadd=val;
        setcurdata(x);
       }
       else if(naam==="state"){
        x.state=val;
        setcurdata(x);
       }
       else if(naam==='dist'){
        x.dist=val;
        setcurdata(x);
       }
       else if(naam==="dor"){
        x.dor=val;
        setcurdata(x);
       }
       else if(naam==="aoo"){
        x.aoo=val;
        setcurdata(x);
       }
       else if(naam==='stype'){
        x.stype=val;
        setcurdata(x);
       }
  }
    const handlesubmit=(e)=>{
      e.preventDefault();
         const arr=[...Data,curdata];
         setdata(arr);
        
    }
  return (
   <> 
 
    <div className='dataform'>
      <form onSubmit={handlesubmit} className='form1'>
      <div className='form-input'>Society Name :
      <input type="text" name="sname" placeholder='Society name' value={curdata.sname} onChange={handleinput}  required /></div>
      <br/>
      <div className='form-input'>Society Address:
      <input type="text" name="sadd" placeholder='Society Address' value={curdata.sadd} onChange={handleinput} required  /></div>
      <br/>
      <div className='form-input'>State :
        <select id='selectst' name="state" onClick={handleinput}>
         {
            options.map((opt)=>{
             
              let y=opt.label
              y=y.toUpperCase()
              return <option value={opt.value}>{y}</option>
            })
         }
      </select>
      </div>
      <br/>
      <div className='form-input'>District :
      <input type="text" name="dist" placeholder='District' value={curdata.dist} onChange={handleinput} required /></div>
      <br/>
      <div className='form-input'>Date of registration :
      <input type="text" name="dor" placeholder='Date of registration' value={curdata.dor} onChange={handleinput} required  /></div>
      <br/>
      <div className='form-input'>Area of Operation :
      <input type="text" name="aoo" placeholder='Area of operation' value={curdata.aoo} onChange={handleinput} required  /></div>
      <br/>
      <div className='form-input'>Sector type :
      <input type="text" name="stype" placeholder='Sector Type' value={curdata.stype} onChange={handleinput} required  /></div>
      
      <br/>
      <input  id="button-one" type='submit'/>
      </form>
      </div>
    <hr/>
    <div className='cont'>
        <table className='tabledata'>
        {
            <tr>
            {
           heading.map((a)=>{
              return <th>
                  {a}
              </th>
           })
          }
           </tr>
        }
         {   
        Data.map((a)=>{
           return <>
           <tr>
            <td> { a.sname}</td>
            <td> { a.sadd}</td>
            <td> { a.state}</td>
            <td>  { a.dist}</td>
            <td>  { a.dor}</td>
            <td>  { a.aoo}</td>
            <td>  { a.stype}</td>
            </tr>
           </>
        })
      
      }
        </table>
        </div>

     <hr/>
     <div className='statecont'>
               {
                state.map((a)=>{
                  let x=a.toUpperCase()
                   return<div className='stateelements'> <label  id={a}><input  type='checkbox' value={x} onClick={selectstate} /> {x} </label></div>
                })
               }
     </div>
             <button id="find-button" onClick={checkdata}>Draw Chart</button>

        <hr/>
        <Chart
         type='bar'
         width={1000}
         height={500}
         series={
          [
            {
              name:"CRCS Dashboard",
              data:[...freq]
            }
          ]
         }
         options={
          {
            title:{text:"Dashboard for CRCS Portal",
          style:{fontSize:50}},
          colors:['#f90000'] ,
          xaxis:{
            categories:[...selstate]
          }
          }
         }
        />             
   </>
  );
}

export default App;
