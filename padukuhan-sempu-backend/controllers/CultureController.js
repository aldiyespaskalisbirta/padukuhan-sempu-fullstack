const Culture = require("../models/Culture");
const path = require("path");
const fs = require("fs");

const shortid = require("shortid");

const getCulture = async (req, res) => {
  try {
    const response = await Culture.findAll();
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCultureById = async (req, res) => {
  try {
    const response = await Culture.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });
    if (!response)
      return res.status(404).json({ message: "Budaya tidak ditemukan" });
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCulture = (req, res) => {
  if (req.files === null)
    return res
      .status(400)
      .json({ message: "Belum ada budaya yang ditambahkan" });
  const name = req.body.title;
  const description = req.body.description;
  const file = req.files.imagePath;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/culture/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ message: "Gambar harus .png, .jpg, .jpeg" });
  if (fileSize > 10000000)
    return res.status(422).json({ message: "Gambar harus kurang dari 10Mb" });

  file.mv(`./public/culture/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ message: err.message });
    try {
      await Culture.create({
        uuid: shortid.generate(),
        name: name,
        description: description,
        image: fileName,
        url: url,
      });
      res.status(201).json({ message: "Budaya berhasil ditambahkan" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
};

const updateCulture = async (req, res) => {
  const culture = await Culture.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });
  if (!culture)
    res.status(404).json({ message: "Tidak ada data yang ditemukan" });

  let fileName = "";
  if (req.files === null) {
    fileName = Culture.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(422)
        .json({ message: "Gambar harus .png, .jpg, .jpeg" });
    if (fileSize > 10000000)
      return res.status(422).json({ message: "Gambar harus kurang dari 10Mb" });

    const filepath = `./public/culture/${culture.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/culture/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ message: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/culture/${fileName}`;
  try {
    await Culture.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          uuid: req.params.uuid,
        },
      }
    );
    res.status(200).json({ message: "Budaya berhasil diupdate" });
  } catch (err) {}
};

const deleteCulture = async (req, res) => {
  const culture = await Culture.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });
  if (!culture)
    return res
      .status(404)
      .json({ message: "tidak ada id budaya yang ditemukan" });

  try {
    const filepath = `./public/culture/${culture.image}`;
    fs.unlinkSync(filepath);
    await Culture.destroy({
      where: {
        uuid: req.params.uuid,
      },
    });
    res.status(200).json({ message: "Budaya berhasil di hapus" });
  } catch (err) {}
};

module.exports = {
  getCulture,
  getCultureById,
  createCulture,
  updateCulture,
  deleteCulture,
};
