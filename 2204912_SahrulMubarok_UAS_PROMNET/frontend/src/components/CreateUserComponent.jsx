import React, { Component } from "react";
import Modal from "react-modal";
import UserService from "../services/UserService";
import { FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nama: "",
      usia: 0,
      alamat: "",
      jenis_kelamin: "L",
      deskripsi: "",
      modalIsOpen: false,
    };

    this.changeNama = this.changeNama.bind(this);
    this.changeUsia = this.changeUsia.bind(this);
    this.incrementUsia = this.incrementUsia.bind(this);
    this.decrementUsia = this.decrementUsia.bind(this);
    this.changeAlamat = this.changeAlamat.bind(this);
    this.changeJenisKelamin = this.changeJenisKelamin.bind(this);
    this.changeDeskripsi = this.changeDeskripsi.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          nama: user.nama,
          usia: user.usia,
          alamat: user.alamat,
          jenis_kelamin: user.jenis_kelamin,
          deskripsi: user.deskripsi,
        });
      });
    }
  }

  toggleModal() {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  }

  saveOrUpdateUser(e) {
    e.preventDefault();
    let user = {
      nama: this.state.nama,
      usia: this.state.usia,
      alamat: this.state.alamat,
      jenis_kelamin: this.state.jenis_kelamin,
      deskripsi: this.state.deskripsi,
    };

    console.log("user => " + JSON.stringify(user));

    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.toggleModal();
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.toggleModal();
      });
    }
  }

  changeNama(event) {
    this.setState({ nama: event.target.value });
  }

  changeUsia(event) {
    this.setState({ usia: event.target.value });
  }

  incrementUsia() {
    this.setState((prevState) => ({ usia: prevState.usia + 1 }));
  }

  decrementUsia() {
    this.setState((prevState) => ({ usia: prevState.usia - 1 }));
  }

  changeAlamat(event) {
    this.setState({ alamat: event.target.value });
  }

  changeJenisKelamin(event) {
    this.setState({ jenis_kelamin: event.target.value });
  }

  changeDeskripsi(event) {
    this.setState({ deskripsi: event.target.value });
  }

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Tambah Pasien</h3>;
    } else {
      return <h3 className="text-center">Update Pasien</h3>;
    }
  }

  render() {
    return (
      <div>
        <br />
        <div className="container mt-4">
          <div className="card">
            <div className="card-header bg-primary text-white">
              {this.getTitle()}
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Nama: </label>
                  <input
                    placeholder="Nama"
                    name="nama"
                    className="form-control"
                    value={this.state.nama}
                    onChange={this.changeNama}
                  />
                </div>
                <div className="form-group">
                  <label> Usia: </label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={this.decrementUsia}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      placeholder="Usia"
                      name="usia"
                      className="form-control"
                      value={this.state.usia}
                      onChange={this.changeUsia}
                      style={{ width: '70px', textAlign: 'center', margin: '0 10px' }}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={this.incrementUsia}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label> Alamat: </label>
                  <input
                    placeholder="Alamat"
                    name="alamat"
                    className="form-control"
                    value={this.state.alamat}
                    onChange={this.changeAlamat}
                  />
                </div>
                <div className="form-group">
                  <label> Jenis Kelamin: </label>
                  <select
                    name="jenis_kelamin"
                    className="form-control"
                    value={this.state.jenis_kelamin}
                    onChange={this.changeJenisKelamin}
                  >
                    <option value="L">Laki-Laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label> Deskripsi: </label>
                  <input
                    placeholder="Deskripsi"
                    name="deskripsi"
                    className="form-control"
                    value={this.state.deskripsi}
                    onChange={this.changeDeskripsi}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.saveOrUpdateUser}
                >
                  Tambah
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Batal
                </button>
              </form>
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          contentLabel="Notifikasi Penambahan Pengguna"
          style={{
            content: {
              width: '25%',
              height: '23%',
              margin: 'auto',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '20px'
            }
          }}
        >
          <div>
            <FaCheckCircle style={{ color: "green", fontSize: "2em" }} />
            <h2 style={{ fontSize: '1.2em', margin: '10px' }}>
              Berhasil!
            </h2>
            <button
              className="btn btn-success"
              onClick={() => {
                this.toggleModal();
                this.props.history.push("/users");
              }}
              style={{ marginTop: "10px" }}
            >
              OK
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateUserComponent;
