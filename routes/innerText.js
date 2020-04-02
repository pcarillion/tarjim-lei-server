var express = require('express');
var router = express.Router();
const InnerTextModel = require("./../models/InnerText");


router.get('/all', function(req, res, next) {
    console.log('request sent')
    InnerTextModel
        .find()
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err))
  }); 

  router.get('/:id', function(req, res, next) {
    InnerTextModel
        .findById(req.params.id)
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).json(dbRes)
        })
        .catch(err => console.log(err))
})


router.post('/create', function(req, res, next){


    console.log(req.body)
    
    const {
        language,
        websiteName,
        websitePresentation,
        enter,
        timeSchedule,
        morning,
        afternoon,
        from0to4,
        from4to8,
        from8to12,
        from12to16,
        from16to20,
        from20to24,
        serviceRequested,
        medicalSupport,
        otherService,
        translation,
        ambulanceCall,
        psySupport,
        medecinesRequest,
        supermarket,
        other,
        teamComposition, 
        name,
        city,
        phone, 
        whatsapp,
        transLanguage
    } = req.body

    const newInnerText = {
        language,
        websiteName,
        websitePresentation,
        enter,
        timeSchedule,
        from0to4,
        from4to8,
        from8to12,
        from12to16,
        from16to20,
        from20to24,
        serviceRequested,
        medicalSupport,
        otherService,
        translation,
        ambulanceCall,
        psySupport,
        medecinesRequest,
        supermarket,
        other,
        teamComposition, 
        name,
        city,
        phone, 
        whatsapp,
        morning,
        afternoon,
        transLanguage
    }

   

    InnerTextModel
        .create(newInnerText)
        .then(dbRes => {
            console.log("created")
            res.status(200).json({msg: "article created", data: newInnerText})
        })
        .catch(err => {
            console.log("signup error", err);
            next(err);
          });



    })


  
    router.patch('/edit/:id', function(req, res, next) {
        InnerTextModel
            .findByIdAndUpdate(req.params.id, req.body)
            .then(dbRes => {
                console.log(dbRes)
                res.status(200).json({data:dbRes})
            })
            .catch(err => console.log(err))
    })


    router.delete('/delete/:id', function(req, res, next){
        console.log(req.params.id)
        InnerTextModel    
            .findByIdAndDelete(req.params.id)
            .then(dbRes => {
                console.log(dbRes)
                res.status(200).json({msg: "L'article a été supprimé"})
            })
            .catch(err => console.log(err))
    })

    // router.patch('/article/edit-meta-:id', function(req, res, next) {
    //     articleModel.
    // })

  
module.exports = router;
