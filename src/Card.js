import React from 'react';
import CardContent from './CardContent';
import { IonCol } from '@ionic/react';


const Card = () => {
 
    return(
      <>
     
  {
    CardContent.map((item,index,key)=>{
      
      return (
        <IonCol size='4'>
          <img src={item.imgsrc} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </IonCol>
      )
    })
  }
   </>
  )
  
}

export default Card
