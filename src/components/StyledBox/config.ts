import { system, ConfigStyle } from "styled-system";

export const config: {
  [key: string]: ConfigStyle | boolean
} = {
  roundedTop: {
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
    scale: "radii",
  },
  roundedBottom: {
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    scale: "radii",
  },
  roundedLeft: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    scale: "radii",
  },
  roundedRight: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
    scale: "radii",
  },
  roundedTopRight: {
    property: "borderTopRightRadius",
    scale: "radii",
  },
  roundedTopLeft: {
    property: "borderTopLeftRadius",
    scale: "radii",
  },
  roundedBottomRight: {
    property: "borderBottomRightRadius",
    scale: "radii",
  },
  roundedBottomLeft: {
    property: "borderBottomLeftRadius",
    scale: "radii",
  },
  borderBottomColor: {
    property: "borderBottomColor",
    scale: "colors",
  },
  borderTopColor: {
    property: "borderTopColor",
    scale: "colors",
  },
  borderLeftColor: {
    property: "borderLeftColor",
    scale: "colors",
  },
  borderRightColor: {
    property: "borderRightColor",
    scale: "colors",
  },
  rounded: {
    property: "borderRadius",
    scale: "radii",
  },
  textDecoration: true,
  textTransform: true,
  overflowX: true,
  overflowY: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  fill: {
    property: "fill",
    scale: "colors",
  },
  stroke: {
    property: "stroke",
    scale: "colors",
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: true,
};

config.bgAttachment = config.backgroundAttachment;

const extraConfig = system(config);

export default extraConfig;

function isBoolean(param: boolean | ConfigStyle): param is boolean {
  return typeof param === 'boolean'
}

const transformAlias = (prop: string, propValue: string) => {
  const configKeys = Object.keys(config);
  let result: { [key: string]: any } = {};

  if (configKeys.includes(prop)) {
    const itemConfig = config[prop];
    if (isBoolean(itemConfig)) {
      if (config[prop] === true) {
        result[prop] = propValue;
      }
    } else {
      const { properties, property } = itemConfig
      if (properties) {
        properties.forEach(_cssProp => (result[_cssProp] = propValue));
      }
      if (property) {
        result[property] = propValue;
      }
    }
  } else {
    result[prop] = propValue;
  }
  return result;
};

export const tx = (props: { [key: string]: string }) => {
  let result = {};
  for (let prop in props) {
    result = { ...result, ...transformAlias(prop, props[prop]) };
  }
  return result;
};