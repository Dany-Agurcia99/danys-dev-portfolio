import { siteConfig } from "@/config"

const Footer = () => {
  return (
    <footer className="pt-25 pb-5 text-center">
      <p className="text-primary-accent text-3xl pt-5 font-serif">
        "Thanks for scrolling, have a blessed day!"
      </p>
      <p className="text-text-light text-sm mt-16">
        Daniel Agurcia © 2025 - Designed and Developed by{" "}
        <a
          href={siteConfig.footer.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-accent text-base transition-colors duration-200  font-serif"
        >
          Daniel Agurcia
        </a>
      </p>
    </footer>
  )
}

export default Footer
