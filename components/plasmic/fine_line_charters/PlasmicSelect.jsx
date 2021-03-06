// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: enauC2JUZgx5ZyyeLXbdDM
// Component: OWvt5HQc2rGxSE
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Select__Overlay from "../../Select__Overlay"; // plasmic-import: dtSYYPWUo8m3OK/component
import Select__Option from "../../Select__Option"; // plasmic-import: o2kqYWuWYIGqbv/component
import { useUnnamedGlobalGroupOfVariants } from "./PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants"; // plasmic-import: Bhrb4fDzkR-Jm1/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_fine_line_charters.module.css"; // plasmic-import: enauC2JUZgx5ZyyeLXbdDM/projectcss
import sty from "./PlasmicSelect.module.css"; // plasmic-import: OWvt5HQc2rGxSE/css
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: 3LE4wq8LdNNQL7/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: k7PXLmujUwM2b8/icon

export const PlasmicSelect__VariantProps = new Array(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "color",
  "unnamedVariant"
);

export const PlasmicSelect__ArgProps = new Array(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name",
  "selectedContent2"
);

const PlasmicSelectContext = React.createContext(undefined);

function PlasmicSelect__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  const globalVariants = ensureGlobalVariants({
    unnamedGlobalGroupOfVariants: useUnnamedGlobalGroupOfVariants()
  });

  return (
    <PlasmicSelectContext.Provider value={{ variants, args }}>
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
          sty.root,
          {
            [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
            [sty.rootcolor_softBlue]: hasVariant(variants, "color", "softBlue"),
            [sty.rootcolor_softCyan]: hasVariant(variants, "color", "softCyan"),
            [sty.rootcolor_softGreen]: hasVariant(
              variants,
              "color",
              "softGreen"
            ),

            [sty.rootcolor_softOrange]: hasVariant(
              variants,
              "color",
              "softOrange"
            ),

            [sty.rootcolor_softPink]: hasVariant(variants, "color", "softPink"),
            [sty.rootcolor_softPurple]: hasVariant(
              variants,
              "color",
              "softPurple"
            ),

            [sty.rootcolor_softRed]: hasVariant(variants, "color", "softRed"),
            [sty.rootcolor_softYellow]: hasVariant(
              variants,
              "color",
              "softYellow"
            ),

            [sty.rootisOpen]: hasVariant(variants, "isOpen", "isOpen")
          }
        )}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <button
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.trigger,
            {
              [sty.trigger___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.triggercolor_clear]: hasVariant(variants, "color", "clear"),
              [sty.triggercolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              [sty.triggercolor_softCyan]: hasVariant(
                variants,
                "color",
                "softCyan"
              ),

              [sty.triggercolor_softGray]: hasVariant(
                variants,
                "color",
                "softGray"
              ),

              [sty.triggercolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),

              [sty.triggercolor_softOrange]: hasVariant(
                variants,
                "color",
                "softOrange"
              ),

              [sty.triggercolor_softPink]: hasVariant(
                variants,
                "color",
                "softPink"
              ),

              [sty.triggercolor_softPurple]: hasVariant(
                variants,
                "color",
                "softPurple"
              ),

              [sty.triggercolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              [sty.triggercolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),

              [sty.triggerglobal_unnamedGlobalGroupOfVariants_unnamedVariant]:
                hasVariant(
                  globalVariants,
                  "unnamedGlobalGroupOfVariants",
                  "unnamedVariant"
                ),

              [sty.triggerisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.triggerisOpen]: hasVariant(variants, "isOpen", "isOpen"),
              [sty.triggershowPlaceholder]: hasVariant(
                variants,
                "showPlaceholder",
                "showPlaceholder"
              )
            }
          )}
          disabled={
            hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
          }
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainercolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              [sty.contentContainerglobal_unnamedGlobalGroupOfVariants_unnamedVariant]:
                hasVariant(
                  globalVariants,
                  "unnamedGlobalGroupOfVariants",
                  "unnamedVariant"
                ),

              [sty.contentContainerisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.contentContainershowPlaceholder]: hasVariant(
                variants,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentcolor_softBlue]: hasVariant(
                      variants,
                      "color",
                      "softBlue"
                    ),

                    [sty.slotTargetSelectedContentcolor_softCyan]: hasVariant(
                      variants,
                      "color",
                      "softCyan"
                    ),

                    [sty.slotTargetSelectedContentcolor_softGreen]: hasVariant(
                      variants,
                      "color",
                      "softGreen"
                    ),

                    [sty.slotTargetSelectedContentcolor_softOrange]: hasVariant(
                      variants,
                      "color",
                      "softOrange"
                    ),

                    [sty.slotTargetSelectedContentcolor_softPink]: hasVariant(
                      variants,
                      "color",
                      "softPink"
                    ),

                    [sty.slotTargetSelectedContentcolor_softPurple]: hasVariant(
                      variants,
                      "color",
                      "softPurple"
                    ),

                    [sty.slotTargetSelectedContentcolor_softRed]: hasVariant(
                      variants,
                      "color",
                      "softRed"
                    ),

                    [sty.slotTargetSelectedContentcolor_softYellow]: hasVariant(
                      variants,
                      "color",
                      "softYellow"
                    ),

                    [sty.slotTargetSelectedContentisDisabled]: hasVariant(
                      variants,
                      "isDisabled",
                      "isDisabled"
                    ),

                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      variants,
                      "isOpen",
                      "isOpen"
                    ),

                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent2,
                  className: classNames(sty.slotTargetSelectedContent2, {
                    [sty.slotTargetSelectedContent2color_softBlue]: hasVariant(
                      variants,
                      "color",
                      "softBlue"
                    ),

                    [sty.slotTargetSelectedContent2color_softCyan]: hasVariant(
                      variants,
                      "color",
                      "softCyan"
                    ),

                    [sty.slotTargetSelectedContent2color_softGreen]: hasVariant(
                      variants,
                      "color",
                      "softGreen"
                    ),

                    [sty.slotTargetSelectedContent2color_softOrange]:
                      hasVariant(variants, "color", "softOrange"),
                    [sty.slotTargetSelectedContent2color_softPink]: hasVariant(
                      variants,
                      "color",
                      "softPink"
                    ),

                    [sty.slotTargetSelectedContent2color_softPurple]:
                      hasVariant(variants, "color", "softPurple"),
                    [sty.slotTargetSelectedContent2color_softRed]: hasVariant(
                      variants,
                      "color",
                      "softRed"
                    ),

                    [sty.slotTargetSelectedContent2color_softYellow]:
                      hasVariant(variants, "color", "softYellow"),
                    [sty.slotTargetSelectedContent2isDisabled]: hasVariant(
                      variants,
                      "isDisabled",
                      "isDisabled"
                    ),

                    [sty.slotTargetSelectedContent2isOpen]: hasVariant(
                      variants,
                      "isOpen",
                      "isOpen"
                    ),

                    [sty.slotTargetSelectedContent2showPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Select???",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdercolor_softBlue]: hasVariant(
                      variants,
                      "color",
                      "softBlue"
                    ),

                    [sty.slotTargetPlaceholdercolor_softGreen_showPlaceholder]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softGreen"),
                    [sty.slotTargetPlaceholdercolor_softPink_showPlaceholder]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softPink"),
                    [sty.slotTargetPlaceholdercolor_softRed_showPlaceholder]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softRed"),
                    [sty.slotTargetPlaceholdercolor_softYellow_showPlaceholder]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softYellow"),
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),

                    [sty.slotTargetPlaceholdershowPlaceholder_color_softBlue]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softBlue"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softCyan]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softCyan"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softOrange]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softOrange"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softPurple]:
                      hasVariant(variants, "color", "softPurple") &&
                      hasVariant(variants, "showPlaceholder", "showPlaceholder")
                  })
                })
              : null}
          </div>

          <p.PlasmicIcon
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant(variants, "isOpen", "isOpen")
                ? ChevronUpsvgIcon
                : ChevronDownIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIconcolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),

              [sty.dropdownIconcolor_softCyan]: hasVariant(
                variants,
                "color",
                "softCyan"
              ),

              [sty.dropdownIconcolor_softGray]: hasVariant(
                variants,
                "color",
                "softGray"
              ),

              [sty.dropdownIconcolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),

              [sty.dropdownIconcolor_softOrange]: hasVariant(
                variants,
                "color",
                "softOrange"
              ),

              [sty.dropdownIconcolor_softPink]: hasVariant(
                variants,
                "color",
                "softPink"
              ),

              [sty.dropdownIconcolor_softPurple]: hasVariant(
                variants,
                "color",
                "softPurple"
              ),

              [sty.dropdownIconcolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),

              [sty.dropdownIconcolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),

              [sty.dropdownIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.dropdownIconisOpen]: hasVariant(
                variants,
                "isOpen",
                "isOpen"
              ),

              [sty.dropdownIconunnamedVariant]: hasVariant(
                variants,
                "unnamedVariant",
                "unnamedVariant"
              )
            })}
            role={"img"}
          />
        </button>

        {(hasVariant(variants, "isOpen", "isOpen") ? true : false) ? (
          <Select__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant(variants, "isOpen", "isOpen")
            })}
            relativePlacement={"bottom"}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  variants,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__lcFo3
                      )}
                      value={"value1"}
                    >
                      {"Option 1"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__enHAt
                      )}
                      value={"value2"}
                    >
                      {"Option 2"}
                    </Select__Option>
                  </React.Fragment>
                ),

                value: args.children
              })}
            </div>
          </Select__Overlay>
        ) : null}
      </div>
    </PlasmicSelectContext.Provider>
  );
}

function useBehavior(props, ref) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: (
        <React.Fragment>
          <Select__Option
            className={classNames("__wab_instance", sty.option__lcFo3)}
            value={"value1"}
          >
            {"Option 1"}
          </Select__Option>

          <Select__Option
            className={classNames("__wab_instance", sty.option__enHAt)}
            value={"value2"}
          >
            {"Option 2"}
          </Select__Option>
        </React.Fragment>
      )
    };
  }
  return pp.useSelect(
    PlasmicSelect,
    props,
    {
      isOpenVariant: { group: "isOpen", variant: "isOpen" },
      placeholderVariant: {
        group: "showPlaceholder",
        variant: "showPlaceholder"
      },

      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      triggerContentSlot: "selectedContent",
      optionsSlot: "children",
      placeholderSlot: "placeholder",
      root: "root",
      trigger: "trigger",
      overlay: "overlay",
      optionsContainer: "optionsContainer"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer"
  ],

  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__ArgProps,
      internalVariantPropNames: PlasmicSelect__VariantProps
    });

    return PlasmicSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect";
  } else {
    func.displayName = `PlasmicSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect = Object.assign(
  // Top-level PlasmicSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),
    // Metadata about props expected for PlasmicSelect
    internalVariantProps: PlasmicSelect__VariantProps,
    internalArgProps: PlasmicSelect__ArgProps,
    // Context for sub components
    Context: PlasmicSelectContext,
    useBehavior
  }
);

export default PlasmicSelect;
/* prettier-ignore-end */
