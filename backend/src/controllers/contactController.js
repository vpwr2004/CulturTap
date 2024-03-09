import Contact from '../models/contact.model';

const createConcer = async (req, res) => {
    try {
        // const { }
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json(error);
    }
}