import express from 'express';

const router = express.Router();

router.get('/', (req, res)=> {
    res.json({
        user: 'Miguel Juarez'
    })
})

export default router