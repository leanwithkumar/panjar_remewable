import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#191C1F] text-white px-6 md:px-20 py-14">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What are you waiting for?
          </h2>
          <p className="text-xl md:text-2xl font-medium py-4">
            Join the waitlist now
          </p>
          <Link href='/Career'>
           <button
            className="bg-white text-black border font-medium px-6 py-2 rounded-full hover:bg-[#191C1F] hover:text-white"
          >
            Join Now
          </button>
          </Link>
         
        </div>

        {/* Divider */}
        <div className="border-b border-gray-600 my-10" />

        {/* Logo & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-xl font-semibold">Panjar Renewables</div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <a 
          href="https://www.facebook.com/panjarrenewables" 
          className="hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
          >
           Facebook
          </a>      
            <a 
          href="https://www.instagram.com/panjar_renewables/" 
          className="hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          Instagram
          </a>
            <a 
          href="https://www.linkedin.com/company/panjar-renewables/posts/?feedView=all" 
          className="hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
          >
           LinkedIn
          </a>
            <a 
          href="https://www.facebook.com/panjarrenewables" 
          className="hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
          >
           Facebook
          </a>
            <a 
          href="https://www.youtube.com/@panjarrenewables6894/featured" 
          className="hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
          >
           YouTube
          </a>
          
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <Link href='/About' className="hover:underline">About</Link>
          <Link href='/Websiteterms' className="hover:underline">Website Terms</Link>
          <Link href='/Privacy' className="hover:underline">Privacy</Link>
          <Link href='/Cookies' className="hover:underline">Cookies Policy</Link>
          <Link href='/Help' className="hover:underline">Help</Link>

          

        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-400">
          © Panjar Renewable LLP, 2025 | Website made by @leanwithkumar
        </div>
      </div>
    </footer>
  );
}
