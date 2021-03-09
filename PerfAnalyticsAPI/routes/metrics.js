const express = require('express');
const { rawListeners } = require('../model/Metric');
const router = express.Router();
const Metric = require('../model/Metric');

// GET ALL THE METRICS
router.get('/', async (req, res) => {
    let { fromDate, toDate } = req.query;
    if(!fromDate){
        fromDate = new Date();
        fromDate.setMinutes(fromDate.getMinutes() - 30)
    }
    try{
        // return all the Metrics
        const metrics = await Metric.find();
        res.json(metrics)
    }catch(err) {
        console.log('ERROR: ', err)
        res.json({ message: err })
    }
});

// GET METRIC BY ID
router.get('/:metricId', async (req, res) => {
    try{
        const metric = await Metric.findById(req.params.metricId)
        res.json(metric);
    }catch(err) {
        console.log('ERROR: ', err)
        res.json({ message: err })
    }

});

// DELETE METRIC BY ID
router.delete('/:metricId', async (req, res) => {
    try{
        const removedMetric = await Metric.remove({_id: req.params.metricId})
        res.json(removedMetric);
    }catch(err) {
        console.log('ERROR: ', err)
        res.json({ message: err })
    }

});


// SAVE A METRIC
router.post('/', async (req, res) => {
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

    try{
        const savedMetric = await metric.save();
        console.log('DATA: ', savedMetric)
        res.json(savedMetric);
    }catch(err) {
        console.log('ERROR: ', err)
        res.json({ message: err })
    }

});

module.exports = router;