import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      green: "#A3D4C7",
      white: "#FFFFFF",
      grey: "#E5E5E5",
      darkGrey: "#333333",
      lightGreen: "#7DBF45A8",
    },
    space: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
    },
    fonts: {
      body: "system-ui, sans-serif",
    },
  },
});

export const TabsRoot = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: "8px",
});

export const TabsList = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  // alignContent:"center",
  flexWrap:"wrap",
  direction: "rtl",
  fontFamily: "bold",
  fontSize: "16px",
  textAlign: "center",
});

export const TabsTrigger = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontFamily: "$bold",
  padding: "10px",
  fontSize: "18px",
  height: "20px",
  alignItems:"center",
  width: "100px",
  borderRadius: "9999px",
  backgroundColor: "$white",
  color: "#015430",
  marginRight: "$2",

  '&[data-state="active"]': {
    backgroundColor: "$lightGreen",
    color: "#015430",
  },

  "&:hover": {
    backgroundColor: "$lightGreen",
    },
});

export const TabsContent = styled("div", {
  padding: "$3",
  fontFamily: "$body",
});

export const Fieldset = styled("fieldset", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "$2",
});

export const Label = styled("label", {
  marginBottom: "$1",
});

export const Input = styled("input", {
  padding: "$2",
  borderRadius: "4px",
  border: `1px solid $grey`,
});

export const Button = styled("button", {
  padding: "$2 $3",
  borderRadius: "8px",
  backgroundColor: "$green",
  color: "$white",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$darkGrey",
  },
});

export const Text = styled("p", {
  marginBottom: "$2",
});
