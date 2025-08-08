import { SessionStatus } from "@/components/auth/session-status";
import { CardFeature } from "@/components/features/card-feature";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col px-4 mx-4 mt-24 max-w-7xl sm:mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-semibold text-center w-full max-w-[700px]">
            Only focus on building your product.
          </h1>

          <div className="flex flex-col items-center gap-1">
            <h2 className="font-mono text-center w-full max-w-[600px]">
              A starting boilerplate with configuration and best practices for your Nextjs projects.
            </h2>
          </div>
        </div>
      </div>

      <section className="py-40">
        <div className="flex flex-col gap-8 px-4 pb-5 mx-4 mt-24 max-w-7xl sm:mx-auto">
          <h3 className="text-3xl font-medium">Let's try the features live</h3>
        </div>

        <div className="border-t-2 border-dotted border-stone-300">
          <div className="flex flex-col gap-8 px-4 mx-4 max-w-7xl sm:mx-auto">
            <div id="features-list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <CardFeature
                to="/query-v5"
                type="optional"
                title="TanStack Query v5"
                resume="TanStack Query (FKA React Query) it makes fetching, caching, synchronizing and updating server state in your
            web applications a breeze."
                figureRight={
                  <svg
                    width={200}
                    height={200}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 230"
                  >
                    <path
                      d="m158 142.5-5 8.5a8.3 8.3 0 0 1-7.1 4.2h-37.6c-3 0-5.7-1.6-7.2-4.2l-5-8.5H158Zm13.7-23.9-8.6 15H91l-8.7-15h89.3Zm-8.3-23.3 8.3 14.5H82.4l8.4-14.5h72.6Zm-17.5-22c3 0 5.7 1.5 7.2 4l5.2 9.1H95.9l5.2-9a8.3 8.3 0 0 1 7.2-4.2h37.6Z"
                      fill="#00435B"
                    />
                    <path
                      d="M53.5 69.3c-4.1-20.3-5-35.8-2.3-47a30.2 30.2 0 0 1 9-16.1A25.5 25.5 0 0 1 77.4 0c11 0 22.6 5 35 14.6 5 3.9 10.2 8.6 15.7 14l1.4-1.5C145 13.4 158 4.9 169.1 1.6c6.6-2 12.7-2.2 18.4-.3 6 2 10.7 6.2 14 12 5.5 9.5 7 22 5 37.6-1 6.3-2.4 13.2-4.4 20.7.8 0 1.5.2 2.3.5 19.5 6.4 33.3 13.4 41.7 21.4 5 4.7 8.2 10 9.4 15.8 1.3 6.1 0 12.3-3.3 18.1-5.5 9.5-15.6 17-30 23-5.8 2.4-12.4 4.6-19.7 6.6l.8 2.3c4.1 20.3 5 35.7 2.3 47a30.2 30.2 0 0 1-9 16.1 25.5 25.5 0 0 1-17.3 6.2c-11 0-22.6-5-35-14.6-5-4-10.4-8.7-15.9-14.2-.5.9-1.2 1.7-2 2.4C111 216 98 224.4 86.9 227.7c-6.6 2-12.7 2.2-18.4.3-6-2-10.7-6.2-14-12-5.5-9.5-7-22-5-37.6 1-6.5 2.5-13.7 4.6-21.5-.8 0-1.7-.2-2.5-.5C32.1 149.9 18.3 143 9.9 135c-5-4.7-8.2-10-9.4-15.8-1.3-6.2 0-12.3 3.3-18.1 5.5-9.6 15.6-17.1 30-23 6-2.5 12.8-4.8 20.4-6.8l-.7-2Z"
                      fill="#002B3B"
                    />
                    <path
                      d="M189.6 161.3c2-.3 3.8 1 4.3 2.8v.2l.2 1c6.7 35.3 2 53-14.2 53-15.8 0-36-15.1-60.4-45.2a3.7 3.7 0 0 1 2.8-6H123.7a354 354 0 0 0 66-5.8Zm-111-26.6h.1l.7 1.2a358 358 0 0 0 38.4 54.5 3.7 3.7 0 0 1-.3 5.1v.1l-1 .7c-27.2 23.4-45 28-53.2 14-8-13.7-5-38.7 8.8-75a3.7 3.7 0 0 1 6.5-.6Zm124.9-52h.1l1 .3c33.7 11.7 46.6 24.6 38.5 38.7-8 13.7-31 23.7-69 30a3.7 3.7 0 0 1-3.9-5.5A359.6 359.6 0 0 0 199 84.9a3.7 3.7 0 0 1 4.4-2.3h.1Zm-119-6c1.7 1 2.3 3.3 1.3 5A359.6 359.6 0 0 0 57 143a3.7 3.7 0 0 1-4.5 2.3h-.1l-1-.4c-33.7-11.7-46.6-24.6-38.5-38.6 8-13.8 31-23.8 69-30 1-.2 1.8 0 2.5.4ZM192.6 19c8 13.7 5 38.7-8.8 75a3.7 3.7 0 0 1-6.5.6h-.1l-.7-1.2a358 358 0 0 0-38.4-54.5 3.7 3.7 0 0 1 .3-5.1v-.1l1-.7c27.2-23.4 45-28 53.2-14ZM77.4 10.6c15.9 0 36 15 60.4 45.1a3.7 3.7 0 0 1-2.7 6h-1.4a354 354 0 0 0-66 5.8c-2 .3-3.8-.9-4.2-2.8v-.1l-.2-1.1c-6.7-35.3-2-53 14.1-53Z"
                      fill="#FF4154"
                    />
                    <path
                      d="M111.3 73.7h31.6c4.6 0 8.9 2.4 11.2 6.4l15.8 27.7c2.3 4 2.3 8.8 0 12.8l-15.8 27.6c-2.3 4-6.6 6.5-11.2 6.5h-31.6c-4.6 0-8.9-2.5-11.2-6.5l-15.8-27.6c-2.3-4-2.3-8.9 0-12.8L100 80c2.3-4 6.6-6.4 11.2-6.4ZM138 82c4.6 0 8.8 2.5 11.1 6.5l11.1 19.3c2.3 4 2.3 8.8 0 12.8l-11 19.3c-2.4 4-6.6 6.5-11.2 6.5h-22c-4.6 0-8.9-2.5-11.2-6.5l-11-19.3c-2.3-4-2.3-8.9 0-12.8l11-19.3c2.3-4 6.6-6.5 11.2-6.5h22Zm-5.2 9.1h-11.6c-4.6 0-8.9 2.5-11.2 6.5l-5.8 10.2c-2.3 4-2.3 8.8 0 12.8l5.8 10.2c2.3 4 6.6 6.4 11.2 6.4h11.6c4.6 0 8.8-2.4 11.1-6.4l5.9-10.2c2.3-4 2.3-8.9 0-12.8L144 97.6c-2.3-4-6.5-6.5-11.1-6.5Zm-5 8.8c4.6 0 8.8 2.4 11.1 6.4l.9 1.5c2.3 4 2.3 8.8 0 12.8l-.9 1.5c-2.3 4-6.5 6.4-11.1 6.4h-1.6c-4.6 0-8.9-2.4-11.2-6.4l-.8-1.5c-2.3-4-2.3-8.9 0-12.8l.8-1.5c2.3-4 6.6-6.4 11.2-6.4h1.6Zm-.8 8.6a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 1 0 0-11.4Zm-46.5 5.7h10.3"
                      fill="#FFD94C"
                    />
                    <title>React Query</title>
                  </svg>
                }
              />

              <CardFeature
                to="/resend"
                type="optional"
                title="Emails with Resend and react-email"
                resume="Resend is the email API for developers."
                figuresCenter={
                  <div className="bg-[#262626]">
                    <svg width={200} height={200} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
                        fill="white"
                      />
                      <title>Resend</title>
                    </svg>
                  </div>
                }
              />

              <CardFeature
                to="/react-hook-form"
                type="optional"
                title="React-Hook-Form and Zod"
                resume="Performant, flexible and extensible forms with easy-to-use validation. and TypeScript-first schema validation with static type inference"
                figureLeft={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="256"
                    height="203"
                    viewBox="0 0 256 203"
                  >
                    <defs>
                      <filter id="a" width="105.2%" height="106.5%" x="-2.2%" y="-2.8%" filterUnits="objectBoundingBox">
                        <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
                        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0" />
                      </filter>
                      <path
                        id="b"
                        d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857 200.42 0Zm-5.362 12.562 39.84 41.6-112.8 126.558L17 54.162l41.815-41.6h136.243Z"
                      />
                    </defs>
                    <path fill="#18253F" d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z" />
                    <path fill="#274D82" d="M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z" />
                    <path
                      fill="#274D82"
                      d="m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zM146.596 14.075 35.93 77.968 18.719 56.483l74.095-42.78z"
                    />
                    <g transform="translate(2 1.51)">
                      <use xlinkHref="#b" filter="url(#a)" />
                      <use xlinkHref="#b" fill="#3068B7" />
                    </g>
                    <title>React Hook Form</title>
                  </svg>
                }
              />

              <CardFeature
                to="/authjs"
                type="optional"
                title="Authentication with Auth.js"
                resume="Auth.js is a complete open-source authentication solution for Next.js applications."
                // biome-ignore lint/performance/noImgElement: <>
                figureRight={<img width={200} height={200} src="/img/logo-sm.webp" alt="img authjs" />}
                authStateComponent={<SessionStatus />}
              />

              <CardFeature
                to="/stripe"
                type="optional"
                title="Payments with Stripe"
                resume="Build a low-code payment form and embed it on your site or host it on Stripe."
                figuresCenter={
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 512 214">
                    <path
                      fill="#635BFF"
                      d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774"
                    />
                    <title>Stripe</title>
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
