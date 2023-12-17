import { Server } from "socket.io";

class SocketService {

    private _io: Server;

    constructor() {
        console.log('Init Socket Server');
        this._io = new Server({
            cors: {
                allowedHeaders: ['*'],
                origin: '*'
            }
        });
    }

    public initListeners() {

        console.log('Initialized Socket Listeners');

        const io = this.io;

        io.on('connect', socket => {
            console.log('new socket connected', socket.id);

            socket.on('button:click', (msg) => {
                console.log('from server', msg);
                io.emit('button:update', (msg));
            })

            socket.on('button:move:right', (msg) => {
                console.log('from server', msg);
                io.emit('button:moved:right', msg);
            })

            socket.on('button:move:left', (msg) => {
                console.log('from server', msg);
                io.emit('button:moved:left', msg);
            })

        })
    }

    get io() {
        return this._io;
    }
}

export default SocketService;