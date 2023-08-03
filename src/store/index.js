import { proxy } from "valtio";

// proxy from valtio makes managing state for animations easier

const state = proxy({
  intro: true, // is the user on the home page or not?
  color: "#efbd48",
  isLogoTexture: true, // is the logo visible on the shirt?
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
