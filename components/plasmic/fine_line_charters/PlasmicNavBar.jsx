// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: enauC2JUZgx5ZyyeLXbdDM
// Component: IVyjr7QDv09hRO
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
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: IVyjr7QDv09hRO/css

export const PlasmicNavBar__VariantProps = new Array("filled", "searchOpen");

export const PlasmicNavBar__ArgProps = new Array();

function PlasmicNavBar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsllkaOhQ1Bc8EW()
  });

  return (
    <section
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
        sty.root,
        {
          [sty.rootsearchOpen]: hasVariant(variants, "searchOpen", "searchOpen")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__cJ6Wz, {
          [sty.freeBoxfilled__cJ6WzDKdC]: hasVariant(
            variants,
            "filled",
            "filled"
          ),

          [sty.freeBoxsearchOpen__cJ6WzWszqn]: hasVariant(
            variants,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sHHb)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__o9BTz
            )}
            component={Link}
            href={"/category"}
            platform={"nextjs"}
          >
            {"Bowfishing"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__zKhv2
            )}
            component={Link}
            href={"/aboutus"}
            platform={"nextjs"}
          >
            {"Trolling"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__dUdIk
            )}
            component={Link}
            href={"/aboutus"}
            platform={"nextjs"}
          >
            {"Casting"}
          </p.PlasmicLink>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox___698If)}>
          <p.PlasmicLink
            data-plasmic-name={"fineLineFishingCharters"}
            data-plasmic-override={overrides.fineLineFishingCharters}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.fineLineFishingCharters
            )}
            component={Link}
            href={"/"}
            platform={"nextjs"}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "Fine Line Fishing Charters"
              : "Fine Line fishing charters"}
          </p.PlasmicLink>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__wcNr, {
            [sty.freeBoxsearchOpen__wcNrWszqn]: hasVariant(
              variants,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__dM0B
            )}
            component={Link}
            href={"/aboutus"}
            platform={"nextjs"}
          >
            {"Contact"}
          </p.PlasmicLink>
        </p.Stack>
      </p.Stack>
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "fineLineFishingCharters"],
  fineLineFishingCharters: ["fineLineFishingCharters"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavBar__ArgProps,
      internalVariantPropNames: PlasmicNavBar__VariantProps
    });

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fineLineFishingCharters: makeNodeComponent("fineLineFishingCharters"),
    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */