import {_decorator, Component, Input, input, KeyCode, log, math, Node, physics, Vec3, EventKeyboard, sp} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    
    private speed: number = 0;
    
    check_V3: Vec3 = new Vec3(0,0,0) ;
    
    private m_Rotation: number = 0;
    
    start() {
        
    }

    update(deltaTime: number) {
        this.node.position=this.node.position.add(this.node.up.multiplyScalar( deltaTime * this.speed));
        this.node.eulerAngles= new Vec3(0,0,this.m_Rotation);
    }

    onLoad() {
        input.on(Input.EventType.KEY_DOWN , this.Move, this);
        input.on(Input.EventType.KEY_DOWN , this.Rotate, this);
        input.on(Input.EventType.KEY_PRESSING , this.Rotate, this);
        input.on(Input.EventType.KEY_UP, this.OnKeyUp, this);
    }

    Move(event : KeyboardEvent){
        switch (event.keyCode){
            case KeyCode.KEY_W:
                this.speed = 100;
                break;
            case KeyCode.KEY_S:
                this.speed = -100;
                break;
        }
    }

    Rotate(event : KeyboardEvent){
        switch (event.keyCode){
            case KeyCode.KEY_A:
                this.m_Rotation+=5;
                break;
            case KeyCode.KEY_D:
                this.m_Rotation-=5;
                break;
        }
    }



    OnKeyUp(event: KeyboardEvent) {
        switch (event.keyCode){
            case KeyCode.KEY_W:
                this.speed = 0;
                break;
            case KeyCode.KEY_S:
                this.speed = 0;
                break;
        }
    }
}

