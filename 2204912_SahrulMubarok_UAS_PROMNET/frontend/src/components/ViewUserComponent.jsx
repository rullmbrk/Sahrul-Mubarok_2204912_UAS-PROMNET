import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div className="health-view">
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-primary text-white text-center">
                  <h3>Detail Pasien</h3>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th scope="row" className="bg-light">Nama:</th>
                        <td>{this.state.user.nama}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="bg-light">Usia:</th>
                        <td>{this.state.user.usia}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="bg-light">Alamat:</th>
                        <td>{this.state.user.alamat}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="bg-light">Jenis Kelamin:</th>
                        <td>{this.state.user.jenis_kelamin}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="bg-light">Deskripsi:</th>
                        <td>{this.state.user.deskripsi}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
