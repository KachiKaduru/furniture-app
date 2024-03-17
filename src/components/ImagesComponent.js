import Chair1 from "../images/chairs/Bromley Arm Chair.jpg";
import Chair2 from "../images/chairs/Cult 70's Arm Chair.png";
import Chair3 from "../images/chairs/Maland Rattan Arm Chair.jpeg";
import Chair4 from "../images/chairs/Poliframe Tuflin Chair.png";
import Chair5 from "../images/chairs/Relax-chair.png";
import Chair6 from "../images/chairs/Sofa Chair.png";
import Chair7 from "../images/chairs/Upholstered Wood Arm Chair.jpg";
import Chair8 from "../images/chairs/rocking-chair.png";

import Table1 from "../images/tables/Center Room Table.jpg";
import Table2 from "../images/tables/Z Shaped Table.jpg";
import Table3 from "../images/tables/Computer Wooden Table.jpeg";
import Table4 from "../images/tables/Gaming Table.jpg";
import Table5 from "../images/tables/Mahogany Dining Table.jpg";
import Table6 from "../images/tables/Round Single Leg Table.jpg";
import Table7 from "../images/tables/Children Table with chair.jpg";

import Sofa1 from "../images/sofas/Single Sofa Chair.jpg";
import Sofa2 from "../images/sofas/aspen-single-sofa-bed-denim-blue.jpg";
import Sofa3 from "../images/sofas/kendal-single-sofabed.jpeg";
import Sofa4 from "../images/sofas/single-seater-sofa.jpeg";
import Sofa5 from "../images/sofas/sleeper-sofa-bed.jpg";
import Sofa6 from "../images/sofas/sudut-sofa-3-seater.jpeg";
import Sofa7 from "../images/sofas/teak-wood-one seater-sofa.jpg";
import Sofa8 from "../images/sofas/velvet-single-sofa-chair.jpg";

import Lamp1 from "../images/lamps/Andre-table-lamp.jpg";
import Lamp2 from "../images/lamps/airnasa-modern-karkace-table-lamp.jpg";
import Lamp3 from "../images/lamps/bedroom-table-lamp.jpg";
import Lamp4 from "../images/lamps/circo-arc-bronze-floor-lamp.jpeg";
import Lamp5 from "../images/lamps/fozig-green-table-lamp.jpg";
import Lamp6 from "../images/lamps/modern-LED-bedside-table-lamps.jpg";
import Lamp7 from "../images/lamps/rothfels-tripod-floor-lamp.jpeg";

export const chairItems = [
  { id: 1, liked: false, price: 75, name: "Bromley Arm Chair", source: Chair1 },
  { id: 2, liked: false, price: 94, name: "Cult 70's Arm Chair", source: Chair2 },
  { id: 3, liked: false, price: 82, name: "Maland Rattan Arm Chair", source: Chair3 },
  { id: 4, liked: false, price: 60, name: "Poliframe Tuflin Chair", source: Chair4 },
  { id: 5, liked: false, price: 42, name: "Relax Chair", source: Chair5 },
  { id: 6, liked: false, price: 44, name: "Sofa Chair", source: Chair6 },
  { id: 7, liked: false, price: 75, name: "Wooden Arm Chair", source: Chair7 },
  { id: 8, liked: false, price: 70, name: "Rocking-Chair", source: Chair8 },
];

export const tableItems = [
  { id: 1, liked: false, price: 120, source: Table1, name: "Center Room Table" },
  { id: 2, liked: true, price: 95, source: Table2, name: "Z Shaped Table" },
  { id: 3, liked: false, price: 100, source: Table3, name: "Computer Wooden Table" },
  { id: 4, liked: false, price: 102, source: Table4, name: "Gaming Table" },
  { id: 5, liked: false, price: 140, source: Table5, name: "Mahogany Dining Table" },
  { id: 6, liked: false, price: 60, source: Table6, name: "Round Single Leg Table" },
  { id: 7, liked: false, price: 95, source: Table7, name: "Children Table with chair" },
];

export const sofaItems = [
  { id: 1, liked: false, price: 65, source: Sofa1, name: "Single Sofa Chair" },
  { id: 2, liked: false, price: 80, source: Sofa2, name: "Aspen Single Sofa Bed" },
  { id: 3, liked: false, price: 80, source: Sofa3, name: "Kendal Single Sofabed" },
  { id: 4, liked: false, price: 55, source: Sofa4, name: "Single Seater Sofa" },
  { id: 5, liked: false, price: 110, source: Sofa5, name: "Sleeper Sofa Bed" },
  { id: 6, liked: false, price: 120, source: Sofa6, name: "Sudut Sofa Three-Seater" },
  { id: 7, liked: false, price: 75, source: Sofa7, name: "Teak Wood One-Seater Sofa" },
  { id: 8, liked: false, price: 70, source: Sofa8, name: "Velvet Single Sofa Chair" },
];

export const lampItems = [
  { id: 1, liked: false, price: 52, source: Lamp1, name: "Andre Table-lamp" },
  { id: 2, liked: false, price: 70, source: Lamp2, name: "Airnasa Modern Karkace Table Lamp" },
  { id: 3, liked: false, price: 60, source: Lamp3, name: "Bedroom Table Lamp" },
  { id: 4, liked: false, price: 52, source: Lamp4, name: "Circo Arc Bronze Floor Lamp" },
  { id: 5, liked: false, price: 57, source: Lamp5, name: "Fozig Green Table Lamp" },
  { id: 6, liked: false, price: 70, source: Lamp6, name: "Modern LED Bedside Table Lamps" },
  { id: 7, liked: false, price: 67, source: Lamp7, name: "Rothfels Tripod Floor Lamp" },
];

export default function ImagesComponent() {
  return <h1>Images component</h1>;
}
