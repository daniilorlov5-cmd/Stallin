/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Facts } from "./components/Facts";
import { Certificates } from "./components/Certificates";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cw-bg text-cw-dark selection:bg-cw-dark selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Facts />
        <Certificates />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
