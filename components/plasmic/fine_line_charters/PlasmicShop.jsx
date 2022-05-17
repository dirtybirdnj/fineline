// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: enauC2JUZgx5ZyyeLXbdDM
// Component: NuqBXdDI1RJ8nA
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import PaheHeaderMenuTextDark from "../../PaheHeaderMenuTextDark"; // plasmic-import: oidbDHS-cDyW9A/component
import { CategoryCollection } from "@plasmicpkgs/commerce"; // plasmic-import: ny07p45F84c_/codeComponent
import { CategoryField } from "@plasmicpkgs/commerce"; // plasmic-import: hzqiq--xdG5T/codeComponent
import { ProductCollection } from "@plasmicpkgs/commerce"; // plasmic-import: vU2jzVAnFP/codeComponent
import ProductMain from "../../ProductMain"; // plasmic-import: ngYacomT_5P__7/component
import ShopingSection from "../../ShopingSection"; // plasmic-import: 5sSXh73L87u3W4/component
import Instagram from "../../Instagram"; // plasmic-import: 3mn9yXM9haJqFt/component
import Footer from "../../Footer"; // plasmic-import: eKObOqjQGvOV6B/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_fine_line_charters.module.css"; // plasmic-import: enauC2JUZgx5ZyyeLXbdDM/projectcss
import sty from "./PlasmicShop.module.css"; // plasmic-import: NuqBXdDI1RJ8nA/css

export const PlasmicShop__VariantProps = new Array();

export const PlasmicShop__ArgProps = new Array();

function PlasmicShop__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Category"}</title>
        <meta key="og:title" property="og:title" content={"Category"} />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "Inceptos tempor torquent tortor a aptent parturient a a himenaeos in ipsum ad vestibulum euismod ultrices dis vulputate vestibulum non adipiscing."
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <PaheHeaderMenuTextDark
            data-plasmic-name={"paheHeaderMenuTextDark"}
            data-plasmic-override={overrides.paheHeaderMenuTextDark}
            className={classNames("__wab_instance", sty.paheHeaderMenuTextDark)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__xgId5)}>
            <div className={classNames(projectcss.all, sty.freeBox__fYoLs)}>
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__a5Eer)}
                >
                  <CategoryCollection
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection__ij9Jg
                    )}
                    emptyMessage={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___37Omj
                        )}
                      >
                        {"No collection found!"}
                      </div>
                    }
                    loadingMessage={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8S0S
                        )}
                      >
                        {"Loading..."}
                      </div>
                    }
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        sty.h4__hnBqu
                      )}
                    >
                      <CategoryField
                        className={classNames(
                          "__wab_instance",
                          sty.categoryField__oagbH
                        )}
                        field={"name"}
                      />
                    </h4>
                  </CategoryCollection>
                </p.Stack>

                <div className={classNames(projectcss.all, sty.column__qlNQt)}>
                  <CategoryCollection
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection__kZc0
                    )}
                    emptyMessage={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dsUZh
                        )}
                      >
                        {"No collection found!"}
                      </div>
                    }
                    loadingMessage={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3Xc8D
                        )}
                      >
                        {"Loading..."}
                      </div>
                    }
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        sty.h4__myaqw
                      )}
                    >
                      <CategoryField
                        className={classNames(
                          "__wab_instance",
                          sty.categoryField__a0J1N
                        )}
                        field={"name"}
                      />
                    </h4>

                    <ProductCollection
                      data-plasmic-name={"productCollection"}
                      data-plasmic-override={overrides.productCollection}
                      className={classNames(
                        "__wab_instance",
                        sty.productCollection
                      )}
                      emptyMessage={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qnauO
                          )}
                        >
                          {"No product found!"}
                        </div>
                      }
                      loadingMessage={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qe3Sf
                          )}
                        >
                          {"Loading..."}
                        </div>
                      }
                    >
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__aZnK
                          )}
                        >
                          <ProductMain
                            data-plasmic-name={"productMain"}
                            data-plasmic-override={overrides.productMain}
                            className={classNames(
                              "__wab_instance",
                              sty.productMain
                            )}
                          />
                        </div>
                      ) : null}
                    </ProductCollection>
                  </CategoryCollection>
                </div>
              </div>
            </div>
          </div>

          <ShopingSection
            data-plasmic-name={"shopingSection"}
            data-plasmic-override={overrides.shopingSection}
            className={classNames("__wab_instance", sty.shopingSection)}
          />

          <Instagram
            data-plasmic-name={"instagram"}
            data-plasmic-override={overrides.instagram}
            className={classNames("__wab_instance", sty.instagram)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "paheHeaderMenuTextDark",
    "columns",
    "productCollection",
    "productMain",
    "shopingSection",
    "instagram",
    "footer"
  ],

  paheHeaderMenuTextDark: ["paheHeaderMenuTextDark"],
  columns: ["columns", "productCollection", "productMain"],
  productCollection: ["productCollection", "productMain"],
  productMain: ["productMain"],
  shopingSection: ["shopingSection"],
  instagram: ["instagram"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicShop__ArgProps,
      internalVariantPropNames: PlasmicShop__VariantProps
    });

    return PlasmicShop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShop";
  } else {
    func.displayName = `PlasmicShop.${nodeName}`;
  }
  return func;
}

export const PlasmicShop = Object.assign(
  // Top-level PlasmicShop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    paheHeaderMenuTextDark: makeNodeComponent("paheHeaderMenuTextDark"),
    columns: makeNodeComponent("columns"),
    productCollection: makeNodeComponent("productCollection"),
    productMain: makeNodeComponent("productMain"),
    shopingSection: makeNodeComponent("shopingSection"),
    instagram: makeNodeComponent("instagram"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicShop
    internalVariantProps: PlasmicShop__VariantProps,
    internalArgProps: PlasmicShop__ArgProps
  }
);

export default PlasmicShop;
/* prettier-ignore-end */
