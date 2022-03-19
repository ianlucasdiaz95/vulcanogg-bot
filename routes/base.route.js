const { Router } = require('express');

const { baseGet,
        basePut,
        basePost,
        baseDelete,
        basePatch } = require('../controllers/base.controller');

const router = Router();


router.get('/', baseGet );

router.put('/:id', basePut );

router.post('/', basePost );

router.delete('/', baseDelete );

router.patch('/', basePatch );





module.exports = router;