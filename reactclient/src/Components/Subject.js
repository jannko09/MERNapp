import React from 'react';
import moment from 'moment';
import "moment/locale/fi";


const Subject = (props) =>
  <tr>
    {/*import {Animated} from "react-animated-css";
<Animated animationIn="tada" animationOut="pulse" isVisible={false}></Animated>*/}
    <td>{props.comment.kommentti}</td> 
    <td>{moment(props.comment.created_at).format("LT")}</td>
    {/* <td>{props.subject.body}</td> */}
  </tr>

  export default Subject