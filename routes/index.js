import { Router } from "express";
const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ title: 'Express' });
});

module.exports = router;
