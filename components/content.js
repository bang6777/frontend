import React, { useState, useEffect } from "react";
import FrameHead from "../Frame/FrameHead";
import FrameShoulder from "../Frame/FrameShoulder";
import FramePelvis from "../Frame/FramePelvis";
import FrameHip from "../Frame/FrameHip";
function Content() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <h1>Organs Recognition and 3D Visualization for the Human Body</h1>
        </nav>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="row">
            {/* Area Chart */}
            <div className="col-xl-12 col-lg-12">
              <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Classification
                  </h6>
                </div>
                {/* Card Body */}
                <div className="card-body">
                  <div className="row">
                    <FrameHead />
                    <FrameShoulder />
                  </div>
                  <div className="row">
                    <FrameHip />
                    <FramePelvis />
                  </div>
                </div>
              </div>
            </div>
            {/* Pie Chart */}
          </div>
          {/* Content Row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Bang Anh Nguyen - B1606777</span>
            <span>Linh Chi Nguyen - B1606960</span>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
  );
}

export default Content;
