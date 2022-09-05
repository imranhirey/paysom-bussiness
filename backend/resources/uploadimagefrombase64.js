let uuid = require("uuid").v4;
let fs = require("fs");

function saveImage(baseImage,fileid) {
  /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
  const uploadPath = "./";
  //path of folder where you want to save the image.
  const localPath = `${uploadPath}/public/qr`;

  const ext = baseImage.substring(
    baseImage.indexOf("/") + 1,
    baseImage.indexOf(";base64")
  );
  const fileType = baseImage.substring("data:".length, baseImage.indexOf("/"));
  //Forming regex to extract base64 data of file.
  const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, "gi");
  //Extract base64 data.
  const base64Data = baseImage.replace(regex, "");
  const filename = `${fileid}.${ext}`;

  //Check that if directory is present or not.
  if (!fs.existsSync(`${uploadPath}/public/qr`)) {
    fs.mkdirSync(`${uploadPath}/public/qr`);
  }
  if (!fs.existsSync(localPath)) {
    fs.mkdirSync(localPath);
  }
  fs.writeFileSync(localPath+'/qr' + filename, base64Data, "base64");
  return filename;
}

module.exports=saveImage