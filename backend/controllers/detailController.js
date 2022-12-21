const getDetails = (req, res) => {
    res.status(200).json({message: 'Get Details'})
}

const setDetail = (req, res) => {
    res.status(200).json({message: 'Get Details'})
}

const updateDetails = (req, res) => {
    res.status(200).json({message: `Update ${req.params.id}`})
}

const deleteDetail = (req, res) => {
    res.status(200).json({message: `Delete ${req.params.id}`})
}


module.exports = {
    getDetails,
    setDetail,
    updateDetails,
    deleteDetail,
}