import {SendMsg} from "@/type/global";

let heartBeatTimeer: any = null
let reconnectingTimer: any = null

// const WS_MODE = {
//     MESSAGE: "MESSAGE",
//     HEART_BEAT: "HEART_BEAT",
// }

class Ws extends WebSocket{
    connectedStatus: boolean
    wsUrl: string

    constructor(url) {
        super(url);
        this.connectedStatus = false
        this.wsUrl = url

        this.init()
    }

    init(){
        this.bindEvent()
    }

    bindEvent(){
        this.addEventListener('open', this.handleOpen, false)
        this.addEventListener('close', this.handleClose, false)
        this.addEventListener('error', this.handleError, false)
        this.addEventListener('message', this.handleMessage,false)
    }

    handleOpen(){
        console.log('---Client is connected---')
        this.connectedStatus = true
        // this.startHeartBeat()
    }

    handleClose(){
        console.log('---Client is closed---')
        this.connectedStatus = false

        if(heartBeatTimeer){
            clearInterval(heartBeatTimeer)
            heartBeatTimeer = null
        }

        if(reconnectingTimer){
            clearTimeout(reconnectingTimer)
            reconnectingTimer = null
        }

        this.reconnect()
    }

    handleError(e: any){
        console.log('---Client occured error---', e)
        this.connectedStatus = false
        this.reconnect()
    }

    async handleMessage(data) {
        console.log(data)
        // switch (mode){
        //     case WS_MODE.HEART_BEAT:
        //         this.connectedStatus = true
        //         console.log("---HEART_BEAT---", msg)
        //         break
        //     case WS_MODE.MESSAGE:
        //         console.log("---MESSAGE", msg)
        //         break
        //     default:
        //         break
        // }
    }

    startHeartBeat(){
        // heartBeatTimeer = setInterval(() => {
        //     this.sendMsg({
        //         mode: WS_MODE.HEART_BEAT,
        //         msg: "HEART_BEAT"
        //     })
        //     // this.waitForResponse()
        // }, 4000)
    }

    reconnect(){
        return new Promise(resolve => {
            reconnectingTimer = setTimeout(() => {
                resolve(Ws.create(this.wsUrl))
            }, 3000)
        })
    }

    waitForResponse(){
        this.connectedStatus = false

        setTimeout(() => {
            if(this.connectedStatus){
                return this.startHeartBeat()
            }

            try {
                this.close()
            }catch (e){
                console.log("---Client is closed---")
            }
        }, 2000)
    }

    sendMsg(data: SendMsg){
        return this.send(JSON.stringify(data))
    }

    static create(url){
        return new  Ws(url)
    }
}

export default Ws