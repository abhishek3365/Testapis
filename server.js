const express =  require('express');
const items = require('./items.json');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var router = express.Router(); 

router.get( '/countries' , ( req , res ) => {

    const contries = [
        {   
            title : 'Asia',
            options : [ 
                {
                    title : 'India',
                    options : [ 
                        { title : 'Delhi' },
                        { title : 'Mumbai' },
                        { title : 'Kolkata' },
                        { title : 'Chennai' }
                    ] 
                } ,
                {
                    title : 'China',
                    options : [ 
                        { title : 'Beijing' },
                        { title : 'Shanghai' },
                        { title : 'Shenzhen' }
                    ] 
                } ,
                {
                    title : 'Japan',
                    options : [ 
                        { title : 'Tokyo' },
                        { title : 'Kyoto' }
                    ] 
                }
            ] 
        } ,
        {   
            title : 'Asia',
            options : [ {
                title : 'India',
                options : [ 
                    { title : 'Delhi' },
                    { title : 'Mumbai' },
                    { title : 'Kolkata' },
                    { title : 'Chennai' }
                ] } ,{
                title : 'China',
                options : [ 
                    { title : 'Beijing' },
                    { title : 'Shanghai' },
                    { title : 'Shenzhen' }
                ] } ,{
                title : 'Japan',
                options : [ 
                    { title : 'Tokyo' },
                    { title : 'Kyoto' }
                ] }
            ] 
        }
    ];

    res.status(200).send( JSON.stringify(contries)  );

} )

router.get( '/items' , ( req , res ) => {
    setTimeout( () => {
        // res.status(200).send(items.filter( item => !item["PARENT ID"] )); 
        res.status(200).send(items);    
    } , 5000 )
} );

router.get( '/items/:id' , ( req , res ) => {
    setTimeout( () => {
        var id = req.params['id'];
        res.status(200).send(items.filter( item => item["PARENT ID"] === Number(id) ));   
    } , 10000 );
} );

app.use('/api', router);

app.listen( PORT , () => {
    console.log(`Server running at Port - ${PORT}`);
} )