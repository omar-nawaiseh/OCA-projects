import React from "react";
import "./Profile.css";
import { Table, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./footer";

const emailProfile = localStorage.getItem("emailProfile");
const imageUrlProfile = localStorage.getItem("imageUrlProfile");

const email = localStorage.getItem("email");
const defaultImg = localStorage.getItem("defaultImg");

const orderPrice = sessionStorage.getItem("Total");
const Count = sessionStorage.getItem("productCount");

function deleteOrder() {
  sessionStorage.removeItem("Total");
  sessionStorage.removeItem("productCount");
  // window.location.reload(false);
  document.getElementById("tabel-dev").style.display = "none"
}


function Profile() {
  return (
    <div>
      <div className="main-content">
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "300px",
            backgroundImage: "url(https://wallpaperaccess.com/full/16083.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}>
        </div>
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-12 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="card-profile-image text-center">
                  {localStorage.getItem("imageUrlProfile") ? (
                    <>
                  <img
                    src={imageUrlProfile}
                    className="rounded-circle text-center"
                  />
                    </>
                  ) : (
                    <>
                  <img
                    src={imageUrlProfile}
                    className="rounded-circle text-center"
                  />
                    </>
                  )}
                  <img
                    src={defaultImg}
                    className="rounded-circle text-center"
                  />
                  <br />
                  <br />
                  <br />
                  <br /> <br />
                  <div className="card-body pt-0 pt-md-4">
                    <div className="text-center">
                      <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        Email : {emailProfile} {email}
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 order-xl-1 ">
              <div className="card-header bg-white border-0  ">
                <div className="col-12 ">
                  <h3>My orders</h3>
                </div>
                <div >
                  <Table
                    striped
                    bordered
                    hover
                    responsive="sm"
                    className="table"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>order</th>
                        <th>price</th>
                        <th>Date</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody id="tabel-dev">
                      <tr>
                        <td></td>
                        <td>{Count}</td>
                        <td>{orderPrice}</td>
                        <td></td>
                        <td>
                          <Button onClick={deleteOrder} variant="danger">Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
      <br />
    </div>
  );
}

export default Profile;
