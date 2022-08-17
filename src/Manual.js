export default function hide(values) {
  if (values["manual"] === "display") {
    values["manual"] = "hidden";
    values["automatic"] = "displaybig";
  } else {
    values["manual"] = "display";
    values["automatic"] = "hidden";
  }
}
