import XLSX from "xlsx";

function fakeClick(obj) {
  const ev = document.createEvent("MouseEvents");
  ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  obj.dispatchEvent(ev);
}
export function exportRaw(name, data) {
  const urlObject = window.URL || window.webkitURL || window;
  const export_blob = new Blob([data]);
  const save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
  save_link.href = urlObject.createObjectURL(export_blob);
  console.log('export_blob:', export_blob);
  save_link.download = name;
  console.log('name:', name);
  fakeClick(save_link);
}

export function readOneSheet(sheet, sheetName, xlsxName, idx, exportThis) {
  const json = XLSX.utils.sheet_to_json(sheet, {
    header: 1
  });
  console.log('sheetName:', sheetName, ' xlsxName:', xlsxName, ' idx:', idx)
  console.log('json:', json);

  exportThis.datas.splice(idx, 0, json)
  console.log('exportThis.datas:', exportThis.datas)
  exportThis.sheetnames.splice(idx, 0, sheetName)
  exportThis.xlsxnames.splice(idx, 0, xlsxName)
  exportRaw(sheetName + '.cpp', json)
}
