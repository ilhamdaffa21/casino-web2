import React from "react";
import{Carousel}from 'react-responsive-carousel';
import './sport.css';

function Sport(){
    return(
    <div>
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showStatus={false}>
                  <div>
                      <img src={`https://api2-fa7.tr8ngames.com/images/id_cbd_7931b48d-44e8-4b1a-a1d4-cd25a355d33b_1612248817453.jpg`} />
                  </div>
        </Carousel>
       <div className="content">
           <div className="match1">
                <div className="matchtitle">Match 1</div>
                <div className="matchlogo">
                    <img className="logo" src={`https://cdn.mos.cms.futurecdn.net/TKek356qqsbof4L2GedFWY-970-80.jpg.webp`} />
                    <p className="text">VS</p>
                    <img className="logo" src={`https://cdn.mos.cms.futurecdn.net/YA3tjv8MS9nQQShL2ikCWc-970-80.jpg.webp`} />
                </div>
           </div>
           <div className="match2">
                <div className="matchtitle">Match 2</div>
                <div className="matchlogo">
                    <img className="logo" src={`https://cdn.mos.cms.futurecdn.net/ti3NpeQ8NZSTUcDT5tFpfe-970-80.jpg.webp`} />
                    <p className="text">VS</p>
                    <img className="logo" src={`https://cdn.mos.cms.futurecdn.net/apNX5V7ebRnUZNgEw8CzQP-970-80.jpg.webp`} />
               </div>
           </div>
       </div>
       <div className="game">
           
               <img className="gameimg" src={`https://nx-cdn.trgwl.com/Images/nexus-alpha/red/desktop/providers/icons/sports/TFGAMING.webp?v=20220128`} />
               <img className="gameimg" src={`https://nx-cdn.trgwl.com/Images/nexus-alpha/red/desktop/providers/icons/sports/SBOVIRTUALGAMES.webp?v=20220128`} />
               <img className="gameimg" src={`https://nx-cdn.trgwl.com/Images/nexus-alpha/red/desktop/providers/icons/sports/PPVIRTUALGAMES.webp?v=20220128`} />
               <img className="gameimg" src={`https://nx-cdn.trgwl.com/Images/nexus-alpha/red/desktop/providers/icons/sports/IBCSPORTS.webp?v=20220128`} />
               <img className="gameimg" src={`https://nx-cdn.trgwl.com/Images/nexus-alpha/red/desktop/providers/icons/sports/PINNACLE.webp?v=20220128`} />
               <img className="gameimg" src={`https://nx-cdn.trgwl.com/Images/nexus-alpha/red/desktop/providers/icons/sports/SBO.webp?v=20220128`} />
        </div>
    </div>
    );
}

export default Sport;