import { listenAndServe} from "https://deno.land/std/http/server.ts";

import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";

listenAndServe({port:5500}, async req =>{
     if(acceptable(req)){
        acceptWebSocket({
            conn : req.conn,
            bufReader : req.r,
            bufWriter: req.w,
            headers: req.headers
        }).then()
     }
})