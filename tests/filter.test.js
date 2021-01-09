const test = require("ava");
const eleventyConfig = require("@11ty/eleventy/src/EleventyConfig");
const TemplateRender = require("@11ty/eleventy/src/TemplateRender");
const EleventyExtensionMap = require("@11ty/eleventy/src/EleventyExtensionMap");

const sampleFilter = require("../sampleFilter");

function getNewTemplateRender(name, inputDir) {
  let tr = new TemplateRender(name, inputDir);
  tr.extensionMap = new EleventyExtensionMap();
  return tr;
}

test("filter does not thow", (t) => {
  t.notThrows(function () {
    eleventyConfig.addFilter("sampleFilter", sampleFilter);
  });
});

test("filter does nothing", async (t) => {
  let tr = getNewTemplateRender("njk");
  let engine = tr.engine;
  engine.addFilters({
    sampleFilter: sampleFilter,
  });
  let fn = await tr.getCompiledTemplate(
    `{% set test = "hi" | sampleFilter %}{{ test }}`
  );
  t.snapshot(await fn());
});
