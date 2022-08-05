import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./style.css";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import {Link} from "react-router-dom";

const SearchPage = () => {


  const [clientId, setClientId] = useState(
    "WHCyHYNgLmOimI6sgPhs3YR2SjG-_5vrpoXfsdXtqak"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [id, setId] = useState([]);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function fetchData(event) {
    event.preventDefault();
    if (searchQuery.length < 3) return alert("Fuck off!");

    const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=WHCyHYNgLmOimI6sgPhs3YR2SjG-_5vrpoXfsdXtqak`;

    axios
      .get(url)
      .then((response) => {
        if (!response.data) return alert("No data fetched!");
        setImages(response.data.results);
        console.log(response.data);
      })
      .catch((err) => alert(err));
  }
  return (
    
    <Container>
      <div className="box-parent">
        <form onSubmit={(e) => fetchData(e)}>
          <input
            type="text"
            onChange={handleChange}
            className="input-box"
            placeholder="ENTER YOUR SEARCH TERM"
          />
          <button type="submit" className="search-btn">
            <BiSearch />
          </button>
          <div className="container mt-4"><br />
            <Row>
              {images.map((image) => (
                <Col md={3} style={{padding: "10px 10px"}}>
                    <Card style={{border: ""}}>
                    <img
                      className="card-img"
                      alt="images"
                      style={{height: "180px", objectFit: "cover"}}
                      src={image?.urls?.small}
                    />
                        <Card.Body>
                        <Link to="/caption"><button className="caption-btn">ADD CAPTION</button></Link>
                        </Card.Body>
                    </Card>
                </Col>
              ))}
            </Row>
          </div>
        </form>
      </div>
    </Container>
    
  );
};

export default SearchPage;
