import stegano from "@/public/portfolio/stegano.svg";
import Image from "next/image";

const SteganoCaseStudy = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="relative bg-red-600 overflow-hidden rounded-t-lg w-full h-[25vh]">
          <Image
            className="absolute z-10"
            src={stegano}
            alt="stegano github photo"
          />
        </div>
        <div className="w-full p-5 overflow-hidden bg-[#050505] h-screen">
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Stegano: The Fastest Steganography Library Built in Go
          </p>
          <p className="text-white/50  text-[clamp(1rem,1vw,2rem)]">
            <strong>Stegano</strong> is a fast, feature-rich{" "}
            <strong>Golang</strong> library for steganography. It supports{" "}
            <strong>image and audio file encoding</strong> using{" "}
            <strong>LSB (Least Significant Bit) encoding</strong> and V
            <strong>ariable Depth Encoding (VBE)</strong>. It also includes
            <strong>Reed-Solomon (RSS) error correction</strong>,{" "}
            <strong>compression</strong>, and{" "}
            <strong>AES-256 encryption</strong> for added security. The ultimate
            goal? To become the <strong>go-to steganography library</strong> for
            Go developers who need both <strong>speed and reliability</strong>.
          </p>
          <line></line>
        </div>
      </div>
    </>
  );
};

export default function ProjectCaseStudies() {
  return (
    <>
      <div className="sm:w-2/3 w-5/6 flex flex-col items-center gap-5">
        <SteganoCaseStudy />
      </div>
    </>
  );
}
