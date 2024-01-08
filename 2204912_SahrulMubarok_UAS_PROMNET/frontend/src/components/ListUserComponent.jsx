import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserService from '../services/UserService';

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      search: '',
      showModal: false,
      userToDelete: null,
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  deleteUser(id) {
    this.openModal(id);
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data == null) {
        this.props.history.push('/add-user/_add');
      }
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push('/add-user/_add');
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  openModal(user) {
    this.setState({
      showModal: true,
      userToDelete: user,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      userToDelete: null,
    });
  }

  confirmDelete() {
    const id = this.state.userToDelete.id;

    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
        showModal: false,
        userToDelete: null,
      });
    });
  }

  render() {
    const filteredUsers = this.state.users.filter((user) =>
      user.nama.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4" style={{ textShadow: '2px 2px 4px #000000' }}>
          DAFTAR PASIEN
        </h2>
        <div className="row mb-3">
          <div className="col-md-6">
            <button className="btn btn-primary" onClick={this.addUser}>
              Tambah Pasien
            </button>
          </div>
          <div className="col-md-6 text-right">
            <input
              type="text"
              placeholder="Cari berdasarkan nama"
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
        <table className="table table-striped table-bordered bg-white">
          <thead>
            <tr>
              <th className="text-center">Nama</th>
              <th className="text-center">Usia</th>
              <th className="text-center">Alamat</th>
              <th className="text-center">Jenis Kelamin</th>
              <th className="text-center">Deskripsi</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="text-center">{user.nama}</td>
                <td className="text-center">{user.usia}</td>
                <td className="text-center">{user.alamat}</td>
                <td className="text-center">{user.jenis_kelamin}</td>
                <td className="text-center">{user.deskripsi}</td>
                <td className="text-center">
                  <button
                    onClick={() => this.editUser(user.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => this.deleteUser(user)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => this.viewUser(user.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Apakah Anda yakin ingin menghapus data pasien{' '}
            {this.state.userToDelete && this.state.userToDelete.nama}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Batal
            </Button>
            <Button variant="danger" onClick={this.confirmDelete}>
              Hapus
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ListUserComponent;
