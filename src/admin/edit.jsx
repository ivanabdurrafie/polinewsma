import React, { Component } from "react";
import Navbar from "./navbar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from "axios";

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      isi: '',
      title: '',
      image: '',
      topic: '',
      publisher: '',
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const url = `http://localhost:8000/api/news/${id}`;
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
    const id = this.props.match.params.id;
    const url = `http://localhost:8000/api/news/update/${id}`;
    const news =  {
      isi: this.state.news.isi,
      title: this.state.news.title,
      image: this.state.news.image,
      topic: this.state.news.topic,
      publisher: this.state.news.publisher,
    }
    axios
      .put(url, news)
      .then(
        this.props.history.push('/dashboard')
      )
  }

  handleChange = e => {
    e.persist();
  
    this.setState(prevState => ({
      news: { ...prevState.item,  [e.target.name]: e.target.value }
    }))
  }
  
    render() {
      return (
        <div className="container">
          <Navbar/>
          <h1 className='mt-3'>Input data Berita</h1>
          <Card.Header>
          <div className='mt-3' style={{ textAlign: "left" }}>
          {/* {this.state.news.map((berita) => {
                return ( */}
                    <Form method="post" onSubmit={ (e) => this.saveData(e) }>
                    <h2 className="mt-3">Isi Berita</h2>
                    <Form.Control 
                      type="text" 
                      placeholder="Masukan Isi Berita" 
                      name="isi"
                      value={this.state.news.isi}
                      onChange={this.handleChange}
                    />
                    <h2 className="mt-3">Judul</h2>
                    <Form.Control 
                      type="text" 
                      placeholder="Masukan Judul" 
                      name="title"
                      value={this.state.news.title}
                      onChange={this.handleChange}
                    />
                    <h2 className="mt-3">Gambar</h2>
                    <Form.Control 
                      type="text" 
                      placeholder="Masukan Gambar" 
                      name="image"
                      value={this.state.news.image}
                      onChange={this.handleChange}
                    />
                    <h2 className="mt-3">Topik</h2>
                    <Form.Control 
                      type="text" 
                      placeholder="Masukan Topik" 
                      name="topic"
                      value={this.state.news.topic}
                      onChange={this.handleChange}
                    />
                    <h2 className="mt-3">Publisher</h2>
                    <Form.Control 
                      type="text" 
                      placeholder="Masukan Publisher" 
                      name="publisher"
                      value={this.state.news.publisher}
                      onChange={this.handleChange}
                    />
                    <Button className="mt-3" variant="primary" type="submit">
                        Tambah
                    </Button>
                  </Form>
                {/* );
              })} */}
          
          </div>
          </Card.Header>
        </div>
      );
    }
  }