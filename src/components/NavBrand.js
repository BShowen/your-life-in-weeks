import React from "react";
import { Image } from "react-bootstrap";
import kurzgesagtLogo from "../images/kurzgesagt-logo.webp";
import { GoMarkGithub } from "react-icons/go";

export default function NavBrand() {
  return (
    <div
      className="text-light d-flex flex-column align-items-center justify-content-evenly pt-3"
      style={{ height: "10rem" }}
    >
      <div className="w-75 d-flex flex-row align-items-center justify-content-between">
        <p className="p-0 m-0 fs-6">Inspired by Kursgesagt </p>
        <a
          href="https://www.kurzgesagt.org/about/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src={kurzgesagtLogo}
            alt="Kurzgesagt-logo"
            fluid
            style={{ height: "3rem" }}
          />
        </a>
      </div>
      <div className="w-75 d-flex flex-row align-items-center justify-content-between">
        <p className="p-0 m-0 fs-6">Created by Bradley Showen</p>
        <a
          href="https://www.github.com/BShowen"
          rel="noreferrer"
          target="_blank"
        >
          <GoMarkGithub
            style={{ height: "2.6rem", width: "2.6rem", marginRight: "3px" }}
          />
        </a>
      </div>
    </div>
  );
}
