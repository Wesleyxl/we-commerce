import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Profile = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 0 15px;

  .left {
    display: flex;
    align-items: center;

    .img {
      margin-right: 10px;
      img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
      }
    }
  }

  .right {
    ul {
      display: flex;
      list-style-type: none;

      li {
        margin: 0 10px;

        a {
          color: #000;
          font-size: 16px;
        }
      }
    }
  }
`;

const Search = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  margin: 15px 0;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    border-radius: 10px;
    border: 1px solid #e7e7e7;
    background: #fafafa;
  }
  button {
    background: none;
    border: none;
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

export { Container, Profile, Search };
