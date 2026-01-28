const Service = require('./models/service');

exports.createService = async(req,res) => {
  const { title, description, price, createdBy} = req.body;
  
  const service = await Service.create({
    title,
    description,
    price,
    createdBy : req.user.id
  });

  res.status(201).json(service);
};

exports.getAllServices = async(req,res) => {
    const services = await Service.find();
    res.status(200).json(services);
};

exports.getSingleService = async(req,res) => {
    const service = await Service.findById(req.params.id);

    if(!service){
        return res.status(404).json({ message : 'Service not found'});
    }

    res.json(service);
};