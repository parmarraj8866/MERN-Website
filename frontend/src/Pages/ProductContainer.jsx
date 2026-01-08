import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { NavLink } from "react-router-dom";

export default function ProductContainer(props) {
  console.log("PROP", props);
  const [clothes, setClothes] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [clearAll, setClearAll] = useState("clearAll");
  const [price2, setprice2] = useState(null);
  const [category, setCategory] = useState(`${props.name}`);
  const URL = import.meta.env.VITE_IMAGE_URL;
  async function getClothes() {
    const res = await Api.get("/api/clothes");
    setClothes(res.data.clothes);
  }

  function totalPrice(price, discount) {
    const p = (price * discount) / 100;
    const finalPrice = Number(price) - p;
    return finalPrice;
  }

  let title = props.name;

  const filterData = clothes
    .filter((ele) => ele.category.toLowerCase() === category.toLowerCase())
    .filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
    .filter((ele) => {
      const finalPrice = ele.price - (ele.price * ele.discount) / 100;

      if (price2 === 0) {
        return true;
      }
      if (price2 === 1500) {
        return finalPrice <= 1500;
      }
      if (price2 === 3000) {
        return finalPrice >= 1500 && finalPrice <= 3000;
      }
      if (price2 === 3001) {
        return finalPrice > 3000;
      }

      return true;
    })
    .filter((ele) => {
      if (gender === "" || gender === "all") {
        return true;
      }

      return ele.gender.toLowerCase() === gender.toLowerCase();
    })
    .filter(() => {
      if (clearAll == "clearAll") {
        return true;
      }

      return true;
    });

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <div
      className="productContainer mx-1 my-2 p-2 px-4"
      style={{ position: "relative" }}
    >
      <div
        className="position-fixed productContainer2 top-0 start-0 vh-100 border-end bg-light"
        
      >
        <div className=" productContainer2-details">
          <h4 className="fw-normal text-capitalize mb-4">{title} : </h4>

          <div className="mb-2">
            <h6 className="fw-semibold mb-2">Category : </h6>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="shirt"
                id="shirt"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label" htmlFor="shirt">
                Shirt
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="pant"
                id="pant"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label " htmlFor="pant">
                Pants
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="jacket"
                id="jacket"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label" htmlFor="jacket">
                Jacket
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="denim"
                id="denim"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label" htmlFor="denim">
                Denim
              </label>
            </div>
          </div>

          <div className="mb-2">
            <h6 className="fw-semibold mb-2">Price:</h6>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="1500"
                name="price"
                checked={price2 === 1500}
                onChange={() => setprice2(1500)}
              />
              <label className="form-check-label" htmlFor="1500">
                Below ₹1500
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="3000"
                name="price"
                checked={price2 === 3000}
                onChange={() => setprice2(3000)}
              />
              <label className="form-check-label" htmlFor="3000">
                ₹1500 - ₹3000
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="above3000"
                name="price"
                checked={price2 === 3001}
                onChange={() => setprice2(3001)}
              />
              <label className="form-check-label" htmlFor="above3000">
                Above ₹3000
              </label>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="fw-semibold mb-2">Gender : </h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderAll"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("all");
                  } else {
                    ("");
                  }
                }}
              />
              <label className="form-check-label" htmlFor="genderAll">
                All
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderMen"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("Men");
                  }
                }}
              />
              <label className="form-check-label" htmlFor="genderMen">
                Men
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderWomen"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("Women");
                  } else {
                    ("");
                  }
                }}
              />
              <label className="form-check-label" htmlFor="genderWomen">
                Women
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderUnisex"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("Unisex");
                  } else {
                    ("");
                  }
                }}
              />
              <label className="form-check-label" htmlFor="genderUnisex">
                Unisex
              </label>
            </div>
          </div>

          <button
            onClick={() => {
              setSearch(""),
                setGender("all"),
                setClearAll("clearAll"),
                setprice2(0),
                setCategory(`${props.name}`);
            }}
            className="btn btn-dark w-100"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div  className=" w-100 productContainer-right">
        <div className="py-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Product..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <div className="d-flex flex-wrap gap-3 fadeInEffect">
            {filterData?.map((ele, index) => (
              <div key={index}>
                <div className="shadow-sm border p-3 fadeInEffect text-center">
                  <img
                    className="mb-3 border rounded"
                    style={{
                      width: "100%",
                      maxWidth: "250px",
                      height: "250px",
                      objectFit: "contain",
                    }}
                    src={`${URL}/${ele.cloth_image[0]}`}
                    alt={ele.name}
                  />

                  <div className="card-body p-0 text-start">
                    <h6 className="card-title text-capitalize mb-1">
                      {ele.name}
                    </h6>

                    <small className="text-muted d-block">
                      Category: {ele.category}
                    </small>

                    <small className="d-block">Color: {ele.color}</small>
                    <small className="d-block">Gender: {ele.gender}</small>
                    <small className="d-block">
                      Size: {ele.size?.toUpperCase()}
                    </small>

                    <div className="mt-2">
                      <span className="text-decoration-line-through text-muted me-2">
                        ₹{ele.price}
                      </span>
                      <span className="fw-semibold text-success fs-6">
                        ₹{totalPrice(ele.price, ele.discount)}
                      </span>
                    </div>

                    <small className="text-danger">{ele.discount}% OFF</small>
                  </div>

                  <div className="card-footer bg-white border-0 px-0 mt-3">
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      <NavLink
                        to={`/addtocart/${ele._id}`}
                        className="btn btn-success btn-sm"
                      >
                        Add to Cart
                      </NavLink>

                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>

                      <a href="/" className="btn btn-dark btn-sm">
                        Back
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
