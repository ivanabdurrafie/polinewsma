import React, { Component } from "react";
import Navbar from "./navbar";
import axios from "axios";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    const url = "http://localhost:8000/api/news";
    axios
      .get(url, {
      })
      .then((news) => {
        console.log(news.data);
        this.setState({
          news: news.data,
        });
      });
  }
  
  refreshPage(){      
    window.parent.location = window.parent.location.href; 
  }
  deleteRow(id, e){  
    axios
      .delete(`http://localhost:8000/api/news/delete/${id}`)
      .then(
        this.refreshPage
      );
      
  }  
    render() {
      return (
        <div className="container">
          <Navbar/>
          <div className='mt-3'  style={{ display: "flex" }}>
          <Button href="tambahberita" style={{ marginRight: "auto" }} className='mb-3' variant="primary">Tambah Berita</Button>{' '}
          </div>
          <div className='mt-3'>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Judul</th>
                    <th>Topic</th>
                    <th>Publisher</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {this.state.news.map((berita) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{berita.id}</td>
                        <td>{berita.title}</td>
                        <td>{berita.topic}</td>
                        <td>{berita.publisher}</td>
                        <td>{berita.date}</td>
                        <div>
                          <td>
                              <Button href={`/${berita.id}`} variant="warning">Edit</Button>
                          </td>
                          <td>
                              <Button variant="danger" onClick={(e) => this.deleteRow(berita.id, e)}>Delete</Button>
                          </td>
                        </div>
                        
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
          </div>
        </div>
      );
    }
  }