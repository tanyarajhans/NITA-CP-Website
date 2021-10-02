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
    </div>
  );
}
