import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Resourcecard from "../components/Resourcecard";

export default function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />
      <Resourcecard
          Image="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          name="STL"
          author="@striver"
          difficulty="Intermediate"
      />
    </div>
  );
}
