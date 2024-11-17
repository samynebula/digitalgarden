import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
// import { version } from "../../package.json"
// import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
<footer class={`${displayClass || ""}`}>
  <p>متن نمایشی مورد نظر شما</p>
  <ul>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">👨‍💼 مسیر شغلی</a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">🌱 توسعه فردی</a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">👨‍💻 کار و تخصص</a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">👪 خانواده و دوستان

</a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">💗 سلامت
    </a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">🏠 خانه و زندگی
    </a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">💰 امور مالی و سرمایه‌گذاری
    </a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">🎮 سرگرمی و فراغت</a></li>
    <li><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" class="footer-link">📚 بخش عمومی</a></li>
  </ul>
</footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
