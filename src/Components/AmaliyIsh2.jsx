import React from "react";
import "./App.css";

import { useState } from "react";

function App() {
  const [vaqtT1, setVaqtT1] = useState(""); // t1 vaqt qiymatini saqlash
  const [natijalar, setNatijalar] = useState(null); // Natijalarni saqlash

  const PI = Math.PI; // Pi konstantasi

  // Hisoblash funksiyasi
  const hisobla = () => {
    const t = parseFloat(vaqtT1); // Vaqtni son sifatida olish

    // X va Y koordinatalarini hisoblash
    const koordinataX = -4 * Math.cos((PI * t) / 3);
    const koordinataY = -2 * Math.sin((PI * t) / 3) - 3;

    // X va Y yo‘nalishidagi tezliklar
    const tezlikVx = ((4 * PI) / 3) * Math.sin((PI * t) / 3);
    const tezlikVy = -((2 * PI) / 3) * Math.cos((PI * t) / 3);

    // Umumiy tezlikni hisoblash
    const umumiyTezlikV = Math.sqrt(tezlikVx ** 2 + tezlikVy ** 2);

    // X va Y yo‘nalishidagi urilma tezlanishlar
    const tezlanishAx = ((4 * PI ** 2) / 9) * Math.cos((PI * t) / 3);
    const tezlanishAy = ((2 * PI ** 2) / 9) * Math.sin((PI * t) / 3);

    // Umumiy tezlanishni hisoblash
    const umumiyTezlanishA = Math.sqrt(tezlanishAx ** 2 + tezlanishAy ** 2);

    // Tangensial va normal tezlanishlar
    const tangensialTezlanish = Math.abs(
      (tezlikVx * tezlanishAx + tezlikVy * tezlanishAy) / umumiyTezlikV
    );
    const normalTezlanish = Math.sqrt(
      umumiyTezlanishA ** 2 - tangensialTezlanish ** 2
    );

    // Egrilik radiusini hisoblash
    const egrilikRadiusi = umumiyTezlikV ** 2 / normalTezlanish;

    // Natijalarni yangilash
    setNatijalar({
      koordinataX,
      koordinataY,
      tezlikVx,
      tezlikVy,
      umumiyTezlikV,
      tezlanishAx,
      tezlanishAy,
      umumiyTezlanishA,
      tangensialTezlanish,
      normalTezlanish,
      egrilikRadiusi,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Murodillayev Hojiakbar</h1>
      <input
        type="number"
        placeholder="Vaqtni kiriting (t1)"
        value={vaqtT1}
        onChange={(e) => setVaqtT1(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <button onClick={hisobla} style={{ padding: "5px 15px" }}>
        Hisoblash
      </button>

      {natijalar && (
        <div style={{ marginTop: "20px" }}>
          <h2>Natijalar:</h2>
          <p>X koordinatasi: {natijalar.koordinataX.toFixed(2)} cm</p>
          <p>Y koordinatasi: {natijalar.koordinataY.toFixed(2)} cm</p>
          <p>
            X yo‘nalishidagi tezlik (Vx): {natijalar.tezlikVx.toFixed(2)} cm/s
          </p>
          <p>
            Y yo‘nalishidagi tezlik (Vy): {natijalar.tezlikVy.toFixed(2)} cm/s
          </p>
          <p>Umumiy tezlik (V): {natijalar.umumiyTezlikV.toFixed(2)} cm/s</p>
          <p>
            X yo‘nalishidagi urilma tezlanish (Ax):{" "}
            {natijalar.tezlanishAx.toFixed(2)} cm/s²
          </p>
          <p>
            Y yo‘nalishidagi urilma tezlanish (Ay):{" "}
            {natijalar.tezlanishAy.toFixed(2)} cm/s²
          </p>
          <p>
            Umumiy tezlanish (A): {natijalar.umumiyTezlanishA.toFixed(2)} cm/s²
          </p>
          <p>
            Tangensial tezlanish (At):{" "}
            {natijalar.tangensialTezlanish.toFixed(2)} cm/s²
          </p>
          <p>
            Normal tezlanish (An): {natijalar.normalTezlanish.toFixed(2)} cm/s²
          </p>
          <p>Egrilik radiusi (ρ): {natijalar.egrilikRadiusi.toFixed(2)} cm</p>
        </div>
      )}
    </div>
  );
}

export default App;
