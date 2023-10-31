import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
     <Script id="rocket-chat" strategy="afterInteractive">
                {`
                    // paste the javascript code here
                    // the immediately invoked function is just an example
                    (function(w, d, s, u) {
                      w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
                      var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
                      j.async = true; j.src = 'https://medusa.rocket.chat/livechat/rocketchat-livechat.min.js?_=201903270000';
                      h.parentNode.insertBefore(j, h);
                    })(window, document, 'script', 'https://medusa.rocket.chat/livechat');
                `}
            </Script>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
