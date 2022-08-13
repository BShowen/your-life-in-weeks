import React from "react";
import { Image } from "react-bootstrap";
import kurzgesagtLogo from "../images/kurzgesagt-logo.webp";
import { GoMarkGithub } from "react-icons/go";
import { Navbar, Stack } from "react-bootstrap";

export default function NavBrand() {
  return (
    <Navbar.Brand className="d-block d-lg-block text-light d-flex flex-column pt-2 pb-2 m-0 w-100">
      <Stack gap={2}>
        <div className="d-flex flex-row align-items-center">
          <div style={{ minWidth: "2.5rem" }}>
            <a
              href="https://www.kurzgesagt.org/about/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={kurzgesagtLogo}
                alt="Kurzgesagt-logo"
                fluid
                style={{ height: "2rem" }}
              />
            </a>
          </div>
          <p className="p-0 m-0 fs-6">Inspired by Kursgesagt </p>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div style={{ minWidth: "2.5rem" }}>
            <a
              href="https://www.github.com/BShowen"
              rel="noreferrer"
              target="_blank"
            >
              <GoMarkGithub
                style={{ height: "1.9rem", width: "2.0rem", marginRight: "" }}
              />
            </a>
          </div>
          <p className="p-0 m-0 fs-6">Created by Bradley Showen</p>
        </div>
      </Stack>
    </Navbar.Brand>
  );
}
