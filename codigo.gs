function doGet() {
  const template = HtmlService.createTemplateFromFile('main');
  return template
    .evaluate()
    .setTitle('Gestão do Encontro')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
