import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">Home</Link>
    </>
  );
}
