import Particles from "react-tsparticles";
import particlePreset from "./particlePreset";

interface IParticleProps {
  preset: "star" | "link" | "custom";
  customPreset?: any;
}

export const Particle = ({ preset, customPreset }: IParticleProps) => {
  if (preset === "custom") {
    return <Particles options={customPreset} />;
  } else {
    return <Particles options={particlePreset[preset]} />;
  }
};
