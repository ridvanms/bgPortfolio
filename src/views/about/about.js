import { html } from "../../../node_modules/lit-html/lit-html.js";
import Typed from "../../../node_modules/typed.js/dist/typed.module.js";

const aboutTemplate = () => html`
  <div class="about">
    <div class="left-partAbout ">
      <img class="aboutImg " src="./assert/images/photoProfil5.png" alt="" />
    </div>

    <div class="right-partAbout">
      <h1
        class="h1about animate__animated animate__fadeInLeft animate__delay-2s"
      >
        За мен
      </h1>
      <p class="paragraphAbout"></p>

      <div class="resume-link" style="opacity: 1; transform: none;">
        <div class="link-wrapper">
          <div class="link">
            <a
              href="../../../assert/Ridvan's Resume.pdf"
              target="_blank"
              rel="noreferrer"
              >↓
              <!-- -->Резюме</a
            >
          </div>
          <div
            class="link-underline"
            style="transform: translateX(-101%) translateZ(0px);"
          ></div>
        </div>
      </div>
    </div>
  </div>
`;

export function aboutPage(ctx) {
  ctx.render(aboutTemplate());

  const typed = new Typed(".paragraphAbout", {
    strings: [
      "Здравей, казвам се Ридван Саралиев.Обичам да създавам неща, които `живеят` в интернет.Аз съм UX/UI дизайнер и front-end уеб разработчик от България.Освен това съм запален по поп музиката.Винаги съм любопитен да науча повече, когато става въпрос за нови технологии.",
    ],
    smartBackspace: false,
    typeSpeed: 30,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
  });

  document.querySelector(".link a").style.color = "currentColor";
}
