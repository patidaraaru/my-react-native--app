
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import './App.css';

import Test from './Test';



function App(props) {
 
  return (
    <div className="App">
    <IonGrid>
      <IonRow>
          {/* <Card/> */}
          <Test />
      </IonRow>
    </IonGrid>
    </div>
  );
}

export default App;
