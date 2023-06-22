import {SendMsg} from "@/type/global";
import {EventBus} from "@/utils/index.ts";

class Ws extends WebSocket{
    wsUrl: string
    bus = new EventBus();
    heartBeatTimeer: any = null
    reconnectingTimer: any = null
    wsReConnect

    constructor(url, wsReConnect) {
        super(url);
        this.wsUrl = url
        this.wsReConnect = wsReConnect
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
        this.startHeartBeat()
    }

    handleClose(){
        console.log('---Client is closed---')

        if(this.heartBeatTimeer){
            clearInterval(this.heartBeatTimeer)
            this.heartBeatTimeer = null
        }

        if(this.reconnectingTimer){
            clearTimeout(this.reconnectingTimer)
            this.reconnectingTimer = null
        }

        this.reconnect()
    }

    handleError(e: any){
        console.log('---Client occured error---', e)
        this.reconnect()
    }

    async handleMessage(data) {
        switch (JSON.parse(data.data).Type){
            case 3:
                console.log("---HEART_BEAT---", JSON.parse(data.data).Content)
                break
            default:
                this.bus.emit("socketMsg", JSON.parse(data.data))
                break
        }
    }

    startHeartBeat(){
        this.heartBeatTimeer = setInterval(() => {
            if(this.readyState === 1){
                this.sendMsg({
                    Type: 3,
                    Media:1,
                    Content: 'HEART_BEAT'
                })
            }else{
                clearTimeout(this.heartBeatTimeer)
                this.heartBeatTimeer = null
            }

            this.waitForResponse()
        }, 4000)
    }

    reconnect(){
        this.reconnectingTimer = setTimeout(() => {
            this.wsReConnect()
        }, 3000)
    }

    waitForResponse(){

        setTimeout(() => {
            this.close()
        }, 60000)
    }

    sendMsg(data: SendMsg){
        this.readyState === 1 && this.send(JSON.stringify(data))
    }

    static create(url, wsReConnect){
        return new  Ws(url, wsReConnect)
    }
}

export default Ws