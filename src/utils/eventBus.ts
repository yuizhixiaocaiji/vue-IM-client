class EventBus {
    public static instance: EventBus = new EventBus()
    listeners
    // 创建EventBus类
    constructor() {
        // 构造函数，用于初始化listeners对象
        this.listeners = {};

        //单例模式，保证只存在一个事件总线
        if (!EventBus.instance) {
            EventBus.instance = this;
        }
        return EventBus.instance;
    }

    on(event, listener) {
        // 用于订阅事件，将事件和对应的监听器存储在listeners对象中
        if (!this.listeners[event]) {
            // 如果listeners对象中没有对应的事件，则创建一个新的数组
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
        // 将监听器添加到事件的监听器列表中
    }

    off(event, listener) {
        // 用于取消订阅事件，将事件和对应的监听器从listeners对象中移除
        if (this.listeners[event]) {
            // 如果listeners对象中存在对应的事件
            const index = this.listeners[event].indexOf(listener);
            // 找到对应监听器在事件监听器列表中的索引
            if (index > -1) {
                // 如果索引存在
                this.listeners[event].splice(index, 1);
                // 将监听器从事件监听器列表中移除
            }
        }
    }

    emit(event, ...args) {
        // 用于触发事件，将事件和相关参数传递给对应的监听器
        if (this.listeners[event]) {
            // 如果listeners对象中存在对应的事件
            this.listeners[event].forEach(listener => listener(...args));
            // 遍历事件的监听器列表，依次执行监听器并传递参数
        }
    }
}

export default EventBus