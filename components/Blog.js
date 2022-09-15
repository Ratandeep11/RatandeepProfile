import React from "react";
import Link from "next/link";

function Blog() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://imgs.search.brave.com/vfEKkb88jVs5hO6WqrXQuRO1LrOcMJZbsrXysDmpzYc/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly9jb250/ZW50LnNhdGltYWdp/bmdjb3JwLmNvbS9z/dGF0aWMvZ2FsbGVy/eWltYWdlcy9hc3Rl/ci1wYXRhZ29uaWEu/anBn"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                 First Experience
                </h1>
                <p class="leading-relaxed mb-3">
                  it will be available in some period of time
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link
                    href="blog/the-Catalyzer"
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://imgs.search.brave.com/BKfhZtDl7Ed8A21ZfoJFqvVUS1ESV8DB6sGanOS-qvs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jb250/ZW50LnNhdGltYWdp/bmdjb3JwLmNvbS9z/dGF0aWMvZ2FsbGVy/eWltYWdlcy9zcG90/LTYtZG9oYS1xYXRh/ci5qcGc"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                 The most lovely
                </h1>
                <p class="leading-relaxed mb-3">
                  Coming soon....
                </p>
                <div class="flex items-center flex-wrap">
                <Link
                href="blog/the-Catalyzer"
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            
                        Learn More
                </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://imgs.search.brave.com/KZ82HCfmYsoGWmYXG4vpLB_ZgBxiWo_Ajnq7ndD-5-s/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci9MMl9Q/Y1dIMnYzYkhQOW54/YmZrTXU1M1FVS1k9/LzB4NjM6NjQweDQy/My8xNjAweDkwMC9j/ZG4udm94LWNkbi5j/b20vYXNzZXRzLzE4/OTI2NjEvYmluZ19m/dWxsX3NjcmVlbl9t/b2RlXzY0MC5qcGc"
                alt="blog"
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Short Day
                </h1>
                <p class="leading-relaxed mb-3">
                  Coming Soon. . . .
                </p>
                <div class="flex items-center flex-wrap ">
                  <Link
                    href="blog/the-Catalyzer"
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn Very Much
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;