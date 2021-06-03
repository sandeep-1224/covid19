import React, {useEffect,useState} from 'react';


const Covid = () => {
    const [data,setData] = useState([]);

    const getCoidData =  async () => {

        try {

        
        const res = await fetch(' https://api.covid19india.org/data.json');
        const actualData= await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        }  catch(error){
            console.log(error);
        }


    }

    useEffect(() =>{ 
        getCoidData();

    },[]);



    return (
               <>

               
               <section>
                 <div className="container">
                   <h1 className="text-center text-capitalize pt-4">  live covid cases</h1>
                   <hr className="w-25 mx-auto"></hr>
                 </div>
               </section>
               <section>
                 <div className="container">
                   <div className="row text-center">
                   <div className="col-lg-4 col-md-4 col-12">
                     <div className=" card text-white bg-primary mb-3" >
                       <div className="card-body">
                         <h5 className="card-title text-center"> our COUINTRY</h5>
                         <p className="card-text text-center">INDIA</p>
                       </div>
                     </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-12">
                     <div className=" card text-white bg-primary mb-3" >
                       <div className="card-body">
                         <h5 className="card-title text-center"> total RECOVERED</h5>
                         <p className="card-text text-center">{data.recovered}</p>
                       </div>
                     </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-12">
                     <div className=" card text-white bg-primary mb-3" >
                       <div className="card-body">
                         <h5 className="card-title text-center"> total CONFIRED</h5>
                         <p className="card-text text-center">{data.confirmed}</p>
                       </div>
                     </div>
                     </div>
                     </div>
                     </div>
                     </section>
                     <section>

                     <div className="container">
                       <div className="row">
                     <div className="col-lg-4 col-md-4 col-12">
                     <div className=" card text-white bg-primary mb-3" >
                       <div className="card-body">
                         <h5 className="card-title text-center"> total DEATH</h5>
                         <p className="card-text text-center">{data.deaths}</p>
                       </div>
                     </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-12">
                     <div className=" card text-white bg-primary mb-3" >
                       <div className="card-body">
                         <h5 className="card-title text-center"> total active</h5>
                         <p className="card-text text-center">{data.active}</p>
                       </div>
                     </div>
                     </div>
                     <div className="col-lg-4 col-md-4 col-12">
                     <div className=" card text-white bg-primary mb-3" >
                       <div className="card-body">
                         <h5 className="card-title text-center"> last UPDATEED</h5>
                         <p className="card-text text-center">{data.lastupdatedtime}</p>
                       </div>
                     </div>
                     </div>
                   
                   
                     </div>
                     </div>
                     </section>

 
 </> 
    );
};

export default Covid;