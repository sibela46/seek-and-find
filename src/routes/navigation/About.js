import React from 'react';
import me from '../../routes/img/Az.jpg'

export default class About extends React.Component {
  render () {
    return (
    <div>
      <h1>За мен</h1>
      <img src = {me} alt = "me" width = "300" height = "550"/>
      <p>Обичам да пътувам.</p>
    </div>
   );
 }
};
