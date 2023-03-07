const checkEmpty = (req, res, next) => {
    // const { fullName, age, Class } = req.body;
    // if (!fullName || !age || !Class) {
    //     return res.status(500).send('Không được để trống các trường thông tin')
    // }
    // next();
}
const checkClass = (req, res, next) => {
    // ...
    next();
}


module.exports = {
    checkEmpty, checkClass,
}

















