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
  <p>دسته‌بندی موضوعات</p>
  <ul>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D9%85%D8%B3%DB%8C%D8%B1-%D8%B4%D8%BA%D9%84%DB%8C" target="_blank" rel="noopener noreferrer" class="footer-link">👨‍💼 مسیر شغلی</a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D8%AA%D9%88%D8%B3%D8%B9%D9%87-%D9%81%D8%B1%D8%AF%DB%8C" target="_blank" rel="noopener noreferrer" class="footer-link">🌱 توسعه فردی</a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%DA%A9%D8%A7%D8%B1-%D9%88-%D8%AA%D8%AE%D8%B5%D8%B5" target="_blank" rel="noopener noreferrer" class="footer-link">👨‍💻 کار و تخصص</a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D8%AE%D8%A7%D9%86%D9%88%D8%A7%D8%AF%D9%87-%D9%88-%D8%AF%D9%88%D8%B3%D8%AA%D8%A7%D9%86" target="_blank" rel="noopener noreferrer" class="footer-link">👪 خانواده و دوستان

</a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D8%B3%D9%84%D8%A7%D9%85%D8%AA" target="_blank" rel="noopener noreferrer" class="footer-link">💗 سلامت
    </a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D8%AE%D8%A7%D9%86%D9%87-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C" target="_blank" rel="noopener noreferrer" class="footer-link">🏠 خانه و زندگی
    </a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D8%A7%D9%85%D9%88%D8%B1-%D9%85%D8%A7%D9%84%DB%8C-%D9%88-%D8%B3%D8%B1%D9%85%D8%A7%DB%8C%D9%87%E2%80%8C%DA%AF%D8%B0%D8%A7%D8%B1%DB%8C" target="_blank" rel="noopener noreferrer" class="footer-link">💰 امور مالی و سرمایه‌گذاری
    </a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D8%B3%D8%B1%DA%AF%D8%B1%D9%85%DB%8C-%D9%88-%D9%81%D8%B1%D8%A7%D8%BA%D8%AA" target="_blank" rel="noopener noreferrer" class="footer-link">🎮 سرگرمی و فراغت</a></li>
    <li><a href="https://samanz.ir/%DB%8C%D8%A7%D8%AF%D8%AF%D8%A7%D8%B4%D8%AA%E2%80%8C%E2%80%8C%D9%87%D8%A7/%D8%A8%D8%AE%D8%B4-%D8%B9%D9%85%D9%88%D9%85%DB%8C" target="_blank" rel="noopener noreferrer" class="footer-link">📚 بخش عمومی</a></li>
  </ul>
</footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
