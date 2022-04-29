// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: enauC2JUZgx5ZyyeLXbdDM
// Component: NN00kAAArQ2R_R
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsllkaOhQ1Bc8EW } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LLKAOh_Q1bc8eW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_fine_line_charters.module.css"; // plasmic-import: enauC2JUZgx5ZyyeLXbdDM/projectcss
import sty from "./PlasmicCartItem.module.css"; // plasmic-import: NN00kAAArQ2R_R/css
import RecycleIcon from "./icons/PlasmicIcon__Recycle"; // plasmic-import: 5KirajlK2gMG8c/icon
import Secure2Icon from "./icons/PlasmicIcon__Secure2"; // plasmic-import: TIE0GKFqnrTKf1/icon

export const PlasmicCartItem__VariantProps = new Array();

export const PlasmicCartItem__ArgProps = new Array(
  "itemImg",
  "title",
  "productNumber",
  "size",
  "quantity"
);

function PlasmicCartItem__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsllkaOhQ1Bc8EW()
  });

  return true ? (
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
      {true ? (
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"200px"}
          src={
            args.itemImg !== undefined
              ? args.itemImg
              : {
                  src: "/plasmic/fine_line_charters/images/shoe23.png",
                  fullWidth: 450,
                  fullHeight: 450,
                  aspectRatio: undefined
                }
          }
        />
      ) : null}
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rfeCr)}
        >
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            platform={"nextjs"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__jc6Uu)}>
              {p.renderPlasmicSlot({
                defaultContents: "Some Title",
                value: args.title,
                className: classNames(sty.slotTargetTitle)
              })}
            </div>
          </p.PlasmicLink>

          <div className={classNames(projectcss.all, sty.freeBox__tWBkX)}>
            {p.renderPlasmicSlot({
              defaultContents: "#00000",
              value: args.productNumber,
              className: classNames(sty.slotTargetProductNumber)
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__nwnp0)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jI5Cu
              )}
            >
              {"Size: "}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "11",
              value: args.size
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__hCulb)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c3FtY
              )}
            >
              {"Quantity: "}
            </div>

            {p.renderPlasmicSlot({
              defaultContents: "1",
              value: args.quantity
            })}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qjy8K)}
          >
            <RecycleIcon
              className={classNames(projectcss.all, sty.svg__gxZjp)}
              role={"img"}
            />

            <Secure2Icon
              className={classNames(projectcss.all, sty.svg__c1WS6)}
              role={"img"}
            />
          </p.Stack>
        </p.Stack>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "img", "link"],
  img: ["img"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCartItem__ArgProps,
      internalVariantPropNames: PlasmicCartItem__VariantProps
    });

    return PlasmicCartItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCartItem";
  } else {
    func.displayName = `PlasmicCartItem.${nodeName}`;
  }
  return func;
}

export const PlasmicCartItem = Object.assign(
  // Top-level PlasmicCartItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicCartItem
    internalVariantProps: PlasmicCartItem__VariantProps,
    internalArgProps: PlasmicCartItem__ArgProps
  }
);

export default PlasmicCartItem;
/* prettier-ignore-end */