function camelCaseToTitleCase(str) {
  if (!str?.length) {
    return;
  }
  let titleCaseStr = str.replace(/([a-z])([A-Z0-9])/g, "$1 $2");

  titleCaseStr = titleCaseStr.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });

  return titleCaseStr;
}

module.exports = camelCaseToTitleCase;
