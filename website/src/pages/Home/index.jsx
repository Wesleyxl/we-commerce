import { Modal } from "antd";
import React, { useState } from "react";

import ProfileImg from "../../assets/wesley-logo.png";
import { Container, Profile, Search } from "./styles";

function Home() {
  const [search, setSearch] = useState();

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Profile>
        <div className="left">
          <div className="img">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="text">
            <p>Bom Dia</p>
            <h2>Wesley Alves</h2>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="/">f</a>
            </li>
            <li>
              <a href="/">n</a>
            </li>
          </ul>
        </div>
      </Profile>

      <Search>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={showModal}>
          filter
        </button>
        <Modal
          title="Select filter"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Search>
    </Container>
  );
}

export default Home;
