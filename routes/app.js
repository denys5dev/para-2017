var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var Company = require('./models/Conpany');
var Glider = require('./models/Glider');
var Size = require('./models/Size');
var News = require('./models/News');
var User = require('./models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


/* GET COMAPNIES*/
router.get('/companies', function (req, res, next) {
  Company.find()
    .exec(function (err, companies) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: companies
      })
    });
});

/*GET COMPANY by Id */
router.get('/company/:id', function (req, res, nex) {
  Company.findById(req.params.id)
    .exec(function (err, company) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: company
      })
    });
});

/* POST COMPANY */
router.post('/company/:userId', function (req, res, next) {
  var company = new Company({
    name: req.body.name,
    adress: req.body.adress,
    city: req.body.city,
    country: req.body.country,
    email: req.body.email,
    web: req.body.web,
    phone: req.body.phone,
    logo: req.body.logo
  });

  User.findById(req.params.userId)
    .exec(function (err, user) {
      if (user.role === 0) {
        company.save(function (err, result) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(200).json({
            message: 'Saved',
            data: result
          });
        });
      } else {
        return res.status(500).json({
          title: 'Bad permissions',
          error: err
        });
      }
    });
});

/* DELETE Company */
router.delete('/company/:userId', function (req, res, next) {
  User.findById(req.params.userId)
    .exec(function (err, user) {
      if (user.role === 0) {
        Company.findByIdAndRemove(req.body.companyId)
          .exec(function (err, result) {
            if(result == null) {
              return res.status(307).json({
                title: 'An error occurred',
                error: {message: "ID NOT FOUD!"}
              })
            }
            if (err) {
              return res.status(500).json({
                title: 'An error occurred',
                error: err
              });
            }
            res.status(200).json({
              message: 'Deleted',
              data: result
            });
          })
      } else {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
    });
});


/*PUT COMPANY*/

router.put('/company/:id', function (req, res, next) {
  console.log(req.body)
  Company.findById(req.params.id, function (err, company) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else {

      company.name = req.body.name || company.name,
        company.adress = req.body.adress || company.adress,
        company.city = req.body.city || company.city,
        company.country = req.body.country || company.country,
        company.email = req.body.email || company.email,
        company.web = req.body.web || company.web,
        company.phone = req.body.phoneNumber || company.phone,
        company.logo = req.body.logo || company.logo

      company.save(function (err, company) {
        if (err) {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Success',
          data: company
        });
      });
    }
  })
});

//---------------------------------------------------------------------------

/* POST GLIDER*/
router.post('/glider', function (req, res, next) {
  Company.findById(req.body.company, function (err, company) {
    var glider = new Glider({
      model: req.body.model,
      photo: req.body.photo,
      video: req.body.video,
      about: req.body.about,
      year: req.body.year,
      companyId: req.body.company
    });

    glider.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      company.gliders.push(result);
      company.save();
      res.status(200).json({
        message: 'Saved',
        data: result
      });
    });
  });
});

/* GET GLIDERS */
router.get('/gliders', function (req, res, next) {
  Glider.find()
    .exec(function (err, gliders) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: gliders
      })
    });
});

/* DELETE GLIDER */
router.delete('/glider/:id', function (req, res, next) {

  Glider.findByIdAndRemove(req.params.id)
    .exec(function (err, result) {
      if (result.companyId) {
        Company.findById(result.companyId).exec(function (err, company) {
          var gliders = company.gliders;
          gliders.forEach(function (item, index, object) {
            if (item == req.params.id) {
              object.splice(index, 1);
              company.save();
            }
          })
        })
      }
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted',
        data: result
      });
    })
});

/* GET GLIDERS BY COMPANY */
router.get('/gliders/:id', function (req, res, next) {
  Company.findById(req.params.id)
    .populate('gliders')
    .exec(function (err, gliders) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: gliders
      })
    })
});

/* PUT GLIDERS  */
router.put('/glider/:id', function (req, res, next) {

  Glider.findById(req.params.id, function (err, glider) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else {
      glider.model = req.body.model || glider.model,
        glider.photo = req.body.photo || glider.photo,
        glider.video = req.body.video || glider.video,
        glider.about = req.body.about || glider.about,
        glider.year = req.body.year || glider.year,

        glider.save(function (err, glider) {
          if (err) {
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(200).json({
            message: 'Success',
            data: glider
          });
        });
    }
  })
});

//-----------------------------------------------------------------------------------------

/* POST DETAILS */

router.post('/details', function (req, res, next) {

  Glider.findById(req.body.modelId, function (err, glider) {
    var size = new Size({
      size: req.body.size,
      modelId: req.body.modelId,
      price: req.body.price,
      certification: req.body.certification,
      projectArea: req.body.projectArea,
      faltArea: req.body.faltArea,
      projectSpan: req.body.projectSpan,
      flatSpan: req.body.flatSpan,
      projectAspectRatio: req.body.projectAspectRatio,
      flatAspectRatio: req.body.flatAspectRatio,
      rootChord: req.body.rootChord,
      gliderWeight: req.body.gliderWeight,
      numberOfCells: req.body.numberOfCells,
      inFlightWeight: req.body.inFlightWeight,
      nakedPilotWeight: req.body.nakedPilotWeight,
      type: req.body.type,
      upperSufcace: req.body.upperSufcace,
      underSurface: req.body.underSurface,
      trims: req.body.trims,
      speed: req.body.speed,
      manual: req.body.manual,
      certificationReport: req.body.certificationReport,
      glider: req.body.modelId
    });

    size.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      glider.sizes.push(result);
      glider.save();
      res.status(200).json({
        message: 'Saved',
        data: result
      });
    });
  })
});

/* GET DETAILS */

router.get('/details', function (req, res, next) {
  Size.find()
    .populate('glider')
    .exec(function (err, details) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: details
      })
    })
});

/* DELETE DETAILS */

router.delete('/detail/:id', function (req, res, next) {

  Size.findByIdAndRemove(req.params.id)
    .exec(function (err, result) {
      if (result.modelId) {
        Glider.findById(result.modelId).exec(function (err, glider) {
          var sizes = glider.sizes;
          if (sizes != null) {
            sizes.forEach(function (item, index, object) {
              if (item == req.params.id) {
                object.splice(index, 1);
                glider.save();
              }
            })
          }
        });
      }
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted',
        data: result
      });
    })
});

/* PUT DETAILS*/

router.put('/details/:id', function (req, res, next) {

  Size.findById(req.params.id, function (err, details) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else {
      details.size = req.body.size || details.size,
        details.price = req.body.price || details.price,
        details.certification = req.body.certification || details.certification,
        details.projectArea = req.body.projectArea || details.projectArea,
        details.faltArea = req.body.faltArea || details.faltArea,
        details.projectSpan = req.body.projectSpan || details.projectSpan,
        details.flatSpan = req.body.flatSpan || details.flatSpan,
        details.projectAspectRatio = req.body.projectAspectRatio || details.projectAspectRatio,
        details.flatAspectRatio = req.body.flatAspectRatio || details.flatAspectRatio,
        details.rootChord = req.body.rootChord || details.rootChord,
        details.gliderWeight = req.body.gliderWeight || details.gliderWeight,
        details.numberOfCells = req.body.numberOfCells || details.numberOfCells,
        details.inFlightWeight = req.body.inFlightWeight || details.inFlightWeight,
        details.nakedPilotWeight = req.body.nakedPilotWeight || details.nakedPilotWeight,
        details.type = req.body.type || details.type,
        details.upperSufcace = req.body.upperSufcace || details.upperSufcace,
        details.underSurface = req.body.underSurface || details.underSurface,
        details.trims = req.body.trims || details.trims,
        details.speed = req.body.speed || details.speed,
        details.manual = req.body.manual || details.manual,
        details.certificationReport = req.body.certificationReport || details.certificationReport

      details.save(function (err, details) {
        if (err) {
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Success',
          data: details
        });
      });
    }
  })
});

/* GET GLIDER DETAILS */
router.get('/details/:id', function (req, res, next) {
  Glider.findById(req.params.id)
    .populate('sizes')
    .exec(function (err, details) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: details
      })
    })
});

//-------------------------------------------------------------------------

/*POST NEWS*/

router.post('/news', function (req, res, next) {
  var news = new News({
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
    description: req.body.description,
    image: req.body.image
  });
  news.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(200).json({
      message: 'Saved',
      data: result
    });
  });
});

router.get('/news/:id', function (req, res, next) {
  News.findById(req.params.id)
    .exec(function (err, news) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: news
      })
    })
});

/*GET NEWS*/

router.get('/news', function (req, res, next) {
  News.find()
    .exec(function (err, news) {
      if (err) {
        return res.status(500).json({
          title: 'Error',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        data: news
      })
    })
});

/*DELETE NEWS*/

router.delete('/news/:id', function (req, res, next) {

  News.findByIdAndRemove(req.params.id)
    .exec(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted',
        data: result
      });
    })
});

module.exports = router;