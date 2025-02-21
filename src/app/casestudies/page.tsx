import { CodeBox } from "@/components/CodeBlock";
import stegano from "@/public/portfolio/stegano.svg";
import Image from "next/image";
import Link from "next/link";

const rssEncode = `
func RsEncode(data []byte, parity int) ([]byte, error) {
	if parity <= 0 {
		return nil, fmt.Errorf("parity must be greater than zero")
	}

	enc, err := reedsolomon.New(1, parity)
	if err != nil {
		return nil, fmt.Errorf("failed to create encoder: %w", err)
	}

	shards := make([][]byte, 1+parity)
	for i := 0; i < 1+parity; i++ {
		if i == 0 {
			shards[i] = data // Assign data to the first shard
		} else {
			shards[i] = make([]byte, len(data))
		}
	}

	if err := enc.Encode(shards); err != nil {
		return nil, fmt.Errorf("failed to encode shards: %w", err)
	}

	packed, err := matrixToSlice(shards)
	if err != nil {
		return nil, fmt.Errorf("failed to convert matrix to slice: %w", err)
	}

	return packed, nil
}
`;
const rssDecode = `
func RsDecode(packedShards []byte, dataShards, parityShards int) ([]byte, error) {
	enc, err := reedsolomon.New(dataShards, parityShards)
	if err != nil {
		return nil, fmt.Errorf("error creating decoder: %w", err)
	}

	shards, err := sliceToMatrix(packedShards)
	if err != nil {
		return nil, fmt.Errorf("failed to convert slice to matrix: %w", err)
	}

	if err := enc.Reconstruct(shards); err != nil {
		return nil, fmt.Errorf("error reconstructing shards: %w", err)
	}

	return shards[0], nil
}
`;
const imageEncode = `
func main() {
	coverFile, err := stegano.Decodeimage("coverimage.png")
	if err != nil {
		log.Fatalln(err)
	}

	embedder := stegano.NewEmbedHandler()

	// Embed the message at a specific bit depth (e.g., 3).
	embeddedImage, err := embedder.EmbedAtDepth(coverFile, []byte("Hello, World!"), 3)
	if err != nil {
		log.Fatalln(err)
	}

	err = stegano.SaveImage(stegano.DefaultOutputFile, embeddedImage)
	if err != nil {
		log.Fatalln(err)
	}
}
`;
const imageDecode = `
func main() {
	coverFile, err := stegano.Decodeimage("embeddedimage.png")
	if err != nil {
		log.Fatalln(err)
	}

	extractor := stegano.NewExtractHandler()

	// Extract data from the image at a specific bit depth (e.g., 3).
	data, err := extractor.ExtractAtDepth(coverFile, 3)
	if err != nil {
		log.Fatalln(err)
	}

	// Print the extracted message.
	fmt.Println(string(data))
}
`;
const audioEncode = `
func main() {
    embedder := stegano.NewAudioEmbedHandler()
    err := embedder.EmbedIntoWAVWithDepth("in.wav", "out.wav", []byte("Hello World"), 1)
    if err != nil {
        log.Fatalln(err)
    }
}
`;
const audioDecode = `
func main() {
    extractor := stegano.NewAudioExtractHandler()
    
    data, err := extractor.ExtractFromWAVWithDepth("embedded.wav", stegano.LSB)
    if err != nil {
        log.Fatalln(err)
    }
    fmt.Println(string(data))
}
`;
const ExtractRGBChannelsFromImageWithConcurrency = `
func ExtractRGBChannelsFromImageWithConcurrency(img image.Image, numGoroutines int) []RgbChannel {
	bounds := img.Bounds()
	pixels := make([]RgbChannel, bounds.Dx()*bounds.Dy())

	splits := splitTask(numGoroutines, bounds.Max.Y)

	var wg sync.WaitGroup
	for _, s := range splits {
		wg.Add(1)
		go func(start, end int) {
			defer wg.Done()
			idx := start * bounds.Dx()
			for y := start; y < end; y++ {
				for x := bounds.Min.X; x < bounds.Max.X; x++ {
					r, g, b, _ := img.At(x, y).RGBA()
					pixels[idx] = RgbChannel{R: r >> 8, G: g >> 8, B: b >> 8}
					idx++
				}
			}
		}(s.start, s.end)
	}

	wg.Wait()
	return pixels
}
`;

const SteganoCaseStudy = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Link className="h-fit w-full" target="_blank" href={"https://github.com/scott-mescudi/stegano"}>
          <div className="relative bg-neutral-950 overflow-hidden rounded-t-lg w-full h-[25vh]">
            <Image
              className="absolute z-10 -top-40"
              src={stegano}
              alt="stegano github photo"
            />
          </div>
        </Link>
        <div className="w-full p-8 overflow-hidden rounded-b-lg mb-5 bg-[#050505] ">
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Stegano: The Fastest Steganography Library Built in Go
          </p>
          <p className="text-white/60  text-[clamp(1rem,1vw,2rem)]">
            <strong className="text-white/80">Stegano</strong> is a fast,
            feature-rich <strong className="text-white/80">Golang</strong>{" "}
            library for steganography. It supports{" "}
            <strong className="text-white/80">
              image and audio file encoding
            </strong>{" "}
            using{" "}
            <strong className="text-white/80">
              LSB (Least Significant Bit) encoding
            </strong>{" "}
            and V
            <strong className="text-white/80">
              ariable Depth Encoding (VBE)
            </strong>
            . It also includes
            <strong className="text-white/80">
              Reed-Solomon (RSS) error correction
            </strong>
            , <strong className="text-white/80">compression</strong>, and{" "}
            <strong className="text-white/80">AES-256 encryption</strong> for
            added security. The ultimate goal? To become the{" "}
            <strong className="text-white/80">
              go-to steganography library
            </strong>{" "}
            for Go developers who need both{" "}
            <strong className="text-white/80">speed and reliability</strong>.
          </p>
          <hr className="opacity-15 my-4"></hr>
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Why I Built This Project
          </p>
          <p className="text-white/60  text-[clamp(1rem,1vw,2rem)]">
            Why <strong className="text-white/80">steganography</strong>? Simply
            put—I <strong className="text-white/80">love</strong> the idea of
            hiding information in plain sight. There’s something inherently{" "}
            <strong className="text-white/80">fascinating</strong> about
            embedding data within an image or an audio file, leaving no visible
            trace. It’s like a{" "}
            <strong className="text-white/80">digital magic trick</strong>.
            Beyond personal interest,{" "}
            <strong className="text-white/80">steganography</strong> is becoming
            increasingly important in today’s world of AI-generated images and
            deepfake concerns.{" "}
            <strong className="text-white/80">Artists</strong>, for instance,
            can embed{" "}
            <strong className="text-white/80">hidden watermarks</strong> in
            their work to differentiate it from AI-generated content. Despite
            its relevance, I found that the{" "}
            <strong className="text-white/80">Golang ecosystem</strong> lacked
            modern, well-optimized steganography libraries—most were either
            outdated, inefficient, or missing crucial features. That’s what
            inspired me to create{" "}
            <strong className="text-white/80">Stegano</strong>.
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
              <strong className="text-white/80">faster</strong> than existing
              alternatives while making full use of Golang’s concurrency model.
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              However, when I first started, I had zero knowledge of how{" "}
              <strong className="text-white/80">steganography</strong> actually
              worked—just a vague idea from HackTheBox challenges and a general
              curiosity about information security.
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              So, I dedicated an entire weekend to deep research:
            </p>
            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] list-disc pl-6 mb-4">
              <li>
                <strong className="text-white/80">Asked ChatGPT</strong> to
                explain steganography in simple terms.
              </li>
              <li>
                <strong className="text-white/80">Read multiple blogs</strong>,
                explored Reddit discussions, and struggled through a research
                paper on Sudoku-based steganography: Steganography Using Sudoku
                Puzzle.
              </li>
            </ul>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              After all that reading, I built my first version of Stegano—and,
              honestly, it was{" "}
              <strong className="text-white/80">terrible</strong>.
            </p>
            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] list-disc pl-6 mb-4">
              <li>
                The code was <strong className="text-white/80">messy</strong>,{" "}
                <strong className="text-white/80">slow</strong>, and barely
                functional.
              </li>
              <li>
                No <strong className="text-white/80">tests</strong>.
              </li>
              <li>
                The image decoding process was{" "}
                <strong className="text-white/80">awful</strong>, only working
                with PNG files and failing miserably on other formats.
              </li>
            </ul>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)]">
              Feeling frustrated, I put the project on hold for a while.
            </p>
          </div>

          <hr className="opacity-15 my-4"></hr>
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Competitor Analysis
          </p>
          <div className="w-full h-fit flex flex-col">
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              Before creating Stegano, I analyzed the{" "}
              <strong className="text-white/80">
                existing Golang steganography libraries
              </strong>
              , focusing on{" "}
              <strong className="text-white/80">
                performance, ease of use, and feature set
              </strong>
              . Here’s how <strong className="text-white/80">Stegano</strong>{" "}
              stacks up:
            </p>

            <table className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4 border-collapse border border-white/10">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-white/10">
                    Library
                  </th>
                  <th className="px-4 py-2 border-b border-white/10">
                    Test 1 (ns/op)
                  </th>
                  <th className="px-4 py-2 border-b border-white/10">
                    Test 2 (ns/op)
                  </th>
                  <th className="px-4 py-2 border-b border-white/10">
                    Test 3 (ns/op)
                  </th>
                  <th className="px-4 py-2 border-b border-white/10">
                    Avg Time (ns/op)
                  </th>
                  <th className="px-4 py-2 border-b border-white/10">
                    Avg Time (ms/op)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-white/10">
                    <strong className="text-white/80">Stegano</strong>
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    352,531,567
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    349,444,200
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    348,196,967
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    350,390,578
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    <strong className="text-white/80">350.39 ms</strong>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-white/10">
                    <strong className="text-white/80">
                      Stegano (Concurrent)
                    </strong>
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    286,168,125
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    293,260,925
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    284,079,175
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    287,169,408
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    <strong className="text-white/80">287.17 ms</strong>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-white/10">
                    <strong className="text-white/80">
                      auyer/steganography
                    </strong>
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    1,405,256,700
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    1,424,957,200
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    1,401,682,600
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    1,410,965,500
                  </td>
                  <td className="px-4 py-2 border-b border-white/10">
                    <strong className="text-white/80">1,410.97 ms</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              The key advantages of{" "}
              <strong className="text-white/80">Stegano</strong>:
            </p>

            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] list-disc pl-6 mb-4">
              <li>
                <strong className="text-white/80">
                  75% faster encoding/decoding
                </strong>{" "}
                compared to the most popular Go steganography library.
              </li>
              <li>
                <strong className="text-white/80">
                  Fully concurrent implementation
                </strong>{" "}
                for processing large images and audio files efficiently.
              </li>
              <li>
                <strong className="text-white/80">
                  Supports both image and audio steganography
                </strong>
                , unlike most libraries that only work with images.
              </li>
              <li>
                <strong className="text-white/80">
                  Integrated Reed-Solomon error correction
                </strong>{" "}
                for added reliability.
              </li>
            </ul>
          </div>
          <hr className="opacity-15 my-4"></hr>
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Starting over
          </p>
          <div className="w-full h-fit flex flex-col">
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <strong className="text-white/80">Starting Over</strong>
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              A month later, I picked the project back up, scrapped everything,
              and started from scratch. This time, the process went much faster
              and smoother.
            </p>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <strong className="text-white/80">Weekend 1:</strong> Implemented
              LSB encoding and Variable Bit Encoding (VBE).
            </p>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <strong className="text-white/80">Following week:</strong>{" "}
              Optimized the encoding process and added concurrency support.
            </p>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <strong className="text-white/80">Another week:</strong> Built a
              more polished API, introduced helper functions, and wrote thorough
              tests.
            </p>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              One major bottleneck I discovered was the slow process of
              extracting RGB channels from images. To fix this, I leveraged
              Golang’s concurrency model to split the workload:
            </p>

            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <li>
                <strong className="text-white/80">
                  ExtractRGBChannelsFromImageWithConcurrency:
                </strong>{" "}
                A function to speed up the extraction process by splitting tasks
                into multiple goroutines.
              </li>
            </ul>

            <CodeBox code={ExtractRGBChannelsFromImageWithConcurrency} />

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              This approach significantly boosted performance by allowing
              multiple parts of the image to be processed simultaneously,
              leading to faster encoding and decoding times.
            </p>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              After refining the library, I posted Stegano on the Golang
              subreddit. It quickly gained traction, with users requesting
              additional features like:
            </p>

            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <li>
                <strong className="text-white/80">
                  Reed-Solomon error correction:
                </strong>{" "}
                To prevent data loss.
              </li>
              <li>
                <strong className="text-white/80">Audio file support:</strong>{" "}
                For encoding messages in WAV files.
              </li>
            </ul>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              I spent another week implementing these features, optimizing
              further, and then reposted it. The response was overwhelming:
            </p>

            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <li>
                <strong className="text-white/80">146K views</strong> in the
                first 72 hours.
              </li>
              <li>
                <strong className="text-white/80">98% upvote rate.</strong>
              </li>
              <li>
                Tons of engagement from{" "}
                <strong className="text-white/80">
                  security researchers, developers, and enthusiasts
                </strong>
                .
              </li>
            </ul>
          </div>

          <hr className="opacity-15 my-4"></hr>
          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Key Features
          </p>
          <div className="w-full h-fit flex flex-col">
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              Before creating Stegano, I analyzed the{" "}
              <strong className="text-white/80">
                existing Golang steganography libraries
              </strong>
              , focusing on{" "}
              <strong className="text-white/80">
                performance, ease of use, and feature set
              </strong>
              . Here’s how <strong className="text-white/80">Stegano</strong>{" "}
              stacks up:
            </p>

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <strong className="text-white/80">
                Variable Bit Encoding (VBE)
              </strong>
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              One of Stegano’s standout features is Variable Bit Encoding (VBE),
              which lets users control the bit depth of hidden data:
            </p>

            <ul className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <li>
                <strong className="text-white/80">Higher bit depth:</strong>{" "}
                More data, but more noticeable.
              </li>
              <li>
                <strong className="text-white/80">Lower bit depth:</strong> Less
                data, but better image integrity.
              </li>
            </ul>
            <CodeBox code={imageEncode} />
            <CodeBox code={imageDecode} />
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <strong className="text-white/80">Audio Steganography</strong>
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              Like image encoding, Stegano supports hiding messages in audio
              files while offering{" "}
              <strong className="text-white/80">Variable bit encoding.</strong>
              <strong className="text-white/80">
                RSS codes for error correction.
              </strong>
            </p>
            <CodeBox code={audioEncode} />
            <CodeBox code={audioDecode} />

            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              <strong className="text-white/80">RSS Codes:</strong>
            </p>
            <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
              Reed-Solomon (RSS) codes are widely used in network packets and
              error correction systems. I decided to integrate them into Stegano
              to improve data recoverability. Since RSS codes operate on
              matrices, while steganography operates on arrays, I had to
              implement matrix flattening and hydration techniques to fit RSS
              codes within images.
            </p>
            <CodeBox code={rssEncode} />
            <CodeBox code={rssDecode} />
          </div>

          <p className="text-white text-[clamp(1rem,2.25vw,4rem)] font-bold antialiased">
            Final Thoughts
          </p>
          <p className="text-white/60 text-[clamp(1rem,1vw,2rem)] mb-4">
            Building Stegano has been an incredibly rewarding experience. I went
            from having zero knowledge of steganography to developing one of the
            fastest, most feature-complete steganography libraries in Golang. If
            you're looking for a high-performance, modern steganography library
            for hiding data in images and audio, check out Stegano. It’s built
            for speed, reliability, and ease of use—and I’m excited to see how
            others use it!
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
