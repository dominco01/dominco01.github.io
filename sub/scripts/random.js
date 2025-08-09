//APPLE VALUES (MAC xd)
const M = 2^35;
const A = 1220703125;
const C = 0;

class Random
{
    constructor() 
    {
        this.x = new Date().getDate(); //seed x_(i-1)
    }
    
    getRandom()
    {
        this.x = (A*this.x + C) %M;
        return this.x;
    }

    get(range)
    {
        return this.getRandom() % range;
    }
}

