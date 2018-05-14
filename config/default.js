module.exports = {
    port: 80,
    brain:{
        length: 10,
        inputNodePool:60,
        maxChainLength: 4,
        maxDependants: 2,
        minDependants: 2,
        maxTargets: 10,
        passOnDecay: .05,//The amount of nodes to lose
        passOnAdd: .1,//The percentage of nodes to add on
        max_litter_size: 10,
        spawn_children_pong_ct: 20,//5x a day
        outputs_remove_mode:'in_active'
    },
    minecraft:{
        version:'1.12.2'
    },
    redis:{
        chaoscraft: {
            port: 6379,
            host:  'slack-tools.bdzyjf.0001.use1.cache.amazonaws.com',
            prefix: 'chaoscraft:'
        }
    },
    mongo:{
        chaoscraft: {
            url: 'mongodb://ds117104-a0.mlab.com:17104,ds117104-a1.mlab.com:17104/castdex-prod?replicaSet=rs-ds117104',
            user: 'castdex-application',
            pass: process.env.MONGO_PASSWORD
        }

    },/*
    auth:{
        jwt_secret:'id88e3oa9P(D[fe9'
    }*/
}