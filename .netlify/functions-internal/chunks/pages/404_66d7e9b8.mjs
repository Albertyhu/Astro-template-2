/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro_96538662.mjs';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, createElement } from 'react';
import uuid from 'react-uuid';
/* empty css                         */
const title = "template site";
const business_name = "Natural Patterns Landscaping";
const description = "Transforming Spaces with Nature's Elegance | Natural Patterns Landscaping";
const year_founded = 1997;
const owner_name = "TheLastSliceOfPizza";
const owner_email = "hualbert@rocketmail.com";
const address = "Chicago 13";
const city = "Melborne City";
const state = "FL";
const country = "United States";
const zip = "94511";
const business_email = "uthan@example.com";
const business_phone = "(915)365-1515";
const image = {
	src: "",
	alt: ""
};
const facebook = "https://www.facebook.com";
const twitter = "https://www.x.com";
const pinterest = "https://www.pinterest.com";
const instagram = "https://www.instagram.com";
const youtube = "https://www.youtube.com";
const siteData = {
	title: title,
	business_name: business_name,
	description: description,
	year_founded: year_founded,
	owner_name: owner_name,
	owner_email: owner_email,
	address: address,
	city: city,
	state: state,
	country: country,
	zip: zip,
	business_email: business_email,
	business_phone: business_phone,
	image: image,
	facebook: facebook,
	twitter: twitter,
	pinterest: pinterest,
	instagram: instagram,
	youtube: youtube
};

const $$Astro$d = createAstro();
const $$SocialLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { customStyle } = Astro2.props;
  const { followUsText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customStyle ? customStyle : "grid sm:flex sm:flex-row"}`, "class")}>${followUsText && renderTemplate`<div><p>Follow Us:</p></div>`}<div class="text-white sm:ml-5 [&>div]:mr-5 flex">${siteData.twitter && renderTemplate`<div><a${addAttribute(siteData.twitter, "href")}><span class="fab fa-twitter"></span></a></div>`}${siteData.facebook && renderTemplate`<div><a${addAttribute(siteData.facebook, "href")}><span class="fab fa-facebook-square"></span></a></div>`}${siteData.pinterest && renderTemplate`<div><a${addAttribute(siteData.pinterest, "href")}><span class="fab fa-pinterest-p"></span></a></div>`}${siteData.instagram && renderTemplate`<div><a${addAttribute(siteData.instagram, "href")}><span class="fab fa-instagram"></span></a></div>`}${siteData.youtube && renderTemplate`<div><a${addAttribute(siteData.youtube, "href")}><span class="fab fa-youtube"></span></a></div>`}</div></div>`;
}, "D:/Astro/design-initiative/src/components/social-links.astro", void 0);

const menuMap = [
	{
		url: '/about/',
		label: 'About Us',
		subDirectory: []
	},
	{
		url: '/services',
		label: 'Services',
		subDirectory: []
	},
	{
		url: '/#project-section',
		label: 'Projects',
		subDirectory: []
	},
	{
		url: '/blog/1',
		label: 'Blog',
		subDirectory: []
	}, 
	{
		url: '/contact/',
		label: 'Contact',
		subDirectory: []
	}
];

const MenuLinks = () => {
  return menuMap.length > 0 && menuMap.map((link, index) => /* @__PURE__ */ jsx("div", { className: "mobile-menu-links", children: /* @__PURE__ */ jsx(LinkItem, { ...link }) }, `${link.label}-${index}`));
};
const LinkItem = (props) => {
  const { url, label, subDirectory } = props;
  const arrowRef = useRef(null);
  const subDirRef = useRef(null);
  const dirRef = useRef(null);
  const toggleEvent = (event) => {
    if (arrowRef.current && arrowRef?.current?.contains(event.target)) {
      if (arrowRef?.current?.classList.contains("menu-arrow-open")) {
        arrowRef?.current?.classList.remove("menu-arrow-open");
        subDirRef?.current?.classList.add("subDirectory-closed");
      } else {
        arrowRef?.current?.classList.add("menu-arrow-open");
        subDirRef?.current?.classList.remove("subDirectory-closed");
      }
    }
  };
  useEffect(() => {
    if (dirRef.current && window.location.pathname == url) {
      dirRef.current.classList.add("currentPage");
    } else {
      if (dirRef.current && dirRef?.current.classList.contains("currentPage"))
        dirRef.current.classList.remove("currentPage");
    }
  }, [dirRef.current]);
  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.addEventListener("mousedown", toggleEvent);
    }
    return () => {
      arrowRef?.current?.removeEventListener("mousedown", toggleEvent);
    };
  }, [arrowRef.current]);
  useEffect(() => {
    if (subDirRef.current && subDirectory && subDirectory?.length > 0) {
      var maxHeight = subDirectory?.length * 45;
      subDirRef.current.style.maxHeight = `${maxHeight}px`;
    }
  }, [subDirRef.current]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: dirRef,
        className: "relative flex flex-row items-center justify-around border-t-[1px] border-t-[#686868] py-[10px] pl-[25px] hover:bg-slate-800",
        children: [
          /* @__PURE__ */ jsx("a", { href: url, className: "leader-[24px] relative !my-auto block", children: label }),
          subDirectory && subDirectory.length > 0 && /* @__PURE__ */ jsx("div", { className: "leader-[32px] absolute right-[-15px] z-[5] mr-5 h-[32px] w-[32px] cursor-pointer rounded-[2px] text-center text-[16px]", children: /* @__PURE__ */ jsx(
            "span",
            {
              ref: arrowRef,
              className: "fas fa-angle-down menu-arrow relative text-center"
            }
          ) })
        ]
      }
    ),
    subDirectory && subDirectory.length > 0 && /* @__PURE__ */ jsx("div", { className: "subDirectoryDiv subDirectory-closed", ref: subDirRef, children: subDirectory.map((sub, index) => /* @__PURE__ */ createElement(
      LinkItem,
      {
        ...sub,
        key: uuid()
      }
    )) })
  ] });
};

const FooterLogo = {"src":"/_astro/white-logo.26ba15c6.svg","width":720,"height":720,"format":"svg"};

const $$Astro$c = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="grid h-full fixed left-auto right-0 top-0 overflow-y-auto overflow-x-hidden w-[250px] z-[999] bg-black mobile-menu-close"><div id="close-btn" class="h-fit"><i class="fas fa-times close-btn"></i></div><nav class=""><div class="nav-logo w-10/12 mx-auto userselect-none"><a href="../../../"><img loading="lazy" decoding="async"${addAttribute(FooterLogo.src, "src")} alt="Logo" class="h-full w-full"></a></div><div class="menu-outer mt-[25px]">${renderComponent($$result, "MenuLinks", MenuLinks, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/design-initiative/src/components/HeaderComponent/MobileMenu/menuLinks.tsx", "client:component-export": "default" })}</div><div class="contact-info text-white pl-[25px] border-t-[1px] border-[#d6d6d6]"><h4>Contact Info</h4><ul>${siteData && siteData.address && renderTemplate`<li>${siteData.address},</li>`}${siteData && (siteData.city || siteData.state || siteData.country || siteData.zip) && renderTemplate`<li>${siteData.city && renderTemplate`<span>${siteData.city},</span>`}${siteData.state && renderTemplate`<span>${siteData.state},</span>`}${siteData.country && renderTemplate`<span>${siteData.country}</span>`}${siteData.zip && renderTemplate`<span>${siteData.zip}</span>`}</li>`}${siteData && siteData.business_phone && renderTemplate`<li><a href="tel:+8801682648101">${siteData.business_phone}</a></li>`}${siteData && siteData.business_email && renderTemplate`<li><a${addAttribute(`mailto:${siteData.business_email}`, "href")}>${siteData.business_email}</a></li>`}</ul></div>${renderComponent($$result, "SocialLinks", $$SocialLinks, { "customStyle": "clearfix flex flex-row [&>li]:mr-5 [&>li>a>span]:text-white my-10 pl-[25px]" })}</nav></div>`;
}, "D:/Astro/design-initiative/src/components/HeaderComponent/MobileMenu/index.astro", void 0);

const $$Astro$b = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$1;
  Astro2.props;
  return renderTemplate`<!-- Fav Icon -->${maybeRenderHead()}<header class="main-header"></header>${renderComponent($$result, "MobileMenu", $$Index$2, {})}`;
}, "D:/Astro/design-initiative/src/components/HeaderComponent/index.astro", void 0);

const $$Astro$a = createAstro();
const $$CreatorComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CreatorComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="CreatorContainer"${addAttribute(`${customStyle}`, "class")}><div class="mx-auto">Developed by &nbsp;
<span class="underline cursor-pointer font-bold text-lg"><a href="http://portfolio-3b68c.web.app/" target="_blank">Albert Hu</a></span></div></div>`;
}, "D:/Astro/design-initiative/src/components/creatorComponent.astro", void 0);

const $$Astro$9 = createAstro();
const $$ColumnLabel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ColumnLabel;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-[2.5rem] lh-[35px] color_white">${label}</h3>`;
}, "D:/Astro/design-initiative/src/components/footer/column_label.astro", void 0);

const $$Astro$8 = createAstro();
const $$FooterColumn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FooterColumn;
  const {
    label,
    links
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="footer-column text-left"><div class="footer-widget links-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": label })}</div><div class="widget-content"><ul class="links-list clearfix">${links && links.length > 0 && links.map(
    (item, index) => renderTemplate`<li class="relative block mb-[7px]"><a${addAttribute(item.link, "href")} class="relative text-lg inline-block !text-base">${item.label}</a></li>`
  )}</ul></div></div></div>`;
}, "D:/Astro/design-initiative/src/components/footer/footer-column.astro", void 0);

const formatPhoneNumber = (input) => {
  if (!input) {
    return "";
  }
  var digits = input.toString().replace(/\D/g, "");
  if (digits.length < 10) {
    return "Invalid phone number";
  }
  let countryCode = "+1";
  if (digits.length > 10) {
    countryCode = `+${digits.slice(0, digits.length - 10)}`;
    digits = digits.slice(digits.length - 10);
  }
  const formattedNumber = `${countryCode} (${digits.slice(0, 3)}) ${digits.slice(
    3,
    6
  )}-${digits.slice(6)}`;
  return formattedNumber;
};
function phoneNumberToNumeric(input) {
  if (!input) {
    return NaN;
  }
  const digits = input.toString().replace(/\D/g, "");
  let numericValue;
  if (digits.length <= 10) {
    numericValue = parseInt(`1${digits}`, 10);
  } else {
    numericValue = parseInt(digits, 10);
  }
  return numericValue;
}

const $$Astro$7 = createAstro();
const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Contacts;
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-3 col-md-6 col-sm-12 footer-column"><div class="footer-widget contact-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "Contacts" })}</div><div class="widget-content"><ul class="contact-info clearfix">${siteData.address && siteData.address != "" && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${siteData.address}</p></li>`}${(siteData.city || siteData.state || siteData.country || siteData.zip) && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${siteData.city && renderTemplate`<span>${siteData.city},</span>`}${siteData.state && renderTemplate`<span>${siteData.state}</span>`}${siteData.zip && renderTemplate`<span>${siteData.zip}</span>`}</p></li>`}${siteData.country && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg">${siteData.country}</p></li>`}${siteData.business_phone && renderTemplate`<li class="relative block mb-[20px]"><p class="text-lg"><a${addAttribute(`tel:${phoneNumberToNumeric(siteData.business_phone)}`, "href")}>${formatPhoneNumber(siteData.business_phone)}</a></p></li>`}${siteData.business_email && siteData.business_email.length > 0 && renderTemplate`<li class="relative block"><p class="text-lg"><a${addAttribute(`mailto:${siteData.business_email}`, "href")}>${siteData.business_email}</a></p></li>`}</ul></div></div></div>`;
}, "D:/Astro/design-initiative/src/components/footer/contacts.astro", void 0);

const defaultImage = {"src":"/_astro/los-angeles-mountains-scaled.2ae473d6.webp","width":1280,"height":853,"format":"webp"};

const Shape13 = {"src":"/_astro/shape-13.364c4b46.png","width":291,"height":57,"format":"png"};

const $$Astro$6 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    columns,
    CTA_Banner
  } = Astro2.props;
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="main_footer relative"><div class="footer-logo relative block pb-[50px] text-center bg-[#1d4a34]">${CTA_Banner && renderTemplate`<section class="cta-section relative pt-[140px] pb-[140px]"${addAttribute({ backgroundImage: `url(${defaultImage.src})` }, "style")}><div class="auto-container"><div class="relative flex flex-col gap-1 sm:flex-row clearfix justify-between"><div class="sec-title light float-left"><span class="sub-title">Have an idea for a project?</span><h2 class="">Get in touch with us</h2></div><div class="btn-box float-right mt-[50px] sm:whitespace-nowrap"><a href="/contact" class="theme-btn btn-one">Make an appointment<i class="far fa-long-arrow-right"></i></a></div></div></div></section>`}<figure class="logo relative inline-block bg-[#1d4a34]"><div class="shape absolute bg-transparent !z-[1] max-w-[280px] [@media(min-width:290px)]:max-w-none"${addAttribute(`background-image: url(${Shape13.src})`, "style")}></div><a href="/" class="!z-10 relative"><img${addAttribute(FooterLogo.src, "src")} alt="footer logo"></a></figure></div><div class="widget-section relative pt-[65px] pb-[70px] bg-[#1d4a34]"><div class="auto-container"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]"><div class="footer-column"><div class="footer-widget about-widget"><div class="widget-title relative block mb-[25px]">${renderComponent($$result, "ColumnLabel", $$ColumnLabel, { "label": "About" })}</div><div class="widget-content"><div class="text relative block mb-[30px]"><p>At Natural Patterns, every project begins with a conversation – a journey into your aspirations and desires. We believe that your vision is the heart of our inspiration. Our team of dedicated artisans and landscaping experts works hand in hand with you to understand your needs, preferences, and the unique characteristics of your space.</p></div><ul class="social-links clearfix"><li class="relative inline-block mr-[10px]"><a href="https://www.facebook.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-facebook-f"></i></a></li><li class="relative inline-block mr-[10px]"><a href="https://www.twitter.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-twitter"></i></a></li><li class="relative inline-block mr-[10px]"><a href="https://www.vimeo.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-vimeo-v"></i></a></li><li class="relative inline-block"><a href="https://www.google.com" class="block color_white hover:bg hover:bg-[#FFFFFF1A] rounded-lg"><i class="fab fa-google-plus-g"></i></a></li></ul></div></div></div>${columns && columns.length > 0 && columns.map((column, index) => renderTemplate`${renderComponent($$result, "FooterColumn", $$FooterColumn, { ...column, "key": `footer-column-${index}` })}`)}${renderComponent($$result, "Contacts", $$Contacts, {})}</div></div></div><div class="footer-bottom pt-[30px] pb-[30px]"><div class="auto-container"><div class="grid"><div class="w-full min-h-[20px] text-slate-300 text-center relative"><div><span id="WebsiteName">${siteData.business_name}</span> &copy;
<span id="CopyRight">${YEAR}</span></div><ul class=""><li class="inline-block mr-[30px]"><a href="index.html" class="text-[15px]">Terms of Service</a></li><li class="inline-block"><a href="index.html" class="text-[15px]">Privacy Policy</a></li></ul>${renderComponent($$result, "CreatorComponent", $$CreatorComponent, { "customStyle": "sm:absolute sm:right-[10px] sm:top-0" })}</div></div></div></div></footer>`;
}, "D:/Astro/design-initiative/src/components/footer/index.astro", void 0);

const $$Astro$5 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head><body>${renderComponent($$result, "Header", $$Index$1, {})}<div class="w-11/12 mx-auto h-[100vh]">${renderSlot($$result, $$slots["default"])}</div>${renderComponent($$result, "Footer", $$Index, {})}</body></html>`;
}, "D:/Astro/design-initiative/src/layouts/BaseLayout.astro", void 0);

const $$Astro$4 = createAstro();
const $$ContentWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContentWrapper;
  return renderTemplate`${maybeRenderHead()}<div id="ContentWrapper" class="w-11/12 mx-auto">${renderSlot($$result, $$slots["default"])}</div>`;
}, "D:/Astro/design-initiative/src/layouts/ContentWrapper.astro", void 0);

const Logo = {"src":"/_astro/logo.33912b93.svg","width":720,"height":720,"format":"svg"};

const $$Astro$3 = createAstro();
const $$LogoComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`cursor-pointer block w-fit m-auto text-center ${customStyle ? customStyle : "h-auto w-auto"}`, "class")} id="LogoWrapper"><a href="/"><img${addAttribute(Logo.src, "src")} class="h-fit w-auto m-auto max-h-[100px]" alt="Logo"></a></div>`;
}, "D:/Astro/design-initiative/src/components/logoComponent.astro", void 0);

const $$Astro$2 = createAstro();
const $$HomeButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeButton;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`btn-primary ${customStyle}`, "class")} id="HomeButton">Go Home</div>`;
}, "D:/Astro/design-initiative/src/components/buttons/home_button.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BackButton;
  const { customStyle } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<div", ' id="BackButton">Go Back</div><script>\n    const button = document.getElementById("BackButton")\n    button?.addEventListener("mousedown", ()=>{history.back()})\n<\/script>'])), maybeRenderHead(), addAttribute(`btn-secondary cursor-pointer ${customStyle}`, "class"));
}, "D:/Astro/design-initiative/src/components/buttons/back_button.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "404 Error Page", "customDescription": "404 error page" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "LogoComponent", $$LogoComponent, { "customStyle": "w-fit h-auto mx-auto mt-10" })}${maybeRenderHead()}<div class="w-full h-auto"><h2 class="font-bold text-center">404 Error: The page you are looking for does not exits.</h2></div>${renderComponent($$result3, "HomeButton", $$HomeButton, { "customStyle": "my-10" })}${renderComponent($$result3, "BackButton", $$BackButton, { "customStyle": "my-10" })}` })}` })}`;
}, "D:/Astro/design-initiative/src/pages/404.astro", void 0);

const $$file = "D:/Astro/design-initiative/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContentWrapper as $, _404 as _, $$BaseLayout as a, defaultImage as d };
