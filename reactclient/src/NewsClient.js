import React from 'react';
import axios from 'axios';
import { ListGroup } from "react-bootstrap";

var apikey = "INSERT YOUR APIKEY HERE";
 var url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey}`


export default class NewsClient extends React.Component {

      state = {
        url: {url},
        data: []
      };
    
    componentDidMount = () => {
      axios.get(url)
        .then(res => {
          var response = res.data;
          console.log([response.articles][0])
          console.log([response.articles][0].length)
          this.setState({data: [response.articles][0]})  
          console.log(this.state.data)
        })}
  
    render() {
    
      const title = this.state.data.map(s=>
        <ListGroup>
        <ListGroup.Item>{s.title}</ListGroup.Item>
        <ListGroup.Item>{s.content}</ListGroup.Item>
        </ListGroup>)
      return (
        <div>{title}</div>
      );
    }
  }
  
  