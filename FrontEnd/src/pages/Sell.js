
import React, { Component } from 'react';
import './add.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nav';
import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Select category',
      price: '',
      title: '',
      desc: '',
      quant: '',
      cat: ''
    };
  }

  changeHandler2 = () => {
    this.setState({ category: "Garden Decor" });
  }

  changeHandler1 = () => {
    this.setState({ category: "Plants" });
  }

  changeHandler3 = () => {
    this.setState({ category: "Tools" });
  }

  changeHandler4 = () => {
    this.setState({ category: "Grocery" });
  }

  handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const tok = localStorage.getItem('token');
      console.log("first");
      const detail = {
        p_name: this.state.title,
        details: this.state.desc,
        price: this.state.price,
        category: this.state.cat
        
      };
      const response = await axios.post('http://localhost:8181/api/v1/demo/post', detail, {
        headers: {
          Authorization: `Bearer ${tok}`
        }
      });
      console.log("Response:", response);
      alert("Product added Successfully .... ");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='add-product'>
          <h4 className='add-header'>Add your Product</h4>
          <form className='add-form' onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input required type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
            </div>

            <div className='form-group1' >
              <select required value={this.state.cat} onChange={(e) => this.setState({ cat: e.target.value })}>
                <option disabled selected>Choose Product Category</option>
                <option value="Decor">Garden Decor</option>
                <option value="Plants">Plants</option>
                <option value="Tools">Tools / Equipments</option>
                <option value="Grocery">Grocery</option>
              </select>
            </div>

            <div className="form-group">
              <input type="text" required className="form-control" id="exampleInputPassword1" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} placeholder="Product Price" />
            </div>

            <div className="form-group">
              <input type="text" required className="form-control" id="exampleInputPassword1" placeholder="Product Description" value={this.state.desc} onChange={(e) => this.setState({ desc: e.target.value })} />
            </div>

            <div className="form-group">
              <label style={{ marginBottom: '1%', color: 'gray' }} htmlFor="exampleFormControlFile1">Upload Image</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>

            <button style={{ marginTop: '5%' }} type="submit" className="j-btn btn-success">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default Add;
