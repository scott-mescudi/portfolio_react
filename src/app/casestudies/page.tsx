import stegano from "@/public/portfolio/stegano.svg";
import Image from "next/image";
import Link from "next/link";



const SteganoCaseStudy = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Link
          className="h-fit w-full"
          target="_blank"
          href={"https://github.com/scott-mescudi/stegano"}
        >
          <div className="relative bg-neutral-950 overflow-hidden rounded-t-lg w-full h-[25vh]">
            <Image
              className="absolute z-10 -top-40"
              src={stegano}
              alt="Stegano GitHub Repository"
            />
          </div>
        </Link>
        <div className="w-full p-8 overflow-hidden rounded-b-lg mb-5 bg-[#050505]">
          <h1 className="text-white text-3xl font-bold">
            Stegano: The Fastest Steganography Library Built in Go
          </h1>
          <p className="text-white/60 text-lg mt-4">
            <strong className="text-white">Stegano</strong> is a
            high-performance, feature-rich{" "}
            <strong className="text-white">Golang</strong> library for
            steganography. It supports{" "}
            <strong className="text-white">
              image and audio file encoding
            </strong>{" "}
            using{" "}
            <strong className="text-white">
              LSB (Least Significant Bit) encoding
            </strong>{" "}
            and{" "}
            <strong className="text-white">
              Variable Depth Encoding (VBE)
            </strong>
            . Additional features include{" "}
            <strong className="text-white">
              Reed-Solomon (RSS) error correction
            </strong>
            , <strong className="text-white">compression</strong>, and{" "}
            <strong className="text-white">AES-256 encryption</strong> for
            enhanced security.
          </p>

          <h2 className="text-white text-2xl font-bold mt-6">
            Why I Built This Project
          </h2>
          <p className="text-white/60 text-lg mt-2">
            Steganography has always fascinated me—the idea of hiding
            information in plain sight is like a{" "}
            <strong className="text-white">digital magic trick</strong>. As
            AI-generated images and deepfake concerns rise, steganography can
            provide hidden watermarks for artists to protect their work. The{" "}
            <strong className="text-white">Golang ecosystem</strong> lacked
            modern, well-optimized steganography libraries, inspiring me to
            create <strong className="text-white">Stegano</strong>.
          </p>

          <h2 className="text-white text-2xl font-bold mt-6">
            Development Process
          </h2>
          <p className="text-white/60 text-lg mt-2">
            I built this project from the ground up while managing school,
            hobbies, and daily life. Initially, I had zero knowledge of
            steganography beyond challenges from HackTheBox. To learn, I:
          </p>
          <ul className="list-disc list-inside text-white/60 text-lg mt-2">
            <li>Asked ChatGPT to explain steganography in simple terms.</li>
            <li>Read multiple blogs and research papers.</li>
          </ul>
          <p className="text-white/60 text-lg mt-2">
            My first version of Stegano was slow, messy, and lacked proper
            testing. I put the project on hold, but later restarted with a clear
            focus on{" "}
            <strong className="text-white">performance and efficiency</strong>.
          </p>

          <h2 className="text-white text-2xl font-bold mt-6">
            Competitor Analysis
          </h2>
          <p className="text-white/60 text-lg mt-2">
            I analyzed existing{" "}
            <strong className="text-white">
              Golang steganography libraries
            </strong>
            , focusing on{" "}
            <strong className="text-white">
              performance, ease of use, and features
            </strong>
            . Here’s how <strong className="text-white">Stegano</strong>{" "}
            compares:
          </p>
          <table className="text-white/60 text-lg mt-4 border-collapse border border-white/10 w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-white/10">Library</th>
                <th className="px-4 py-2 border-b border-white/10">
                  Avg Time (ms/op)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-white/10">Stegano</td>
                <td className="px-4 py-2 border-b border-white/10">350.39</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10">
                  Stegano (Concurrent)
                </td>
                <td className="px-4 py-2 border-b border-white/10">287.17</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10">
                  auyer/steganography
                </td>
                <td className="px-4 py-2 border-b border-white/10">1,410.97</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-white text-2xl font-bold mt-6">Key Features</h2>
          <ul className="list-disc list-inside text-white/60 text-lg mt-2">
            <li>
              <strong className="text-white">
                75% faster encoding/decoding
              </strong>{" "}
              than existing libraries.
            </li>
            <li>
              <strong className="text-white">
                Fully concurrent processing
              </strong>{" "}
              for large files.
            </li>
            <li>
              <strong className="text-white">
                Supports both image and audio steganography
              </strong>
              .
            </li>
            <li>
              <strong className="text-white">
                Integrated Reed-Solomon error correction
              </strong>{" "}
              for data integrity.
            </li>
          </ul>

          <h2 className="text-white text-2xl font-bold mt-6">Final Thoughts</h2>
          <p className="text-white/60 text-lg mt-2">
            After launching on Reddit,{" "}
            <strong className="text-white">Stegano</strong> quickly gained
            traction, amassing{" "}
            <strong className="text-white">146K views</strong> in the first 72
            hours. The feedback was overwhelmingly positive, and users suggested
            additional features, which I incorporated into the project. Now,
            Stegano is a robust, high-performance steganography library designed
            to be the go-to solution for Golang developers.
          </p>
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
