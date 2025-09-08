const Gadget = require("../models/gadgetSchema");

//Get All Gadgets
const getGadgets = async (req, res) => {
  try {
    const gadgets = await Gadget.findAll();
    const gadgetProbabilities = gadgets.map(gadget => {
      return {
        id: gadget.id,
        name: gadget.name,
        status: gadget.status,
        mission_success_probability: `${Math.floor(Math.random() * 100)}%`,
      };
    });
    res.status(200).json({ response: gadgetProbabilities });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Add a new Gadget
const createGadget = async (req, res) => {
  try {
    const names = [
      "The Nightingale",
      "The Kraken",
      "The Falcon",
      "The Eagle",
      "The Hawk",
      "The Raven",
      "The Phoenix",
      "The Griffin",
      "The Dragon",
    ];
    const gadget = await Gadget.create({
      //...req.body,
      status: req.body.status,
      name: names[Math.floor(Math.random() * names.length)],
    });
    res.status(201).json({ response: gadget });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//Get gadget by Status
const getGadgetByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const gadgets = await Gadget.findAll({ where: { status } });
    res.status(200).json({ response: gadgets });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//Update a Gadget
const updateGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const gadget = await Gadget.findByPk(id);
    if (!gadget) {
      res.status(404).json({ error: "Gadget not found" });
    }
    const updatedGadget = await gadget.update(req.body);
    res.status(200).json({ response: updatedGadget });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//Delete a Gadget
const deleteGadget = async (req, res) => {
  try {
    const { id } = req.params;

    const gadget = await Gadget.findByPk(id);
    if (!gadget) {
      res.status(404).json({ error: "Gadget not found" });
    }
    await gadget.update({
      status: "Decommissioned",
      decomissioned_at: new Date(),
    });
    res.status(200).json({ message: "Gadget Decommissioned" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//self-destruct a gadget
const selfDestructGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const conformationCode = Math.floor(Math.random() * 5000);
    res.status(200).json({
      message: "self-destruct initiated",
      conformation_code: conformationCode,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getGadgets,
  createGadget,
  updateGadget,
  deleteGadget,
  getGadgetByStatus,
  selfDestructGadget,
};
