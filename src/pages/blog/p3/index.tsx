'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Post3() {
  return (
    <article className="max-w-screen-md mx-auto mt-10">
      <div className="text-left text-lg p-5">
        <br />
        <h1 className="text-5xl font-bold mb-2.5 mt-3">
          Compiling C/C++ to WebAssembly with Emscripten
        </h1>
        <p className="text-white font-medium text-lg text-md mt-5">
          Nathan Potter
        </p>
        <p className="text-acc4 mb-5 text-md">
          #WebAssembly, #Emscripten &middot; 3 min read &middot; January 26,
          2025
        </p>

        <div className="text-base leading-6">
          <p>
            Emscripten is a powerful toolchain that compiles C and C++ code into
            WebAssembly (WASM), enabling developers to run native code
            efficiently in web environments. This article provides a concise
            overview of setting up Emscripten and compiling your first C/C++
            project into WASM, and details my experience using Emscripten for a
            recent project.
          </p>
          <br></br>
          <p>
            Follow the link below if you&apos;re eager to dive into my
            repository for all things Web Assembly.
          </p>
          <a
            className="underline text-acc4"
            href="https://github.com/nathanpotter17/emcc-wasm"
          >
            My Emscripten WebAssembly Example
          </a>
          <br></br>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            Getting Started with Emscripten
          </h1>
          <p>
            To begin, ensure you have the Emscripten SDK (emsdk) installed. The
            emsdk provides all the necessary tools to compile C/C++ code into
            WebAssembly. You can find detailed installation instructions in the
            official Emscripten documentation, or see my{' '}
            <a
              className="underline text-acc4"
              href="https://github.com/nathanpotter17/emcc-wasm/blob/main/README.md"
            >
              README.md
            </a>
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            Compiling Your Code
          </h1>
          <p>
            Once the emsdk is set up, you can compile your C/C++ code using the
            `emcc` compiler. The basic command to compile a source file is:
          </p>
          <br />
          <pre>
            <code> emcc source_file.c -o output.html </code>
          </pre>
          <br />
          <p>
            This command compiles `source_file.c` and generates an `output.html`
            file that you can open in a web browser to run your WebAssembly
            module.
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            Running the Generated Code
          </h1>
          <p>
            After compilation, you can run the generated `output.html` in a web
            browser to see your C/C++ code in action as a WebAssembly module.
            Ensure that your browser supports WebAssembly and that you serve the
            files over a local server if necessary.
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            WASM + Emscripten Project: Machine Learning on the Web
          </h1>
          <p>
            The goal of my project was to track eye position to help aid in
            measuring eye contact and put it on the web, except all I had was a
            Python file that uses OpenCV & DLib. Issue is, Pyodide, the WASM
            runner for Python based WASM, will not work, because the project has
            C++ dependencies within DLib that cannot be cross-compiled using
            only CPython.
          </p>
          <br />
          <p>
            The solution? To use both libraries from C++ source that were used
            in the Python script, DLib & OpenCV. Compile both to WASM using
            Emscripten&apos;s emcc / em++ compilers. Rewrite the Python script
            in CPP in order to link the Emscripten compiled libraries to the
            final build file. Then run the final compile using those libraries,
            their includes, and any other static data. Compiling everything has
            its benefits. emcc has fine-grained control over execution
            optimization, using Emscripten&apos;s Optimization Flags and
            <a href="https://emscripten.org/docs/tools_reference/settings_reference.html?highlight=environment">
              Compiler Settings
            </a>
            .
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">
            Why Web Assembly?
          </h1>
          <p>
            WebAssembly is a binary instruction format designed for efficient
            execution and compact representation. It&apos;s main goal is to
            enable high performance applications on the Web, but it does not
            make any Web-specific assumptions or provide Web-specific features,
            so it can be employed in other environments as well. It seemed like
            a rather fitting target, especially when paired with Emscripten. For
            more information on the WebAssembly stack machine, WASM Memory
            Model, and available environments, see{' '}
            <a
              className="underline text-acc4"
              href="https://webassembly.github.io/spec/core/"
            >
              the core spec
            </a>
            .
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">Why Emscripten?</h1>
          <p>
            Emscripten essentially acts as a bridge between traditional C/C++
            code and WebAssembly. WebAssembly itself is a low-level format
            designed to run in a secure and portable manner in web environments,
            but without Emscripten, most developers would need to write
            WebAssembly manually or use languages with built-in support for Wasm
            (like Rust). Emscripten simplifies this process, making WebAssembly
            accessible for C/C++ applications through replacing clang with emcc,
            a compiler that targets LLVM&apos;s Intermediate Representation
            instead of native machine code.
          </p>
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">The Result</h1>
          <p>
            Face and Eye Tracking running in the browser, facilitated by a low
            level representation, for maximum control over efficiency when
            resources are limited.
          </p>
          <br />
          <p>See the full breakdown here:</p>

          <a
            className="underline text-acc4"
            href="https://github.com/nathanpotter17/emcc-wasm/tree/main/src/library#readme"
          >
            The Full Breakdown
          </a>
          <br />
          <br />
          <Image src={'/emcc.svg'} width={1024} height={250} alt="emscripten" />
          <br />
          <h1 className="text-4xl font-medium mb-2.5 mt-3">Conclusion</h1>
          <p>
            Emscripten bridges the gap between native C/C++ applications and the
            web, allowing developers to leverage existing codebases and
            libraries in web environments. By following the steps outlined
            above, you can compile your C/C++ projects into efficient
            WebAssembly modules and run them seamlessly in browsers.
          </p>
        </div>
        <br />
        <a
          className="underline text-acc4"
          href="https://emscripten.org/docs/getting_started/index.html"
        >
          Source: Emscripten Official Documentation
        </a>
        <br />
        <a
          className="underline text-acc4"
          href="https://github.com/nathanpotter17/emcc-wasm"
        >
          Source: emcc-wasm (my repository)
        </a>
        <div className="my-8" />
        <Link
          className="p-4 bg-gray-500/50 rounded-full cursor-pointer"
          href="/blog"
        >
          Back to Blog
        </Link>
        <footer className="text-center pt-5 pb-5 border-t border-gray50 mt-12">
          <p className="text-gray50 text-sm">&copy; 2025 NSP Blog</p>
        </footer>
      </div>
    </article>
  );
}
