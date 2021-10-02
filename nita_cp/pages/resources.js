import React from "react";
import Navbar from "../components/Navbar";
import Resourcecard from "../components/Resourcecard";

function resources() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="flex flex-wrap justify-around"> 
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="STL"
          author="@striver"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="STL"
          author="@striver"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="STL"
          author="@striver"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="STL"
          author="@striver"
          difficulty="Intermediate"
        />
        <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="STL"
          author="@striver"
          difficulty="Intermediate"
        />
      </div>
    </div>
  );
}

export default resources;
