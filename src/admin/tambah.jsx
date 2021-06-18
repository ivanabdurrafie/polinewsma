import React, { Component } from "react";
import Navbar from "./navbar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from "axios";

export default class Tambah extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      isi: null,
      title: null,
      image: null,
      topic: null,
      publisher: null,
    };
  }
  componentDidMount() {
    const url = "http://localhost:8000/api/news";
    axios
      .get(url)
      .then((news) => {
        console.log(news.data);
        this.setState({
          news: news.data,
        });
      });
  }

  saveData(e){
    const url = "http://localhost:8000/api/news/create";
    const news =  {
      isi: this.state.isi,
      title: this.state.title,
      image: this.state.image,
      topic: this.state.topic,
      publisher: this.state.publisher,
    }
    axios
      .post(url, news)
      .then(
        this.props.history.push('/dashboard')
      )
  }
    render() {
      return (
        <div className="container">
          <Navbar/>
          <h1 className='mt-3'>Input data Berita</h1>
          <Card.Header>
          <div className='mt-3' style={{ textAlign: "left" }}>
          <Form method="post" onSubmit={ (e) => this.saveData(e) }>
              <h2 className="mt-3">Isi Berita</h2>
              <Form.Control 
                type="text" 
                placeholder="Masukan Isi Berita" 
                name="isi"
                onChange={ (e) => {
                  this.setState({isi: e.target.value})
                }}
              />
              <h2 className="mt-3">Judul</h2>
              <Form.Control 
                type="text" 
                placeholder="Masukan Judul" 
                name="title"
                onChange={ (e) => {
                  this.setState({title: e.target.value})
                }}
              />
              <h2 className="mt-3">Gambar</h2>
              <Form.Control 
                type="text" 
                placeholder="Masukan Gambar" 
                name="image"
                onChange={ (e) => {
                  this.setState({image: e.target.value})
                }}
              />
              <h2 className="mt-3">Topik</h2>
              <Form.Control 
                type="text" 
                placeholder="Masukan Topik" 
                name="topic"
                onChange={ (e) => {
                  this.setState({topic: e.target.value})
                }}
              />
              <h2 className="mt-3">Publisher</h2>
              <Form.Control 
                type="text" 
                placeholder="Masukan Publisher" 
                name="publisher"
                onChange={ (e) => {
                  this.setState({publisher: e.target.value})
                }}
              />
              <Button className="mt-3" variant="primary" type="submit">
                  Tambah
              </Button>
            </Form>
          </div>
          </Card.Header>
        </div>
      );
    }
  }