const notFound = (req, res) => res.status(404).send('Route cant be found');

module.exports = notFound
