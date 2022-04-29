// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: enauC2JUZgx5ZyyeLXbdDM
// Component: oidbDHS-cDyW9A
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsllkaOhQ1Bc8EW } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LLKAOh_Q1bc8eW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_fine_line_charters.module.css"; // plasmic-import: enauC2JUZgx5ZyyeLXbdDM/projectcss
import sty from "./PlasmicPaheHeaderMenuTextDark.module.css"; // plasmic-import: oidbDHS-cDyW9A/css

export const PlasmicPaheHeaderMenuTextDark__VariantProps = new Array();

export const PlasmicPaheHeaderMenuTextDark__ArgProps = new Array();

function PlasmicPaheHeaderMenuTextDark__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsllkaOhQ1Bc8EW()
  });

  return (
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jnXbr)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___02BPz)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__dHwp8
            )}
            component={Link}
            href={"/category"}
            platform={"nextjs"}
          >
            {"Services"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___8FU5T
            )}
            component={Link}
            href={"/aboutus"}
            platform={"nextjs"}
          >
            {"About"}
          </p.PlasmicLink>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__kEbz1)}>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___3Nwcp
            )}
            component={Link}
            href={
              hasVariant(globalVariants, "screen", "mobileOnly") ? "/" : "/"
            }
            platform={"nextjs"}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "Commerce"
              : "Fine Line Fishing Charters"}
          </p.PlasmicLink>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bEkx)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___0Znz
            )}
            component={Link}
            href={"/aboutus"}
            platform={"nextjs"}
          >
            {"Contact"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___1Tywp
            )}
            component={Link}
            href={"/aboutus"}
            platform={"nextjs"}
          >
            {"Make a Reservation"}
          </p.PlasmicLink>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPaheHeaderMenuTextDark__ArgProps,
      internalVariantPropNames: PlasmicPaheHeaderMenuTextDark__VariantProps
    });

    return PlasmicPaheHeaderMenuTextDark__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPaheHeaderMenuTextDark";
  } else {
    func.displayName = `PlasmicPaheHeaderMenuTextDark.${nodeName}`;
  }
  return func;
}

export const PlasmicPaheHeaderMenuTextDark = Object.assign(
  // Top-level PlasmicPaheHeaderMenuTextDark renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPaheHeaderMenuTextDark
    internalVariantProps: PlasmicPaheHeaderMenuTextDark__VariantProps,
    internalArgProps: PlasmicPaheHeaderMenuTextDark__ArgProps
  }
);

export default PlasmicPaheHeaderMenuTextDark;
/* prettier-ignore-end */
