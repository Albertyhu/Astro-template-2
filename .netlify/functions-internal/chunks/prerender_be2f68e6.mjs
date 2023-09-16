/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro_96538662.mjs';
import 'html-escaper';
import { d as defaultImage, $ as $$ContentWrapper, a as $$BaseLayout } from './pages/404_66d7e9b8.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import uuid from 'react-uuid';
/* empty css                           *//* empty css                          *//* empty css                          */
function makeURLfriendly(inputString) {
  return inputString.replace(/\s+/g, "_");
}

const $$Astro$8 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$3;
  const {
    button_label,
    link,
    customStyle = ""
  } = Astro2.props;
  const BeforeStyle = "before:object-fit before:content-[''] before:h-full before:w-0 before:bg-[#21563D] before:absolute before:inset-0 before:opacity-60 hover:before:w-full before:transform-all before:z-[0]";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-fit mx-auto p-1 sm:px-5 sm:py-5 rounded-lg cursor-pointer select-none active:translate-x-[1px] active:translate-y-[1px] relative bg-[#2f7955] text-white font-bold overflow-hidden ${BeforeStyle} clippedShape ${customStyle}`, "class")}><a${addAttribute(link, "href")} class=" z-1 capitalizetext-2xl text-white text-center relative">${button_label}</a></div>`;
}, "D:/Astro/design-initiative/src/components/liquid-button/index.astro", void 0);

const $$Astro$7 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$2;
  const {
    title,
    subtitle,
    button_label,
    link,
    titleStyle,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="TitleSection" class="absolute h-fit w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[50] text-white font-['Prata', sans-serif]"><div id="TitleWrapper"${addAttribute(wrapperStyle ? wrapperStyle : "w-11/12 sm:max-w-[800px] mx-auto", "class")}><h1${addAttribute(titleStyle ? titleStyle : "text-white text-center text-2xl sm:text-[50px] leading-[50px] sm:text-[90px] sm:leading-[90px] fadeInUp font-['Prata',serif]", "class")}>${title}</h1><h2 class="text-white text-center text-sm sm:text-[20px] !block fadeInUp opacity-0 animation-delay-1 font-['Montserrat',sans-serif]">${subtitle}</h2>${button_label && renderTemplate`${renderComponent($$result, "LiquidButton", $$Index$3, { "button_label": button_label, "link": link, "customStyle": "fadeInUp opacity-0 animation-delay-2 font-['Montserrat',sans-serif] text-[17px] my-10" })}`}</div></div>`;
}, "D:/Astro/design-initiative/src/components/TitleComponent/index.astro", void 0);

const $$Astro$6 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    image,
    title,
    subtitle,
    button_label,
    link
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="small_banner"${addAttribute(`relative h-[250px] w-full bg-center before:absolute  before:content-[''] before:bg-[rgba(0,0,0,0.4)] before:w-full before:h-full before:z-10 scrollToTopIndicator`, "class")}><img${addAttribute(image ? image.src : defaultImage.src, "src")} class="w-full h-full object-cover" alt="banner image">${title && renderTemplate`${renderComponent($$result, "TitleComponent", $$Index$2, { "title": title, "subtitle": subtitle, "button_label": button_label, "link": link, "wrapperStyle": "w-11/12 mx-auto", "titleStyle": "whitespace-nowrap text-white text-center text-3xl leading-[50px] sm:text-[45px] sm:leading-[90px] fadeInUp font-['Prata',serif]" })}`}</div>`;
}, "D:/Astro/design-initiative/src/components/small_banner/index.astro", void 0);

const $$Astro$5 = createAstro();
const prerender$2 = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../posts/*.md");
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const tags = [...new Set(allTags)];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Search Posts By Index" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": "Search posts by tags" })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<ul class="flex flex-row flex-wrap [&>li]:ml-5 justify-evenly">${tags && tags.length > 0 && tags.map((tag) => renderTemplate`<li class="hover:underline hover:font-bold my-5 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-[1.5rem] border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(`../tags/${makeURLfriendly(tag)}/1`, "href")}>${tag}</a></li>`)}</ul>` })}` })}`;
}, "D:/Astro/design-initiative/src/pages/tags/index.astro", void 0);

const $$file$2 = "D:/Astro/design-initiative/src/pages/tags/index.astro";
const $$url$2 = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  prerender: prerender$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const DOTS = '...';

function usePagination({ currentPage, totalCount, pageSize }) {
  const consecPage = 1;
  const createRange = (first, last) => {
    var pageRange = [];
    for (var i = first; i <= last; i++) {
      pageRange.push(i);
    }
    return pageRange;
  };
  const Pagination = () => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const firstPage = 1;
    if (totalPages < consecPage + 5) {
      const range = createRange(firstPage, totalPages);
      return [...range];
    }
    var leftMostPage = 0;
    var rightMostPage = 0;
    var addLeftPage = 0;
    var addRightPage = 0;
    if (currentPage - consecPage - 2 > 0) {
      leftMostPage = currentPage - consecPage;
    } else {
      leftMostPage = firstPage;
      addRightPage = consecPage - (currentPage - 2);
    }
    if (currentPage + consecPage + 1 < totalPages) {
      rightMostPage = currentPage + consecPage;
    } else {
      rightMostPage = totalPages;
      addLeftPage = consecPage - (totalPages - currentPage - 1);
    }
    if (leftMostPage !== firstPage) {
      leftMostPage -= addLeftPage;
    }
    if (rightMostPage !== totalPages) {
      rightMostPage += addRightPage;
    }
    const displayLeftDots = currentPage - consecPage - 1 > 1 ? true : false;
    const displayRightDots = currentPage + consecPage + 1 < totalPages ? true : false;
    const midRange = createRange(leftMostPage, rightMostPage);
    if (displayLeftDots && displayRightDots) {
      return [firstPage, DOTS, ...midRange, DOTS, totalPages];
    }
    if (!displayLeftDots && displayRightDots) {
      return [...midRange, DOTS, totalPages];
    }
    if (displayLeftDots && !displayRightDots) {
      return [firstPage, DOTS, ...midRange];
    }
  };
  return Pagination();
}

const RenderPagination = (props) => {
  const { pageSize, totalCount, currentPage, totalPages, isMobile } = props;
  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      return window.location.href = `/blog/${newPage}`;
    }
  };
  const Pagination = usePagination({ currentPage, totalCount, pageSize });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "PaginationContainer",
      className: `my-10 block list-none text-center ${isMobile ? "sm:hidden" : ""}`,
      children: [
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "leftArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => onPageChange(currentPage - 1),
            children: "˂ Prev"
          }
        ),
        Pagination?.map((page) => {
          const uniqueKey = uuid();
          if (page === DOTS) {
            return /* @__PURE__ */ jsx("li", { className: "PaginatedListItem", children: "…" }, uniqueKey);
          }
          if (page === currentPage) {
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: "selected PaginatedListItem",
                onClick: () => onPageChange(page),
                children: page
              },
              uniqueKey
            );
          }
          return /* @__PURE__ */ jsx(
            "li",
            {
              className: "PaginatedListItem",
              onClick: () => onPageChange(page),
              children: page
            },
            uniqueKey
          );
        }),
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "rightArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => {
              onPageChange(currentPage + 1);
            },
            children: "Next ˃"
          }
        )
      ]
    }
  );
};

const getPaginatedArray = (allPosts, currentPage, pageSize) => {
  return allPosts.slice((currentPage - 1) * pageSize, pageSize * currentPage);
};
const createStaticPathArrayForTagsAndPage = ({
  allPosts,
  assets,
  PAGE_SIZE
}) => {
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];
  var staticPaths = [];
  uniqueTags.forEach((unique_tag) => {
    var filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags?.some((item) => item.tag === unique_tag)
    );
    var totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
    var i = 0;
    var assetMap = /* @__PURE__ */ new Map();
    do {
      var paginatedArray = getPaginatedArray(filteredPosts, i, PAGE_SIZE);
      paginatedArray = hydratePaginatedPostArray(paginatedArray, assetMap, assets);
      var path = {
        params: {
          tag: makeURLfriendly(unique_tag),
          page: i
        },
        props: {
          totalPages,
          paginatedArray,
          totalPosts: filteredPosts.length,
          PAGE_SIZE
        }
      };
      staticPaths.push(path);
      i++;
    } while (i <= totalPages);
  });
  return staticPaths;
};
const createStaticPathArrayForTags = ({
  allPosts,
  PAGE_SIZE
}) => {
  var allTags = allPosts.map((post) => post.frontmatter.tags).flat().map((item) => item.tag);
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags.map((unique_tag) => {
    var filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags?.some((item) => item.tag === unique_tag)
    );
    var totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
    return {
      params: {
        tag: makeURLfriendly(unique_tag)
      },
      props: {
        totalPages,
        filteredPosts
      }
    };
  });
};
const getImageFileName = (imageFile) => {
  var pathArray = imageFile.split("/");
  var fileName = pathArray[pathArray.length - 1];
  var fileNameArray = fileName.split(".");
  return fileNameArray[0];
};
const hydratePaginatedPostArray = (paginatedArray, assetMap, assets) => {
  var hydratedArray = paginatedArray.map((item) => {
    if (item.frontmatter.featured_image) {
      var featured_image = null;
      var fileName = getImageFileName(item.frontmatter.featured_image);
      if (assetMap.get(fileName)) {
        featured_image = assetMap.get(fileName);
      } else {
        var foundAsset = assets.find((asset) => {
          var found = asset.default.src.includes(fileName);
          if (found) {
            assetMap.set(fileName, asset.default.src);
          }
          return found;
        });
        featured_image = foundAsset?.default.src;
      }
    }
    if (featured_image) {
      return {
        ...item,
        featured_image
      };
    }
    return item;
  });
  return hydratedArray;
};

const $$Astro$4 = createAstro();
const $$TagListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TagListItem;
  const {
    tag,
    url
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-fit hover:underline hover:font-bold mx-1 cursor-pointer capitalize rounded-[0.5em] border-dotted border-2 text-base border-[#a1a1a1] p-1 bg-[#F8FCFD] tagListItem"><a${addAttribute(url, "href")}>${tag}</a></div>`;
}, "D:/Astro/design-initiative/src/components/blogComponents/tagListItem.astro", void 0);

const $$Astro$3 = createAstro();
const $$TagList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TagList;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap "><p class="font-bold">Tags:</p>${tags.map((item) => renderTemplate`${renderComponent($$result, "TagListItem", $$TagListItem, { "url": `/tags/${makeURLfriendly(item.tag)}/1`, "tag": item.tag })}`)}</div>`;
}, "D:/Astro/design-initiative/src/components/blogComponents/tagList.astro", void 0);

const RenderDescription = (props) => {
  const { description } = props;
  const paraRef = useRef(null);
  useEffect(() => {
    if (paraRef.current && paraRef.current.offsetHeight > 50) {
      paraRef.current.classList.add("description");
    }
  }, [paraRef.current]);
  return /* @__PURE__ */ jsxs(
    "p",
    {
      ref: paraRef,
      className: "relative h-auto max-h-[100px] w-full overflow-hidden before:absolute before:inset-0 before:z-[2]",
      children: [
        /* @__PURE__ */ jsx("b", { children: "Description: " }),
        description
      ]
    }
  );
};

const $$Astro$2 = createAstro();
const $$PreviewLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PreviewLink;
  const {
    title,
    author,
    description,
    thumbnail,
    featured_image,
    pubDate,
    tags,
    url
  } = Astro2.props;
  let datePublished = pubDate ? new Date(pubDate) : null;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg post-box-shadow bg-white blog-preview-panel mb-[20px]">${thumbnail && renderTemplate`<div class="overflow-hidden cursor-pointer h-[250px] w-auto rounded-[5px_5px_0px_0px]"><a${addAttribute(url, "href")}><img loading="lazy" decoding="async"${addAttribute(thumbnail, "src")}${addAttribute(`${title} featured image`, "alt")} class="w-full h-full object-cover"></a></div>`}<div class="w-9/12 mx-auto py-10">${datePublished && renderTemplate`<div class="text-[#7a7b80]">${datePublished.toLocaleDateString()}</div>`}${title && renderTemplate`<a${addAttribute(url, "href")} class="cursor-pointer text-2xl"><h2 class="font-bold">${title}</h2></a>`}<p>${author && renderTemplate`<span class="font-bold">Published by <b>${author}</b></span>`}</p>${description && renderTemplate`${renderComponent($$result, "DescriptionComponent", RenderDescription, { "description": description, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Astro/design-initiative/src/components/blogComponents/description.tsx", "client:component-export": "default" })}`}${tags && tags.length > 0 && renderTemplate`${renderComponent($$result, "TagList", $$TagList, { "tags": tags })}`}</div></div>`;
}, "D:/Astro/design-initiative/src/components/blogComponents/previewLink.astro", void 0);

const $$Astro$1 = createAstro();
const Astro$1 = $$Astro$1;
const prerender$1 = true;
async function getStaticPaths$1() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  try {
    allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({}), () => "../../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  var assets = [];
  try {
    assets = await Astro$1.glob(/* #__PURE__ */ Object.assign({}), () => "../../../assets/uploads/*");
  } catch (error) {
    assets = [];
  }
  return createStaticPathArrayForTagsAndPage({ allPosts, assets, PAGE_SIZE });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$page;
  const {
    tag,
    page
  } = Astro2.params;
  const {
    totalPages,
    paginatedArray,
    totalPosts,
    PAGE_SIZE
  } = Astro2.props;
  const BannerTitle = `Posts tagged with ${tag}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": BannerTitle })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, { "customStyle": "w-11/12 h-auto mx-auto mb-[100px] sm:mb[0px]" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "}": true, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderTagPagination.tsx", "client:component-export": "default" })}${paginatedArray && paginatedArray.length > 0 ? renderTemplate`${maybeRenderHead()}<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${paginatedArray.map((post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<div></div>`}${renderComponent($$result3, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": totalPosts, "}": true, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderTagPagination.tsx", "client:component-export": "default" })}` })}` })}`;
}, "D:/Astro/design-initiative/src/pages/tags/[tag]/[page].astro", void 0);

const $$file$1 = "D:/Astro/design-initiative/src/pages/tags/[tag]/[page].astro";
const $$url$1 = "/tags/[tag]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  prerender: prerender$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const Astro = $$Astro;
const prerender = true;
async function getStaticPaths() {
  const PAGE_SIZE = 6;
  var allPosts = [];
  try {
    allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  var assets = [];
  try {
    assets = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../../assets/uploads/*");
  } catch (error) {
    assets = [];
  }
  var staticArray = createStaticPathArrayForTags({ allPosts, assets, PAGE_SIZE });
  return staticArray;
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const {
    tag
  } = Astro2.params;
  const {
    totalPages,
    filteredPosts
  } = Astro2.props;
  const BannerTitle = `Posts tagged with ${tag}`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Banner", $$Index$1, { "title": BannerTitle })}${renderComponent($$result2, "ContentWrapper", $$ContentWrapper, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1 class="text-2xl font-bold text-center mt-10">Posts tagged with ${tag}</h1>${filteredPosts && filteredPosts.length > 0 ? renderTemplate`<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">${filteredPosts.map((post) => {
    if (post.frontmatter.featured_image) {
      return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url, "thumbnail": post.featured_image })}`;
    }
    return renderTemplate`${renderComponent($$result3, "BlogPreview", $$PreviewLink, { ...post.frontmatter, "url": post.url })}`;
  })}</div>` : renderTemplate`<div></div>`}` })}` })}`;
}, "D:/Astro/design-initiative/src/pages/tags/[tag].astro", void 0);

const $$file = "D:/Astro/design-initiative/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page_ as _, _tag_ as a, index as i };
