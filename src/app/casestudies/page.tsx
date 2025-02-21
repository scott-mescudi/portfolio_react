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
        <div className="w-full p-5 overflow-hidden bg-[#050505] ">
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Stegano: The Fastest Steganography Library Built in Go
          </p>
          <p className="text-white/60  text-[clamp(1rem,1vw,2rem)]">
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
          <hr className="opacity-15 my-4"></hr>
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Why I Built This Project
          </p>
          <p className="text-white/60  text-[clamp(1rem,1vw,2rem)]">
            Why <strong>steganography</strong>? Simply put—I{" "}
            <strong>love</strong> the idea of hiding information in plain sight.
            There’s something inherently <strong>fascinating</strong> about
            embedding data within an image or an audio file, leaving no visible
            trace. It’s like a <strong>digital magic trick</strong>. Beyond
            personal interest, <strong>steganography</strong> is becoming
            increasingly important in today’s world of AI-generated images and
            deepfake concerns. <strong>Artists</strong>, for instance, can embed{" "}
            <strong>hidden watermarks</strong> in their work to differentiate it
            from AI-generated content. Despite its relevance, I found that the{" "}
            <strong>Golang ecosystem</strong> lacked modern, well-optimized
            steganography libraries—most were either outdated, inefficient, or
            missing crucial features. That’s what inspired me to create{" "}
            <strong>Stegano</strong>.
          </p>
          <hr className="opacity-15 my-4"></hr>
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Development Process
          </p>
          <div className="w-full h-fit flex flex-col">
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              I developed this project entirely on my own—handling everything
              from writing the core code, designing the API, and implementing
              tests, all while juggling school, hobbies, and daily life.
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              My main goal was to create a library that was significantly{" "}
              <strong className="text-white">faster</strong> than existing
              alternatives while making full use of Golang’s concurrency model.
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              However, when I first started, I had zero knowledge of how{" "}
              <strong className="text-white">steganography</strong> actually
              worked—just a vague idea from HackTheBox challenges and a general
              curiosity about information security.
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              So, I dedicated an entire weekend to deep research:
            </p>
            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] list-disc pl-6 mb-4">
              <li>
                <strong className="text-white">Asked ChatGPT</strong> to explain
                steganography in simple terms.
              </li>
              <li>
                <strong className="text-white">Read multiple blogs</strong>,
                explored Reddit discussions, and struggled through a research
                paper on Sudoku-based steganography: Steganography Using Sudoku
                Puzzle.
              </li>
            </ul>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              After all that reading, I built my first version of Stegano—and,
              honestly, it was <strong className="text-white">terrible</strong>.
            </p>
            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] list-disc pl-6 mb-4">
              <li>
                The code was <strong className="text-white">messy</strong>,{" "}
                <strong className="text-white">slow</strong>, and barely
                functional.
              </li>
              <li>
                No <strong className="text-white">tests</strong>.
              </li>
              <li>
                The image decoding process was{" "}
                <strong className="text-white">awful</strong>, only working with
                PNG files and failing miserably on other formats.
              </li>
            </ul>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)]">
              Feeling frustrated, I put the project on hold for a while.
            </p>
          </div>
          
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
