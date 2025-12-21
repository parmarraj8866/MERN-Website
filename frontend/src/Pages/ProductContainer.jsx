import React, { useEffect, useState } from "react";
import Api from "../Api/Api";

export default function ProductContainer(props) {
  const [clothes, setClothes] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [clearAll, setClearAll] = useState("clearAll");
  const [price2, setprice2] = useState(0);
  const [category, setCategory] = useState(`${props.name}`);

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
  async function add({ name, category, color, size, price, discount, gender }) {
    await Api.post("/api/orderclothes", {
      name,
      category,
      color,
      size,
      price,
      discount,
      gender,
    });
  }

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
        className="position-fixed top-0 start-0 vh-100 border-end bg-light pt-5"
        style={{ width: "280px" }}
      >
        <div className="p-4 mt-5">
          <h4 className="fw-normal text-capitalize mb-4">{title} : </h4>

          <div className="mb-4">
            <h6 className="fw-semibold mb-2">Category : </h6>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="shirt"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label">Shirt</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="pants"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label">Pants</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="jacket"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label">Jacket</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                value="denim"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label className="form-check-label">Denim</label>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="fw-semibold mb-2">Price : </h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setprice2(1500);
                  } else {
                    setprice2(0);
                  }
                }}
              />
              <label className="form-check-label">Below ₹1500</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setprice2(3000);
                  } else {
                    setprice2(0);
                  }
                }}
              />
              <label className="form-check-label">₹1500 - ₹3000</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setprice2(3001);
                  } else {
                    setprice2(0);
                  }
                }}
              />
              <label className="form-check-label">Above ₹3000</label>
            </div>
          </div>

          <div className="mb-4">
            <h6 className="fw-semibold mb-2">Gender : </h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("all");
                  } else {
                    ("");
                  }
                }}
              />
              <label className="form-check-label">All</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("Men");
                  }
                }}
              />
              <label className="form-check-label">Men</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("Female");
                  } else {
                    ("");
                  }
                }}
              />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                onChange={(e) => {
                  if (e.target.checked) {
                    setGender("Unisex");
                  } else {
                    ("");
                  }
                }}
              />
              <label className="form-check-label">Unisex</label>
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

      <div style={{ marginLeft: "300px" }} className=" w-100 ">
        <div className="py-3" >
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
                <div className="shadow-sm border p-3 fadeInEffect">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{ele.name}</h5>

                    <p className="my-1 text-muted">Category: {ele.category}</p>

                    <p className="mb-1">Color: {ele.color}</p>
                    <p className="mb-1">Gender : {ele.gender}</p>

                    <p className="mb-1">Size: {ele.size?.toUpperCase()}</p>

                    <div>
                      <span className="text-decoration-line-through text-muted me-1">
                        ₹{ele.price}
                      </span>
                      <span className="fw-semibold text-success fs-5">
                        ₹{totalPrice(ele.price, ele.discount)}
                      </span>
                    </div>

                    <small className="text-danger">{ele.discount}% OFF</small>
                  </div>

                  <div className="card-footer bg-white border-0 mt-2">
                    <div className="d-flex gap-2">
                      <button
                        onClick={() =>
                          add({
                            name: ele.name,
                            category: ele.category,
                            color: ele.color,
                            size: ele.size,
                            price: ele.price,
                            discount: ele.discount,
                            gender: ele.gender,
                          })
                        }
                        className="btn btn-success btn-sm"
                      >
                        Add to Cart
                      </button>
                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>

                      {/* <button className="btn btn-warning btn-sm">Edit </button> */}
                      {/* <button
                      onClick={() => trash(ele._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove{" "}
                    </button> */}
                      <a href="/home" className="btn btn-dark btn-sm">
                        Back{" "}
                      </a>

                      {/* <button className="btn btn-dark btn-sm">View Details</button> */}

                      {/* <button className="btn btn-warning btn-sm">Edit Order</button> */}
                      {/* <button className="btn btn-danger btn-sm">Remove Order</button> */}
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
