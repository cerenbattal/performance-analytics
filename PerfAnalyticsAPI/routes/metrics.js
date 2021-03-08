const express = require('express');
const router = express.Router();
const Metric = require('../model/Metric');

router.get('/', (req, res) => {
    res.send('we are on metrics')
});

router.post('/', (req, res) => {
    console.log(req.body)

    const metric = new Metric({
        url: req.body.url,
        userAgent: req.body.userAgent,
        ttfb: req.body.ttfb,
        fcp: req.body.fcp,
        windowLoad: req.body.windowLoad,
        domLoad: req.body.domLoad,
        resMetrics: {
            resName: req.body.resMetrics.resName,
            resLoadTime: req.body.resMetrics.resLoadTime
        }
    });

    metric.save()
          .then((data) => {
              res.json(data);
           })
           .catch((err) => {
              res.json({ message: err })
           })

});

module.exports = router;